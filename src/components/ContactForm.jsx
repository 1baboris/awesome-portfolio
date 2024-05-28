import React from "react";

export default function ContactForm(props) {
  const { isEnglish } = props;
  return (
    <section
      className="flex flex-col gap-5 items-center mx-8 mt-20"
      id="getInTouch"
    >
      <h1 className=" text-gray-400 text-center font-semibold text-4xl md:text-5xl xl:text-6xl">
        03{" "}
        <span className="text-violet-600 font-bold text-2xl md:text-3xl xl:text-4xl ">
          {isEnglish ? "Get in touch" : "Contactez-moi"}
        </span>
      </h1>
      <h3 className="text-xl md:text-2xl xl:text-3xl dark:text-white">
        {isEnglish ? "Send me a message" : "Envoyez-moi un message."}
      </h3>
      <form
        action=""
        className="mx-8 border-2 flex flex-col max-w-2xl gap-5 w-full border-solid border-violet-600 p-4 rounded-2xl"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-meduim dark:text-white">
            {isEnglish ? "Your Name" : "Votre Nom"}
          </label>
          <input
            id="name"
            type="text"
            className="inline rounded-lg focus:outline focus:outline-2 focus:outline-violet-400 text-sm px-2 py-1 dark:bg-slate-900 dark:text-white"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-meduim dark:text-white">
            {isEnglish ? "Your e-mail" : "Votre e-mail"}
          </label>
          <input
            id="email"
            type="email"
            className="inline rounded-lg focus:outline focus:outline-2 focus:outline-violet-400 text-sm px-2 py-1 dark:bg-slate-900 dark:text-white"
            placeholder="johndoe@mail.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="massage" className="font-meduim dark:text-white">
            {isEnglish ? "Your message" : "Votre message"}
          </label>
          <textarea
            name="massage"
            id="massage"
            className="h-44 rounded-lg focus:outline focus:outline-2 focus:outline-violet-400 text-sm px-2 py-1 dark:bg-slate-900 dark:text-white"
            placeholder={
              isEnglish
                ? "Hello, I'm John Doe. I'm looking for a website developer."
                : "Bonjour, je m'appelle John Doe. Je suis à la recherche d'un développeur de site web."
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-violet-600 py-2 round rounded-lg text-white font-meduim hover:bg-violet-400 duration-150 text-md md:text-lg xl:text-xl"
        >
          {isEnglish ? "Send" : "Envoyer"}{" "}
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </section>
  );
}
