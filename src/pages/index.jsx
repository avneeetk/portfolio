import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import About from './about';
import Skills from './skills';
import Projects from './projects';

export default function Home() {
  return (
    <>
      <main id="home" className="flex items-center text-dark w-full min-h-screen pt-16 sm:pt-20">
        <div className="flex items-center justify-between w-full">
          <div className="w-full h-auto flex justify-center items-center">
            <div className="flex flex-col items-start text-left px-4 sm:px-8 md:px-16 pt-4 sm:pt-8">
              <AnimatedText
                text="Hello, World! 👩🏻‍💻"
                className='text-left mb-4 sm:mb-6 md:mb-8 font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl'
              />

              <p className='mt-4 text-xl font-mono max-w-prose text-dark dark:text-white'>
                I&apos;m Avneet Kaur, a Web Developer, a UI/UX designer, and an upcoming Software Engineer.
              </p>
              <p className='my-4 text-base font-mono max-w-prose text-dark dark:text-white'>
                Welcome to my corner of the internet! As a passionate tech enthusiast, I believe in the power of innovation and collaboration. Join me on this journey as we create meaningful digital experiences and grow together in the ever-evolving world of technology.
              </p>

              <div className="flex items-center mt-2 font-mono">
                <Link
                  href="https://docs.google.com/document/d/1v7oCsXAb__d8iea3jLY1y_-kcT8ce7A4QobOWtYqTJE/edit?tab=t.0"
                  target="_blank"
                  className="flex items-center bg-dark dark:bg-white text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-gray-800 dark:hover:text-white border-2 border-solid border-transparent hover:border-dark dark:hover:border-white"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:avneet15khanna@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-white underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <About />
      <Skills />
      <Projects />
    </>
  );
}