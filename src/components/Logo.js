import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { CircularText } from './icons';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center dark:text-white w-44 h-44 -mt-5"> {/* Negative top margin */}
      {/* CircularText Positioned Around the Logo */}
      <motion.div
        className="absolute inset-0 flex items-center  justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <CircularText className="w-full h-full dark:text-white" />
      </motion.div>
      
      {/* Centered Logo */}
      <MotionLink
  href="mailto:avneet15khanna@gmail.com"
  className="relative w-16 h-16 bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center rounded-full text-2xl font-bold z-10 border border-transparent dark:border-gray-800 "
  whileHover={{
    backgroundColor: [
      '#121212', // Dark default
      'rgba(131,58,180,1)',
      'rgba(253,29,29,1)',
      'rgba(252,176,69,1)',
      'rgba(131,58,180,1)',
      '#121212' // Ensure it returns to default
    ],
    transition: { duration: 1, repeat: Infinity }
  }}
  onHoverEnd={(event) => {
    // Reset to the appropriate theme color
    event.target.style.backgroundColor = "";
  }}
>
  AK
</MotionLink>

    </div>
  );
};

export default Logo;
