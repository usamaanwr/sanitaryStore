import React from 'react'

export default function WhyChooseUs() {
  const points = [
    {
      id: 1,
      title: "Architectural Grade Brass",
      description: "Every item is forged using high-purity solid brass core to eliminate impurities and guarantee zero rust over decades."
    },
    {
      id: 2,
      title: "Advanced Ceramic Cartridges",
      description: "Tested for over 500,000 switching cycles to ensure smooth water flow and completely leak-proof performance."
    },
    {
      id: 3,
      title: "Eco-Friendly Technology",
      description: "Integrated smart aerators reduce water wastage up to 40% without compromising on pressure or structural luxury."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 w-full bg-base-100 border-t border-neutral/10">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12 items-start justify-between">
        
        {/* Left Side Static Text */}
        <div className="w-full md:w-1/3 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold block mb-2">
            Engineering Excellence
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-neutral tracking-tight leading-tight">
            Crafted for Lifetime Durability
          </h2>
        </div>

        {/* Right Side Points List */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          {points.map((point) => (
            <div key={point.id} className="flex flex-col items-start">
              {/* Using your secondary Warm Rust for indicators */}
              <span className="text-xs font-bold text-secondary tracking-widest mb-4">
                0{point.id} /
              </span>
              <h3 className="text-lg font-normal text-neutral mb-2">
                {point.title}
              </h3>
              <p className="text-neutral/80 text-xs md:text-sm font-light leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}