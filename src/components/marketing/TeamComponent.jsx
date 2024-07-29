import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function TeamComponent({ image, names, fb, tw, ig }) {
  return (
    <div className='border-2 border-gray-300 rounded-xl w-[270px] max-w-[270px] flex flex-col items-center hover:bg-gradient-to-r from-linearx via-lineary to-linearz transition-colors'>
      <div className='p-4 flex flex-col gap-6 w-full'>
        <div className='flex flex-row justify-center'>
          <img src={image} alt="image" className='w-[150px] h-40 object-cover rounded-t-xl' />
        </div>
        <hr className='border-[2px] border-blue-500 w-[80px] rounded-md mx-auto' />
        <p className='text-center text-white text-base font-semibold'>
          {names}
        </p>
        <div className='flex flex-row gap-2 justify-center text-white'>
          <a href={fb} className='hover:text-blue-600'><FaFacebook /></a>
          <a href={tw} className='hover:text-blue-400'><FaSquareXTwitter /></a>
          <a href={ig} className='hover:text-pink-500'><RiInstagramFill /></a>
        </div>
      </div>
    </div>
  );
}

export default TeamComponent;