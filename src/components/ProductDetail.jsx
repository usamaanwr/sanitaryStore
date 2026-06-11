import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categories from '../data/products';

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // State to track the currently active big image
  const [mainImage, setMainImage] = useState('');

  // 1. Pure data mein se product filter karna
  let currentProduct = null;
  categories.forEach(cat => {
    const found = cat.products.find(p => String(p.id) === String(productId));
    if (found) currentProduct = found;
  });

  // 2. Jab product change ho, toh main image ko automatically pehli image par set karna
  useEffect(() => {
    if (currentProduct) {
      if (currentProduct.images && currentProduct.images.length > 0) {
        setMainImage(currentProduct.images[0]);
      } else {
        setMainImage(currentProduct.image);
      }
    }
  }, [currentProduct]);

  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Product Not Found</h2>
          <button onClick={() => navigate('/')} className="text-[#B85C38] underline font-bold">Back to Home</button>
        </div>
      </div>
    );
  }

  // Fallback array agar kisi product mein images na hon
  const productImagesList = currentProduct.images || [currentProduct.image];

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-[#1E1B18]">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#B85C38] hover:opacity-80 transition-opacity"
      >
        ← Go Back
      </button>

      {/* Luxury Layout Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* 📸 LEFT SIDE: E-COMMERCE PREMIUM GALLERY */}
        <div className="flex flex-col gap-4">
          {/* Main Big Image Frame */}
          <div className="bg-[#F9F9F9] border border-gray-100 p-12 flex justify-center items-center h-[400px] w-full">
            <img 
              src={mainImage} 
              alt={currentProduct.name} 
              className="max-h-full object-contain transition-all duration-300"
            />
          </div>

          {/* 3 Thumnails Grid Niche */}
          <div className="grid grid-cols-4 gap-4">
            {productImagesList.map((imgUrl, index) => (
              <div 
                key={index}
                onClick={() => setMainImage(imgUrl)} // Click karte hi badi image change!
                className={`bg-[#F9F9F9] border p-2 flex justify-center items-center h-20 cursor-pointer transition-all ${
                  mainImage === imgUrl ? 'border-[#B85C38] ring-1 ring-[#B85C38]' : 'border-gray-100 hover:border-gray-400'
                }`}
              >
                <img src={imgUrl} alt="thumbnail" className="max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* 📝 RIGHT SIDE: TYPOGRAPHIC INFO PANEL */}
        <div className="flex flex-col justify-center md:sticky md:top-32">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-extrabold mb-2">
            Arco Premium Collection
          </span>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
            {currentProduct.name}
          </h1>
          <p className="text-2xl font-semibold text-[#B85C38] mb-8">
            {currentProduct.price}
          </p>
          
          <div className="border-t border-b border-gray-100 py-6 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-gray-400">Specifications</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              {currentProduct.desc}
            </p>
          </div>

          {/* WhatsApp Action Channel */}
          <a 
            href={`https://wa.me/923001234567?text=Salam%20Arco%20Bath,%20I%20am%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(currentProduct.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-[#1E1B18] text-white py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#B85C38] transition-colors duration-300"
          >
            Inquire via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}