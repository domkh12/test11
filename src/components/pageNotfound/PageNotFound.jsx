import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PageNotFoundComponent = () => {
  return (
    <main className='flex justify-center items-center h-screen'>
      <div className="flex flex-col justify-center items-center">
        <motion.img 
          src="/img-pagenotfound/imgnotfound.png" 
          className='w-1/2 h-1/2' 
          alt="Page Not Found" 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className='flex flex-row justify-center items-center gap-2 mt-4'>
          <motion.a
            href="/"
            className='flex items-center bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition-colors'
            whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.5 } }}
          >
            <FaArrowLeft className='mr-2' />
            Back to Home!
          </motion.a>                           
        </div>
      </div>
    </main>
  );
}

export default PageNotFoundComponent;
