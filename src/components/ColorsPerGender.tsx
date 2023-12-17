import { ColorsPerGenderProps } from '@/pages/Products'

// Images
import Arrow from '../assets/grayArrow.svg'
import Man from '../assets/man.svg'
import Woman from '../assets/woman.svg'

interface Props {
  data: ColorsPerGenderProps[]
}

export function ColorsPerGender({ data }: Props) {
  // const data = [
  //   {
  //     name: 'Verde-oliva',
  //     itemsSold: 75, 
  //     percentage: 5
  //   },
  //   {
  //     name: 'Amarelo',
  //     itemsSold: 123, 
  //     percentage: 44.9
  //   },
  // ]

  function handleData() {
    let femaleTotalAmount = 0
    let maleTotalAmount = 0 
    let femaleMaxAmount = 0 
    let maleMaxAmount = 0 

    data.map((item, index) => {
      if(item.gender === 'Female') {
        femaleTotalAmount += item.amount

        if(item.amount > femaleMaxAmount){
          const currentItem = data[1]
          data[1] = data[index]
          data[index] = currentItem
          femaleMaxAmount = item.amount
        }

      } else if(item.gender === 'Male') {
        maleTotalAmount += item.amount

        if(item.amount > maleMaxAmount) {
          const currentItem = data[0]
          data[0] = data[index]
          data[index] = currentItem
          maleMaxAmount = item.amount
        }
      }
    })

    const newData = [
      {
      ...data[0],
      percentage: (femaleMaxAmount / femaleTotalAmount) * 100 
      }, 
      {
      ...data[1],
      percentage: (maleMaxAmount / maleTotalAmount) * 100 
      }
    ]

    return newData
  }

  return (
    <div className=" py-6 px-10 border-zinc-700 border-[1px] rounded-xl">
      <div className="flex flex-col items-start mb-6">
        <figcaption className="text-lg font-semibold mb-1 inline-block">
          Cores mais vendidas por sexo 
        </figcaption>

        <span className="text-sm text-muted-foreground">
          Cores de produtos mais vendidos em relação ao sexo dos clientes.
        </span>
      </div>
        
      <div className='flex flex-col gap-8'>
        {handleData().map((item, index) =>
          <div className='flex items-center justify-between' key={index}>
            <div className='flex items-center gap-6'>
              <img src={Arrow} alt="Ícone de flecha preenchida para a direita" className='h-6'/>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <span className='mb-[0.5px] text-xl'>{item.color}</span>
                  <span className='text-sm text-muted-foreground'>
                    {item.amount} itens vendidos para {index ? 'as mulheres' : 'os homens'}.
                  </span>
                </div>
                
                <span className='font-bold text-4xl text-zinc-50 mt-3'>
                  {item.percentage
                    .toFixed(1)
                    .toString()
                    .replace('.', ',')
                  }%
                </span>
              </div>
            </div>
            {index ? 
              <img src={Woman} alt="Ícone que simboliza mulher" className='h-24' /> 
              : <img src={Man} alt="Ícone que simboliza homem" className='h-24' /> 
            }
          </div>
        )}
      </div>
    </div>
  )
}