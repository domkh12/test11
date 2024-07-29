import React from "react";
import { Link } from "react-scroll";

export default function AboutSection() {
  return (
    <section className="py-10 md:py-20" id="about">
      <div className="text-center">
        <p className="text-black dark:text-white text-lg md:text-xl">
          My Intro
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          About
          <span className="text-primary-developer-template ml-2 md:ml-5">
            Me
          </span>
        </h1>
        <div className="w-20 md:w-44 h-1 bg-primary mx-auto my-5"></div>
      </div>
      <div className="container mx-auto flex sm:flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 px-4 md:px-8 lg:px-16">
        <div className="p-5 max-w-full lg:w-1/2">
          <img
            src="src/assets/developerimage/aboutme.png"
            alt="about me"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="max-w-full lg:w-1/2">
          <p className="font-bold text-lg md:text-xl">PERSONAL INFO</p>
          <div className="mt-3 space-y-3">
            {[
              { label: "First Name:", value: "Elon" },
              { label: "Address:", value: "Phnom Penh" },
              { label: "Last Name:", value: "Musk" },
              { label: "Freelance:", value: "Available" },
              { label: "Birth Date:", value: "05-12-2021" },
              { label: "Language:", value: "Khmer, English" },
              { label: "Nationality:", value: "Khmer" },
              { label: "Experience:", value: "5 years" },
            ].map((info) => (
              <div key={info.label} className="flex flex-row gap-2">
                <p className="font-bold w-1/3">{info.label}</p>
                <p className="font-light w-2/3">{info.value}</p>
              </div>
            ))}
          </div>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
          >
            <button className="mt-5 bg-primary-developer-template hover:bg-primary-developer-template-hover focus:outline-none focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-full text-sm px-8 py-2.5 mx-auto lg:mx-0">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
