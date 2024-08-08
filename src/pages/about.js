import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.jpeg';
import Education from '@/components/Education';


const About = () => {
  return (
    <>
      <Head>
        <title>Avneet Kaur | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="mt-16">
          <AnimatedText text="About Me" className="my-12" />
          <div className="grid w-full grid-cols-8 gap-8">
            <div className="col-span-5 flex flex-col items-start justify-center pr-3">
              {/* <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About Me</h2> */}
              <p className="font-normal font-mono">
              Hi, I'm Avneet Kaur, a dedicated tech student majoring in Computer Science. I have a passion for web development and UI/UX design, with a love for crafting beautiful, functional, and user-friendly digital experiences. While I'm still on my academic journey, I continuously seek new challenges and opportunities to expand my skill set. I believe that design is not just about aesthetics; it's about solving real-world problems and creating seamless user experiences.
              </p>
              <p className="font-normal font-mono my-4 ">
                I believe that design is about more than just making things look pretty – it's about solving problems and
                creating intuitive, enjoyable experiences for users.
              </p>
              <p className="font-normal font-mono">
              My curiosity drives me to learn constantly, and I'm always eager to explore the latest in technology and design. Let's collaborate to bring your vision to life and make a positive impact together!"
              </p>
            </div>
            <div className="col-span-3 flex items-center justify-end ">
              <div className="relative h-fit rounded-2xl border-2 border-dashed
              border-dark bg-light ">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-zinc-500" />
                <Image src={profilePic} alt="avneetkaur" className="w-full h-85 rounded-2xl" />
              </div>
            </div>
          </div>
          <Education/>
        </Layout>
      </main>
    </>
  );
}

export default About;
