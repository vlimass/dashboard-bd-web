import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

// Componentes
import { PrimaryCard } from "../components/PrimaryCard";
import { Header } from "../components/Header";

// Imagens 
import Dollar from '../assets/dollar.svg'
import Bag from '../assets/bag.svg'
import MoneyCard from '../assets/moneyCard.svg'
import People from '../assets/people.svg'
import { PurchaseAmountPerSeason } from "../components/PurchaseAmountPerSeason";
import { PurchaseAmountPerLocation } from "../components/PurchaseAmountPerLocation";

export interface SalesPerSeasonProps {
  name: string;
  total: number;
}

export interface SalesPerLocationProps {
  location: string;
  amount: number;
}

export function Overview() {
  const [totalSale, setTotalSale] = useState<number>(0)
  const [subscriptions, setSubscriptions] = useState<number>(0)
  const [customersNumber, setCustomersNumber] = useState<number>(0)
  const [productsSold, setProductsSold] = useState<number>(0)
  const [salesPerSeason, setSalesPerSeason] = useState<SalesPerSeasonProps[]>([])
  const [salesPerLocation, setSalesPerLocation] = useState<SalesPerLocationProps[]>([])

  async function getData(){
    const totalSaleResponse = await api.get('overview/totalSale')
    const subscriptionsResponse = await api.get('overview/subscriptions')
    const customersNumberResponse = await api.get('/overview/customersNumber')
    const productsSoldResponse = await api.get('/overview/productsSold')
    const salesPerSeasonResponse = await api.get('/overview/sales/season')
    const salesPerLocationResponse = await api.get('/overview/sales/location')

    const totalSaleData = await totalSaleResponse.data
    console.log(totalSaleData.totalSale)
    const subscriptionsData = await subscriptionsResponse.data
    console.log(subscriptionsData.subscriptions)
    const customersNumberData = await customersNumberResponse.data
    console.log(customersNumberData.customersNumber)
    const productsSoldData = await productsSoldResponse.data
    console.log(productsSoldData.productsSold)
    const salesPerSeasonData = await salesPerSeasonResponse.data
    console.log(salesPerSeasonData)
    const salesPerLocationData = await salesPerLocationResponse.data
    console.log(salesPerLocationData)

    setTotalSale(totalSaleData.totalSale)
    setSubscriptions(subscriptionsData.subscriptions)
    setCustomersNumber(customersNumberData.customersNumber)
    setProductsSold(productsSoldData.productsSold)
    setSalesPerSeason(salesPerSeasonData)
    setSalesPerLocation(salesPerLocationData)
  }

  useEffect(() => {
    const handleLoad = () => {
      getData()
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [])

  const cardInfo = [
    { 
      title: "Venda total",
      value: totalSale,
      description: "Em relação ao último mês", 
      image: Dollar,
      imageAlt: "Ícone cifrão"
    },
    { 
      title: "Assinaturas",
      value: subscriptions,
      description: "Em relação ao último mês", 
      image: MoneyCard,
      imageAlt: "Ícone cartão de crédito"
    },
    { 
      title: "Número de clientes",
      value: customersNumber,
      description: "Em relação ao último mês", 
      image: People,
      imageAlt: "Ícone pessoas"
    },
    { 
      title: "Produtos vendidos",
      value: productsSold,
      description: "Em relação as últimas 24h", 
      image: Bag,
      imageAlt: "Ícone sacola"
    },
  ]

  return (
    <>
      <Header onFocus="Overview"/>

      <main className="p-12">
        <h1 className=" text-3xl font-bold mb-6">Visão geral</h1>

        {/* Cards */}
        <section className="flex gap-6">
          {cardInfo.map(card => 
            <PrimaryCard 
              key={card.title}
              title={card.title} 
              value={card.value!} 
              description={card.description} 
              icon={card.image}
              iconAlt={card.imageAlt}
            />
          )}
        </section>
        
        <section className="mt-6 flex gap-6">
          {/* Gráfico de vendas por temporada*/}
          <PurchaseAmountPerSeason data={salesPerSeason}/>

          {/* Tabela de vendas por localização */}
          <PurchaseAmountPerLocation data={salesPerLocation} />

        </section>
      </main>
    </>
  )
}