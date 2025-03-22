import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-white font-medium text-lg'>
      <Layout className='py-8 flex flex-col md:flex-row items-center justify-between'>
        {/* Copyright */}
        <span className='text-center md:text-left mb-4 md:mb-0'>
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>

        {/* Build With Love */}
        <div className='flex items-center justify-center mb-4 md:mb-0'>
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;
          <Link href="/" className="underline underline-offset-2" target={"_blank"}>
            avneetkaur
          </Link>
        </div>

        {/* Say Hi */}
        <Link href="/" className="underline underline-offset-2" target={"_blank"}>
          👋🏻 Say hi
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;