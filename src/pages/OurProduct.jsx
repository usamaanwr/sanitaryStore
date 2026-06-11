import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import categories from '../data/products'; // File ka sahi path aur naam

export default function Manufacture() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setActiveFilter(location.state.selectedCategory);
    }
  }, [location.state]);

  // 1. Saari categories ke andar se saari products nikal kar ek single flat array banana
  let allProductsFlat = [];
  categories.forEach(cat => {
    // Har product ke sath uski category ka slug attach kar rahe hain filtering ke liye
    const productsWithSlug = cat.products.map(p => ({ ...p, categorySlug: cat.slug }));
    allProductsFlat = [...allProductsFlat, ...productsWithSlug];
  });

  // 2. Filter apply karna dynamic products par
  const filteredProducts = activeFilter === 'all' 
    ? allProductsFlat 
    : allProductsFlat.filter(item => item.categorySlug === activeFilter);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              // Ab product.id pass hogi (e.g. 'f1', 'w1') jo single page ko chahiye!
              onClick={() => navigate(`/product/${product.id}`)}
              className="group flex flex-col gap-3 cursor-pointer"
            >
              {/* Product Image Frame */}
              <div className="h-64 bg-[#F7F5F2] overflow-hidden border border-[#1E1B18]/5 flex justify-center items-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  decoding="async"
                  className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              
              {/* Product Name */}
              <h4 className="text-sm font-bold text-[#1E1B18] mt-1 group-hover:text-[#B85C38] transition-colors">
                {product.name}
              </h4>
              
              {/* Product Short Desc */}
              <p className="text-xs text-[#4A443E] line-clamp-2 font-normal leading-relaxed">
                {product.desc}
              </p>
              
              {/* Product Price */}
             
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}