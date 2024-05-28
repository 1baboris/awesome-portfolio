import React from "react";

export default function ProjectCard(props) {
  const { isEnglish } = props;
  return (
    <div className="hover:shadow-xl hover:shadow-violet-300 dark:hover:shadow-violet-950 flex flex-col gap-5 w-64 duration-200 border-2 group border-solid border-violet-600 p-4 rounded-2xl group transition-all">
      <h3 className="text-3xl text-center font-semibold text-violet-600 transition-transform duration-400">
        Maison Sifa
      </h3>
      <img
        src="/src/assets/images/projects/ProjectImage.png"
        alt="ProjectImg"
        className="rounded-xl"
      />
      {isEnglish ? (
        <p className=" text-wrap text-md dark:text-white">
          This is the official website for a hotel located in Rwanda. The site
          showcases the hotel's amenities, accommodations, and services,
          providing a seamless and informative experience for potential guests.
        </p>
      ) : (
        <p className=" text-wrap text-md dark:text-white">
          Il s'agit du site web officiel d'un hôtel situé au Rwanda. Le site
          présente les équipements, les logements et les services de l'hôtel,
          offrant une expérience fluide et informative aux futurs clients.
        </p>
      )}
      <div className="flex justify-center gap-5">
        <a
          href=""
          className="bg-slate-200 px-2 py-1 rounded-lg hover:bg-violet-300 duration-150 dark:bg-slate-400"
        >
          Code <i className="fa-brands fa-github"></i>
        </a>
        <a
          href=""
          className="bg-slate-200 px-2 py-1 rounded-lg hover:bg-violet-300 duration-150 dark:bg-slate-400"
        >
          Live <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    </div>
  );
}
