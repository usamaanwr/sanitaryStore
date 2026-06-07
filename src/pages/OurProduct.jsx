import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Fully Synchronized Array matching your product.js structure
const allProductsData = [
  {
    id: 1,
    title: "Designer Faucets",
    slug: "faucets",
    price: "Premium",
    description: "Anti-rust brass core luxury taps with custom premium finishes.",
    image: "/assets/productimages/faucet.jpg" // Path updated to public asset standard
  },
  {
    id: 2,
    title: "Thermostatic Showers",
    slug: "showers",
    price: "Luxury",
    description: "Smart temperature control systems for high-end bathrooms.",
    image: "/assets/productimages/basin.jpg"
  },
  {
    id: 3,
    title: "Bespoke Washbasins",
    slug: "basins",
    price: "Exquisite",
    description: "Monolithic ceramic basins crafted for contemporary architectural spaces.",
    image: "/assets/productimages/shower.jpg"
  },
  {
    id: 4,
    title: "Smart Sanitary Ware",
    slug: "sanitary",
    price: "Smart Tech",
    description: "Intelligent wall-hung toilets with automated hygienic features.",
    image: "/assets/productimages/toilet.jpg"
  }
]

export default function Manufacture() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  // Tracks route state passed from home cards or show all button
  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setActiveFilter(location.state.selectedCategory);
    }
  }, [location.state]);

  /* FIX 1: 'item.category' ko badal kar 'item.slug' kiya hai 
    kyunki aap ke data object mein filtering key ka naam 'slug' hai!
  */
  const filteredProducts = activeFilter === 'all' 
    ? allProductsData 
    : allProductsData.filter(item => item.slug === activeFilter);

  return (
    <div className="w-full bg-white text-[#1E1B18] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Navigation/Filter Pills Header */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-[#1E1B18]/10 pb-6">
          {['all', 'faucets', 'showers', 'basins', 'sanitary'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`text-xs uppercase tracking-widest font-bold px-6 py-2 transition-all ${
                activeFilter === tab 
                  ? 'bg-[#B85C38] text-white' 
                  : 'bg-[#FBF9F6] text-[#1E1B18] hover:bg-[#1E1B18]/5'
              }`}
            >
              {tab === 'all' ? 'All Pieces' : tab}
            </button>
          ))}
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              /* Direct Detail Page navigation logic linked */
              onClick={() => navigate(`/product/${product.id}`)}
              className="group flex flex-col gap-3 cursor-pointer"
            >
              {/* FIX 2: product.img to product.image & added optimization tags */}
              <div className="h-64 bg-[#F7F5F2] overflow-hidden border border-[#1E1B18]/5">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* FIX 3: product.name changed to product.title */}
              <h4 className="text-sm font-bold text-[#1E1B18] mt-1 group-hover:text-[#B85C38] transition-colors">
                {product.title}
              </h4>
              
              <p className="text-xs text-[#4A443E] line-clamp-2 font-normal leading-relaxed">
                {product.description}
              </p>
              
              <span className="text-[10px] uppercase text-[#B85C38] font-bold tracking-wider mt-1">
                {product.price} Range
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}