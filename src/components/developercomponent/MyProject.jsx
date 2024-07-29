import React from "react";
import CardProject from "./CardProject";

function MyProject({ projects }) {
  return (
    <section
      className="py-20 font-sans section flex flex-col justify-center items-center sm:gap-10 bg-white dark:bg-gray-900"
      name="project"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-lg dark:text-gray-100">
          Showcasing Some Of My Best Work
        </p>
        <h2 className="text-5xl font-bold">
          <span className="dark:text-gray-100">My</span>{" "}
          <span className="text-primary-developer-template">Project</span>
        </h2>
        <div className="w-32 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center sm-max:mt-10 gap-4 xl:px-20 w-[80%]">
        {projects.map((project, index) => (
          <CardProject
            key={index}
            img={project.project_image}
            title={project.title}
            desc={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default MyProject;
