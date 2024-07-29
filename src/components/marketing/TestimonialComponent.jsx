import React from 'react'
import { FaStar } from "react-icons/fa6";
import { delay, motion } from "framer-motion"
import { duration } from '@mui/material';

function TestimonialComponent({image, title, desc, profile, fullname, dep}) {
  return (
    <motion.div className='bg-gradient-to-r from-linearx via-lineary to-linearz p-5 xl:w-[600px] w-[400px] rounded-xl'
    initial={{y: -50, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1}}
    >
        <div className='shadow-md bg-white p-5 rounded-xl'>
      <div className='flex justify-between'>
        <section className='flex flex-row text-xl font-semibold gap-2'>
            <img src={image} alt="" className='w-10 h-10 bg-red-500'/>
            <h2 className='mt-2'>{title}</h2>
        </section>
        <section className='flex gap-1 text-orange-400 mt-3'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </section>
      </div>
      <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
      <p>
        {desc}
      </p>
      </div>
      <div className='flex flex-row gap-1 pt-10'>
        <div>
      <img src={profile} alt="profiel image" className='w-12 h-12 bg-red-500 rounded-3xl'/>
      </div>
      <div>
        <p>{fullname}</p>
        <small>{dep}</small>
      </div>
      </div>
    </motion.div>
  )
}

export default TestimonialComponent
