import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomManufacture() {
  const navigate = useNavigate();

  return (
    /* Pure minimalist background with a thin technical divider line */
    <section className="py-24 px-6 md:px-12 w-full bg-white border-t border-neutral/10">
      
      {/* 12-Column Grid Framework for high-end asymmetrical look */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* LEFT PANEL: Big Bold Typography Statement (Takes 5 columns - 100% Original) */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block mb-4">
              On-Demand Production
            </span>
            
            {/* Playfair / Editorial luxury header style */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral tracking-tight leading-none mb-6   uppercase">
              Made-To-Order <br className="hidden md:inline"/>Architectural <br/>Manufacturing
            </h2>
          </div>

          <div className="mt-4 lg:mt-12">
            <p className="text-[#B85C38] text-xs md:text-sm font-semibold max-w-sm leading-relaxed mb-8">
              In addition to our ready-made collections, we specialize in manufacturing custom orders tailored to your specific technical dimensions, premium metal finishes, and unique geometric profiles.
            </p>

            {/* Premium Minimal Action Trigger */}
            <button 
              onClick={() => navigate('/contact', { state: { queryType: 'custom_order' } })}
              className="bg-primary text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 hover:bg-dark text-white cursor-pointer"
            >
              Place Custom Order
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-neutral/10 pt-12 lg:pt-0 lg:pl-16">
          
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <img 
              src="https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781689257/10344274147126674_f3gp9y.jpg" 
              alt="Bespoke Wash Basin Production" 
              className="w-full h-64 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-sm"
            />
            <img 
              src="https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781689256/5559199536288683_y1fbkn.jpg" 
              alt="Custom Client Fabrication" 
              className="w-full h-64 md:h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm shadow-sm"
            />
          </div>

          {/* Premium Bottom Micro-Text (Customer Customization Tag) */}
          <div className="mt-6 text-left">
            <p className="text-[#B85C38] text-xs font-semibold tracking-wide uppercase border-l-2 border-primary pl-3">
All of these premium designs are proudly manufactured in-house, custom-built according to our customers' specific preferences and requirements            </p>
          </div>

        </div>

      </div>
    </section>
  )
}