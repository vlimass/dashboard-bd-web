import { Header } from "@/components/Header";
import { SecondaryCard } from "@/components/SecondaryCard";
import { ColorsPerGender } from "@/components/ColorsPerGender";
import { SizePerCustomers } from "@/components/SizePerCustomers";
import { Categories } from "@/components/Categories";

// Imagens
import Shirt from '../assets/shirt.svg'
import Discount from '../assets/discount.svg'

export function Products() {

  return (
    <>
      <Header onFocus="Products"/>

      <main className="p-12">
        <h1 className="text-3xl font-bold mb-6">Produtos</h1>

        <div className="flex gap-6">
          <section className="flex flex-col w-1/3 gap-6">
            {/* Produto mais comprado */}
            <SecondaryCard
              title="Produto mais comprado"
              value="Camisa"
              icon={Shirt}
              iconAlt="Ícone de blusa"
              description="+546 comprados no último mês"
            />
            {/* Cores por gênero */}
            <ColorsPerGender />
          </section>

          <section className="flex flex-col w-1/3 gap-6">
            {/* Avaliação média dos produtos */}
            <SecondaryCard
              title="Avaliação média"
              value="4.32 ★ ★ ★ ★ ☆"
              description="Média de um total de 3.022 avaliações"
            />

            {/* Tamanho x Clientes */}
            <SizePerCustomers />
          </section>

          <section className="flex flex-col w-1/3 gap-6">
            {/* Categorias de produtos (gráfico pizza) */}
            <Categories />

            {/* Compras com desconto */}
            <SecondaryCard
              title="Compras com desconto"
              value="1.324 compras" 
              icon={Discount}
              iconAlt="Ícone de desconto"
              description="Número de compras com desconto aplicado"
            />
          </section>
        </div>
      </main>
    </>
  )
}