import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router= useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
  
    
  }, [router.query])
  
  return <>
    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
      waitingTime={400}
    />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
