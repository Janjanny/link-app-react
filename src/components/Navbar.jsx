import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-black text-white'>
      <nav className='flex w-11/12 mx-auto justify-between items-center py-3'>
        <h1 className=' font-bold text-2xl'>Links</h1>
        <div className='flex gap-3'>
          <div className=' bg-red-400'>
            <input type="text" className=' bg-black focus:outline-none outline-1 text-start' placeholder='search...' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
    
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar