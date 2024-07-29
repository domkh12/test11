import React from 'react';
import { FaLink } from "react-icons/fa6";

function CardProject({img, title, desc, link}) {
  return (
    <a href='#' target='_blank' className='relative w-[350px] h-[350px] rounded-lg overflow-hidden group'>
        <div className='w-[350px] h-[350px] bg-gray-900 bg-opacity-0 group-hover:bg-opacity-50 absolute z-10 flex flex-col justify-center items-center'>
        <FaLink className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl'/>
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg'>{title}</p>
            <p className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center mt-2'>
                {desc}
            </p>
        </div>
        <img src={img} className='object-cover h-full w-full' alt="photo" />
    </a>
  );
}

export default CardProject;
