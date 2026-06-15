import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomManufacture() {
  const navigate = useNavigate();

  const steps = [
    {
      id: "01",
      title: "Custom Blueprinting",
      desc: "Tailored structures and custom dimensions engineered precisely to match your unique spatial layouts and architectural concepts."
    },
    {
      id: "02",
      title: "Precision Forging",
      desc: "High-grade pure brass and premium ceramic materials cast using advanced machinery based on your exact specifications."
    },
    {
      id: "03",
      title: "Quality Testing & Delivery",
      desc: "Every custom piece undergoes rigorous 100% leak-proof assessment before being delivered to your site or showroom."
    }
  ];

  return (
    /* Pure minimalist background with a thin technical divider line */
    <section className="py-24 px-6 md:px-12 w-full bg-white border-t border-neutral/10">
      
      {/* 12-Column Grid Framework for high-end asymmetrical look */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* LEFT PANEL: Big Bold Typography Statement (Takes 5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between items-start text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block mb-4">
              On-Demand Production
            </span>
            
            {/* Playfair / Editorial luxury header style */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral tracking-tight leading-none mb-6  uppercase">
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

        {/* RIGHT PANEL: The "Hat Ke" Process Blocks (Takes 7 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-neutral/10 pt-12 lg:pt-0 lg:pl-16">
          <div className="space-y-12 w-full">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start group"
              >
                {/* Big Elegant Minimal Number Token */}
                <div className="sm:col-span-2">
                  <span className="text-2xl font-light tracking-widest text-neutral  font-mono block group-hover:text-primary transition-colors duration-300">
                    {step.id}
                  </span>
                </div>

                {/* Step Description details */}
                <div className="sm:col-span-10 text-left">
                  <h3 className="text-xs font-bold text-neutral uppercase tracking-[0.15em] mb-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {step.title}
                  </h3>
                  <p className="text-[#B85C38] text-xs font-semibold leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}