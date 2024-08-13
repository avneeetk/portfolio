import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GithubIcon, LinkedInIcon, GmailIcon, SunIcon, MoonIcon } from './icons';
import Logo from './Logo';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
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
  const [mode, toggleTheme] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/skills" title="Skills" className="ml-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
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
        onClick={()=> setMode(mode === "light" ? "dark" : "light")}
        className="ml-3 flex items-center justify-center rounded-full p-1"
      >
        {mode === "dark" ? 
        <SunIcon className={"fill-dark"} />
        : <MoonIcon className={"fill-dark"} />
        }
      </button>

      </nav>

      

      <div className="absolute left-[50%] top-3 translate-x-[-50%] ml-3">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
