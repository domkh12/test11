import React from 'react'
import AticalComponent from './AticalComponent'
import SearchBoxComponent from './SearchBoxComponent';
import PostSection from './PostSection';
import { motion } from 'framer-motion';

const NormalAtical = "flex flex-col-reverse gap-10 w-[400px] mx-auto bg-atical-orange rounded-xl p-10 xl:flex-row xl:mx-auto lg:flex-row lg:w-[1000px] sm:w-[500px] lg:mx-auto";

function BlogSection() {
  return (
    <div className='mt-32'>
      <motion.div className='mx-10 flex flex-col md:mx-60 sm:mx-32'
      initial={{y: -50, opacity: 0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:1}}
      >
      <small className="text-md text-marketing-main-color"><span className="text-yellow-300">// </span>
        0 . 1 ACTICALS
      </small>
      <h2 className='text-2xl w-[350px] text-marketing-main-color text-start'>Browse our content on growth marketing</h2>
    </motion.div>
    <motion.div className='mt-16'
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:1, duration:1}}
    >
      <AticalComponent option="Marketing" date="SEPTEMBER 1, 2022" 
      aticalType={NormalAtical}
      image="./public/marketing/aticalimg.webp" 
      title="How to increase your Twitter reach by over 200% with this simple trick" 
      desc="Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. "/>
    </motion.div>
    <motion.div className='bg-marketing-main-color flex justify-center items-center p-32 mt-32'
    initial={{y: -50, opacity: 0}}
    whileInView={{y: 0, opacity:1}}
    transition={{duration:1}}
    >
        <div>
            <h2 className='text-3xl text-white text-center'>
            Subscribe to our 
            <span className='text-red-500'> newsletter</span>
            </h2>
            <div className='mx-auto'>
            <SearchBoxComponent/>
            </div>
        </div>
    </motion.div>
    <div>
        <PostSection/>
    </div>
    </div>
  )
}

export default BlogSection
