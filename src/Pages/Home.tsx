import { useEffect, useState } from "react";
import WithHeader from "../Layout/WithHeader";
import TypingEffect from "../Hooks/TypingEffect";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const listenScrollEvent = () => {
    const sections = ["home", "about", "project", "contact"];
    let currentSection = "home";

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (
        section &&
        window.scrollY >= section.offsetTop - section.offsetHeight / 3
      ) {
        currentSection = sectionId;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <WithHeader activeSection={activeSection}>
      <div className="mb-10">
        {/* Hero */}
        <section
          className="flex flex-col justify-between h-[calc(100vh-66px)] py-10"
          id="hero"
        >
          <div className="m-10 mt-36 text-7xl font-bold text-center">
            I Build This Website For {""}
            <div className="text-cyan-500 dark:text-cyan-300 text-shadow">
              <TypingEffect />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-3xl">
                Selamat Datang! I'm Fahmi{" "}
                <span role="img" className="wave had">
                  👋
                </span>
              </h1>
              <div className="text-gray-600 dark:text-gray-400 mt-5 text-lg">I am a front-end engineer, aspired to be full stack, and a little bit of expertise in machine learning.</div>
            </div>
            <div className="flex flex-col items-center self-center mt-36 transition-all ease-in-out hover:translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <rect width="14" height="20" x="5" y="2" rx="7" />
                  <path d="M12 12v4" className="animate-bounce" />
                </g>
              </svg>
              {/* <span className="mt-3">Scroll Down!</span> */}
            </div>
          </div>
        </section>
        {/* About */}
        <section className="flex flex-col gap-3 items-center py-20" id="about">
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="flex flex-row gap-5 items-center py-3">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIycenjX_jq-D8iYOBnK924-Vks9t6MFh219pjg7ZG9_h_XXtIZ3g=s288-c-no"
              alt="Fahmi"
              className="w-40 h-40 rounded-full mx-10 my-5"
            />
            <p>
              Hi there! I'm Fahmi, a Front-End Developer based in Indonesia. I
              have a passion for web development and love to create websites
              that are accessible, responsive, and performant. I have experience
              working with modern web technologies such as React, TypeScript,
              and Tailwind CSS. I am always eager to learn new things and
              improve my skills. Feel free to check out my projects and get in
              touch with me if you have any questions or would like to
              collaborate.
            </p>
          </div>
        </section>
        {/* Project */}
        <section className="h-screen" id="project"></section>
        {/* Contact */}
        <section className="h-screen" id="contact"></section>
      </div>
    </WithHeader>
  );
};

export default Home;
