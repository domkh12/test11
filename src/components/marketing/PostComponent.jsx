import React from 'react'
import { motion } from 'framer-motion'

function PostComponent({imageUrl, category, date, title}) {
  return (
      <motion.div className='mt-8'
      initial={{y:-50, opacity:0}}
      whileInView={{y: 50, opacity:1}}
      transition={{duration:2}}
      >
        <div className="flex flex-row flex-wrap items-center gap-5">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out overflow-hidden w-[280px] hover:bg-gradient-to-r from-linearx via-lineary to-linearz">
              <div className='w-[90%] flex mx-auto mt-3'>
              <img 
              src={imageUrl} 
              alt="Post" 
              className="w-full h-48 object-cover rounded-t-lg" />
              </div>
              <div className="p-4">
                <div className='flex flex-wrap items-center justify-between mb-2'>
                  <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded-full">
                    {category}
                  </span>
                  <span className="text-gray-400 text-sm">{date}</span>
                </div>
                <h2 className="text-lg font-bold mt-2 hover:text-pink-500 transition duration-300 ease-in-out">{title}</h2>
              </div>
            </div>
        </div>
      </motion.div>
  )
}

export default PostComponent
