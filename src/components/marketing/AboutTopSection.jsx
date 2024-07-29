import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import TopBackgroundImageComponent from './TopBackgroundImageComponent';
import { NormalButton, ImageButton } from './ButtonPrimary';

const BgNone = "text-marketing-main-color bg-transparent border-marketing-main-color hover:bg-button-hover hover:text-white hover:border-button-hover";

function AboutTopSection() {
  const count = useMotionValue(0);
  const count_1 = useMotionValue(0);
  const count_2 = useMotionValue(0);
  const count_3 = useMotionValue(0);

  const rounded = useTransform(count, Math.round);
  const rounded_1 = useTransform(count_1, Math.round);
  const rounded_2 = useTransform(count_2, Math.round);
  const rounded_3 = useTransform(count_3, Math.round);

  const [roundedValue, setRoundedValue] = useState(0);
  const [roundedValue1, setRoundedValue1] = useState(0);
  const [roundedValue2, setRoundedValue2] = useState(0);
  const [roundedValue3, setRoundedValue3] = useState(0);

  useEffect(() => {
    const animation = animate(count, 335, { duration: 3 });

    return () => {
      animation.stop(); // Ensure the animation is stopped correctly
    };
  }, [count]);

  useEffect(() => {
    const animation = animate(count_1, 975, { duration: 5 });

    return () => {
      animation.stop(); // Ensure the animation is stopped correctly
    };
  }, [count_1]);

  useEffect(() => {
    const animation = animate(count_2, 500, { duration: 5 });

    return () => {
      animation.stop(); // Ensure the animation is stopped correctly
    };
  }, [count_2]);

  useEffect(() => {
    const animation = animate(count_3, 80, { duration: 5 });

    return () => {
      animation.stop(); // Ensure the animation is stopped correctly
    };
  }, [count_3]);

  useEffect(() => {
    const unsubscribe = rounded.onChange(setRoundedValue);
    return () => unsubscribe(); // Cleanup subscription
  }, [rounded]);

  useEffect(() => {
    const unsubscribe = rounded_1.onChange(setRoundedValue1);
    return () => unsubscribe(); // Cleanup subscription
  }, [rounded_1]);

  useEffect(() => {
    const unsubscribe = rounded_2.onChange(setRoundedValue2);
    return () => unsubscribe(); // Cleanup subscription
  }, [rounded_2]);

  useEffect(() => {
    const unsubscribe = rounded_3.onChange(setRoundedValue3);
    return () => unsubscribe(); // Cleanup subscription
  }, [rounded_3]);

  return (
    <div>
      <div>
        <TopBackgroundImageComponent text="About" moreText=" Us"/>
      </div>
      <div className='bg-marketing-main-color'>
        <div className='flex flex-col justify-center text-white items-center xl:flex-row lg:flex-row md:flex-row md:flex-wrap sm:flex-wrap'>
          <div className='flex flex-row gap-3 p-16'>
            <section className='flex flex-row'>
              <motion.h2 className='text-4xl'>{roundedValue}</motion.h2>
              <span className='text-blue-500 text-3xl'>+</span>
            </section>
            <section className='text-sm'>
              <p>CLIENTS</p>
              <p>WORLDWIDE</p>
            </section>
          </div>
          <div className='flex flex-row gap-3 p-16'>
            <section className='flex flex-row'>
              <motion.h2 className='text-4xl'>{roundedValue1}</motion.h2>
              <span className='text-red-500 text-3xl'>+</span>
            </section>
            <section className='text-sm'>
              <p>PROJECTS</p>
              <p>COMPLETED</p>
            </section>
          </div>
          <div className='flex flex-row gap-3 p-16'>
            <section className='flex flex-row'>
              <motion.h2 className='text-4xl'>{roundedValue2}</motion.h2>
              <span className='text-yellow-500 text-3xl'>+</span>
            </section>
            <section className='text-sm'>
              <p>TEAMS</p>
              <p>MEMBERS</p>
            </section>
          </div>
          <div className='flex flex-row gap-3 p-16'>
            <section className='flex flex-row'>
              <motion.h2 className='text-4xl'>{roundedValue3}m</motion.h2>
              <span className='text-green-500 text-3xl'>+</span>
            </section>
            <section className='text-sm'>
              <p>REVENUE</p>
              <p>GENERATED</p>
            </section>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center mt-32 items-center xl:flex-row lg:flex-row md:flex-row'>
        <div>
          <motion.img 
            src="./public/marketing/company.png"
            alt="company image" 
            className='w-[400px] h-[400px]'
            initial={{x: -300, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
          />
        </div>
        <motion.div 
          className='flex flex-col gap-5'
          initial={{x: 300, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 1}}
        >
          <small className="text-md text-center sm:text-start">
            <span className="text-yellow-300">//</span>
            AGENCY
          </small>
          <div className='sm:w-[400px] text-center mx-16 sm:text-start sm:mx-0'>
            <h2 className='text-3xl'>
              The #1 digital marketing services company
            </h2>
          </div>
          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/>
          <div className='flex flex-row gap-5 mx-5 sm:mx-0'>
            <ImageButton image="./public/marketing/buttonImage.png" text="Development Scale"/>
            <ImageButton image="./public/marketing/buttonImage.png" text="Development Scale"/>
          </div>
          <div className='sm:w-[500px] w-[400px] mx-auto text-center sm:text-start'>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla aliquam aliquam vestibulum libero morbi blandit cursus risus. Laoreet non curabitur gravida arcu ac tortor semper viverra nam libero justo laoreet mollis aliquam ut porttitor leo a diam.
            </small>
          </div>
          <div className='flex sm:flex-start sm:justify-start flex-row justify-center mb-32'>
            <NormalButton buttonType={BgNone} text='Get In Touch'/>
          </div>
        </motion.div>
      </div>
      <br />
    </div>
  );
}

export default AboutTopSection;
