import Arrow from '../assets/grayArrow.svg'
import Man from '../assets/man.svg'
import Woman from '../assets/woman.svg'

export function ColorsPerGender() {
  const data = [
    {
      name: 'Verde-oliva',
      itemsSold: 75, 
      percentage: 5
    },
    {
      name: 'Amarelo',
      itemsSold: 123, 
      percentage: 44.9
    },
  ]

  return (
    <div className=" py-6 px-10 border-zinc-700 border-[1px] rounded-xl">
      <div className="flex flex-col items-start mb-6">
        <caption className="text-lg font-semibold mb-1 inline-block">
          Cores mais vendidas por sexo 
        </caption>

        <span className="text-sm text-muted-foreground">
          Cores de produtos mais vendidos em relação ao sexo dos clientes.
        </span>
      </div>
        
      <div className='flex flex-col gap-8'>
        {data.map((color, index) =>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <img src={Arrow} alt="Ícone de flecha preechida para a direita" className='h-6'/>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <span className='mb-[0.5px] text-xl'>{color.name}</span>
                  <span className='text-sm text-muted-foreground'>
                    {color.itemsSold} itens vendidos para {index ? 'as mulheres' : 'os homens'}.
                  </span>
                </div>
                
                <span className='font-bold text-4xl text-zinc-50 mt-3'>
                  {color
                    .percentage
                    .toFixed(1)
                    .toString()
                    .replace('.', ',')
                  }%
                </span>
              </div>
            </div>
            {index ? 
              <img src={Woman} alt="" className='h-24' /> 
              : <img src={Man} alt="" className='h-24' /> 
            }
          </div>
        )}
      </div>
    </div>
  )
}