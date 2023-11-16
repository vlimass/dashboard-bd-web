import Arrow from '../assets/arrow.svg'

export function PurchaseAmountPerLocation() {
  const data = [
    {
      name: 'Nova York',
      itemsSold: 75, 
      amount: 1237
    },
    {
      name: 'Califórnia',
      itemsSold: 123, 
      amount: 4231.24
    },
    {
      name: 'Montana',
      itemsSold: 213, 
      amount: 5435
    },
    {
      name: 'Flórida',
      itemsSold: 21, 
      amount: 739
    },
    {
      name: 'Texas',
      itemsSold: 12, 
      amount: 123
    },
    
  ]

  return (
    <div className="w-1/2 py-6 px-10 border-zinc-700 border-[1px] rounded-xl">
      <div className="flex flex-col items-start mb-6">
        <caption className="text-lg font-semibold mb-1 inline-block">
          Vendas por localização
        </caption>

        <span className="text-sm text-muted-foreground">
          Suas vendas saíram de 32 estoques esse mês.
        </span>
      </div>
        
      <div className='flex flex-col gap-5'>
        {data.map(location =>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <img src={Arrow} alt="Ícone de flecha preechida para a direita" className='h-6'/>
              <div className='flex flex-col'>
                <span className='mb-[0.5px]'>{location.name}</span>
                <span className='text-sm text-muted-foreground'>{location.itemsSold} itens vendidos</span>
              </div>
            </div>
            <span className='font-semibold text-lg text-zinc-50'>
              ${location
                .amount
                .toFixed(2)
                .toString()
                .replace('.', ',')
              }
            </span>
          </div>
        )}
      </div>
    </div>
  )
}