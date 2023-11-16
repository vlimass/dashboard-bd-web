interface CardProps {
  title: string;
  value: string;
  image: string;
  imageAlt: string;
  description: string;
}

export function Card({title, value, image, description, imageAlt} : CardProps) {
  return (
    <div className=" border-zinc-700 border-[1px] p-6 rounded-xl flex-1">
      <div className="flex justify-between items-center">
        <span className="text-sm">{title}</span>

        <img src={image} alt={imageAlt} className="h-5 w-5"/>
      </div>

      <div className='flex flex-col gap-1 mt-2'>
        <span className='text-2xl font-semibold'>
          {title === 'Venda total'? '$' : '+'}{value}
        </span>
        
        <span className=' text-xs text-muted-foreground'>
          {description}
        </span>
      </div>
    </div>
  )
}