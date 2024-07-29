import {NavbarComponent} from '../../components/marketing/NavbarComponent';
import FooterComponent from '../../components/marketing/FooterComponent';
import React from 'react'
import { TopSection } from '../../components/marketing/TopSection'
import ServiceSection from '../../components/marketing/ServiceSection'
import AticalSection from '../../components/marketing/AticalSection'
import TestimonialSection from '../../components/marketing/TestimonialSection'
import { motion } from 'framer-motion';


const MarketingTemplate = () => {
  return (
    <div>
       <motion.div 
       className='xl:mx-60 lg:mx-32 md:mx-0'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:1, duration:1}}
       >
       <NavbarComponent/>
       </motion.div>
       <div>
       <TopSection/>
       </div>
       <br />
       <div className='w-full bg-marketing-main-color py-32 mt-32'>
         <ServiceSection/>
       </div>
       <div>
         <AticalSection/>
       </div>
       <div>
       <TestimonialSection/>
       </div>
       <div>
        <FooterComponent/>
       </div>
      </div>
  );
};
export default MarketingTemplate;

