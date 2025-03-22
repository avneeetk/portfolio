import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedInIcon, GmailIcon, SunIcon, MoonIcon } from './icons';
import Logo from './Logo';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = element.offsetTop - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <Link href={href} className={`${className} relative group`} onClick={handleClick}>
      {title}
      <span className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Hide the logo when scrolling down (scrollY > 50px, adjust as needed)
      if (window.scrollY > 50) {
        setIsLogoVisible(false);
      } else {
        setIsLogoVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-4 sm:px-8 md:px-32 py-4 sm:py-6 md:py-10 font-medium flex items-center justify-between fixed top-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-sm h-16 sm:h-20">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <CustomLink href="#home" title="Home" className="mr-4" />
        <CustomLink href="#about" title="About" className="mx-4" />
        <CustomLink href="#skills" title="Skills" className="ml-4" />
        <CustomLink href="#projects" title="Projects" className="mx-4" />
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-6 h-6"
        onClick={handleClick}
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop Social Links */}
      <nav className="hidden md:flex items-center justify-center flex-wrap">
        <motion.a href="https://github.com/avneeetk" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <GithubIcon />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/avneet-kaur-493116298/" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="mailto:avneet15khanna@gmail.com" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3">
          <GmailIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {mode === "dark" ? 
            <SunIcon className={"fill-dark"} />
            : <MoonIcon className={"fill-dark"} />
          }
        </button>
      </nav>

      {/* Logo */}
      <div
        className={`absolute left-[50%] top-3 translate-x-[-50%] ml-3 transition-opacity duration-300 ${
          isLogoVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Logo />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-full left-0 w-full bg-light dark:bg-dark p-4 md:hidden"
        >
          <nav className="flex flex-col items-center space-y-4">
            <CustomLink href="#home" title="Home" className="text-xl" onClick={() => setIsOpen(false)} />
            <CustomLink href="#about" title="About" className="text-xl" onClick={() => setIsOpen(false)} />
            <CustomLink href="#skills" title="Skills" className="text-xl" onClick={() => setIsOpen(false)} />
            <CustomLink href="#projects" title="Projects" className="text-xl" onClick={() => setIsOpen(false)} />
          </nav>
          <div className="flex justify-center space-x-4 mt-4">
            <motion.a href="https://github.com/avneeetk" target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6">
              <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/avneet-kaur-493116298/" target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6">
              <LinkedInIcon />
            </motion.a>
            <motion.a href="mailto:avneet15khanna@gmail.com" target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6">
              <GmailIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className="flex items-center justify-center rounded-full p-1"
            >
              {mode === "dark" ? 
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;
