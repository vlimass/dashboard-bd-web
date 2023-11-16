import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Primavera",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Verão",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Outono",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Inverno",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

export function PurchaseAmountPerSeason() {
  return (
    <div className="p-6 border-zinc-700 border-[1px] rounded-xl w-1/2">

      <figcaption className="text-lg ml-4 font-semibold mb-6">Vendas por temporada</figcaption>

      <ResponsiveContainer width="100%" height={350}>
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
          <Bar dataKey="total" fill="#5c1dfa" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
