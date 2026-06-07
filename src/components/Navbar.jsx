import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    /* 
      FIXED THEME ALIGNMENT: 
      1. 'fixed top-0 left-0' lagaya hai taake scroll karne par navbar sath chale.
      2. 'bg-white/90 backdrop-blur-md' (Frosted Glass Effect) lagaya hai jahan aap ka 
         Black Text wala Logo hamesha crystal clear aur sharp nazar aayega!
      3. Minimal border lagayi hai jo aap ke primary color range se match karti hai.
    */
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-[#1E1B18]/5 fixed top-0 left-0 z-50 font-sans px-6 md:px-12 transition-all duration-300">
      
      {/* DaisyUI Flex Grid Splitter */}
      <div className="navbar max-w-7xl mx-auto w-full h-20 px-0 flex justify-between items-center">
        
        {/* 1. LEFT SIDE: Hamburger Menu + Black Logo Container */}
        <div className="navbar-start w-auto md:flex-1 flex items-center gap-2 justify-start">
          
          {/* Mobile Hamburger Dropdown Trigger */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-square btn-ghost min-h-0 h-auto p-0 hover:bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-[#B85C38]">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            
            {/* Mobile Dropdown Menu Drawer (Matches White Premium Canvas) */}
            <ul tabIndex={0} className="dropdown-content menu menu-sm mt-4 w-52 p-4 shadow-lg bg-white border border-[#1E1B18]/5 rounded-none z-[100] flex flex-col gap-4 text-left">
              <li>
                <Link to="/home" className={`text-xs uppercase tracking-widest font-bold p-0 ${isActive('/home') ? 'text-[#B85C38]' : 'text-[#1E1B18]'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-xs uppercase tracking-widest font-bold p-0 ${isActive('/about') ? 'text-[#B85C38]' : 'text-[#1E1B18]'}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/product" className={`text-xs uppercase tracking-widest font-bold p-0 ${isActive('/product') ? 'text-[#B85C38]' : 'text-[#1E1B18]'}`}>
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-xs uppercase tracking-widest font-bold p-0 ${isActive('/contact') ? 'text-[#B85C38]' : 'text-[#1E1B18]'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Isolated Brand Logo (Perfect Contrast Zone) */}
          <div className="flex items-center select-none py-1">
            <img 
              src="/assets/arco-sanitary-02 (1).png" 
              alt="Arco Sanitary Logo" 
              className="h-16 md:h-16 w-auto object-contain block"
              
            />
          </div>
        </div>

        {/* 2. CENTER ZONE: Centered Navigation Links */}
        {/* Dynamic color matching your deep mineral charcoal color #1E1B18 */}
        <div className="navbar-center hidden md:flex justify-center flex-none">
          <ul className="flex items-center justify-center gap-10 p-0 list-none m-0">
            <li>
              <Link to="/home" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/home') ? 'text-[#B85C38]' : 'text-[#1E1B18]/80 hover:text-[#B85C38]'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/about') ? 'text-[#B85C38]' : 'text-[#1E1B18]/80 hover:text-[#B85C38]'}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/product" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/product') ? 'text-[#B85C38]' : 'text-[#1E1B18]/80 hover:text-[#B85C38]'}`}>
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/contact') ? 'text-[#B85C38]' : 'text-[#1E1B18]/80 hover:text-[#B85C38]'}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. RIGHT ZONE: Isolated Terracotta Call Action */}
        <div className="navbar-end w-auto md:flex-1 flex justify-end items-center">
          <a 
            href="tel:+92213456789" 
            className="text-[10px] md:text-xs uppercase tracking-widest font-extrabold text-[#B85C38] border-b-2 border-[#B85C38]/20 pb-0.5 hover:border-[#B85C38] transition-colors duration-300 whitespace-nowrap"
          >
            Call: +92 21 3456789
          </a>
        </div>

      </div>
    </nav>
  )
}