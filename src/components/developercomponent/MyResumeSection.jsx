import React from "react";
import CartResume from "./CartResume";

function MyResumeSection({ workExperiences }) {
  return (
    <section
      className="py-10 xl:py-20 font-sans section flex flex-col gap-10 bg-[#F7F7F7] dark:bg-gray-800"
      name="about"
    >
      <div className="flex flex-col justify-center items-center gap-6 text-center">
        <p className="text-lg dark:text-gray-100">Check Out My Resume</p>
        <h2 className="text-4xl sm:text-5xl font-bold">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Resume</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-20 px-4 lg:px-20">
        {/* Experience */}
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold dark:text-gray-100 text-center">
            Experience
          </h2>
          {workExperiences.map((exp) => (
            <CartResume
              key={exp.id} // Important for performance optimization
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyResumeSection;
