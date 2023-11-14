import { Card } from "./Card";
import { Header } from "./Header";

// Imagens 
import Dollar from '../assets/dollar.svg'

export function Overview() {
  return (
    <>
      <Header />

      <main className="p-12">
        <h1 className=" text-4xl font-bold mb-6">Dashboard</h1>

        {/* Cards */}
        <section className="flex gap-6">
          <Card 
            title="Venda total" 
            value={45231.89} 
            description="+20.1% em relação ao último mês" 
            image={Dollar}
            imageAlt="Foto cifrão"
          />
          <Card 
            title="Assinaturas" 
            value={+2350} 
            description="+180.1% em relação ao último mês" 
            image={Dollar}
            imageAlt="Foto cifrão"
          />
          <Card 
            title="Número de clientes" 
            value={12.234} 
            description="+19% em relação ao último mês" 
            image={Dollar}
            imageAlt="Foto cifrão"
          />
          <Card 
            title="Produtos vendidos" 
            value={573} 
            description="+201 nas últimas 24h" 
            image={Dollar}
            imageAlt="Foto cifrão"
          />
        </section>

        {/* Gráfico */}
        <section>

        </section>
      </main>
    </>
  )
}