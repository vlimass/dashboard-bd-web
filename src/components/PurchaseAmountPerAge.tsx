import { SalesPerAgeProps } from "@/pages/Customers"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface Props {
  data: SalesPerAgeProps[]
}

export function PurchaseAmountPerAge({ data }: Props) {
  function handleData() {
    let total18to25 = 0 
    let total26to33 = 0 
    let total34to41 = 0 
    let total42to49 = 0 
    let total50to57 = 0 
    let total58to65 = 0 
    let total66More = 0 

    data.map(item => {
      if (Number(item.name) >= 18 && Number(item.name) <= 25) {
        total18to25 += item.total
      } else if (Number(item.name) >= 26 && Number(item.name) <= 33) {
        total26to33 += item.total
      } else if (Number(item.name) >= 34 && Number(item.name) <= 41) {
        total34to41 += item.total
      } else if (Number(item.name) >= 42 && Number(item.name) <= 49) {
        total42to49 += item.total
      } else if (Number(item.name) >= 50 && Number(item.name) <= 57) {
        total50to57 += item.total
      } else if (Number(item.name) >= 58 && Number(item.name) <= 65) {
        total58to65 += item.total
      } else {
        total66More += item.total
      }
    })

    return [
      {
        name: "18 a 25 anos",
        total: total18to25,
      },
      {
        name: "26 a 33 anos",
        total: total26to33,
      },
      {
        name: "34 a 41 anos",
        total: total34to41,
      },
      {
        name: "42 a 49 anos",
        total: total42to49,
      },
      {
        name: "50 a 57 anos",
        total: total50to57,
      },
      {
        name: "58 a 65 anos",
        total: total58to65,
      },
      {
        name: "66 anos ou mais",
        total: total66More,
      },
    ]
  }

  return (
    <div className="p-6 border-zinc-700 border-[1px] rounded-xl">

      <figcaption className="text-lg ml-4 font-semibold mb-6">Vendas por faixa etária</figcaption>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={handleData()}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey="total" fill="#EFBCD5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
