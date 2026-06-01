// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* 
      Outer Wrapper: Dark background (#1A1A1A) for a high-end luxury finish.
      Padding strictly matches the rest of the website layout.
    */
    <footer className="bg-dark text-base-100/80 py-16 px-6 md:px-12 w-full font-sans border-t border-white/5">
      
      {/* Inner Container: Strict alignment max-w-7xl mx-auto */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 text-left">
        
        {/* Column 1: Brand Info (Logo Hidden - Simple Text Used Instead) */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col justify-center select-none">
            <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-base-100 leading-none">
              Arco
            </span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.35em] text-primary font-medium mt-1 leading-none">
              Sanitary
            </span>
          </div>
          <p className="text-xs font-light text-base-100/60 leading-relaxed max-w-xs mt-2">
            Premium architectural sanitary ware and bespoke made-to-order manufacturing for luxury living spaces.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-base-100 font-semibold mb-2">
            Navigation
          </h4>
          <Link to="/" className="text-xs font-light text-base-100/60 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/manufacture" className="text-xs font-light text-base-100/60 hover:text-primary transition-colors">
            Our Products
          </Link>
          <Link to="/about" className="text-xs font-light text-base-100/60 hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="text-xs font-light text-base-100/60 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Column 3: Product Range Preview */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-base-100 font-semibold mb-2">
            Collections
          </h4>
          <span className="text-xs font-light text-base-100/60">Designer Faucets</span>
          <span className="text-xs font-light text-base-100/60">Thermostatic Showers</span>
          <span className="text-xs font-light text-base-100/60">Bespoke Washbasins</span>
          <span className="text-xs font-light text-base-100/60">Smart Sanitary Ware</span>
        </div>

        {/* Column 4: Contact / Showroom Details */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-base-100 font-semibold mb-2">
            Showroom Info
          </h4>
          <p className="text-xs font-light text-base-100/60 leading-relaxed">
            Main Showroom Address, Karachi, Pakistan
          </p>
          <p className="text-xs font-light text-base-100/60">
            Mon - Sat: 11:00 AM - 08:00 PM
          </p>
          <p className="text-xs font-medium text-primary tracking-wider mt-1">
            info@arcosanitary.com
          </p>
        </div>

      </div>

      {/* Bottom Copyright Strip - Strictly Left-Aligned with Grid */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/5 text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-base-100/40 font-light">
          &copy; {currentYear} Arco Sanitary. All Rights Reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-base-100/40 font-light">
          Crafted For Luxury Living
        </p>
      </div>

    </footer>
  )
}