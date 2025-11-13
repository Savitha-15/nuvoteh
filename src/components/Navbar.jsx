import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <motion.div whileHover={{ scale: 1.05 }} className="brand">Zyzen</motion.div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
