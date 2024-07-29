import React from 'react'
import TopBackgroundImageComponent from './TopBackgroundImageComponent'
import ServiceSection from './ServiceSection'
import PrimaryButton from './ButtonPrimary'
import { NormalButton } from './ButtonPrimary'
import FooterComponent from './FooterComponent'
const BgNone = "text-marketing-main-color bg-tranparent border-marketing-main-color hover:bg-button-hover hover:text-white hover:border-button-hover";
import { motion } from 'framer-motion'

function ServiceTopSection() {
  return (
    <div>
      <div>
      <TopBackgroundImageComponent text="Service" moreText=""/>
      </div>
      <div className='w-full bg-marketing-main-color py-32'>
        <ServiceSection/>
      </div>
      <motion.div 
      className='flex w-[400px] justify-center bg-bg-about bg-cover bg-start mx-auto mt-32 rounded-md md:w-[900px] sm:w-[700px]'
      initial={{y: -50, opacity:0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}}
      >
        <div className='flex flex-col-reverse justify-around rounded-md items-center w-[70%] mx-auto sm:flex-row p-2' >
        <div className='flex flex-col gap-5'>
        <h2 className='text-3xl'>Get in touch and
          <span className='text-blue-500'> start growing</span>
          your startup today
        </h2>
        <div className='flex flex-row gap-2'>
          <PrimaryButton text="Get in Touch"/>
          <NormalButton buttonType={BgNone} text='Get Started'/>
        </div>
        </div>
        <div>
          <img src="./public/marketing/airplane.png" alt="" />
        </div>
        </div>
      </motion.div>
      <FooterComponent/>
    </div>
  )
}

export default ServiceTopSection
