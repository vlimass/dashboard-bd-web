interface SecondaryCardProps {
  title: string;
  value: string; 
  icon: string;
  iconAlt: string;
  description: string;
}

export function SecondaryCard({ title, value, icon, iconAlt, description } : SecondaryCardProps) {
  return (
    <div className=" border-zinc-700 border-[1px] p-6 rounded-xl flex-1">
      <div className='flex items-center'>
        <div>
          <span className="font-semibold mb-3 inline-block">{title}</span>

          <span className='text-4xl font-semibold mb-1 inline-block'>
            {value}
          </span>
        </div>

          <img src={icon} alt={iconAlt} className='h-12 mr-4' />
      </div>

      <span className='mt-1 text-sm text-muted-foreground inline-block'>
        {description}
      </span>

    </div>
  )
}