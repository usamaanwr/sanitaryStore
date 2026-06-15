import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Robust parsing to match string/number IDs smoothly
  const product = categories.find((item) => String(item.id) === String(id));

  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.mainImage);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="py-40 text-center bg-white text-dark">
        <h2 className="text-lg font-light uppercase tracking-widest text-error mb-2">Product Not Found</h2>
        <p className="text-xs opacity-60 mb-6">The requested item code could not be verified.</p>
        <button onClick={() => navigate('/')} className="px-5 py-2.5 bg-neutral text-base-100 text-xs uppercase tracking-wider font-medium hover:bg-primary transition-colors">
          Return Home
        </button>
      </div>
    );
  }

  // Gather all images (Main + thumbnails)
  const allImages = product.images && product.images.length > 0 
    ? [product.mainImage, ...product.images] 
    : [product.mainImage];

  return (
    // pt-32 lagaya hai taake page top se thoda neeche shift ho jaye aur space mile
    <section className="pt-32 pb-20 bg-white px-6 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Layer: Back to Home Button */}
        <div className="mb-8 flex items-center justify-between border-b border-neutral/10 pb-4">
          <button 
            onClick={() => navigate('/')} 
            className="text-[11px] uppercase tracking-[0.25em] font-medium flex items-center gap-2 text-neutral hover:text-primary transition-colors"
          >
            ← Back to Home
          </button>
          
          <div className="text-[10px] uppercase tracking-[0.2em] font-normaltext-neutral hidden sm:block">
            Collection / {product.category}
          </div>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Image Layout (image_901949.png Style) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Big Main Image Frame (object-contain lagaya hai taake image poori dikhe) */}
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] bg-neutral/5 border border-neutral/5 flex items-center justify-center overflow-hidden">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-contain transition-all duration-300" 
              />
            </div>

            {/* Thumbnails Row: Horizontally aligned underneath */}
            <div className="flex flex-row gap-3 overflow-x-auto pb-2 scrollbar-none">
              {allImages.map((imgUrl, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-20 sm:w-24 aspect-[4/3] bg-neutral/5 overflow-hidden flex-shrink-0 cursor-pointer border flex items-center justify-center transition-all duration-200 ${
                    activeImage === imgUrl ? 'border-primary opacity-100 scale-[0.96]' : 'border-neutral/10 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={imgUrl} 
                    alt={`View-${index}`} 
                    className="w-full h-full object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Description Details */}
          <div className="lg:col-span-5 text-left pt-2 lg:sticky lg:top-24">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold block mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-dark tracking-tight uppercase mb-4">
              {product.name}
            </h1>
            <div className="w-12 h-[1px] bg-primary  mb-6"></div>
            
            <p className="text-sm text-neutral font-normal leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="border-t border-neutral/10 pt-6 text-[11px] font-light tracking-wide text-neutral/70 uppercase space-y-3">
              <div className="flex justify-between py-1.5 border-b border-neutral/5">
                <span className='text-dark font-bold'>Premium Quality</span>
                <span className="text-[#B85C38] font-normal">Architectural Finish</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral/5">
                <span className='text-dark font-bold'>Status</span>
                <span className="text-[#B85C38] font-normal">Available in Multiple Variations</span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full mt-10 bg-neutral text-base-100 py-4 text-[10px] uppercase tracking-[0.25em] font-medium hover:bg-primary transition-colors duration-300">
              Inquire Specifications
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}