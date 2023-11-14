import Profile from '../assets/profile.svg'

export function Header() {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-zinc-700 px-12">
      <div className="flex gap-8 py-3">
        <div>
          <a href="#" className=" text-zinc-100 font-sans">Visão geral</a>
        </div>
        <div>
          <a href="#" className=" text-muted-foreground font-sans hover:text-zinc-50 hover:transition-all">
            Clientes
          </a>
        </div>
        <div>
          <a href="#" className=" text-muted-foreground font-sans hover:text-zinc-50 hover:transition-all">
            Produtos
          </a>
        </div>
      </div>
      <div className="py-3">
        <img src={Profile} alt="Foto de perfil" className='h-12'/>
      </div>
    </div>
  )
}