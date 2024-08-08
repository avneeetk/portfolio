// skills.js
import React from 'react';
import Skills from '../components/Skills'; // Adjust the path as per your project structure
import Experience from '@/components/Experience';

const skills = () => {
  return (
    <div>
        <div className="pt-32 "><Skills /></div>
        <div className=""><Experience/></div>
      
      
    </div>
  );
};

export default skills;
