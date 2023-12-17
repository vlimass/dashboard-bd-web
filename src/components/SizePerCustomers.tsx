import { SaledSizesProps } from "@/pages/Products"
import {  XAxis, LineChart, Line, ResponsiveContainer } from "recharts"

// const data = [
//   {
//     name: 'S',
//     uv: Math.random() * 1000,
//     pv: Math.random() * 1000,
//     amt: Math.random() * 1000,
//   },
//   {
//     name: 'M',
//     uv: Math.random() * 1000,
//     pv: Math.random() * 1000,
//     amt: Math.random() * 1000,
//   },
//   {
//     name: 'L',
//     uv: Math.random() * 1000,
//     pv: Math.random() * 1000,
//     amt: Math.random() * 1000,
//   },
//   {
//     name: 'XL',
//     uv: Math.random() * 1000,
//     pv: Math.random() * 1000,
//     amt: Math.random() * 1000,
//   },
// ]

interface Props {
  data: SaledSizesProps[]
}

export function SizePerCustomers({ data }: Props) {
  function handleDataOrder() {
    data.map((item, index) => {
      if(item.name === 'S') {
        const currentItem = data[0]  
        data[0] = data[index]
        data[index] = currentItem
      } else if (item.name === 'M') {
        const currentItem = data[1]  
        data[1] = data[index]
        data[index] = currentItem
      } else if (item.name === 'L') {
        const currentItem = data[2]  
        data[2] = data[index]
        data[index] = currentItem 
      } else {
        const currentItem = data[3]  
        data[3] = data[index]
        data[index] = currentItem 
      }
    })
    
    return data
  }

  return (
    <div className="p-6 border-zinc-700 border-[1px] rounded-xl">

      <figcaption className="text-lg font-semibold mb-1">
        Tamanhos vendidos
      </figcaption>
      <span className="mb-6 text-sm text-muted-foreground">
        Análise do número de roupas vendidas em relação ao tamanho.
      </span>

      <ResponsiveContainer width="100%" height={270} className="mt-4 mb-1">
        <LineChart width={300} height={100} data={handleDataOrder()}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={14}
            tickLine={false}
            axisLine={true}
          />
          <Line type="monotone" dataKey="pv" stroke="#5c1dfa" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
