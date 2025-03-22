import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  subsets:["latin"],
  variable:'--font-mont',
})

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Avneet Kaur's Portfolio Website" />
        <title>Avneet Kaur | Portfolio</title>
      </Head>
      <ThemeProvider attribute="class">
        <main className={`${montserrat.variable} font-mont bg-light dark:bg-gray-900 text-dark dark:text-white w-full min-h-screen`}>
          <NavBar/>
          <Component {...pageProps}/>
          <Footer/>
        </main>
      </ThemeProvider>
    </>
  )
}
