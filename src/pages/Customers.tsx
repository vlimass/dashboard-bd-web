import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

// Componentes
import { FrequencyOfPurchases } from "@/components/FrequencyOfPurchases";
import { SecondaryCard } from "@/components/SecondaryCard";
import { Header } from "@/components/Header";
import { PurchaseAmountPerAge } from "@/components/PurchaseAmountPerAge";
import { TopCustomers } from "@/components/TopCustomers";

// Images
import Hat from '../assets/hat.svg'

interface CountPerGenderProps {
  gender: string
  count: number
}

export interface SalesPerAgeProps {
  name: string
  total: number
}

export interface SalesFrequencyProps {
  name: string
  value: number
}

export interface TopCustomersProps {
  idCustomer: string
  amount: number
}

export function Customers() {
  const [countPerGender, setCountPerGender] = useState<CountPerGenderProps[]>([])
  const [salesPerAge, setSalesPerAge] = useState<SalesPerAgeProps[]>([])
  const [salesFrequency, setSalesFrequency] = useState<SalesFrequencyProps[]>([])
  const [topCustomers, setTopCustomers] = useState<TopCustomersProps[]>([])

  async function getData(){
    const countPerGenderResponse = await api.get('/customers/genders/count')
    const salesPerAgeResponse = await api.get('/customers/sales/age')
    const salesFrequencyResponse = await api.get('/customers/sales/frequency')
    const topCustomersResponse = await api.get('customers/sales/customer')

    const countPerGenderData = await countPerGenderResponse.data
    console.log(countPerGenderData)
    const salesPerAgeData = await salesPerAgeResponse.data
    console.log(salesPerAgeData)
    const salesFrequencyData = await salesFrequencyResponse.data
    console.log(salesFrequencyData)
    const topCustomersData = await topCustomersResponse.data
    console.log(topCustomersData)

    setCountPerGender(countPerGenderData)
    setSalesPerAge(salesPerAgeData)
    setSalesFrequency(salesFrequencyData)
    setTopCustomers(topCustomersData)
  }

  function handleCountPerGender() {
    let male = 0
    let female = 0
    let total = 0

    countPerGender.map(item => {
      item.gender === 'Male' ? male = item.count : female = item.count

      total += item.count
    })

    if(male > female) {
      return `${(male / total) * 100}% homens`
    }
    else { 
      return `${(female / total) * 100}% mulheres`
    }
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

  return (
    <>
      <Header onFocus="Customers"/>

      <main className="p-12">
        <h1 className=" text-3xl font-bold mb-6">Clientes</h1>

        <div className="flex gap-6">
          
          <section className="flex flex-col w-1/3 gap-6">
            {/* Gênero */}
            <SecondaryCard 
              title="Comparação entre os sexos"
              value={handleCountPerGender()}
              icon={Hat}
              iconAlt="Ícone de cartola"
              description="A maioria dos compradores são desse sexo."
            />
            {/* Frequência de compras - circular */}
            <FrequencyOfPurchases data={salesFrequency}/>
          </section>
          
          <section className="flex flex-col w-2/3 gap-6">
            {/* Idade - barrinha */}
            <PurchaseAmountPerAge data={salesPerAge}/>

            {/* Clientes que mais compram */}
            <TopCustomers data={topCustomers}/>
          </section>
        </div>
      </main>
    </>
  )
}