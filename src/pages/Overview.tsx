import { PrimaryCard } from "../components/PrimaryCard";
import { Header } from "../components/Header";

// Imagens 
import Dollar from '../assets/dollar.svg'
import Bag from '../assets/bag.svg'
import MoneyCard from '../assets/moneyCard.svg'
import People from '../assets/people.svg'
import { PurchaseAmountPerSeason } from "../components/PurchaseAmountPerSeason";
import { PurchaseAmountPerLocation } from "../components/PurchaseAmountPerLocation";

export function Overview() {
  const cardInfo = [
    { 
      title: "Venda total",
      value: 45231.89,
      description: "+20.1% em relação ao último mês", 
      image: Dollar,
      imageAlt: "Ícone cifrão"
    },
    { 
      title: "Assinaturas",
      value: 2350,
      description: "+180.1% em relação ao último mês", 
      image: MoneyCard,
      imageAlt: "Ícone cartão de crédito"
    },
    { 
      title: "Número de clientes",
      value: 12234,
      description: "+19% em relação ao último mês", 
      image: People,
      imageAlt: "Ícone pessoas"
    },
    { 
      title: "Produtos vendidos",
      value: 573,
      description: "+201 nas últimas 24h", 
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
              value={card.value.toFixed(2).toString().replace('.', ',')} 
              description={card.description} 
              icon={card.image}
              iconAlt={card.imageAlt}
            />
          )}
        </section>
        
        <section className="mt-6 flex gap-6">
          {/* Gráfico de vendas por temporada*/}
          <PurchaseAmountPerSeason />

          {/* Tabela de vendas por localização */}
          <PurchaseAmountPerLocation />

        </section>
      </main>
    </>
  )
}