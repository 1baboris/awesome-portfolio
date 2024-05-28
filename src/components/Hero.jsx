import React from "react";

export default function Hero() {
  return (
    <section className=" h-screen flex flex-col gap-10 items-center justify-center">
      <div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold dark:text-white">
          Hello 👋
        </h1>
        <h2 className="text-3xl md:text-4xl xl:text-5xl dark:text-white">
          I'm{" "}
          <span className="text-violet-600 font-semibold">
            Boris Ben Achour
          </span>
        </h2>
        <h3 className="text-2xl md:text-3xl xl:text-4xl dark:text-white">
          <span className="text-violet-600 font-semibold">Front end</span>{" "}
          Developer
        </h3>
        <p className="text-sm md:text-md xl:text-lg text-gray-400">
          My favorite tech includes React, Next Js & tailwind css
        </p>
      </div>
      <a
        href="#getInTouch"
        className="bg-violet-600 px-3 py-2 rounded-lg text-white font-semibold hover:bg-violet-400 duration-150 text-md md:text-lg xl:text-xl"
      >
        Get in touch
      </a>
      <div className="absolute bottom-14 animate-pulse text-violet-900 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
}
