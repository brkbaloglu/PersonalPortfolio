import React from 'react'
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import {BsLinkedin, } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {BiLogoCss3, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoPhp} from 'react-icons/bi'
import { DiSass, DiJavascript1} from 'react-icons/di'
function Home() {
  return (
    <div className='my-20'>
      <div className='flex items-center justify-center'> 
        <div className='text-center mx-10'>
        <h3 className='text font-bold text-white text-4xl'>I'm Mehmet Burak Baloglu</h3>
        <h5 className=' font-bold text-xl my-4'>A mathematician and frond-end developer.</h5>
        <div >
          <ul className='flex items-center justify-center'>
            <Link to="https://github.com/brkbaloglu"><AiFillGithub size={40} className='mx-2 mt-6 cursor-pointer hover:scale-105 duration-300 hover:bg-black hover:text-white p-2 rounded-xl'/></Link>
            <Link to="https://www.linkedin.com/in/mehmet-burak-baloglu/"><BsLinkedin size={40} className='mx-2 mt-6 cursor-pointer hover:scale-105 duration-300 hover:bg-blue-600 hover:text-white p-2 rounded-xl text-blue-600'/></Link>
          </ul>
        </div>
        </div>
        <div>
          <img className='w-[300px] ml-20 rounded-xl h-[400px]' src="https://i.hizliresim.com/tiz887b.jpg" alt="" />
        </div>
        
      </div>
      <div className='flex items-center justify-center my-20'>
          <AiFillHtml5 size={40} className='mx-8 bg-white text-orange-500'/>
          <BiLogoCss3 size={40} className='mx-8 bg-white text-blue-500'/>
          <DiJavascript1 size={40} className='mx-8 text-yellow-300 '/>
          <BiLogoPhp size={40} className='mx-8  text-blue-300 '/>
          <DiSass size={40} className='mx-8 bg-white text-pink-400'/>
          <BiLogoReact size={40} className='mx-8 bg-white text-blue-300'/>
          <BiLogoTailwindCss size={40} className='mx-8 bg-white text-blue-300'/>
        </div>
    </div>
  )
}

export default Home