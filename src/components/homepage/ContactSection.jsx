import React, { useEffect, useRef } from "react";
import CardInfo from "./CardInfo";
import FormContact from "./FormContact";
import { motion, useAnimation, useInView } from "framer-motion";

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: false });
  const controls = useAnimation();

  const cardVariants = {
    initial: { y: "30%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
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
      className="dark:bg-gray-900 py-10 lg:px-20 sm:px-10 sm-max:px-5 flex flex-col justify-center items-center font-sans section"
      name="contact"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl text-primary font-semibold">Contact Us</h2>
        <p className="text-lg dark:text-gray-100">
          Any question or remarks? Just write us a message!
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <motion.div
        variants={cardVariants}
        initial="initial"
        ref={ref}
        animate={controls}
        className="flex sm-max:flex-col-reverse md:flex-row sm:flex-col-reverse mt-10 p-5 rounded-md sm-max:w-[100%] sm:w-full lg:w-auto gap-10 border border-gray-300"
      >
        {/* card info */}
        <CardInfo />
        {/* form send message */}
        <FormContact />
      </motion.div>
    </section>
  );
}

export default ContactSection;
