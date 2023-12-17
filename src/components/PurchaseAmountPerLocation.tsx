import Arrow from '../assets/arrow.svg'
import { SalesPerLocationProps } from '@/pages/Overview'

interface Props {
  data: SalesPerLocationProps[]
}

export function PurchaseAmountPerLocation({ data }: Props) {

  return (
    <div className="w-1/2 py-6 px-10 border-zinc-700 border-[1px] rounded-xl">
      <div className="flex flex-col items-start mb-6">
        <figcaption className="text-lg font-semibold mb-1 inline-block">
          Vendas por localização
        </figcaption>

        <span className="text-sm text-muted-foreground">
          Suas vendas saíram de {data.length} estoques esse mês.
        </span>
      </div>
        
      <div className='flex flex-col gap-5'>
        {data.slice(0, 5).map(item =>
          <div className='flex items-center justify-between' key={item.location}>
            <div className='flex items-center gap-6'>
              <img src={Arrow} alt="Ícone de flecha preechida para a direita" className='h-6'/>
              <div className='flex flex-col'>
                <span className='mb-[0.5px]'>{item.location}</span>
                <span className='text-sm text-muted-foreground'>{item.amount} itens vendidos</span>
              </div>
            </div>
            <span className='font-semibold text-lg text-zinc-50'>
              ${item.amount
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}