import React from "react";

export default function Footer() {
  return (
    <footer className="gap-2 py-10 mt-16 bottom-0 flex flex-col items-center justify-center border-t-2 border-violet-600">
      <p className="text-sm md:text-md xl:text-lg text-gray-400">
        © Boris Ben Achour · 2024 💜
      </p>
      <div className="flex gap-5 text-lg md:text-xl xl:text-2xl text-gray-400">
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
    </footer>
  );
}
