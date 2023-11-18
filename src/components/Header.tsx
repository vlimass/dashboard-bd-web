import { Link } from 'react-router-dom'
import Profile from '../assets/profile.svg'

interface HeaderProps {
  onFocus: string;
}

export function Header({ onFocus } : HeaderProps) {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-zinc-700 px-12 sticky top-0">
      <div className="flex gap-8 py-3">
        <div>
          <Link to="/" className={onFocus === 'Overview' ?  'text-zinc-100' : 'text-muted-foreground hover:text-zinc-50 hover:transition-all' }>
            Visão geral
          </Link>
        </div>

        <div>
          <Link to="/customers" className={onFocus === 'Customers' ?  'text-zinc-100' : 'text-muted-foreground hover:text-zinc-50 hover:transition-all'}>
            Clientes
          </Link>
        </div>

        <div>
          <Link to="/products" className={onFocus === 'Products' ?  'text-zinc-100' : 'text-muted-foreground hover:text-zinc-50 hover:transition-all'}>
            Produtos
          </Link>
        </div>
      </div>

      <div className="py-3">
        <img src={Profile} alt="Foto de perfil" className='h-12'/>
      </div>
    </div>
  )
}