import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
function CardTeam({ title, role, github, facebook, img }) {  
  return (
    <div className="font-sans">
      <div className="relative h-56 lg-max:mt-0 lg:mt-20">        
        <div
          className={`w-56 rounded-ss-[70px] overflow-hidden rounded-ee-[70px] h-56 bg-primary top-0 left-0`}
        ><img
        src={img}
        className="w-auto z-10 rounded-ss-[70px] h-72 object-cover rounded-ee-[70px]"
        alt="photo"
      /></div>        
        <div
          className={`w-56 border-primary rounded-ss-[70px] border-[3px] border-l-0 border-r-0 border-b-0 h-48 absolute -top-4 -left-3`}
        ></div>
        <IoTriangle className="absolute z-10 text-white top-[170px] left-5 w-5 h-5 rotate-45" />
        <div className="w-5 z-10 h-5 border-[3px] border-white absolute top-[200px] left-10 rounded-full"></div>
        <div className="w-6 z-10 h-[2px] bg-pink-600 absolute top-16 left-[190px] rotate-[110deg]"></div>
        <div className="w-6 z-10 h-[2px] bg-white absolute top-[65px] left-[200px] rotate-[120deg]"></div>
        <img
            src="homepageImg/img1.png"
            className=" top-[79px] absolute left-[210px] w-7 h-7"
            alt=""
          />
        <div className="w-48 rounded-ss-[70px] rounded-ee-[70px] overflow-hidden relative"></div>
      </div>
      {/* text */}
      <div className="flex flex-col gap-2 justify-start items-start mt-3">
        <p className="font-semibold text-lg dark:text-gray-100 ">{title}</p>
        <p className="text-gray-600 dark:text-gray-300">{role}</p>
        <div className="flex gap-5">
          <a href={github} target="_blank">
            <FaGithub className="hover:text-primary w-7 h-7 dark:text-gray-100" />
          </a>
          <a href={facebook} target="_blank">
            <FaFacebook className="hover:text-primary w-7 h-7 dark:text-gray-100" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTeam;
