import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col gap-5 items-center mt-20">
      <h1 className=" text-gray-400 text-center font-semibold text-4xl md:text-5xl xl:text-6xl">
        02{" "}
        <span className="text-violet-600 font-bold text-2xl md:text-3xl xl:text-4xl">
          Projects
        </span>
      </h1>
      <h3 className="text-xl md:text-2xl xl:text-3xl dark:text-white">
        Take a look at my projects
      </h3>
      <div className="flex flex-col md:flex-row gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
