import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex items-center justify-between px-20 py-10 border-b-2 border-black bg-white sticky top-0'>
      <img className='w-[60px]' src="https://i.hizliresim.com/mdv38dw.png" alt="" />        
      <div>
      <Link className='mx-2 hover:underline underline-offset-4 font-bold text-2xl text-white text' to="/">Home</Link>
      <Link className='mx-2 hover:underline underline-offset-4 font-bold text-2xl text-white text' to="about">About</Link>
      <Link className='mx-2 hover:underline underline-offset-4 font-bold text-2xl text-white text' to="portfolio">Portfolio</Link>
      <Link className='mx-2 hover:underline underline-offset-4 font-bold text-2xl text-white text' to="contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header