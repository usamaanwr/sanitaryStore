import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ActionBanner() {
  const navigate = useNavigate();

  return (
    /* Outer section strictly keeps your base white background */
    <section className="py-20 px-6 md:px-12 w-full bg-base-100 border-t border-neutral/10">
      
      {/* 
        Inner Container: Strict width alignment 'max-w-7xl mx-auto w-full'
        Using 'flex-col md:flex-row' to make it a 2-column layout on desktop.
      */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Content Area (Takes 55% width on desktop) */}
        <div className="w-full md:w-[55%] flex flex-col items-start text-left">
          
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold block mb-3">
            Build Your Dream Space
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral tracking-tight leading-tight mb-4">
            Consult With Our Architectural Sanitary Experts Today
          </h2>
          
          <p className="text-neutral/80 text-xs md:text-sm font-light max-w-md leading-relaxed mb-8">
            Get customized quotes, browse technical specifications, and select premium fixtures perfectly matching your property layout.
          </p>

          {/* Button using primary terracotta color with accent deep brown hover */}
          <button 
            onClick={() => navigate('/contact')}
            className="bg-primary text-base-100 text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-none cursor-pointer hover:bg-accent transition-colors duration-300"
          >
            Request Architectural Catalogue
          </button>
          
        </div>

        {/* 
          Right Column: Premium Image Frame (Takes 45% width on desktop)
          Using your warm off-white (bg-base-200) as an image frame placeholder.
        */}
        <div className="w-full md:w-[45%] h-[350px] md:h-[400px] bg-base-200 overflow-hidden relative">
          <img 
            src="\assets\heroSection\images3.jpg" 
            alt="Luxury Architectural Sanitary Space" 
            className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
          />
          {/* Subtle light overlay to match the minimal look */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        </div>

      </div>
    </section>
  )
}