import React from 'react'
import { Link } from 'react-router-dom'

const points = [
  {
    id: '01',
    icon: '✦',
    title: 'Architectural Grade Brass',
    desc: 'Every item forged using high-purity solid brass to eliminate impurities and guarantee zero rust over decades of use.',
  },
  {
    id: '02',
    icon: '◈',
    title: 'Advanced Ceramic Cartridges',
    desc: 'Tested for 500,000+ switching cycles — smooth water flow and completely leak-proof performance, guaranteed.',
  },
  {
    id: '03',
    icon: '◉',
    title: 'Eco-Friendly Technology',
    desc: 'Smart aerators reduce water wastage up to 40% without compromising on pressure or the luxury feel.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ===== BADGE + HEADING ===== */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-primary" />
          <span className="text-[9px] uppercase tracking-[0.38em] font-semibold text-primary">
            Why Arco
          </span>
        </div>

        <h2 className=" text-3xl md:text-4xl font-bold text-dark mb-12 leading-tight max-w-md">
          Built Different.{' '}
          <span className="text-primary ">Lasts Forever</span>
        </h2>

        {/* ===== CARDS GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {points.map((p) => (
            <div
              key={p.id}
              className="bg-white p-8 border-b-2 border-2 transition-all duration-250 hover:-translate-y-1"
              onMouseEnter={e => e.currentTarget.style.borderBottomColor = '#B85C38'}
              onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'transparent'}
            >
              {/* Card Top — number + icon */}
              <div className="flex items-center justify-between mb-6">
                <span className=" text-5xl font-bold text-[#B85C38]">
                  {p.id}
                </span>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-primary text-lg"
                
                >
                  {p.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-editorial text-[17px] font-bold text-dark mb-3 leading-snug">
                {p.title}
              </h3>

              {/* Desc */}
              <p className="text-xs leading-[1.9] font-semibold text-[#B85C38]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== BOTTOM STRIP ===== */}
        
      </div>
    </section>
  )
}
