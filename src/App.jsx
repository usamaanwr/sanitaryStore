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
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Product' element={<OurProduct />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      )}
    </>
  )
}

export default App