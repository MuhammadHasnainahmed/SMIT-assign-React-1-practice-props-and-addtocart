import React from 'react'

export default function Navbar(props) {
  return (
    <>
      <nav className='p-3 bg-blue-500 text-white flex justify-between items-center'>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>

        <ul className='hidden md:flex gap-14 font-bold cursor-pointer transition-all  p-1.5'>
            <li className='hover:text-black' >Home</li>
            <li className='hover:text-black' >About</li>
            <li className='hover:text-black' >Contact</li>
            <li className='hover:text-black' >Services</li>
            <li className='hover:text-black' >Blog</li>
        </ul>

        <div className="bg-white text-blue-500 px-3 py-1 rounded-lg font-semibold">
          
          Cart:{props.cartcount}
                     
        </div>
      </nav>

    </>
  )
}
