import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function OfficeComponent({image, title, desc, phone, email}) {
  return (
    <div className='bg-white w-72 shadow rounded-xl p-5 flex flex-col w-[300px] hover:bg-gradient-to-r from-linearx via-lineary to-linearz'>
      <div>
        <img src={image}
        alt="image" 
        className='w-16 h-10'  
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-md'>
            {title}
            </h2>
        <address className='text-sm'>
            {desc}
            </address>
        <div className='flex flex-row gap-1'>
        <FaPhoneAlt />
        <p className='text-sm'>
            {phone}
        </p>
        </div>
        <div className='flex flex-row gap-1'>
        <AiOutlineMail/>
        <p className='text-sm'>
            {email}
        </p>
        </div>
      </div>
    </div>
  )
}

export default OfficeComponent
