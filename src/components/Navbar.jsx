import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    /* Outer Wrapper: Transparent setup to overlay on top of the Hero section.
      'absolute' positioning lets it float seamlessly.
    */
    <nav className="w-full bg-transparent absolute top-2 left-0 z-50 font-sans px-6 md:px-12">
      
      {/* DaisyUI Flex Splitter Grid Matrix 
        Using standard navbar-start, navbar-center, and navbar-end for distinct separation.
      */}
      <div className="navbar max-w-7xl mx-auto w-full h-20 px-0 flex justify-between items-center">
        
        {/* 1. LEFT SIDE: Hamburger Menu + Separate Logo Box */}
        <div className="navbar-start w-auto md:flex-1 flex items-center gap-2 justify-start">
          
          {/* Mobile Hamburger Dropdown Trigger */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-square btn-ghost min-h-0 h-auto p-0 hover:bg-transparent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-primary">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </div>
            
            {/* Mobile Dropdown Menu Drawer */}
            <ul tabIndex={0} className="dropdown-content menu menu-sm mt-4 w-52 p-4 shadow-lg bg-base-100 border border-neutral/5 rounded-none z-[100] flex flex-col gap-4 text-left">
              <li>
                <Link to="/home" className={`text-xs uppercase tracking-widest font-medium p-0 ${isActive('/') ? 'text-primary' : 'text-neutral'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className={`text-xs uppercase tracking-widest font-medium p-0 ${isActive('/manufacture') ? 'text-primary' : 'text-neutral'}`}>
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-xs uppercase tracking-widest font-medium p-0 ${isActive('/about') ? 'text-primary' : 'text-neutral'}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-xs uppercase tracking-widest font-medium p-0 ${isActive('/contact') ? 'text-primary' : 'text-neutral'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Isolated Brand Logo Container (Strictly Left Aligned) */}
          <div className="flex items-center select-none ">
            <img 
              src="/assets/arco-sanitary-02 (1).png" 
              alt="Arco Sanitary Logo" 
              className="h-10 md:h-20 w-auto object-contain block"
             
            />
          </div>
        </div>

        {/* 2. CENTER ZONE: Navigation Links Dedicated Block */}
        <div className="navbar-center hidden md:flex justify-center flex-none">
          <ul className="flex items-center justify-center gap-10 p-0 list-none m-0">
            <li>
              <Link to="/home" className={`text-xs uppercase tracking-widest font-medium transition-colors ${isActive('/') ? 'text-primary font-bold' : 'text-neutral/100 hover:text-primary'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className={`text-xs uppercase tracking-widest font-medium transition-colors ${isActive('/manufacture') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'}`}>
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/about" className={`text-xs uppercase tracking-widest font-medium transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`text-xs uppercase tracking-widest font-medium transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : 'text-secondary hover:text-primary'}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. RIGHT ZONE: Isolated Dummy Call Action (Strictly Right Aligned) */}
        <div className="navbar-end w-auto md:flex-1 flex justify-end items-center">
          <a 
            href="tel:+92213456789" 
            className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-primary border-b-2 border-primary/20 pb-0.5 hover:border-primary transition-colors duration-300 whitespace-nowrap"
          >
            Call: +92 21 3456789
          </a>
        </div>

      </div>
    </nav>
  )
}