import React from "react";

export default function AboutMe(props) {
  const { isEnglish } = props;

  return (
    <section className="flex flex-col gap-5 items-center mx-8" id="aboutMe">
      <h1 className=" text-gray-400 text-center font-semibold text-4xl md:text-5xl xl:text-6xl">
        01{" "}
        <span className="text-violet-600 font-bold text-2xl md:text-3xl xl:text-4xl">
          {isEnglish ? "About Me" : "Contactez-moi"}
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center text-justify max-w-4xl">
        {isEnglish ? (
          <p className="text-md md:text-lg xl:text-xl dark:text-white">
            I'm{" "}
            <span className="text-violet-600 font-medium">
              Boris Ben Achour
            </span>
            , a 23-year-old{" "}
            <span className="text-violet-600 font-medium">self-taught</span>{" "}
            developer based in Switzerland. I discovered web programming in the
            summer of 2023, and since then,{" "}
            <span className="text-violet-600 font-medium">
              I haven't been able to stop coding
            </span>{" "}
            cool websites. As a self-taught developer, I have developed a{" "}
            <span className="text-violet-600 font-medium">strong passion </span>
            for coding and a drive to continuously improve my skills. I
            specialize in frontend development using{" "}
            <span className="text-violet-600 font-medium">React</span> and{" "}
            <span className="text-violet-600 font-medium">Tailwind CSS</span>,
            and I'm currently expanding my expertise by learning{" "}
            <span className="text-violet-600 font-medium">Next.js</span>. I
            enjoy turning ideas into reality and am always excited to take on
            new challenges and projects. My journey as a self-taught developer
            has equipped me with the ability to{" "}
            <span className="text-violet-600 font-medium">learn quickly</span>,
            adapt to new technologies, and solve complex problems independently.
          </p>
        ) : (
          <p className="text-md md:text-lg xl:text-xl dark:text-white">
            Je suis{" "}
            <span className="text-violet-600 font-medium">
              Boris Ben Achour
            </span>
            , un développeur{" "}
            <span className="text-violet-600 font-medium">autodidacte</span> de
            23 ans basé en Suisse. J'ai découvert la programmation web à l'été
            2023 et depuis,{" "}
            <span className="text-violet-600 font-medium">
              je n'ai pas pu m'arrêter de coder
            </span>{" "}
            des sites web géniaux. En tant que développeur autodidacte, j'ai
            développé une{" "}
            <span className="text-violet-600 font-medium">forte passion</span>{" "}
            pour le codage et un désir constant d'améliorer mes compétences. Je
            me spécialise dans le développement frontend en utilisant{" "}
            <span className="text-violet-600 font-medium">React</span> et{" "}
            <span className="text-violet-600 font-medium">Tailwind CSS</span>,
            et je suis actuellement en train d'élargir mon expertise en
            apprenant{" "}
            <span className="text-violet-600 font-medium">Next.js</span>. J'aime
            transformer des idées en réalité et je suis toujours enthousiaste à
            l'idée de relever de nouveaux défis et de travailler sur de nouveaux
            projets. Mon parcours en tant que développeur autodidacte m'a permis
            d'acquérir la capacité d'apprendre rapidement, de m'adapter aux
            nouvelles technologies et de résoudre des problèmes complexes de
            manière indépendante.
          </p>
        )}
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
        {isEnglish ? "download my cv " : "Télécharger mon cv "}
        <i className="fa-solid fa-download"></i>
      </button>
    </section>
  );
}
