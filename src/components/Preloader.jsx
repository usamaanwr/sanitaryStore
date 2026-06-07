import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { 
          clearInterval(timer)
          // Progress complete hone par preloader ko smoothly fade out karne ke liye chota sa buffer delay
          setTimeout(() => setShouldRender(false), 300)
          return 100 
        }
        return p + 1
      })
    }, 20) // Speed ko aur optimal aur professional kiya hai
    return () => clearInterval(timer)
  }, [])

  if (!shouldRender) return null

  return (
    /* 
      LUXURY THEME OVERLAY:
      - Dark color '#1A1A1A' ko hatakar pure clean white (#FFFFFF) kardiya hai.
      - text-[#1E1B18] apply kiya hai taake website canvas ke sath organic linkage bane.
    */
    <motion.div
      initial={{ opacity: 1 }}
      animate={progress === 100 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-8 text-[#1E1B18]"
    >

      {/* ===== WATER DROP + RIPPLE (Sanitary Signature) ===== */}
      <div className="flex flex-col items-center gap-0">

        {/* Drop (Terracotta Core Primary Theme Color Locked) */}
        <motion.div
          animate={{
            y: ['-6px', '4px', '4px', '-6px'],
            opacity: [0.6, 1, 0, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: 'easeInOut',
            times: [0, 0.6, 0.85, 1],
          }}
        >
          <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
            <path
              d="M14 2 C14 2, 2 16, 2 24 A12 12 0 0 0 26 24 C26 16 14 2 14 2Z"
              fill="#B85C38"
              opacity="1"
            />
            {/* Inner elegant gleam highlight */}
            <path
              d="M9 22 Q11 18 14 17"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Ripples matching the luxury palette */}
        <div className="relative w-[60px] h-[18px] flex items-center justify-center">
          {[0.75, 1.05, 1.35].map((delay, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{ border: '1px solid rgba(184,92,56,0.4)' }}
              animate={{
                width: ['0px', '60px'],
                height: ['0px', '16px'],
                opacity: [0.7, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                delay: delay,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* ===== PREMIUM TYPOGRAPHY BRANDING ZONE ===== */}
      <div className="flex flex-col items-center gap-2">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-serif italic text-[18px] text-[#6B6259]"
        >
          Welcome to
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[#1E1B18] text-[16px] font-bold uppercase tracking-[0.35em]"
        >
          ARCO <span className="text-[#B85C38]">·</span> SANITARY
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="w-10 h-[1px] bg-[#B85C38]/60"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-[9px] uppercase tracking-[0.38em] font-medium text-[#6B6259]"
        >
          Premium Living Spaces
        </motion.p>
      </div>

      {/* ===== MINIMAL LOADING PROGRESS BAR ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="w-[140px] h-[2px] bg-[#1E1B18]/5 rounded-full overflow-hidden mt-2"
      >
        <motion.div
          className="h-full rounded-full bg-[#B85C38]"
          style={{ width: `${progress}%` }}
        />
      </motion.div>

      {/* ===== COPYRIGHT FOOT NOTE ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 text-[8px] uppercase tracking-[0.25em] font-mono text-[#6B6259]/60"
      >
        © 2026 Arco Studio
      </motion.p>

    </motion.div>
  )
}