import React from 'react'
import { motion,useScroll } from "framer-motion"
import { useRef } from 'react'
import Lilicon from './Lilicon'
import AnimatedText from './AnimatedText'

const Details=({type, time ,place, info})=>{
    const ref = useRef(null);

    return( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <Lilicon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>

            <h3 className="capitalize font-bold text-2xl">{type}</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className="font-medium w-full">
                {info}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {
       const ref = useRef(null);
       const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className="my-48">
          <AnimatedText text="Education" className="my-12" />

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div
            style={{scaleY: scrollYProgress}}
             className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top  "/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 font-mono'>
                <Details type="Bachelor Of Technology In Computer Science" time="2022-2026 " place="Guru Tegh Bahadur Institute of Technology (GGSIPU)" info="Delving into the world of algorithms, programming, and software development, I've been expanding my technical skills and understanding of computer science fundamentals. This degree has honed my problem-solving abilities and fueled my passion for building user-friendly digital solutions."
                />
                <Details type="High School, (Class XII: 90%)" time="2020-2022 " place="Guru Harkrishan Public School, Vasant Vihar"
                 info="As a student of Physics, Chemistry, Mathematics (PCM), and Computer Science, I developed a strong analytical foundation and a keen interest in technology. My exposure to programming sparked a fascination with coding and problem-solving, leading me to pursue a career in computer science and technology."
                />

            </ul>

        </div>
    </div>
  )
}

export default Education