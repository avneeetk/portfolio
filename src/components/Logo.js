import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { CircularText } from './icons';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-44 h-44 -mt-5"> {/* Negative top margin */}
      {/* CircularText Positioned Around the Logo */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <CircularText className="w-full h-full" />
      </motion.div>
      
      {/* Centered Logo */}
      <MotionLink
        href="mailto:avneet15khanna@gmail.com"
        className="relative w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold z-10" // Added z-index
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212'
          ],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        AK
      </MotionLink>
    </div>
  );
};

export default Logo;
