// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-base-100/80 py-16 px-6 md:px-12 w-full font-sans border-t border-white/5">
      
      {/* Inner Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-left">
        
        {/* Column 1: Brand Info & SVG Social Icons */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center select-none">
            <img 
              src="/assets/arco-logo.png" 
              alt="Arco Sanitary Logo" 
              className="h-25 md:h-25 w-auto object-contain block"
            />
          </div>
          <p className="text-xs font-light text-white leading-relaxed max-w-xs mt-2">
            Premium architectural sanitary ware and bespoke made-to-order manufacturing for luxury living spaces.
          </p>

          {/* Pure SVGs (No import required, completely independent) */}
          <div className="flex items-center gap-4 mt-3">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-primary transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-primary transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-primary transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-primary transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-2">Navigation</h4>
          <Link to="/" className="text-xs font-light text-white hover:text-primary transition-colors">Home</Link>
          <Link to="/product" className="text-xs font-light text-white hover:text-primary transition-colors">Our Products</Link>
          <Link to="/about" className="text-xs font-light text-white hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="text-xs font-light text-white hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Column 3: Product Range Preview */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-base-100 font-semibold mb-2">Collections</h4>
          <span className="text-xs font-light text-white">Designer Faucets</span>
          <span className="text-xs font-light text-white">Thermostatic Showers</span>
          <span className="text-xs font-light text-white">Bespoke Washbasins</span>
          <span className="text-xs font-light  text-white">Smart Sanitary Ware</span>
        </div>

        {/* Column 4: Contact Details */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em]  text-white font-semibold mb-2">Showroom Info</h4>
          <p className="text-xs font-light text-white leading-relaxed">Main Showroom Address, Karachi, Pakistan</p>
          <p className="text-xs font-light  text-white">Mon - Sat: 11:00 AM - 08:00 PM</p>
          <p className="text-xs font-medium text-white tracking-wider mt-1">info@arcosanitary.com</p>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-white font-light text-left">
          &copy; {currentYear} Arco Sanitary. All Rights Reserved.
        </p>

        <p className="text-[10px] uppercase tracking-[0.25em] text-white font-light text-left md:text-center">
          Designed & Developed by{' '}
          <span className="text- font-bold">
            Muhammad Osama
          </span>
        </p>

        <p className="text-[10px] uppercase tracking-widest  text-white font-light text-left md:text-right">
          Crafted For Luxury Living
        </p>
      </div>

    </footer>
  )
}