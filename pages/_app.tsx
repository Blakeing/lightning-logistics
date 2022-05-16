import '../styles/main.css'
import '../styles/chrome-bug.css'
import '../styles/fonts.css'
import type { AppProps } from 'next/app'

import Header from '../components/Header'
import { useEffect } from 'react'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Header />
      <main className="page-margin">
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
