import React from 'react'
import { motion,useScroll } from "framer-motion"
import { useRef } from 'react'
import Lilicon from './Lilicon'
import AnimatedText from './AnimatedText'

const Details=({position, company, companyLink, time, address, work})=>{
    const ref = useRef(null);

    return( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Lilicon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>

            <h3 className="capitalize font-bold font-mono text-2xl">{position}&nbsp; <a href={companyLink}
            target="_blank"
            className="text-primary capitalize font-mono"
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 font-mono'>
                {time} | {address}
            </span>
            <p>
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Experience = () => {
       const ref = useRef(null);
       const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className="my=64">
          <AnimatedText text="Experience" className="mt-48 mb-12" />

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div
            style={{scaleY: scrollYProgress}}
             className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top  "/>
            <ul className='w-full flex flex-col items-start justify-between mb-32 font-mono'>

                <Details position="Software Web Engineer Intern " company="INDInnovations" companyLink="https://www.indinnovation.com" time=" Jun 2024 - Jul 2024" address="New Delhi" work="During my internship at Ind Innovations, I  developed NAF Middleware Platform, a web application designed for user authentication. I worked on both frontend and backend components, using React.js and CSS Modules for a responsive UI, and Node.js with Express.js for server-side logic. I also contributed to database design and management with MySQL to store user credentials and DSL numbers. My work focused on ensuring seamless user access and robust functionality across the platform."/>

                <Details position=" Web Development Intern" company="RDSSDF and Amyloidosis Support Group of India (NGO)" companyLink="https://rdssdf.org" time="Jun 2024-present" address="New Delhi" work="In this role, I've been managing social media and developing the NGO's website, which taught me the significance of digital presence and community engagement. My work on a patient monitoring system for amyloidosis patients provided valuable insights into the healthcare domain and data collection processes, enhancing patient outcomes."/>

                <Details position=" UI Intern " company="C-DoT, New Delhi" companyLink="https://www.cdot.in/cdotweb/web/home.php" time="Jan 2024 - Feb 2024" address="New Delhi" work="At C-DOT, I applied engineering principles to design user interfaces for a Mobile Device Management (MDM) system. I gained practical experience in UI design, focusing on creating intuitive and user-centric interfaces. "/>

            </ul>

        </div>
    </div>
  )
}

export default Experience
