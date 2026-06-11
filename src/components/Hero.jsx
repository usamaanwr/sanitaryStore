import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const images = [
  "/assets/heroSection/images1.jpg",
  "/assets/heroSection/images2.jpg",
  "/assets/heroSection/images3.jpg",
  "/assets/heroSection/images4.jpg",
]

const stats = [
  { num: '500+', label: 'Products' },
  { num: '99%',  label: 'Satisfaction' },
  { num: '15+',  label: 'Brands' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden w-full bg-base-100">

      {/* ===== BACKGROUND SLIDER ===== */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={img} alt={`slide ${i + 1}`} className="w-full h-full object-cover" />
          
          {/* Transparent White Gradient for image clarity - Tailwind v4 gradient code */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
        </div>
      ))}

      {/* ===== CONTENT ZONE ===== */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 py-20 text-left">

        {/* Badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-7 h-px bg-primary" />
          {/* 🔥 Inline style hta kar pure v4 custom color code use kiya */}
          <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-primary">
            Redefining Modern Living
          </span>
        </div>

        {/* Heading — Added .font-editorial for Premium Playfair Display look */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-dark leading-[1.15] mb-5 tracking-tight max-w-xl drop-shadow-sm font-editorial">
          Premium{' '}
          <span className="text-primary font-semibold">Sanitary</span>{' '}
          Ware
        </h1>

        {/* Description — Changed from text-primary to text-neutral for smooth contrast */}
        <p className="text-neutral font-normal text-sm md:text-base leading-relaxed max-w-md mb-9">
          Discover our curated collection of luxury faucets, advanced thermostatic
          showers, and smart ceramic installations.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-fit">
          <button className="bg-primary text-base-100 text-[10px] font-semibold uppercase tracking-[0.18em] px-8 py-4 rounded-none transition-all duration-300 hover:bg-accent cursor-pointer">
            <Link to={"/product"}>
              View Collections →
            </Link>
          </button>
          <button className="bg-transparent text-dark text-[10px] font-semibold uppercase tracking-[0.18em] px-8 py-4 rounded-none transition-all duration-300 border border-dark/30 hover:border-primary hover:text-primary cursor-pointer">
            <Link to={"/contact"}>
              Contact Expert
            </Link>
          </button>
        </div>
      </div>

      {/* ===== DOTS SLIDER INDICATORS ===== */}
      <div className="absolute bottom-6 left-6 md:left-12 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            /* 🔥 Inline dynamic custom backgrounds clear kar k dynamic utility classes dadi hain */
            className={`h-[2px] transition-all duration-300 border-none cursor-pointer ${
              i === current ? 'w-9 bg-primary' : 'w-5 bg-dark/15'
            }`}
          />
        ))}
      </div>

      {/* ===== STATS OVERLAY COUNTER ===== */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-7">
        {stats.map(({ num, label }) => (
          <div key={label} className="text-center">
            <div className="text-xl font-bold text-primary font-editorial">{num}</div>
            <div className="text-[8px] uppercase tracking-[0.2em] mt-0.5 text-neutral/60 font-semibold">
              {label}
            </div>
          </div>
        ))}
      </div>

    </section> 
  )
}