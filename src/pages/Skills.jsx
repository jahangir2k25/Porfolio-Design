import Container from '../components/Container';
import Bars from '../components/Bars';
import Flex from '../components/Flex';
import Vite from '../assets/vite.png';
import React from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Js from '../assets/js.png';
import Css from '../assets/css.png';
import Github from '../assets/github.png';
import Firebase from '../assets/firebase.png';
import Html from '../assets/html.png';
import Vs from '../assets/vs.png';
import Figma from '../assets/figma.png';

const Skills = () => {
  return (
    <>
      <Container>
        <h2 className='text-center text-4xl'>My <span className='text-[#1d9bf0]'>Skills</span></h2>
        <div className='grid lg:grid-cols-2 gap-x-10 pb-20 px-10 lg:px-0'>
          <div className='pt-8'>
            <p className='text-white  text-base lg:text-lg font-semibold'>HTML</p>
            <Bars completed={95} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>CSS</p>
            <Bars completed={90} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Javascript</p>
            <Bars completed={70} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Bootstrap</p>
            <Bars completed={80} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>Taiwind CSS</p>
            <Bars completed={85} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>React JS</p>
            <Bars completed={70} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>VITE JS</p>
            <Bars completed={75} className='pt-2'></Bars>
          </div>
          <div className='pt-8'>
            <p className='text-white text-base lg:text-lg font-semibold'>FIGMA</p>
            <Bars completed={90} className='pt-2'></Bars>
          </div>
        </div>

        <Flex className='justify-center gap-10 pb-20'>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={React} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Tailwind} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Bootstrap} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:drop-shadow-icon rounded-full duration-300'>
            <img src={Vite} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Github} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Firebase} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Js} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Css} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Html} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Figma} alt="" className='w-full h-full' />
          </div>
          <div className='w-10 h-10 hover:shadow-icon rounded-full duration-300'>
            <img src={Vs} alt="" className='w-full h-full' />
          </div>
        </Flex>
      </Container>
    </>
  )
}

export default Skills;
