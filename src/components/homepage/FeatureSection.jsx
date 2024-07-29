import React, { useEffect, useRef } from "react";
import CardFeature from "./CardFeature";
import { FiGlobe } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { FaSearchengin } from "react-icons/fa6";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

function FeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: false }); // Adjusted threshold to 0.3
  const controls = useAnimation();

  const cardVariants = {
    initial: { y: "30%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial"); // Reset animation when out of view
    }
  }, [isInView, controls]);

  return (
    <section
      className="xl:py-20 sm:py-10 sm-max:py-10 font-sans section dark:bg-gray-900 sm:px-10 lg:px-40"
      name="features"
    >
      <div className="flex flex-col justify-center items-center gap-6 sm-max:px-5">
        <h2 className="sm:text-2xl sm-max:text-2xl xl:text-4xl text-primary font-semibold">
          Why Choose Showcase?
        </h2>
        <p className="sm:text-[16px] sm-max:text-[16px] sm-max:text-center xl:text-lg dark:text-gray-100">
          Showcase.com has everything you need. Whatever you want to do, we have
          a feature for it.
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        ref={ref}
        animate={controls}
        className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 sm-max:mx-5 gap-4 mt-10"
      >
        <CardFeature
          title="Public Domain Name"
          desc="Claim your unique public domain name to make your portfolio easily accessible to everyone online."
          icon={<FiGlobe className="w-[100%] h-[100%] text-primary" />}
        />
        <CardFeature
          title="Free Templates"
          desc="Choose from a variety of professionally designed templates available for free, tailored to various professions."
          icon={<GrTemplate className="w-[100%] h-[100%] text-primary" />}
        />
        <CardFeature
          title="Responsive Templates"
          desc="All our templates are fully responsive, ensuring your portfolio looks great on any device."
          icon={<FaMobileAlt className="w-[100%] h-[100%] text-primary" />}
        />
        <CardFeature
          title="Easy Customization"
          desc="Easily customize your portfolio with our intuitive tools. Update text, images, and social media links to make it uniquely yours"
          icon={<LuPencilLine className="w-[100%] h-[100%] text-primary" />}
        />
        <CardFeature
          title="SEO-Friendly"
          desc="Every template is optimized for search engines out of the box, helping you attract more visitors without any extra effort."
          icon={<FaSearchengin className="w-[100%] h-[100%] text-primary" />}
        />
        <CardFeature
          title="Secure and Reliable"
          desc="Your data is secure with us. We ensure top-notch security and reliability, so you can focus on creating without worries."
          icon={
            <HiOutlineShieldCheck className="w-[100%] h-[100%] text-primary" />
          }
        />
      </motion.div>
    </section>
  );
}

export default FeatureSection;
