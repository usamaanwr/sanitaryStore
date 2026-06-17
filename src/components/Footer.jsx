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
              src="https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781637988/arco-logo_kun34g.png"
              alt="Arco bath Logo"
              className="h-25 md:h-25 w-auto object-contain block"
            />
          </div>
          <p className="text-xs font-light text-white leading-relaxed max-w-xs mt-2">
            Premium architectural sanitary ware and bespoke made-to-order manufacturing for luxury living spaces.
          </p>

          {/* Pure SVGs (No import required, completely independent) */}
          <div className="flex items-center gap-4 mt-3">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/r/1947efWSZ8/" target="_blank" rel="noopener noreferrer" className=" text-white hover:text-primary transition-colors duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>


            <a
              href="https://vt.tiktok.com/ZSQbhSf7E/" // 👈 Yahan apne account ka link dal dena chanda
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.01c1.864 0 3.655.516 5.2 1.424V6.26c-1.332-.767-2.85-1.182-4.417-1.182h-.783v10.428c0 2.213-1.8 4.012-4.017 4.012-2.217 0-4.017-1.8-4.017-4.012 0-2.213 1.8-4.013 4.017-4.013.344 0 .684.043 1.011.13v-4.14A8.136 8.136 0 0 0 8.51 7.075c-4.429 0-8.034 3.6-8.034 8.013 0 4.414 3.605 8.012 8.034 8.012 4.43 0 8.017-3.598 8.017-8.012V5.66c1.603 1.155 3.533 1.815 5.626 1.848v-4.13c-2.393-.153-4.524-1.25-5.992-2.923l-.151-.18A3.76 3.76 0 0 1 12.525.01z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-2">Navigation</h4>
          <Link to="/home" className="text-xs font-light text-white hover:text-primary transition-colors">Home</Link>
          <Link to="/product" className="text-xs font-light text-white hover:text-primary transition-colors">Our Products</Link>
          <Link to="/about" className="text-xs font-light text-white hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="text-xs font-light text-white hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Column 3: Product Range Preview */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-2">Collections</h4>
          <span className="text-xs font-light text-white">Designer Faucets</span>
          <span className="text-xs font-light text-white">Thermostatic Showers</span>
          <span className="text-xs font-light text-white">Bespoke Washbasins</span>
          <span className="text-xs font-light  text-white">Smart Sanitary Ware</span>
        </div>

        {/* Column 4: Contact Details */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em]  text-white font-semibold mb-2">Showroom Info</h4>
          <p className="text-xs font-light text-white leading-relaxed">plot 93, garden view appt, shop no # 03 ARCOBATH national stadium road & main agha khan road, 94 pakistan, near newtown police station, Karachi Memon Society Block 3 Gulshan-e-Iqbal, Karachi,</p>
          <p className="text-xs font-light  text-white">Mon - Sat: 11:00 AM - 08:00 PM</p>
          <p className="text-xs font-medium text-white tracking-wider mt-1">arifkhan.ak588@gmail.com</p>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-white font-light text-left">
          &copy; {currentYear} Arco Sanitary. All Rights Reserved.
        </p>

        <p className="text-[10px] uppercase tracking-[0.25em] text-white font-light text-left md:text-center">
          Designed & Developed by{' '}
          <a
            href="https://www.linkedin.com/in/muhammad-osama-125213292/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-white hover:text-primary transition-colors duration-300 inline-block cursor-pointer"
          >
            Muhammad Osama
          </a>
        </p>

        <p className="text-[10px] uppercase tracking-widest  text-white font-light text-left md:text-right">
          Crafted For Luxury Living
        </p>
      </div>

    </footer>
  )
}