import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import AnimatedText from './AnimatedText';
const Skill = ({ name, x, y }) => {
  return (
      <motion.div
    className="relative w-16 h-16 bg-dark dark:bg-white text-light dark:text-dark 
              flex items-center justify-center rounded-full text-2xl font-bold 
              z-10 border border-transparent dark:border-gray-800"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
    onHoverEnd={(event) => {
      event.target.style.backgroundColor = ""; // Reset Tailwind's dark mode styling
    }}
  >
    {name}
  </motion.div>

  );
};

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <AnimatedText text="Skills" className="my-18" />
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold font-mono bg-dark dark:bg-white text-light dark:text-dark p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="0vw" />
        <Skill name="CSS" x="-10vw" y="-10vw" />
        <Skill name="JavaScript" x="10vw" y="-10vw" />
        <Skill name="ReactJS" x="20vw" y="0vw" />
        <Skill name="NextJS" x="10vw" y="10vw" />
        <Skill name="Web Design" x="-10vw" y="10vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="GitHub" x="25vw" y="10vw" />
        <Skill name="TailwindCSS" x="20vw" y="20vw" />
        <Skill name="NodeJS" x="-20vw" y="20vw" />
        <Skill name="Prototyping" x="-28vw" y="-10vw" />
        <Skill name="ExpressJs" x="25vw" y="-10vw" />

      </div>
    </>
  );
};

export default Skills;
