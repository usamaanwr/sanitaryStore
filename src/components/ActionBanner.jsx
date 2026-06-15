import React from 'react'

export default function ActionBanner() {
  return (
    /* Outer section strictly uses your rich dark background */
    <section className="py-24 px-6 md:px-12 w-full bg relative overflow-hidden flex items-center min-h-[550px]">
      
      {/* 
        BIG "ARCO" WATERMARK BACKGROUND TEXT 
        * No images at all to keep it clean and minimal.
        * Uses your exact 'text-primary' class for colors.
        * Uses your 'font-editorial' and 'not-italic' for normal straight fonts.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="font-editorial text-[16vw] font-black uppercase tracking-[0.12em] text-primary opacity-10 not-italic whitespace-nowrap">
          ARCO
        </h1>
      </div>

      {/* Inner Main Container - Content layout sits on top (z-10) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Content Area (Takes 7 columns) */}
        <div className="w-full lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold font-sans">
              Build Your Dream Space
            </span>
          </div>
          
          {/* Headline using your variables, strictly normal (not-italic) */}
          <h2 className=" text-4xl sm:text-5xl md:text-6xl font-normal text-dark-100 tracking-tight leading-[1.15] mb-6 not-italic">
            Consult With Our <br />
            <span className="text-[#B85C38]">Sanitary Experts</span> <br />
            Today
          </h2>
          
          <p className="text-[#B85C38] text-xs md:text-sm font-bold max-w-xl leading-relaxed">
            Get customized quotes, browse technical specifications, and select premium fixtures perfectly matching your property layout.
          </p>
          
        </div>

        {/* Right Column: Premium Side Boxes Stack (Takes 5 columns) */}
        <div className="w-full lg:col-span-5 flex flex-col gap-5">
          
          {/* Box 1: Experience */}
          <div className="w-full border border-base-200/10 p-6 bg-base-200/[0.02] backdrop-blur-md hover:border-primary/30 transition-colors duration-300">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#B85C38] font-semibold block mb-2">
              Experience
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-editorial text-2xl md:text-3xl font-semibold text-[#B85C38]">17+</span>
              <span className="font-editorial text-2xl md:text-3xl font-normal text-[#B85C38] ">Years</span>
            </div>
            <p className="text-[11px] text-primary mt-1">
              Trusted in Karachi
            </p>
          </div>

          {/* Box 2: Products Range */}
          <div className="w-full border border-base-200/10 p-6 bg-base-200/[0.02] backdrop-blur-md hover:border-primary/30 transition-colors duration-300">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#B85C38] font-semibold block mb-2">
              Products Range
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-editorial text-2xl md:text-3xl font-semibold text-[#B85C38]">500+</span>
              <span className="font-editorial text-2xl md:text-3xl font-normal text-[#B85C38]">Items</span>
            </div>
            <p className="text-[11px] text-primary  mt-1">
              Faucets • Showers • Ceramics
            </p>
          </div>

          {/* Box 3: Brands */}
          <div className="w-full border border-base-200/10 p-6 bg-base-200/[0.02] backdrop-blur-md hover:border-primary/30 transition-colors duration-300">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#B85C38] font-semibold block mb-2">
              Brands
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-editorial text-2xl md:text-3xl font-semibold text-[#B85C38]">20+</span>
              <span className="font-editorial text-2xl md:text-3xl font-normal text-[#B85C38]">Brands</span>
            </div>
            <p className="text-[11px] text-primary  mt-1">
              Local & International
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}