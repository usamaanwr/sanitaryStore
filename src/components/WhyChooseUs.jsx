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
      <div className="max-w-7xl mx-auto w-full">

        {/* ===== BADGE + HEADING (100% UNTOUCHED) ===== */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-7 h-px bg-primary" />
          <span className="text-[9px] uppercase tracking-[0.38em] font-semibold text-primary">
            Why Arco
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 leading-tight max-w-md text-left">
          Built Different.{' '}
          <span className="text-primary">Lasts Forever</span>
        </h2>

        {/* ===== CARDS GRID (EXACT CLEAN SHEET LOOK FROM image_509fc5.png) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {points.map((p) => (
            <div
              key={p.id}
              /* 🔥 EXACT SCREENSHOT BOX: Ultra clean, soft bg, premium rounded corners, no bottom text/icons */
              className="bg-[#F5F5F5] p-10 rounded-[32px] flex flex-col items-center text-center justify-center min-h-[340px] transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Center Aligned Content Frame */}
              <div className="flex flex-col items-center w-full">
                
                {/* Top Premium Core Icon (Exact location as the screenshot) */}
                <div className="w-16 h-16 flex items-center justify-center text-primary text-4xl mb-4 select-none">
                  {p.icon}
                </div>

                {/* Title (Font & Color Kept Intact) */}
                <h3 className="font-editorial text-[22px] font-bold text-dark mb-4 leading-snug">
                  {p.title}
                </h3>

                {/* Desc (Font & Color Kept Intact) */}
                <p className="text-xs leading-[1.8] font-semibold text-[#B85C38] max-w-xs opacity-90">
                  {p.desc}
                </p>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}