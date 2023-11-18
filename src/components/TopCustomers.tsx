export function TopCustomers() {
  const data = [
    {
      id: 2132,
      itemsSold: 75, 
      amount: 1237
    },
    {
      id: 121,
      itemsSold: 123, 
      amount: 4231.24
    },
    {
      id: 902,
      itemsSold: 213, 
      amount: 5435
    },
  ]

  return (
    <div className="py-6 px-10 border-zinc-700 border-[1px] rounded-xl h-full">
      <div className="flex flex-col items-start mb-6">
        <caption className="text-lg font-semibold mb-1 inline-block">
          Top clientes 
        </caption>

        <span className="text-sm text-muted-foreground">
          Os três maiores compradores do último mês.
        </span>
      </div>
        
      <div className='flex items-center justify-between'>
        {data.map((customer, index) =>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex items-center gap-6'>
              <span className="text-4xl font-light text-muted-foreground">{index + 1}.</span>
              <div className='flex flex-col'>
                <span className='mb-1 text-xl'>
                  Cliente 
                  <span className="font-bold text-[#5c1dfa]"> #{customer.id}</span>
                </span>
                <span className='text-sm text-muted-foreground'>{customer.itemsSold} itens comprados</span>
                <span className='font-semibold text-2xl text-zinc-50 mt-3'>
                  ${customer
                    .amount
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')
                  }
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}