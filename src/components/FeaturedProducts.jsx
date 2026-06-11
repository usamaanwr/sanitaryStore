// src/pages/Home.jsx (Ya aap ka main Home component)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import categories from '../data/products'; // Sahi path check kar lein malik

export default function Home() {
  const navigate = useNavigate();

  // 1. Saari categories ke andar se saari products nikal kar ek array banana
  let allProducts = [];
  categories.forEach(cat => {
    if (cat.products) {
      allProducts = [...allProducts, ...cat.products];
    }
  });

  // 2. Home page ke liye sirf pehle 4 cards slice karna
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <div className="w-full bg-white text-[#1E1B18] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 border-b border-[#1E1B18]/10 pb-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-extrabold">
              Curated Collection
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-1">
              Featured Pieces
            </h2>
          </div>
          
          {/* View All Button linked to your full product page */}
          <button 
            onClick={() => navigate('/products')} // Apne route ke mutabiq path check kar lein
            className="text-xs uppercase tracking-widest font-bold text-[#B85C38] hover:opacity-80 transition-opacity mt-4 md:mt-0"
          >
            Explore Full Range →
          </button>
        </div>

        {/* Dynamic 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => {
            // Agar images array hai toh pehli uthaye, warna fallback single image path
            const cardImage = product.images && product.images.length > 0 ? product.images[0] : product.image;
            
            return (
              <div 
                key={product.id} 
                // 🔥 Click karte hi user dynamic detail page par bounce karega
                onClick={() => navigate(`/product/${product.id}`)}
                className="group flex flex-col gap-3 cursor-pointer"
              >
                {/* Image Wrapper Frame */}
                <div className="h-72 bg-[#F7F5F2] overflow-hidden border border-[#1E1B18]/5 flex justify-center items-center p-8 transition-all duration-300 group-hover:border-gray-200">
                  <img 
                    src={cardImage} 
                    alt={product.name} 
                    loading="lazy"
                    className="max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                
                {/* Product Meta Details */}
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-[#1E1B18] group-hover:text-[#B85C38] transition-colors duration-300">
                    {product.name}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-1 font-light">
                    {product.desc}
                  </p>
                  <span className="text-xs text-[#B85C38] font-bold mt-1">
                    {product.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}