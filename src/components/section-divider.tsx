'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
                                  type: "spring",
          stiffness: 100,
          damping: 16,
          mass: 0.8,
          delay: 0.2
      }}
      className="bg-muted my-6 h-8 w-1 rounded-full sm:my-12"
    ></motion.div>
  )
}
