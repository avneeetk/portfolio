import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/icons';
import { motion } from 'framer-motion';
import project1 from '../../public/images/projects/weather.jpg';
import project2 from "../../public/images/projects/portfolio.jpg"
import project3 from "../../public/images/projects/dsl.jpg"
import project4 from "../../public/images/projects/ui.jpg"
import project5 from "../../public/images/projects/rakumon.jpg"
import project6 from "../../public/images/projects/pp.jpg"

const ProjectCard = ({ title, summary, link, github, img, type }) => {
  return (
    <motion.div
      className="group relative w-[300px] sm:w-[400px] md:w-[500px] h-[500px] sm:h-[600px] flex-shrink-0"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      
      <div className="relative h-full bg-light dark:bg-dark p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 md:mb-8 rounded-lg overflow-hidden ">
            <Image
              src={img}
              alt={title}
              className="object-cover"
              fill
              sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
              priority
            />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <span className="text-xl sm:text-2xl font-bold text-dark dark:text-light font-mono">{title}</span>
            <span className="px-3 py-1 bg-dark dark:bg-light text-light dark:text-dark rounded-full text-sm font-medium w-fit">
              {type}
            </span>
          </div>
          
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 flex-grow  font-mono">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-dark dark:bg-light text-light dark:text-dark rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Visit Project
            </motion.a>
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-dark dark:bg-light text-light dark:text-dark rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Avneet Kaur | Projects Page</title>
        <meta name="description" content="Portfolio of projects by Avneet Kaur" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center pt-16'>
        <Layout className='pt-16'>
          <AnimatedText text="Code.Create.Repeat.🔁" className='mb-8 sm:mb-12 md:mb-16 font-medium text-2xl sm:text-3xl md:text-4xl' />
          
          <div className="relative w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-light dark:from-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-light dark:from-dark to-transparent z-10" />
            
            <motion.div 
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 overflow-x-auto scrollbar-hide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <ProjectCard
                  title="Portfolio Website"
                  img={project2}
                  summary="I developed a professional portfolio website using Next.js, Tailwind CSS, and Framer Motion. The project features responsive design, dynamic animations, optimized images, and a dark mode option. It showcases my projects and skills in a modern, visually appealing format."
                  link='https://weatherwiseproject.netlify.app'
                  github='https://github.com/avneeetk/portfolio'
                  type='Project'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ProjectCard
                  title="RakuMon"
                  img={project5}
                  summary="Rakumon is an AI-powered e-commerce platform that personalizes online shopping by acting as your virtual shopkeeper. It allows users to add family and friends, browse together, chat, and receive tailored product recommendations. Developed at the Rakuten Hackathon India 2024, Rakumon won 3rd prize, showcasing innovation in AI-driven shopping experiences."
                  github='https://github.com/xanderex-sid/Rakumon'
                  type='Project'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ProjectCard
                  title="DSL Platform"
                  img={project3}
                  summary="The NAF Portal is a full-stack web app I built during my internship for user authentication and platform access based on DSL numbers. Developed with React and Express.js, it initially used MySQL but was adapted for Vercel with mock data. It showcases secure authentication, dynamic access, and deployment on serverless platforms."
                  link='https://weatherwiseproject.netlify.app'
                  github='https://github.com/avneeetk/react-weather-app'
                  type='Project'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ProjectCard
                  title="Patient Portal"
                  img={project6}
                  summary="A web-based patient portal designed to streamline medical history management for 1,000+ amyloidosis patients. Developed using React.js, Node.js, and MongoDB, the portal improved data accuracy, accessibility, and healthcare coordination."
                  link='https://asgi-patientportal.netlify.app'
                  github='https://github.com/avneeetk/ASGI_Frontend'
                  type='Project'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ProjectCard
                  title="Design Portfolio"
                  img={project4}
                  summary="Explore my design portfolio, showcasing a diverse range of projects including UI/UX design, branding, and visual storytelling. Each project highlights my creative process, attention to detail, and ability to deliver user-centered designs that meet both aesthetic and functional needs. Click the link to view case studies, design prototypes, and final deliverables that reflect my passion for design and commitment to excellence."
                  link='https://avneetkaur.notion.site/Hi-I-m-Avneet-2d39e18dc8294b078240645cebbec112?pvs=74'
                  github=''
                  type='Project'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <ProjectCard
                  title="Weather ReactJS Web App"
                  img={project1}
                  summary="Created a responsive web application using ReactJS, integrating with the OpenWeather API to fetch and display real-time weather data. The app provides a user-friendly interface with clear visualizations, allowing users to search for weather forecasts by location. The design ensures seamless functionality across different devices and screen sizes"
                  link='https://weatherwiseproject.netlify.app'
                  github='https://github.com/avneeetk/react-weather-app'
                  type='Project'
                />
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
