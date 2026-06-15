import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

export default function OurProducts() {
  const navigate = useNavigate();
  
  // Is mein se .slice(0, 4) hata diya hai taake saari 8-9 products grid mein show hon!
  // Aur filter check karta hai ke agar kisi ki mainImage nahi bhi hai, toh fallback image lag jaye taake crash na ho
  const allProducts = categories;

  return (
    <section className="pt-32 pb-20 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-14 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary  font-bold block mb-2 ">
            OUR FULL COLLECTION
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral tracking-tight uppercase">
            EXPLORE ALL PRODUCTS
          </h2>
          <div className="w-16 h-[1px] bg-primary mt-4"></div>
        </div>

        {/* Full Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {allProducts.map((product) => {
            // Fallback image agar data mein image link commented ya missing ho (jaise Id 8 mein hai)
            const displayImage = product.mainImage || "https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781524628/05_ih6tpr.jpg";

            return (
              <div 
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="group cursor-pointer flex flex-col text-left"
              >
                {/* Fixed Ratio Image Box with Zoom-In Hover */}
                <div className="w-full aspect-[4/5] overflow-hidden bg-neutral/5 border border-neutral/5 relative">
                  <img
                    src={displayImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Product Content */}
                <div className="pt-4 flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-semibold mb-1">
                    {product.category}
                  </span>
                  <h3 className=" font-bold tracking-tight text-neutral uppercase group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#B85C38] font-normal line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}