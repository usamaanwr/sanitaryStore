import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomManufacture() {
  const navigate = useNavigate();

  const steps = [
    {
      id: "01",
      title: "Custom Blueprinting",
      desc: "Aap ke space aur architectural layout ke mutabiq custom sizes aur designs ka structure finalize kiya jata hai."
    },
    {
      id: "02",
      title: "Precision Forging",
      desc: "High-grade pure brass aur ceramic material ko advanced machinery ke zariye exact aap ke order par cast kiya jata hai."
    },
    {
      id: "03",
      title: "Quality Testing & Delivery",
      desc: "Har custom piece ko 100% leak-proof aur flawless finish check ke baad showroom ya site par deliver kiya jata hai."
    }
  ];

  return (
    /* Outer section handles pure base-100 white background smoothly */
    <section className="py-20 px-6 md:px-12 w-full bg-base-100 border-t border-neutral/10">
      
      {/* Strict container alignment matching header and hero */}
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Real Manufacturing Image Frame (Takes 45% width on desktop) */}
        <div className="w-full lg:w-[45%] h-[400px] bg-base-200 overflow-hidden order-2 lg:order-1 relative">
          <img 
            src="\assets\productimages\faucet.jpg" 
            alt="Arco Premium Manufacturing Unit" 
            className="w-full h-full object-cover grayscale-[20%] contrast-[110%]"
          />
          {/* Accent color overlay tint for premium brand connection */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        </div>

        {/* Right Column: Process & Steps Content Area (Takes 50% width on desktop) */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left order-1 lg:order-2">
          
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold block mb-3">
            On-Demand Production
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral tracking-tight leading-tight mb-4">
            Made To Order Architectural Manufacturing
          </h2>
          
          <p className="text-neutral/80 text-xs md:text-sm font-light max-w-xl leading-relaxed mb-8">
            Hum ready-made products ke sath-sath aap ki specific dimensions, premium metal finishes aur unique shapes par customized orders bhi manufacture karte hain.
          </p>

          {/* Minimal Vertical Steps Flow */}
          <div className="flex flex-col gap-6 w-full mb-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4 items-start border-l-2 border-primary/20 pl-4 hover:border-primary transition-colors duration-300">
                <span className="text-xs font-bold text-secondary tracking-widest mt-0.5">
                  {step.id}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-neutral uppercase tracking-wider mb-1">
                    {step.title}
                  </h3>
                  <p className="text-neutral/70 text-xs font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action trigger button */}
          <button 
            onClick={() => navigate('/contact', { state: { queryType: 'custom_order' } })}
            className="bg-primary text-base-100 text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-none cursor-pointer hover:bg-accent transition-colors duration-300"
          >
            Place Custom Manufacturing Order
          </button>
          
        </div>

      </div>
    </section>
  )
}