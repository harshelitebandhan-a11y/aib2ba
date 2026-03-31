import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/globals.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0,0) }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'100vh' }}>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" style={{ flex:1, paddingTop:58 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
