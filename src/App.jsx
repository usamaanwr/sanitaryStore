import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Manufucture from './pages/OurProduct'
import Preloader from './components/Preloader'
import Footer from './components/Footer'
import OurProduct from './pages/OurProduct'
import ProductDetail from './components/ProductDetail'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500) // 2.5 seconds ke baad loader hide ho jana chahiye

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Agar loading true hai toh preloader dikhega, warna gayab */}
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<OurProduct />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <WhatsAppButton />
          <Footer/>
        </BrowserRouter>
      )}
    </>
  )
}

export default App