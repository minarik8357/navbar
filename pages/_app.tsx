import '../styles/globals.css'
import type { AppProps } from 'next/app'

// @ts-ignore
import {Navbar} from './/components/Navbar.tsx'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
   <Component  {...pageProps} />
   </>
   )
}
