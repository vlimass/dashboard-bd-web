import Hat from '../assets/hat.svg'

export function GenderCard() {
  return (
    <div className=" border-zinc-700 border-[1px] p-6 rounded-xl flex-1">
      <div className='flex items-center'>
        <div>
          <span className="font-semibold mb-3 inline-block">Comparação entre os sexos</span>

          <span className='text-4xl font-semibold mb-1 inline-block'>
            68% homens
          </span>
        </div>

          <img src={Hat} alt="Ícone de cartola" className='h-12 mr-4' />
      </div>

      <span className='mt-1 text-sm text-muted-foreground inline-block'>
        A maioria dos compradores são desse sexo.
      </span>

    </div>
  )
}