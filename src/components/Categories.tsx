import { PieChart, Pie, Cell } from 'recharts';

interface CustomizedLabel {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number; 
  outerRadius: number;
  percent: number;
  index: number;
}

const data = [
  { name: 'Roupas', value: 400 },
  { name: 'Acessórios', value: 300 },
  { name: 'Calçados', value: 300 },
  { name: 'Agasalhos', value: 200 },
];

const COLORS = ['#170c31', '#271766', '#931dfa', '#694eb2'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent } 
  : CustomizedLabel) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className='font-semibold'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function Categories() {
  return (
    <div className='flex items-center justify-center flex-col p-6 border-zinc-700 border-[1px] rounded-xl'>
      <span className="font-semibold mb-6 inline-block text-left mr-auto">Categorias de produtos</span>

        <PieChart width={255} height={255}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={125}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className='outline-none'/>
            ))}
          </Pie>
        </PieChart>

      <figcaption className='mt-6 flex justify-center gap-8 w-full'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <div className='bg-[#170c31] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Roupas</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[#271766] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Acessórios</span>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <div className='bg-[#931dfa] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Calçados</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[#694eb2] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Agasalhos</span>
            </div>
          </div>
        
      </figcaption>

    </div>
  );
}
