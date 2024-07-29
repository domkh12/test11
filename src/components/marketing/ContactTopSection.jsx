import React from 'react'
import TopBackgroundImageComponent from './TopBackgroundImageComponent'
import ContactCardBoxs from './ContactCardBoxs'
import { GoMail } from "react-icons/go";
import { LiaHandshakeSolid } from "react-icons/lia";
import { Label, TextInput, Textarea } from "flowbite-react";
import PrimaryButton from './ButtonPrimary';
import FooterComponent from './FooterComponent';
import { motion } from 'framer-motion';

function ContactTopSection() {
  return (
    <div>
      <TopBackgroundImageComponent text="Contact" moreText=" Us"/>
      <div className='mt-32 flex flex-col gap-5'>
        <div className='bg-blue-800 w-16 h-16 rounded-[50%] flex justify-center items-center mx-auto'>
            <LiaHandshakeSolid className='text-3xl text-white'/>
            </div>
            <div className='mx-10 flex flex-col items-center md:mx-32'>
      <small className="text-md text-marketing-main-color"><span className="text-orange-300">// </span>
        01 . CONTACT US
      </small>
      <h2 className='text-2xl text-marketing-main-color text-center'>
      Let’s build something awesome together
        </h2>
    </div>
      </div>
      <div className='flex justify-center'>
      <div className='mt-16 flex flex-col gap-5 lg:flex-row md:flex-wrap sm:flex-wrap justify-center'>
      <motion.div
      initial={{x:-200, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:1, duration:1}}
      >
      <ContactCardBoxs
      title="Contact"
      type="Email"
      logo={<GoMail />}
      desc="nextlevel@marketing@gmail.com"
      /></motion.div>
      <motion.div
      initial={{y:-50, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:1, duration:1}}
      >
      <ContactCardBoxs
      title="Contact"
      type="Email"
      logo={<GoMail />}
      desc="nextlevel@marketing@gmail.com"
      /></motion.div>
      <motion.div
      initial={{x:200, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:1, duration:1}}
      >
      <ContactCardBoxs
      title="Contact"
      type="Email"
      logo={<GoMail />}
      desc="nextlevel@marketing@gmail.com"
      /></motion.div>
      </div>
      </div>
      <div className='mt-32'>
        <motion.form action="#"
        initial={{y:-50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{delay:1, duration:1}}
        >
            <motion.div className='flex flex-col mx-auto gap-10  p-10 rounded-xl w-[80%]'
            initial={{ backgroundImage: 'linear-gradient(to right, #E9F7FF, #FFDBD4, #FFF3CA)' }}
            animate={{
              backgroundImage: [
                'linear-gradient(to right, #E9F7FF, #FFDBD4, #FFF3CA)',
                'linear-gradient(to right, #FFDBD4, #FFF3CA, #E9F7FF)',
                'linear-gradient(to right, #FFF3CA, #E9F7FF, #FFDBD4)',
                'linear-gradient(to right, #E9F7FF, #FFDBD4, #FFF3CA)' // loop back to initial color
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            >
            <div className='flex md:flex-row gap-5 flex-col'>
            <div className='flex flex-col gap-10 md:w-[50%] w-full'>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Full Name" />
        </div>
        <TextInput id="name" type="text" placeholder="Jonh Devid" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="phone" />
        </div>
        <TextInput id="phone" type="number" placeholder="Yourphone Name Here" required />
      </div>
      </div>
      <div className='md:w-[50%] w-full flex flex-col gap-10'>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="Example@youremail.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="subject" value="Your Subject" />
        </div>
        <TextInput id="subject" type="text" placeholder="How We Can Help" required />
      </div>
      </div>
      </div>
      <div>
      <div className="max-w-full">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
      </div>
      <div className='flex justify-center'>
        <button  type="submit">
        <PrimaryButton text="Submit"/>
        </button>
      </div>
      </motion.div>
        </motion.form>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default ContactTopSection
