import React from 'react'
import {AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import { BiLogoCss3, BiLogoPhp, BiLogoAngular, BiLogoReact, BiLogoTailwindCss} from 'react-icons/bi'
import { DiJavascript1} from 'react-icons/di'
import { SiMysql} from 'react-icons/si'
import { Link } from 'react-router-dom'
function Portfolio() {
  return (
    <div className='mx-20 my-20'>
      <h3 className='text text-white font-bold text-6xl text-center'>My Portfolio</h3>
      <div>
        <div className='flex items-center justify-center mt-20'>
          <img className='w-[600px]' src="https://i.hizliresim.com/616cfjb.png" alt="" />
          <div className='ml-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Coffee Shop Website</h3>
            <p>Responsive coffee shop website using HTML, CSS and Javascript</p>
            <div className='flex items-center justify-center my-4'>
            <AiFillHtml5 size={30} className='mx-2 bg-white text-orange-500'/>
            <BiLogoCss3 size={30} className='mx-2 bg-white text-blue-500'/>
            <DiJavascript1 size={30} className='mx-2 text-yellow-300 '/>
            </div>
            <div className='flex items-center  text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/CoffeeShopWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-20'>
          <div className='mr-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Camp Website</h3>
            <p>Responsive camp website using HTML, CSS and Javascript</p>
            <div className='flex items-center justify-center my-4'>
            <AiFillHtml5 size={30} className='mx-2 bg-white text-orange-500'/>
            <BiLogoCss3 size={30} className='mx-2 bg-white text-blue-500'/>
            <DiJavascript1 size={30} className='mx-2 text-yellow-300 '/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/CampWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
          <img className='w-[600px]' src="https://i.hizliresim.com/tsdwk20.png" alt="" />
        </div>

        <div className='flex items-center justify-center mt-20'>
        <img className='w-[600px]' src="https://i.hizliresim.com/bas5wns.png" alt="" />
          <div className='ml-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Restaurant Website</h3>
            <p>Responsive restaurant website using HTML, CSS, Javascript, PHP and MySQL</p>
            <div className='flex items-center justify-center my-4'>
            <AiFillHtml5 size={30} className='mx-2 bg-white text-orange-500'/>
            <BiLogoCss3 size={30} className='mx-2 bg-white text-blue-500'/>
            <DiJavascript1 size={30} className='mx-2 text-yellow-300 '/>
            <BiLogoPhp size={0} className='mx-2  text-blue-300 '/>
            <SiMysql size={0} className='mx-2  text-blue-300 '/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/RestaurantWebsite-v2" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-20'>
          <div className='mr-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Shoes Website</h3>
            <p>Responsive shoes website using HTML, CSS, Javascript, PHP and MySQL</p>
            <div className='flex items-center justify-center my-4'>
            <AiFillHtml5 size={30} className='mx-2 bg-white text-orange-500'/>
            <BiLogoCss3 size={30} className='mx-2 bg-white text-blue-500'/>
            <DiJavascript1 size={30} className='mx-2 text-yellow-300 '/>
            <BiLogoPhp size={0} className='mx-2  text-blue-300 '/>
            <SiMysql size={0} className='mx-2  text-blue-300 '/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/ShoesWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
          <img className='w-[600px]' src="https://i.hizliresim.com/km60k96.png" alt="" />
        </div>

        <div className='flex items-center justify-center mt-20'>
        <img className='w-[600px]' src="https://i.hizliresim.com/hxnycle.png" alt="" />
          <div className='ml-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Tour&Travel Website</h3>
            <p>Responsive tour&travel website using Angular</p>
            <div className='flex items-center justify-center my-4'>
            <BiLogoAngular className='mx-2 text-red-600 ' size={30}/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/Tour-Travel-Website-Angular" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-20'>
          <div className='mr-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Education Website</h3>
            <p>Responsive education website using React, TailwindCss</p>
            <div className='flex items-center justify-center my-4'>
            <BiLogoReact size={40} className='mx-2 bg-white text-blue-300'/>
            <BiLogoTailwindCss size={40} className='mx-2 bg-white text-blue-300'/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/EducationWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
          <img className='w-[600px]' src="https://i.hizliresim.com/43abmap.png" alt="" />
        </div>

        <div className='flex items-center justify-center mt-20'>
        <img className='w-[600px]' src="https://i.hizliresim.com/2wuaehe.png" alt="" />
          <div className='ml-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Cryptocurrency Website</h3>
            <p>Responsive Cryptocurrency website using React, TailwindCss</p>
            <div className='flex items-center justify-center my-4'>
            <BiLogoReact size={40} className='mx-2 bg-white text-blue-300'/>
            <BiLogoTailwindCss size={40} className='mx-2 bg-white text-blue-300'/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/CryptocurrencyWebsite" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-20'>
          <div className='mr-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Architecture Website</h3>
            <p>Responsive architecture website using React, TailwindCss</p>
            <div className='flex items-center justify-center my-4'>
            <BiLogoReact size={40} className='mx-2 bg-white text-blue-300'/>
            <BiLogoTailwindCss size={40} className='mx-2 bg-white text-blue-300'/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/InteriorDesign" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
          <img className='w-[600px]' src="https://i.hizliresim.com/lce4n8c.png" alt="" />
        </div>

        <div className='flex items-center justify-center mt-20'>
        <img className='w-[600px]' src="https://i.hizliresim.com/m69g4zy.png" alt="" />
          <div className='ml-8 text-center'>
            <h3 className='text text-2xl font-bold text-white mb-10'>Car Selling Website</h3>
            <p>Car Selling website using React, TailwindCss</p>
            <div className='flex items-center justify-center my-4'>
            <BiLogoReact size={40} className='mx-2 bg-white text-blue-300'/>
            <BiLogoTailwindCss size={40} className='mx-2 bg-white text-blue-300'/>
            </div>
            <div className='flex items-center text-black border-2 border-black rounded-xl w-[150px] p-2 hover:bg-black hover:text-white duration-300'>
              <p>Code here:</p>
              <Link to="https://github.com/brkbaloglu/CarSelling" ><AiFillGithub size={30} className='ml-4'/></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio