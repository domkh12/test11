import React, { useState } from 'react'
import AticalComponent from './AticalComponent'
import { SecondButton } from './ButtonPrimary';
const NormalAtical = "flex flex-col-reverse gap-10 w-[400px] mx-auto bg-atical-orange rounded-xl p-10 xl:flex-row xl:w-[1000px] xl:mx-auto lg:flex-row lg:w-[1000px] lg:mx-auto";
const ReverseAtical = "flex flex-col-reverse gap-10 w-[400px] mx-auto bg-atical-violet rounded-xl p-10 xl:flex-row-reverse xl:w-[1000px] xl:mx-auto lg:flex-row-reverse lg:w-[1000px] lg:mx-auto";
import { delay, motion } from "framer-motion"
import { duration } from '@mui/material';
import { Button } from 'flowbite-react';

const More = {
  opacity: 1,
  display: "block"
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none"
  }
};

function AticalSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
    <motion.div className='flex flex-col items-center mt-32 sm:mx-32 md:mx-60 sm:items-start'
    initial={{y: -50, opacity: 0}}
    whileInView={{y: 0, opacity:1}}
    transition={{duration:1}}
    >
      <small className="text-md text-marketing-main-color"><span className="text-violet-300">// </span>
        0 . 2 ACTICALS
      </small>
      <h2 className='text-2xl w-[370px] text-marketing-main-color sm:text-start text-center'>Browse our content on growth marketing</h2>
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
    <motion.div className='mt-16'
    initial={{x:100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:1, duration:1}}
    >
      <AticalComponent option="Condent" date="SEPTEMBER 1, 2022" 
      aticalType={ReverseAtical}
      image="./public/marketing/aticalimg.webp" 
      title="How to reach out for guest posts to increase your SEO authority" 
      desc="Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.  "/>
    </motion.div>
    <motion.div>
    <div>
      <motion.div className="box"/>
      <motion.div 
      animate={isVisible ? More : hide}
      >
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
      <motion.div className='mt-16'
      initial={{x:100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:1, duration:1}}
      >
      <AticalComponent option="Condent" date="SEPTEMBER 1, 2022" 
      aticalType={ReverseAtical}
      image="./public/marketing/aticalimg.webp" 
      title="How to reach out for guest posts to increase your SEO authority" 
      desc="Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.  "/>
      </motion.div>
      </motion.div>
      <div className="controls">
        <motion.button
        className="p-2 bg-button-hover mt-10 flex w-[200px] mx-auto justify-center items-center rounded-xl text-white hover:text-button-hover hover:bg-gray-200"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "More Actical"}
        </motion.button>
      </div>
    </div>
    </motion.div>
    </div>
  )
}

export default AticalSection
