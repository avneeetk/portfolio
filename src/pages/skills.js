// skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Experience from '@/components/Experience';

const SkillCard = ({ title, skills, icon, description }) => {
  return (
    <motion.div
      className="group relative h-[400px]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      <div className="relative h-full bg-light dark:bg-dark p-8 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-4xl">{icon}</span>
            <h3 className="text-2xl font-bold text-dark dark:text-light font-mono">{title}</h3>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow font-mono">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-dark dark:bg-light text-light dark:text-dark rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      description: "Expert in building responsive and interactive web applications using modern frontend technologies."
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      description: "Proficient in developing scalable backend services and APIs with various databases and frameworks."
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Docker", "VS Code"],
      description: "Experienced with modern development tools and cloud services for efficient development and deployment."
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Agile", "Leadership"],
      description: "Strong interpersonal skills and ability to work effectively in team environments."
    }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-dark py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-dark dark:text-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const skills = () => {
  return (
    <div>
      <div className="pt-32"><Skills /></div>
      <div className=""><Experience/></div>
    </div>
  );
};

export default skills;
