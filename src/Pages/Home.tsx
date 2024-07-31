import React, { useEffect, useState } from "react";
import WithHeader from "../Layout/WithHeader";
import TypingEffect from "../Hooks/TypingEffect";
import Carousel from "../Components/Carousel";
import ContactCard from "../Components/ContactCard";

interface ProjectCardProps {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [searchResult, setSearchResult] = useState<{
    avatar_url: string;
  } | null>(null);
  const contacts = [
    {
      url: "mailto:fahmi.zulkarnainhabib5@gmail.com",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9"
          />
        </svg>
      ),
    },
    {
      url: "https://www.instagram.com/__fahzh/",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.91 12.909c.326-.327.582-.72.749-1.151c.16-.414.27-.886.302-1.578c.032-.693.04-.915.04-2.68c0-1.765-.008-1.987-.04-2.68c-.032-.692-.142-1.164-.302-1.578a3.185 3.185 0 0 0-.75-1.151a3.187 3.187 0 0 0-1.151-.75c-.414-.16-.886-.27-1.578-.302C9.487 1.007 9.265 1 7.5 1c-1.765 0-1.987.007-2.68.04c-.692.03-1.164.14-1.578.301a3.2 3.2 0 0 0-1.151.75a3.2 3.2 0 0 0-.75 1.151c-.16.414-.27.886-.302 1.578C1.007 5.513 1 5.735 1 7.5c0 1.765.007 1.987.04 2.68c.03.692.14 1.164.301 1.578c.164.434.42.826.75 1.151c.325.33.718.586 1.151.75c.414.16.886.27 1.578.302c.693.031.915.039 2.68.039c1.765 0 1.987-.008 2.68-.04c.692-.03 1.164-.14 1.578-.301a3.323 3.323 0 0 0 1.151-.75ZM2 6.735v1.53c-.002.821-.002 1.034.02 1.5c.026.586.058 1.016.156 1.34c.094.312.199.63.543 1.012c.344.383.675.556 1.097.684c.423.127.954.154 1.415.175c.522.024.73.024 1.826.024H8.24c.842.001 1.054.002 1.526-.02c.585-.027 1.015-.059 1.34-.156c.311-.094.629-.2 1.011-.543c.383-.344.556-.676.684-1.098c.127-.422.155-.953.176-1.414C13 9.247 13 9.04 13 7.947v-.89c0-1.096 0-1.303-.023-1.826c-.021-.461-.049-.992-.176-1.414c-.127-.423-.3-.754-.684-1.098c-.383-.344-.7-.449-1.011-.543c-.325-.097-.755-.13-1.34-.156A27.29 27.29 0 0 0 8.24 2H7.057c-1.096 0-1.304 0-1.826.023c-.461.021-.992.049-1.415.176c-.422.128-.753.301-1.097.684c-.344.383-.45.7-.543 1.012c-.098.324-.13.754-.156 1.34c-.022.466-.022.679-.02 1.5ZM7.5 5.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5ZM4.25 7.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Zm6.72-2.72a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      url: "https://discord.com/users/439715057744740352",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M13.553 3.016A13.233 13.233 0 0 0 10.253 2a9.068 9.068 0 0 0-.423.86a12.293 12.293 0 0 0-3.664 0A9.112 9.112 0 0 0 5.744 2A13.358 13.358 0 0 0 2.44 3.018C.351 6.108-.215 9.123.068 12.094a13.306 13.306 0 0 0 4.048 2.033a9.78 9.78 0 0 0 .867-1.399a8.605 8.605 0 0 1-1.365-.652c.115-.083.227-.168.335-.251a9.51 9.51 0 0 0 8.094 0c.11.09.222.175.335.251a8.648 8.648 0 0 1-1.368.654a9.7 9.7 0 0 0 .867 1.396a13.248 13.248 0 0 0 4.051-2.03c.332-3.446-.568-6.433-2.379-9.08Zm-8.21 7.25c-.79 0-1.442-.715-1.442-1.596c0-.881.63-1.603 1.439-1.603s1.456.722 1.442 1.603c-.014.88-.636 1.597-1.44 1.597Zm5.315 0c-.79 0-1.44-.715-1.44-1.596c0-.881.63-1.603 1.44-1.603c.81 0 1.452.722 1.438 1.603c-.014.88-.634 1.597-1.438 1.597Z"
          />
        </svg>
      ),
    },
    {
      url: "https://www.linkedin.com/in/fahmizh/",
      logo: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      ),
    },
  ];
  const [repo, setRepo] = useState<ProjectCardProps[]>([]);

  async function fetchRepos() {
    let response;
    try {
      response = await fetch(`https://api.github.com/users/zulkou/repos`);
      console.log("fetch api requested")
    } catch (error) {
      console.log("error");
    }

    if (response?.ok) {
      const data = await response.json();
      setRepo(data);
      console.log("fetch api called")
    } else {
      console.log(`error code: ${response?.status}`);
    }
  }

  async function getGithubProfilePicture() {
    let response;
    try {
      response = await fetch(`https://api.github.com/users/zulkou`);
      console.log("photo api requested")
    } catch (error) {
      setSearchResult({ avatar_url: "/public/profile-icon-null.png" })
      console.log("error");
    }

    if (response?.ok) {
      const data = await response.json();
      setSearchResult(data);
      console.log("photo api called")
    } else {
      setSearchResult({ avatar_url: "/public/profile-icon-null.png" });
      console.log(`error code: ${response?.status}`);
    }
  }

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
    getGithubProfilePicture();
    fetchRepos();
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
              <div className="text-gray-600 dark:text-gray-400 mt-5 text-lg">
                I am a front-end engineer, aspired to be a full stack, and a
                little bit of expertise in machine learning.
              </div>
            </div>
            <a href="#about" className="flex flex-col items-center self-center mt-36 transition-all ease-in-out hover:translate-y-1">
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
            </a>
          </div>
        </section>
        {/* About */}
        <section
          className="flex flex-col gap-3 items-center pt-20 h-[50vh]"
          id="about"
        >
          <h1 className="text-3xl font-bold">About Me</h1>
          <div className="flex flex-row gap-5 items-center py-3">
            <img
              src={searchResult?.avatar_url}
              alt="Fahmi"
              className="w-40 h-40 rounded-full mx-10 my-5 bg-gray-300"
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
        <section
          className="flex flex-col items-center pt-20 h-[50vh]"
          id="project"
        >
          <h1 className="text-3xl font-bold mb-3">My Projects</h1>
          <Carousel repo={repo} />
        </section>
        {/* Contact */}
        <section
          className="flex flex-col items-center pt-20 h-[50vh]"
          id="contact"
        >
          <h1 className="text-3xl font-bold mb-16">Find Me At</h1>
          <div className="container flex flex-row justify-evenly items-center">
            {contacts.map((contact, idx) => (
              <ContactCard
                key={idx}
                url={contact.url}
                logo={contact.logo as React.ReactNode}
              />
            ))}
          </div>
        </section>
      </div>
    </WithHeader>
  );
};

export default Home;
