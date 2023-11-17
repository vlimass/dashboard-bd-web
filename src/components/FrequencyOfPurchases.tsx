import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: Math.random() * 100 },
  { name: 'Group B', value: Math.random() * 100 },
  { name: 'Group C', value: Math.random() * 100 },
  { name: 'Group D', value: Math.random() * 100 },
  { name: 'Group E', value: Math.random() * 100 },
  { name: 'Group F', value: Math.random() * 100 },
];

const COLORS = ['#170c31', '#271766', '#931dfa', '#694eb2', '#b299f3', '#ebe5f9'];

export function FrequencyOfPurchases() {
  return (
    <div className='flex items-center justify-center flex-col p-6 border-zinc-700 border-[1px] rounded-xl'>
      <span className="font-semibold mb-4 inline-block text-left mr-auto">Frequência de compras</span>

      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className='outline-none' />
          ))}
        </Pie>
      </PieChart>

      <figcaption className='mt-5 flex gap-4'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <div className='bg-[#170c31] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Duas vezes na semana</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[#271766] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Semanalmente</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[#931dfa] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Quinzenalmente</span>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <div className='bg-[#694eb2] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>A cada três meses</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[#b299f3] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Quatro vezes no ano</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='bg-[#ebe5f9] w-3 h-3 rounded-full'/>
              <span className='text-sm text-zinc-100'>Anualmente</span>
            </div>
          </div>
        
      </figcaption>

    </div>
  );
}
