import React from 'react'
import { motion } from 'framer-motion'
import { duration } from '@mui/material'

function ContactCardBoxs({title, logo, type, desc}) {
  return (
    <motion.div className='flex justify-center w-[330px] items-center p-10 border rounded-md hover:bg-gradient-to-r from-linearx via-lineary to-linearz'
    translate={{duration:1}}
    >
        <div className='flex items-center p-10 shadow bg-white rounded-md'>
      <div className='w-52 flex flex-col gap-3'>
        <p className='bg-atical-orange rounded-3xl w-32 flex justify-center text-center p-1'>
            {title}
            </p>
        <hr />
        <div>
        <div className='flex flex-row gap-1'>
            <div className='mt-1'>
                {logo}
            </div>
            {type}
        </div>
        <small>{desc}</small>
        </div>
      </div>
      </div>
    </motion.div>
  )
}

export default ContactCardBoxs
