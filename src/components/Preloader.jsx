import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Dots spinner — 5 dots with staggered pulse animation
function DotsSpinner() {
  const dots = [
    { size: 8,  color: '#B85C38', delay: 0   },
    { size: 8,  color: '#B85C38', delay: 0.2 },
    { size: 8,  color: '#B85C38', delay: 0.4 },
    { size: 5,  color: '#C4622D', delay: 0.6 },
    { size: 3,  color: '#C4A882', delay: 0.8 },
  ]

  return (
    <div className="flex items-center gap-2.5">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width:  dot.size,
            height: dot.size,
            background: dot.color,
          }}
          animate={{
            scale:   [1, 1.6, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat:   Infinity,
            duration: 1.4,
            delay:    dot.delay,
            ease:     'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Preloader() {
  const [progress,     setProgress]     = useState(0)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(() => setShouldRender(false), 400)
          return 100
        }
        return p + 1
      })
    }, 20)
    return () => clearInterval(timer)
  }, [])

  if (!shouldRender) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={progress === 100 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-7"
    >

      {/* ===== DOTS SPINNER ===== */}
      {/* <DotsSpinner /> */}

      {/* ===== BRANDING TEXT ===== */}
      <div className="flex flex-col items-center gap-2">

      

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[15px] font-bold uppercase tracking-[0.35em]"
          style={{ color: '#1E1B18' }}
        >
          <img src="https://res.cloudinary.com/dwyoohdjk/image/upload/q_auto/f_auto/v1781637988/arco-logo_kun34g.png" className='' alt="arco-logo" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="w-10 h-px"
          style={{ background: 'rgba(184,92,56,0.5)' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-[9px] uppercase tracking-[0.38em] font-medium"
          style={{ color: '#6B6259' }}
        >
          Premium Living Spaces
        </motion.p>
      </div>

      {/* ===== PROGRESS BAR ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="w-[140px] h-[2px] rounded-full overflow-hidden mt-2"
        style={{ background: 'rgba(30,27,24,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: '#B85C38', width: `${progress}%` }}
        />
      </motion.div>

      {/* ===== COPYRIGHT ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 text-[8px] uppercase tracking-[0.25em] font-mono"
        style={{ color: 'rgba(107,98,89,0.45)' }}
      >
        © 2026 Arco Studio
      </motion.p>

    </motion.div>
  )
}