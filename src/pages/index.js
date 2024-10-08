import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.jpeg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link';
import { LinkArrow } from '@/components/icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen scroll pt-0">
        <Layout className='pt-0'>
        <div className="flex items-center justify-between w-full -my-10">
          {/* <div className="w-1/2">
            <Image src={profilePic} alt="avneetkaur" className='w-full h-auto '/>
          </div> */}
         <div className="w-full h-auto flex justify-center items-center">
  <div className="flex flex-col items-start text-left">
    <AnimatedText text="Hello, World! 👩🏻‍💻" className='!text-6xl text-left mt-20'/>
    <p className='mt-10 text-xl font-mono max-w-prose'>
      I'm Avneet Kaur, a Web Developer, a UI/UX designer, and an upcoming Software Engineer.
    </p>
    <p className='my-4 text-base font-mono max-w-prose'>
      Welcome to my corner of the internet! As a passionate tech enthusiast, I believe in the power of innovation and collaboration. Join me on this journey as we create meaningful digital experiences and grow together in the ever-evolving world of technology.
    </p>

    <div className="flex items-center mt-2 font-mono">
      <Link href="https://docs.google.com/document/d/118R9eQCz3aJq-JAtL2O8MC5PlJqRJvfnBXwR0AYLXqU/edit?usp=sharing" target="_blank" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">
        Resume <LinkArrow className="w-6 ml-1 "/>
      </Link>
      <Link href="mailto:avneet15khanna@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline">
        Contact
      </Link>
    </div>
  </div>
</div>
</div>


        </Layout>
      </main>
      </>
      )
   }