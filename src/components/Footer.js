import React from 'react'
import {AiOutlineArrowRight, AiOutlinePhone, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsEnvelopeAt} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='grid grid-cols-3 mx-20 my-10'>
      <img className='w-[200px] mx-20 my-8' src="https://i.hizliresim.com/mdv38dw.png" alt="" />
      <div>
        <ul className='flex flex-col px-20 py-20 justify-center border-x-2 border-black '>
          <li className='flex items-center'><BsEnvelopeAt size={25} className='mr-4'/>mehmetburakbaloglu@gmail.com</li>
          <li className='flex items-center'><AiOutlinePhone size={25} className='mr-4'/>+111 222 33 44</li>
          <li className='flex items-center'><HiOutlineLocationMarker size={25} className='mr-4'/>Bozuyuk, Bilecik, Turkey</li>
        </ul>
      </div>
      <div>
      <ul className='flex mx-40 my-20 flex-col'>
          <li className='flex items-center hover:translate-x-2 duration-300'><AiOutlineArrowRight/><Link to="/" className='mx-2 hover:underline underline-offset-4  font-bold text-xl text-white text'>Home</Link></li>
          <li className='flex items-center hover:translate-x-2 duration-300'><AiOutlineArrowRight/><Link to="/" className='mx-2 hover:underline underline-offset-4  font-bold text-xl text-white text'>About</Link></li>
          <li className='flex items-center hover:translate-x-2 duration-300'><AiOutlineArrowRight/><Link to="/" className='mx-2 hover:underline underline-offset-4  font-bold text-xl text-white text'>Portfolio</Link></li>
          <li className='flex items-center hover:translate-x-2 duration-300'><AiOutlineArrowRight/><Link to="/" className='mx-2 hover:underline underline-offset-4  font-bold text-xl text-white text'>Contact</Link></li>
        </ul>
      </div>
      </div>
      <div className='flex items-center px-20 py-4 my-4 bg-black text-white'>
      <AiOutlineCopyrightCircle size={25} className='mr-2'/>
      <p className='font-bold text-xl text'>Copyright 2023 | All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer