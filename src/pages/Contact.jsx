// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  const location = useLocation();
  
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  // Agar user Custom Manufacture section se click karke aaya hai toh automatic subject change ho jaye
  useEffect(() => {
    if (location.state && location.state.queryType === 'custom_order') {
      setFormData(prev => ({ ...prev, subject: 'custom_order' }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-white min-h-screen py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Page Header - Left Aligned */}
        <div className="mb-16 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-semibold block mb-2">
            Get In Touch
          </span>
         
        </div>

        {/* 2-Column Main Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          
          {/* Left Column: Clean Premium Contact Form (Takes 55% width) */}
          <div className="w-full lg:w-[55%] text-left">
            <h2 className="text-xl font-normal text-neutral mb-6 uppercase tracking-wider">
              Send Us A Message
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              {/* Name Field */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] uppercase tracking-widest text-neutral/70 font-semibold mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-base-200 text-neutral text-sm px-4 py-3 rounded-none border border-neutral/10 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email & Phone Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="flex flex-col items-start w-full">
                  <label className="text-[10px] uppercase tracking-widest text-neutral/70 font-semibold mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-base-200 text-neutral text-sm px-4 py-3 rounded-none border border-neutral/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
                
                <div className="flex flex-col items-start w-full">
                  <label className="text-[10px] uppercase tracking-widest text-neutral/70 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-base-200 text-neutral text-sm px-4 py-3 rounded-none border border-neutral/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+92 300 0000000"
                  />
                </div>
              </div>

              {/* Subject / Inquiry Type Dropdown */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] uppercase tracking-widest text-neutral/70 font-semibold mb-2">
                  Inquiry Type
                </label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-base-200 text-neutral text-sm px-4 py-3 rounded-none border border-neutral/10 focus:border-primary focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="general">General Consultation</option>
                  <option value="custom_order">Custom Made-to-Order Manufacturing</option>
                  <option value="bulk_order">Bulk Showroom Dealership</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="flex flex-col items-start w-full">
                <label className="text-[10px] uppercase tracking-widest text-neutral/70 font-semibold mb-2">
                  Project Details / Requirements
                </label>
                <textarea 
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-base-200 text-neutral text-sm px-4 py-3 rounded-none border border-neutral/10 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Describe your structural dimensions, required finishes, or general queries..."
                ></textarea>
              </div>

              {/* Submit Button using primary terracotta and hover accent deep brown */}
              <button 
                type="submit"
                className="bg-primary text-base-100 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-none cursor-pointer hover:bg-accent transition-colors duration-300 self-start"
              >
                Submit Specification
              </button>
            </form>
          </div>

          {/* Right Column: Showroom Details & Info (Takes 40% width) */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left bg-base-200 p-8 border border-neutral/5">
            <h2 className="text-xl font-normal text-neutral mb-6 uppercase tracking-wider">
              Our Showroom
            </h2>

            <div className="flex flex-col gap-6 w-full">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
                  Address
                </h3>
                <p className="text-neutral text-sm font-light leading-relaxed">
                  Main Showroom Address, Near Architectural Block,<br />
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
                  Business Hours
                </h3>
                <p className="text-neutral text-sm font-light">
                  Monday – Saturday<br />
                  11:00 AM – 08:00 PM
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">
                  Direct Contact
                </h3>
                <p className="text-neutral text-sm font-light mb-1">
                  Phone: +92 21 3456789
                </p>
                <p className="text-sm font-medium text-primary tracking-wider">
                  info@arcosanitary.com
                </p>
              </div>

              <div className="w-full h-[200px] bg-base-300 mt-4 relative overflow-hidden border border-neutral/10">
                {/* Dummy map placeholder image matching architectural aesthetic */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=500&q=80" 
                  alt="Location Map Placeholder" 
                  className="w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-[10px] uppercase tracking-widest text-neutral font-semibold bg-base-100 px-3 py-2 border border-neutral/10 shadow-sm">
                    Map View Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}