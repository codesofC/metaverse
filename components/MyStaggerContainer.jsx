'use client'


import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import React from 'react'

const MyStaggerContainer = ({ children, styles }) => {
  return (
    <section className='paddings relative z-10'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`flex-center flex-col ${styles === 'flex-row' ? 'lg:flex-row' : null} gap-8 inner-width mx-auto`}
      >
        { children }
      </motion.div>
    </section>
  )
}

export default MyStaggerContainer