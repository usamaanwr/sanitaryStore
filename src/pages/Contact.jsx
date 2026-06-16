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

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (location.state && location.state.queryType === 'custom_order') {
      setFormData(prev => ({ ...prev, subject: 'custom_order' }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Arco Bath — ${formData.subject}`,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="w-full bg-white min-h-screen py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto w-full">

        {/* Page Header */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-px bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-semibold">
              Get In Touch
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark">
            Let's <span className="text-primary">Talk</span>
          </h1>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

          {/* ===== LEFT — FORM ===== */}
          <div className="w-full lg:w-[55%] text-left">
            <h2 className="text-xl font-normal text-neutral mb-6 uppercase tracking-wider">
              Send Us A Message
            </h2>

            {/* Success Message */}
            {submitted ? (
              <div className="flex flex-col items-start gap-3 py-10 border-l-2 border-primary pl-6">
                <span className="text-2xl">✓</span>
                <h3 className="font-editorial text-xl font-bold text-dark">Message Sent!</h3>
                <p className="text-sm text-neutral font-light">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[10px] uppercase tracking-widest font-semibold text-primary hover:text-accent transition-colors"
                >
                  Send Another Message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

                {/* Name */}
                <div className="flex flex-col items-start w-full ">
                  <label className="text-[10px] uppercase tracking-widest text-[#B85C38]  font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white text-neutral text-sm px-4 py-3 rounded-none border  bg-white p-8 border border-neutral/5 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="flex flex-col items-start w-full">
                    <label className="text-[10px] uppercase tracking-widest text-[#B85C38]  font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-white text-neutral text-sm px-4 py-3 rounded-none border bg-white p-8 border border-neutral/5 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <label className="text-[10px] uppercase tracking-widest text-[#B85C38] font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full bg-white text-neutral text-sm px-4 py-3 rounded-none border  bg-white p-8 border border-neutral/5 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col items-start w-full">
                  <label className="text-[10px] uppercase tracking-widest text-[#B85C38] font-semibold mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white text-neutral text-sm px-4 py-3 rounded-none border  bg-white p-8 border border-neutral/5 focus:border-primary focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="general">General Consultation</option>
                    <option value="custom_order">Custom Made-to-Order Manufacturing</option>
                    <option value="bulk_order">Bulk Showroom Dealership</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col items-start w-full">
                  <label className="text-[10px] uppercase tracking-widest text-[#B85C38]  font-semibold mb-2">
                    Project Details / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, dimensions, or general queries..."
                    className="w-full bg-white text-neutral text-sm px-4 py-3 rounded-none border bg-white p-8 border border-neutral/5 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-xs font-semibold">{error}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-none cursor-pointer hover:bg-dark transition-colors duration-300 self-start disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Submit Specification'}
                </button>

              </form>
            )}
          </div>

          {/* ===== RIGHT — SHOWROOM INFO ===== */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left bg-white p-8 border border-neutral/5">
            <h2 className="text-xl font-normal text-neutral mb-6 uppercase tracking-wider">
              Our Showroom
            </h2>

            <div className="flex flex-col gap-6 w-full">

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#B85C38] font-bold mb-1">Address</h3>
                <p className="text-neutral text-sm font-normal leading-relaxed">
                  Karachi Memon Society Block 3 Gulshan-e-Iqbal, Karachi,
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#B85C38] font-bold mb-1">Business Hours</h3>
                <p className="text-neutral text-sm font-normal">
                  Monday – Saturday<br />
                  11:00 AM – 08:00 PM
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#B85C38] font-bold mb-1">Direct Contact</h3>
                <p className="text-neutral text-sm font-normal mb-1">Phone: +92 3153000989</p>
                <p className="text-sm font-medium text-neutral tracking-wider">arifkhan.ak588@gmail.com

                </p>
              </div>



              {/* Map */}
              {/* Map */}
              <div className="w-full h-[200px] mt-2 border border-neutral/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.954077155412!2d67.06033541043519!3d24.88867704403673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ee5f5409f27%3A0x5b4e6f2dab2dd94d!2sAt-Arco-Bath!5e1!3m2!1sen!2s!4v1781597723482!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
};