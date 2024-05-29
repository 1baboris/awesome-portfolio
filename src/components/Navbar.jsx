import React, { useState, useEffect } from "react";

export default function Navbar(props) {
  const { isEnglish, setIsEnglish } = props;
  const [isDarkMode, setIsDarkMode] = useState("false");

  const element = document.documentElement;

  function toggleTheme() {
    !isDarkMode
      ? element.classList.remove("dark")
      : element.classList.add("dark");
    setIsDarkMode(!isDarkMode);
  }

  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  function toggleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  function toggleLanguage() {
    showLanguage ? setShowLanguage(false) : setShowLanguage(true);
  }

  return (
    <>
      <nav className="z-10 fixed flex justify-between items-center w-full h-16 border-b-2 border-b-violet-600 p-8 bg-gray-100 dark:bg-slate-950">
        <div className="flex items-center gap-5">
          <button
            onClick={toggleMenu}
            className="md:hidden dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <a
            href="#aboutMe"
            className="max-md:hidden dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
          >
            {isEnglish ? "About Me" : "A propos de moi"}
          </a>
          <a
            href="#projects"
            className="max-md:hidden dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
          >
            {isEnglish ? "Project" : "Projets"}
          </a>
          <div className="flex">
            <div></div>
            <button
              onClick={toggleLanguage}
              className=" dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
            >
              <i className="fa-solid fa-earth-europe"></i>
            </button>
            <div>
              <button
                onClick={toggleTheme}
                className="group dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
              >
                {isDarkMode ? (
                  <i className="fa-solid fa-sun"></i>
                ) : (
                  <i className="fa-solid fa-moon"></i>
                )}
              </button>
            </div>
          </div>
        </div>
        <a
          href="#getInTouch"
          className="bg-violet-600 px-3 py-2 rounded-lg text-white font-bold hover:bg-violet-400 duration-150 text-md "
        >
          {isEnglish ? "Get in touch" : "Contactez-moi"}
        </a>
      </nav>
      {showMenu ? (
        <div className="z-20 fixed w-full h-full bg" onClick={toggleMenu}>
          <div className="flex flex-col fixed top-20 left-5 border-2 border-violet-600 rounded-lg bg-slate-100 dark:bg-slate-950">
            <button
              onClick={() => {
                window.location.href = "#aboutMe";
                toggleMenu();
              }}
              className="dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
            >
              {isEnglish ? "About Me" : "A propos de moi"}
            </button>
            <button
              onClick={() => {
                window.location.href = "#projects";
                toggleMenu();
              }}
              className=" dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
            >
              {isEnglish ? "Project" : "Projets"}
            </button>
          </div>
        </div>
      ) : (
        " "
      )}
      {showLanguage ? (
        <div className="z-20 fixed w-full h-full bg" onClick={toggleLanguage}>
          <div className="flex flex-col  fixed top-20 left-5 border-2 border-violet-600 rounded-lg w-32 bg-slate-100 dark:bg-slate-950">
            <button
              onClick={() => {
                setIsEnglish(true);
              }}
              className="dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
            >
              En
            </button>
            <button
              onClick={() => {
                setIsEnglish(false);
              }}
              className=" dark:text-white px-2 py-1 rounded-lg hover:bg-violet-100/80"
            >
              Fr
            </button>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
