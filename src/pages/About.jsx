import React from 'react'

// Core philosophies data
const coreValues = [
  {
    title: "Uncompromising Quality",
    desc: "Every faucet, thermostatic shower, and ceramic installation undergoes rigorous pressure and finish analysis to ensure lasting luxury and rust-free durability."
  },
  {
    title: "Architectural Aesthetics",
    desc: "We bridge the gap between heavy structural durability and sleek, minimal designs inspired by contemporary European living."
  },
  {
    title: "Sustainable Innovation",
    desc: "Smart eco-friendly water-saving technologies integrated seamlessly into premium fixtures, conserving resources without dropping water pressure."
  }
]

// Showroom milestones / numbers
const milestones = [
  { num: "14+", label: "Years of Trust" },
  { num: "500+", label: "Luxury Products" },
  { num: "15+", label: "Premium Brands" },
  { num: "1,200+", label: "Spaces Transformed" }
]

// Bhetreen Premium Customer Reviews Data
const reviews = [
  {
    name: "Kamran Khan",
    role: "Interior Architect",
    text: "Arco Sanitary has completely changed how I source fixtures for my luxury residential projects. Their matt black faucets and concealed mixers have zero pressure drop and a flawless finish.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "Zainab Raza",
    role: "Homeowner",
    text: "We renovated our bathrooms last year using their advanced thermostatic showers. The water temperature control is perfect, and the premium design matches our minimal theme beautifully.",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    name: "M. Haris",
    role: "Structural Consultant",
    text: "Finding authentic, heavy-duty brass fittings that don't rust in high humidity is rare. Arco's collection is certified, premium grade, and highly recommended for commercial setups.",
    rating: "⭐⭐⭐⭐⭐"
  }
]

export default function About() {
  return (
    /* Main Canvas Wrapper: Pure white background matching your core theme layout */
    <div className="w-full bg-white text-[#1E1B18] font-sans pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* =========================================================
            SECTION 1: THE BRAND IDENTITY STATEMENT (LEGACY HERO)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
          
          {/* Terracotta line indicator with side tag */}
          <div className="lg:col-span-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#B85C38]" />
            <span className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#B85C38]">
              The Arco Legacy
            </span>
          </div>

          {/* High Contrast Heading & Narrative */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.25] tracking-tight mb-8 text-[#1E1B18] max-w-2xl">
              Transforming functional spaces into <span className="text-[#B85C38] font-bold border-b-2 border-[#B85C38]/10 pb-1">personal sanctuaries</span>.
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#4A443E] max-w-xl">
              At Arco Sanitary, we believe that a bathroom isn't just a basic utility—it is the ultimate space for rejuvenation. For over a decade, we have curated and supplied premium interior solutions, helping homeowners, architects, and builders craft spaces that reflect true elegance and precision engineering.
            </p>
          </div>

        </div>

        {/* =========================================================
            SECTION 2: MILESTONES STATS ROW
            ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 my-16 border-y border-[#1E1B18]/10 bg-[#FBF9F6]">
          {milestones.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#B85C38] mb-1">
                {stat.num}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6B6259]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            SECTION 3: MODERN IMAGE GRID SHOWCASE
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          
          {/* Major Architectural Shot */}
          <div className="md:col-span-8 h-[380px] md:h-[520px] bg-[#F7F5F2] overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781617822/arcoshowroom2_rxzsgg.webp" 
              alt="showroom images" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Close-up Luxury Detail Shot */}
          <div className="md:col-span-4 h-[380px] md:h-[520px] bg-[#F7F5F2] overflow-hidden hidden md:block">
            <img 
              src="https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781617821/arco_show_room_whuae8.webp" 
              alt="Luxury Sanitary Details" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>

        </div>

        {/* =========================================================
            SECTION 4: CORE PHILOSOPHIES ROW BLOCK
            ========================================================= */}
        <div className="border-t-2 border-[#1E1B18]/10 pt-20 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sticky Guide Text */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <h3 className="text-xs uppercase tracking-[0.3em] font-black text-[#1E1B18] mb-3">
                Our Core Philosophies
              </h3>
              <p className="text-sm text-[#6B6259] max-w-xs font-normal leading-relaxed">
                How we maintain exceptional product longevity and curate collections for modern high-end residential projects.
              </p>
            </div>

            {/* Right Side Value Row Maps */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              {coreValues.map(({ title, desc }, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 items-start group border-b border-[#1E1B18]/5 pb-10 last:border-none">
                  <span className="text-sm font-mono font-bold text-[#B85C38] pt-0.5">
                    0{index + 1}/
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-[#1E1B18] mb-4 tracking-wide group-hover:text-[#B85C38] transition-colors duration-300">
                      {title}
                    </h4>
                    <p className="text-base font-normal leading-relaxed text-[#4A443E] max-w-xl">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* =========================================================
            FIX: SECTION 5: PREMIUM CUSTOMER REVIEWS GRID
            ========================================================= */}
        <div className="border-t border-[#1E1B18]/10 pt-20">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] font-extrabold text-[#B85C38]">
              Client Testimonials
            </span>
            <h3 className="text-2xl md:text-3xl font-normal text-[#1E1B18] tracking-tight mt-2">
              Trusted by Builders & Architects
            </h3>
          </div>
          
          {/* 3-Column Clean Flat Cards Layout (No heavy borders, uses subtle background fills) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div 
                key={i} 
                className="bg-[#FBF9F6] p-8 flex flex-col justify-between items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-xs"
              >
                <div>
                  {/* Stars Rating */}
                  <div className="text-xs mb-4 select-none tracking-wider">{review.rating}</div>
                  
                  {/* Review Text */}
                  <p className="text-sm font-normal text-[#4A443E] leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Reviewer Meta Information */}
                <div className="border-t border-[#1E1B18]/5 w-full pt-4 mt-auto">
                  <div className="text-sm font-bold text-[#1E1B18]">
                    {review.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#6B6259] mt-0.5">
                    {review.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}