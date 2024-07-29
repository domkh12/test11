import React from "react";

const FormContact = () => {
  return (
    
    <form className="font-sans sm:h-auto md:w-[50%] lg:pr-10 sm-max:w-[100%] flex flex-col justify-between py-20 gap-9 items-end">    
      <input type="text" className="boder border-t-0 border-l-0 border-r-0 focus:outline-0 focus:outline px-2 bg-transparent dark:text-gray-100 placeholder:text-gray-400 w-full" placeholder="Your name" />
      <input type="text" className="boder border-t-0 border-l-0 border-r-0 focus:outline-0 focus:outline px-2 bg-transparent dark:text-gray-100 placeholder:text-gray-400 w-full" placeholder="Email" />        
      <input type="text" className="boder border-t-0 border-l-0 border-r-0 focus:outline-0 focus:outline px-2 bg-transparent dark:text-gray-100 placeholder:text-gray-400 w-full" placeholder="Message" />              
      <button className="w-full bg-primary hover:bg-primary-hover px-16 rounded-md py-4 text-white font-sans">Send Message</button>
    </form> 
  );
};

export default FormContact;
