import React from 'react'
import TestimonialComponent from './TestimonialComponent'
import { motion } from 'framer-motion'
import { duration } from '@mui/material'

function TestimonialSection() {
  return (
    <div>
    <div className='mt-32 '>
        <motion.div className='flex flex-col items-center mx-0 md:mx-60 sm:mx-32 sm:items-start'
        initial={{y: -50, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1}}
        >
      <small className="text-md text-marketing-main-color"><span className="text-orange-400">// </span>
      03 . TESTIMONIAL
      </small>
      <h2 className='text-2xl w-[370px] text-marketing-main-color text-center sm:text-start' >
      We work with customers across all industries
        </h2>
    </motion.div>
    <div className='mt-16 flex flex-col justify-center items-center xl:flex-row lg:flex-row md:flex-row gap-5 xl:mx-60 lg:mx-32 md:mx-16 mx-auto'>
      <TestimonialComponent 
      image="./public/marketing/company.jpg"
      title="Company"
      desc="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. "
      profile=""
      fullname="John Carter"
      dep="Marketing Lead at Google"
      />
      <TestimonialComponent 
      image="./public/marketing/company.jpg"
      title="Company"
      desc="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. "
      profile=""
      fullname="John Carter"
      dep="Marketing Lead at Google"
      />
      </div>
    </div>
    </div>
  )
}

export default TestimonialSection
