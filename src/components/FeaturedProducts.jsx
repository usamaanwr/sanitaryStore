import React from 'react'
import { useNavigate } from 'react-router-dom'
import categories from '../data/products';
export default function FeaturedCategories() {
  const navigate = useNavigate();

  
  return (
    /* Theme color alignment synchronized completely */
    <section className="py-24 px-6 md:px-12 w-full bg-white text-[#1E1B18]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Area - Left Aligned */}
        <div className="mb-14 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#B85C38] font-bold block mb-2">
            Our Signature Pieces
          </span>
          <h2 className="text-2xl md:text-4xl font-normal text-[#1E1B18] tracking-tight">
            Premium Categories
          </h2>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((item) => (
            <div 
              key={item.id}
              /* Idhar se state pass ho rahi hai target component ke liye */
              
              className="group overflow-hidden flex flex-col justify-between cursor-pointer bg-[#FBF9F6] transition-all duration-300 border border-[#1E1B18]/5 hover:shadow-md"
            >
              {/* Image Box */}
              <div className="relative h-72 w-full overflow-hidden bg-[#F7F5F2]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Content Box */}
              <div className="p-6 flex flex-col items-start text-left flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#1E1B18] mb-2 transition-colors group-hover:text-[#B85C38]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A443E] text-xs leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>
                
                {/* <div className="text-[10px] uppercase tracking-widest text-[#1E1B18] font-bold border-b border-[#1E1B18]/30 pb-0.5 group-hover:text-[#B85C38] group-hover:border-[#B85C38] transition-colors">
                  View Detail &rarr;
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Show All Products Button (Passes 'all' option to page state) */}
        <div className="flex justify-start">
          <button 
            onClick={() => navigate('/product', { state: { selectedCategory: 'all' } })}
            className="bg-primary text-base-100 text-[10px] font-semibold uppercase tracking-[0.18em] px-8 py-4 rounded-none transition-all duration-300 hover:bg-accent cursor-pointer"
          >
            Show All Products
          </button>
        </div>

      </div>
    </section>
  )
}