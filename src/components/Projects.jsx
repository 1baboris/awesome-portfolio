import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects(props) {
  const { isEnglish } = props;
  return (
    <section className=" flex flex-col gap-5 items-center pt-24" id="projects">
      <h1 className=" text-gray-400 text-center font-semibold text-4xl md:text-5xl xl:text-6xl">
        02{" "}
        <span className="text-violet-600 font-bold text-2xl md:text-3xl xl:text-4xl">
          {isEnglish ? "Projects" : "Projets"}
        </span>
      </h1>
      <h3 className="text-xl md:text-2xl xl:text-3xl dark:text-white">
        {isEnglish
          ? "Take a look at my projects"
          : "Jetez un œil à mes projets"}
      </h3>
      <div className="flex flex-col md:flex-row gap-10">
        <ProjectCard isEnglish={isEnglish} />
        <ProjectCard isEnglish={isEnglish} />
        <ProjectCard isEnglish={isEnglish} />
      </div>
    </section>
  );
}
