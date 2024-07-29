import React from 'react'
import { NavbarComponent } from './NavbarComponent'
import { motion } from 'framer-motion'

function TopBackgroundImageComponent({text, moreText}) {
  return (
    <div>
      <motion.div 
      className='bg-bg-about h-[500px] bg-cover bg-center' 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      >
        <div>
        <div className='xl:mx-60 lg:mx-32 md:mx-0'>
       <NavbarComponent/>
       </div>
            <br />
            <div className='flex items-center justify-center text-5xl font-semibold mt-52'>
            <h1>
                {text} 
                <span className='text-blue-500'>
                {moreText}
                </span>
            </h1>
            </div>
            </div>
            <div>
            </div>
    </motion.div>
    </div>
  )
}

export default TopBackgroundImageComponent
