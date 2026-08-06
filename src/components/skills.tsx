'use client'

import { motion } from 'framer-motion'
import type { Variants } from "framer-motion";

import { skillsData } from '@/lib/data'

const fadeInAnimationVariants :  Variants = {
  initial: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    filter: "blur(8px)",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
      mass: 0.8,
      delay: index * 0.15,
    },
  }),
}

export default function Skills() {
  return (
    <div className="mt-10  flex w-full flex-wrap justify-center gap-10 px-5 sm:px-0 md:mt-14 lg:justify-between">
      {skillsData.map(({ name, icon }, index) => (
        <motion.div
          key={name}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  )
}
