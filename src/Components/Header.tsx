import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"

const Header = ( {activeSection}: {activeSection: string} ) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  
  return (
    <>
    <header className={`px-3 py-5 top-0 z-10 sticky backdrop-blur-lg bg-[#eff5f520] dark:bg-[#0a101020] ${isScrolled ? "border-b-2 border-gray-300 dark:border-gray-800" : "border-none"}`}>
    <div className='flex flex-row justify-between min-w-96 max-w-4xl mx-auto px-2'>
      <nav className='flex gap-5 font-bold'>
        <a href='#' className={`hover:text-black dark:hover:text-white ${activeSection == "home" ? "text-cyan-500 dark:cyan-300" : ""}`}>Home</a>
        <a href='#about' className={`hover:text-black dark:hover:text-white ${activeSection == "about" ? "text-cyan-500 dark:cyan-300" : ""}`}>About</a>
        <a href='#project' className={`hover:text-black dark:hover:text-white ${activeSection == "project" ? "text-cyan-500 dark:cyan-300" : ""}`}>Project</a>
        <a href='#contact' className={`hover:text-black dark:hover:text-white ${activeSection == "contact" ? "text-cyan-500 dark:cyan-300" : ""}`}>Contact</a>
      </nav>
      <ThemeToggle />
    </div>
    </header>
    </>
  )
}

export default Header