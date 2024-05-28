import React from "react";

export default function AboutMe() {
  return (
    <section className="flex flex-col gap-5 items-center">
      <h1 className=" text-gray-400 text-center font-semibold text-4xl md:text-5xl xl:text-6xl">
        01{" "}
        <span className="text-violet-600 font-bold text-2xl md:text-3xl xl:text-4xl">
          About Me
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center text-justify max-w-4xl">
        <p className="text-md md:text-lg xl:text-xl dark:text-white">
          I'm{" "}
          <span className="text-violet-600 font-medium">Boris Ben Achour</span>,
          a 23-year-old{" "}
          <span className="text-violet-600 font-medium">self-taught</span>{" "}
          developer based in Switzerland. I discovered web programming in the
          summer of 2023, and since then,{" "}
          <span className="text-violet-600 font-medium">
            I haven't been able to stop coding
          </span>{" "}
          cool websites. As a self-taught developer, I have developed a{" "}
          <span className="text-violet-600 font-medium">strong passion </span>
          for coding and a drive to continuously improve my skills. I specialize
          in frontend development using{" "}
          <span className="text-violet-600 font-medium">React</span> and{" "}
          <span className="text-violet-600 font-medium">Tailwind CSS</span>, and
          I'm currently expanding my expertise by learning{" "}
          <span className="text-violet-600 font-medium">Next.js</span>. I enjoy
          turning ideas into reality and am always excited to take on new
          challenges and projects. My journey as a self-taught developer has
          equipped me with the ability to{" "}
          <span className="text-violet-600 font-medium">learn quickly</span>,
          adapt to new technologies, and solve complex problems independently.
        </p>
      </div>

      <div className="flex gap-5 text-xl md:text-2xl xl:text-3xl text-gray-400">
        <a
          href="https://github.com/1baboris"
          target="_blank"
          className="hover:text-violet-600 duration-150"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/boris-ben-achour-69405a285/"
          target="_blank"
          className="hover:text-violet-600 duration-150"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:boris.benachour@gmail.com"
          className="hover:text-violet-600 duration-150"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <button className="bg-violet-600 px-3 py-2 rounded-lg text-white font-semibold hover:bg-violet-400 duration-150 text-md md:text-lg xl:text-xl">
        download my cv<i className="fa-solid fa-download"></i>
      </button>
    </section>
  );
}
