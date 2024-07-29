import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TeamCoponent from './TeamComponent';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    768: { items: 3},
    1124: { items: 4 },
};

const items = [
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611719.jpg?ga=GA1.1.2056033420.1720530640&semt=ais_user
        "
        names="Hen Dic"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        https://img.freepik.com/free-vector/smiling-guy-illustration_25030-68339.jpg?ga=GA1.1.2056033420.1720530640&semt=ais_user
        "
        names="Srey Kmeng"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        https://img.freepik.com/free-psd/3d-rendering-hotel-icon_23-2150102382.jpg?ga=GA1.1.2056033420.1720530640&semt=ais_user
        "
        names="Mario"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg?ga=GA1.1.2056033420.1720530640&semt=ais_user
        "
        names="Khuon Chhoeurn"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833574.jpg?ga=GA1.1.2056033420.1720530640&semt=ais_user
        "
        names="cshjsbjf"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        https://img.freepik.com/free-psd/3d-rendering-passport-travel-icon_23-2149389118.jpg?ga=GA1.1.2056033420.1720530640&semt=ais_user
        "
        names="sffsfs"
        />
    </div>,
];

const AboutCarousel = () => (
    <div className='bg-marketing-main-color'>
        <br />
        <div>
        <motion.div className='flex flex-col items-center sm:mx-32 lg:mx-60 sm:items-start mt-32'
        initial={{y: -50, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:1}}
        >
      <small className="text-md text-white">
        <span className="text-yellow-300">//</span>
            OUR TEAM
        </small>
        <div className='sm:w-[400px]'>
        <h2 className='text-3xl text-white text-center sm:text-start'>
        Our team of expert marketers
        </h2>
        </div>
        </motion.div>
        </div>
    <motion.div className='mx-auto my-16 lg:w-[1150px] md:w-[850px] sm:w-[640px] w-[270px]'
    initial={{y:-100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1}}
    >
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        renderPrevButton={() => (
            <button className="absolute top-1/2 -left-7 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 text-marketing-main-color p-5 rounded-[50%]">
              <FaChevronLeft />
            </button>
          )}
          renderNextButton={() => (
            <button className="absolute top-1/2 -right-7 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 text-marketing-main-color p-5 rounded-[50%]">
              <FaChevronRight />
            </button>
          )}
    />
    </motion.div>
    <br />
    </div>
);
export default AboutCarousel