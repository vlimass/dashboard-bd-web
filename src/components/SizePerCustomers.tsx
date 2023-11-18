import {  XAxis, LineChart, Line, ResponsiveContainer } from "recharts"

const data = [
  {
    name: 'S',
    uv: Math.random() * 1000,
    pv: Math.random() * 1000,
    amt: Math.random() * 1000,
  },
  {
    name: 'M',
    uv: Math.random() * 1000,
    pv: Math.random() * 1000,
    amt: Math.random() * 1000,
  },
  {
    name: 'L',
    uv: Math.random() * 1000,
    pv: Math.random() * 1000,
    amt: Math.random() * 1000,
  },
  {
    name: 'XL',
    uv: Math.random() * 1000,
    pv: Math.random() * 1000,
    amt: Math.random() * 1000,
  },
]

export function SizePerCustomers() {
  return (
    <div className="p-6 border-zinc-700 border-[1px] rounded-xl">

      <figcaption className="text-lg font-semibold mb-1">
        Tamanhos vendidos
      </figcaption>
      <span className="mb-6 text-sm text-muted-foreground">
        Análise do número de roupas vendidas em relação ao tamanho.
      </span>

      <ResponsiveContainer width="100%" height={270} className="mt-4 mb-1">
        <LineChart width={300} height={100} data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={14}
            tickLine={true}
            axisLine={true}
          />
          <Line type="monotone" dataKey="pv" stroke="#5c1dfa" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
