import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/icons';
import project1 from '../../public/images/projects/weather.jpg';
import project2 from "../../public/images/projects/portfolio.jpg"
import project3 from "../../public/images/projects/dsl.jpg"
import project4 from "../../public/images/projects/ui.jpg"
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link href={link} passHref target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} passHref target='_blank' className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} passHref target='_blank' className="w-10">
            <GithubIcon />
          </Link>
          <Link href={link} passHref target='_blank' className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link href={link} passHref target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} passHref target='_blank' className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} passHref target='_blank' className="text-lg font-semibold underline">
            Visit
          </Link>
          <Link href={github} passHref target='_blank' className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Avneet Kaur | Projects Page</title>
        <meta name="description" content="Portfolio of projects by Avneet Kaur" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center pt-16'>
        <Layout className='pt-16'>
          <AnimatedText text="Code.Create.Repeat.🔁" className='mb-16 font-medium' />
          <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-12'>
              <FeaturedProject
                title="Portfolio Website"
                img={project2}
                summary="I developed a professional portfolio website using Next.js, Tailwind CSS, and Framer Motion. The project features responsive design, dynamic animations, optimized images, and a dark mode option. It showcases my projects and skills in a modern, visually appealing format. ​"
                link='https://weatherwiseproject.netlify.app'
                github='https://github.com/avneeetk/portfolio'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="DSL Platform"
                img={project3}
                summary="The NAF Portal is a full-stack web application developed during my internship, designed to authenticate users and manage access to different platforms based on their DSL numbers. Built using React for the frontend and Express.js for the backend, the project originally connected to a MySQL database but was adapted for deployment on Vercel using mock data. The portal demonstrates secure user authentication and dynamic platform access, showcasing my ability to develop and deploy responsive and functional web applications on serverless platforms like Vercel.​"
                link='https://weatherwiseproject.netlify.app'
                github='https://github.com/avneeetk/react-weather-app'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Weather ReactJS Web App"
                img={project1}
                summary="Created a responsive web application using ReactJS, integrating with the OpenWeather API to fetch and display real-time weather data. The app provides a user-friendly interface with clear visualizations, allowing users to search for weather forecasts by location. The design ensures seamless functionality across different devices and screen sizes​"
                link='https://weatherwiseproject.netlify.app'
                github='https://github.com/avneeetk/react-weather-app'
                type='Project'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title="Design Portfolio"
                img={project4}
                summary="
                Explore my design portfolio, showcasing a diverse range of projects including UI/UX design, branding, and visual storytelling. Each project highlights my creative process, attention to detail, and ability to deliver user-centered designs that meet both aesthetic and functional needs. Click the link to view case studies, design prototypes, and final deliverables that reflect my passion for design and commitment to excellence.​"
                link='https://avneetkaur.notion.site/Hi-I-m-Avneet-2d39e18dc8294b078240645cebbec112?pvs=74'
                github=''
                type='Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Projects;
