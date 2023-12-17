import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

// Componentes
import { Header } from "@/components/Header";
import { SecondaryCard } from "@/components/SecondaryCard";
import { ColorsPerGender } from "@/components/ColorsPerGender";
import { SizePerCustomers } from "@/components/SizePerCustomers";
import { Categories } from "@/components/Categories";

// Imagens
import Shirt from '../assets/shirt.svg'
import Discount from '../assets/discount.svg'

export interface ProductsCategoriesProps {
  name: string; 
  value: number;
}

export interface SaledSizesProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface MostSaledProductProps {
  product: string;
  amount: number;
}

export interface ColorsPerGenderProps {
  gender: string;
  color: string;
  amount: number; 
}


export function Products() {
  const [averageRating, setAverageRating] = useState<number>(0)
  const [salesWithDiscount, setSalesWithDiscount] = useState<number>(0)
  const [productsCategories, setProductsCategories] = useState<ProductsCategoriesProps[]>([])
  const [saledSizes, setSaledSizes] = useState<SaledSizesProps[]>([])
  const [mostSaledProduct, setMostSaledProduct] = useState<MostSaledProductProps>({ product: '', amount: 0})
  const [colorsPerGender, setColorsPerGender] = useState<ColorsPerGenderProps[]>([])
  

  async function getData(){
    const averageRatingResponse = await api.get('products/averageRating')
    const salesWithDiscountResponse = await api.get('products/salesWithDiscount')
    const productsCategoriesResponse = await api.get('products/categories')
    const saledSizesResponse = await api.get('products/saledSizes')
    const mostSaledProductResponse = await api.get('products/mostSaledProduct')
    const colorsPerGenderResponse = await api.get('products/colors/gender')
    
    const averageRatingData = await averageRatingResponse.data
    console.log(averageRatingData)
    const salesWithDiscountData = await salesWithDiscountResponse.data
    console.log(salesWithDiscountData)
    const productsCategoriesData = await productsCategoriesResponse.data
    console.log(productsCategoriesData)
    const saledSizesData : { size: string; amount: number }[] = await saledSizesResponse.data
    console.log(saledSizesData)
    const mostSaledProductData = await mostSaledProductResponse.data
    console.log(mostSaledProductData)
    const colorsPerGenderData = await colorsPerGenderResponse.data
    console.log(colorsPerGenderData)

    setAverageRating(averageRatingData.avgRating)
    setSalesWithDiscount(salesWithDiscountData.salesWithDiscount)
    setProductsCategories(productsCategoriesData)
    setMostSaledProduct(mostSaledProductData)
    setColorsPerGender(colorsPerGenderData)
    setSaledSizes(saledSizesData.map(item => {
      return {
        name: item.size, 
        uv: item.amount, 
        pv: item.amount, 
        amt: item.amount
      }
    }))
  }

  const handleAverageStars = () => {
    if (averageRating > 0 && averageRating < 1) {
      return '☆ ☆ ☆ ☆ ☆'
    } else if (averageRating > 1 && averageRating < 2) {
      return '★ ☆ ☆ ☆ ☆'
    } else if (averageRating > 2 && averageRating < 3) {
      return '★ ★ ☆ ☆ ☆'
    } else if (averageRating > 3 && averageRating < 4) {
      return '★ ★ ★ ☆ ☆'
    } else if (averageRating > 4 && averageRating < 5) {
      return '★ ★ ★ ★ ☆'
    } else {
      return '★ ★ ★ ★ ★'
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
      <Header onFocus="Products"/>

      <main className="p-12">
        <h1 className="text-3xl font-bold mb-6">Produtos</h1>

        <div className="flex gap-6">
          <section className="flex flex-col w-1/3 gap-6">
            {/* Produto mais comprado */}
            <SecondaryCard
              title="Produto mais comprado"
              value={mostSaledProduct.product}
              icon={Shirt}
              iconAlt="Ícone de blusa"
              description={`+${mostSaledProduct.amount} comprados no último mês`}
            />
            {/* Cores por gênero */}
            <ColorsPerGender data={colorsPerGender} />
          </section>

          <section className="flex flex-col w-1/3 gap-6">
            {/* Avaliação média dos produtos */}
            <SecondaryCard
              title="Avaliação média"
              value={`${averageRating.toFixed(2)} ${handleAverageStars()}`}
              description="Média do total de avaliações"
            />

            {/* Tamanho x Clientes */}
            <SizePerCustomers 
              data={saledSizes} 
            />
          </section>

          <section className="flex flex-col w-1/3 gap-6">
            {/* Categorias de produtos (gráfico pizza) */}
            <Categories data={productsCategories} />

            {/* Compras com desconto */}
            <SecondaryCard
              title="Compras com desconto"
              value={`${salesWithDiscount} compras`}
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