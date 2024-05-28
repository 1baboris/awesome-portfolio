import React from "react";

export default function Navbar() {
  return (
    <nav className="z-10 top-0 h-16 flex justify-around items-center border-b-2 border-violet-600 bg-gray-100 dark:bg-slate-950">
      <button className="dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80">
        <i className="fa-solid fa-bars"></i>
      </button>
      <h1 className="font-medium dark:text-white">Boris Ben Achour</h1>
      <a
        href="#getInTouch"
        className="bg-violet-600 px-3 py-2 rounded-lg text-white font-meduim hover:bg-violet-400 duration-150 text-md md:text-lg xl:text-xl"
      >
        Get in touch
      </a>
    </nav>
  );
}
