import { FrequencyOfPurchases } from "@/components/FrequencyOfPurchases";
import { GenderCard } from "@/components/GenderCard";
import { Header } from "@/components/Header";

export function Customers() {

  return (
    <>
      <Header onFocus="Customers"/>

      <main className="p-12">
        <h1 className=" text-3xl font-bold mb-6">Clientes</h1>

        {/* Esquerda */}
        
        <section className="flex flex-col w-1/3 gap-6">
          {/* Gênero */}  
          <GenderCard />
          {/* Frequência de compras - circular */}  
          <FrequencyOfPurchases />

        </section>

        
        {/* Direita */}

        {/* Idade - barrinha */}

        {/* Clientes que mais compram */}
      </main>
    </>
  )
}