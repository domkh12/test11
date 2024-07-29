import React from 'react'
import OfficeComponent from './OfficeComponent'
import FooterComponent from './FooterComponent'
import { motion } from 'framer-motion'

function OfficeSection() {
  return (
    <div className='bg-gradient-to-r from-linearx via-lineary to-linearz'>
        <br />
        <motion.div className='flex flex-col items-center sm:mx-32 lg:mx-60 sm:items-start mt-32'
        initial={{y: -50, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:1}}
        >
      <small className="text-md">
        <span className="text-yellow-300">//</span>
            Our Offices
        </small>
        <div className='sm:w-[400px] w-[350px]'>
        <h2 className='text-3xl text-center sm:text-start'>
        Come and visit us all around the world
        </h2>
        </div>
        </motion.div>
        <div>
          <div className='flex flex-col flex-wrap mt-16 gap-5 items-center justify-center sm:flex-row'>
            <motion.div
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{delay:1, duration:1}}
            >
      <OfficeComponent
      image="./public/marketing/cambodiaflag.png"
      title="Phnom Penh, Cambodia"
      desc="st.1, phsar tmey, doun penh, phnom penh"
      phone="(855) 979 878 787"
      email="Contact@marketing.com"
      /></motion.div>
      <motion.div
      initial={{y:-50, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:1, duration:1}}
      >
      <OfficeComponent
      image="./public/marketing/cambodiaflag.png"
      title="Phnom Penh, Cambodia"
      desc="st.1, phsar tmey, doun penh, phnom penh"
      phone="(855) 979 878 787"
      email="Contact@marketing.com"
      />
      </motion.div>
      <motion.div
      initial={{x:100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:1, duration:1}}
      >
      <OfficeComponent
      image="./public/marketing/cambodiaflag.png"
      title="Phnom Penh, Cambodia"
      desc="st.1, phsar tmey, doun penh, phnom penh"
      phone="(855) 979 878 787"
      email="Contact@marketing.com"
      />
      </motion.div>
      </div>
      </div>
      <br />
      <div className='mt-32'>
      <FooterComponent/></div>
    </div>
  )
}

export default OfficeSection
