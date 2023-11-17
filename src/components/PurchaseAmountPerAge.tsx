import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "18 a 25 anos",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "26 a 33 anos",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "34 a 41 anos",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "42 a 49 anos",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "50 a 57 anos",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "58 a 65 anos",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "66 anos ou mais",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function PurchaseAmountPerAge() {
  return (
    <div className="p-6 border-zinc-700 border-[1px] rounded-xl">

      <figcaption className="text-lg ml-4 font-semibold mb-6">Vendas por faixa etária</figcaption>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
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
