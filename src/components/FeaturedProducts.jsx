import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FeaturedCategories() {
  const navigate = useNavigate();

  // 4 Premium Categories as per your requirement
  const categories = [
    {
      id: 1,
      title: "Designer Faucets",
      slug: "faucets",
      description: "Anti-rust brass core luxury taps with custom premium finishes.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Thermostatic Showers",
      slug: "showers",
      description: "Smart temperature control systems for high-end bathrooms.",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Bespoke Washbasins",
      slug: "basins",
      description: "Monolithic ceramic basins crafted for contemporary architectural spaces.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Smart Sanitary Ware",
      slug: "sanitary",
      description: "Intelligent wall-hung toilets with automated hygienic features.",
      image: "https://images.unsplash.com/photo-1564540583246-934407739e55?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    /* Outer Section Wrapper - Stays transparent/white as per your body background */
    <section className="py-20 px-6 md:px-12 w-full bg-base-100">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Area - Left Aligned */}
        <div className="mb-12 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold block mb-2">
            Our Signature Pieces
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-neutral tracking-tight">
            Premium Categories
          </h2>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((item) => (
            <div 
              key={item.id}
              onClick={() => navigate('/product', { state: { selectedCategory: item.slug } })}
              className="group overflow-hidden flex flex-col justify-between cursor-pointer bg-base-200 transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Content box */}
              <div className="p-6 flex flex-col items-start text-left flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-normal text-neutral mb-2 transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-neutral/80 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                
                <div className="text-[11px] uppercase tracking-widest text-neutral font-semibold border-b border-neutral/30 pb-0.5 group-hover:text-primary group-hover:border-primary transition-colors">
                  View Detail &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Products Button - Left Aligned vertically with the container boundary.
          Uses your primary Burnt Terracotta color and hovers to Deep Brown.
        */}
        <div className="flex justify-start">
          <button 
            onClick={() => navigate('/manufacture')}
            className="bg-primary text-base-100 text-xs uppercase tracking-widest font-semibold px-10 py-4 rounded-none cursor-pointer hover:bg-accent transition-colors duration-300"
          >
            Show All Products
          </button>
        </div>

      </div>
    </section>
  )
}