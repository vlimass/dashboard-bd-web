import { FrequencyOfPurchases } from "@/components/FrequencyOfPurchases";
import { SecondaryCard } from "@/components/SecondaryCard";
import { Header } from "@/components/Header";
import { PurchaseAmountPerAge } from "@/components/PurchaseAmountPerAge";
import { TopCustomers } from "@/components/TopCustomers";

// Images
import Hat from '../assets/hat.svg'


export function Customers() {

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
              value="68% homens"
              icon={Hat}
              iconAlt="Ícone de cartola"
              description="A maioria dos compradores são desse sexo."
            />
            {/* Frequência de compras - circular */}
            <FrequencyOfPurchases />
          </section>
          
          <section className="flex flex-col w-2/3 gap-6">
            {/* Idade - barrinha */}
            <PurchaseAmountPerAge />

            {/* Clientes que mais compram */}
            <TopCustomers />
          </section>
        </div>
      </main>
    </>
  )
}