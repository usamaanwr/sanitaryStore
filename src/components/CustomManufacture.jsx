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
      desc: "Every custom piece undergoes rigorous 100% leak-proof and flawless finish assessments before being delivered to your site or showroom."
    }
  ];

  return (
    /* Outer section handles pure base-100 white background smoothly */
    <section className="py-20 px-6 md:px-12 w-full bg-base-100 border-t border-dark/10">
      
      {/* Strict container alignment matching header and hero */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Real Manufacturing Image Frame (Takes 45% width on desktop) */}
        <div className="w-full lg:w-[45%] h-[400px] bg-base-200 overflow-hidden order-2 lg:order-1 relative border border-dark/5">
          <img 
            src="/assets/productimages/faucet.jpg" 
            alt="Arco Premium Manufacturing Unit" 
            className="w-full h-full object-cover grayscale-[20%] contrast-[110%] transition-transform duration-700 hover:scale-105"
          />
          {/* Accent color overlay tint for premium brand connection */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        </div>

        {/* Right Column: Process & Steps Content Area (Takes 50% width on desktop) */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left order-1 lg:order-2">
          
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold block mb-3">
            On-Demand Production
          </span>
          
          {/* 🔥 font-editorial class applied for luxury Playfair Display feel */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-dark tracking-tight leading-tight mb-4 font-editorial">
            Made-To-Order Architectural Manufacturing
          </h2>
          
          <p className="text-neutral text-xs md:text-sm font-light max-w-xl leading-relaxed mb-8">
            In addition to our ready-made collections, we specialize in manufacturing custom orders tailored to your specific technical dimensions, premium metal finishes, and unique geometric profiles.
          </p>

          {/* Minimal Vertical Steps Flow */}
          <div className="flex flex-col gap-6 w-full mb-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors duration-300 group">
                {/* Dynamic number token using primary color */}
                <span className="text-xs font-extrabold text-primary tracking-widest mt-0.5">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-xs font-bold text-dark uppercase tracking-wider mb-1 group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-neutral text-xs font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action trigger button */}
          <button 
            onClick={() => navigate('/contact', { state: { queryType: 'custom_order' } })}
            className="bg-primary text-base-100 text-[10px] uppercase tracking-[0.18em] font-semibold px-8 py-4 rounded-none cursor-pointer hover:bg-accent transition-all duration-300"
          >
            Place Custom Manufacturing Order
          </button>
          
        </div>

      </div>
    </section>
  )
}