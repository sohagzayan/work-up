import React from 'react'
import { motion } from 'framer-motion';

export default function MainMenu({openNestedMenu}:any) {
  return (
    <motion.div
    className="main-drawer"
    initial={{ x: '100%' }}
    animate={{ x: openNestedMenu ? '-100%' : '0%' }}
  >
    {/* Main menu items */}
    <div className="menu-item" onClick={() => openNestedMenu('blog')}>
      Home
    </div>
    <div className="menu-item">About</div>
    <div className="menu-item">Contact</div>
    <div className="menu-item" onClick={() => openNestedMenu('new-blog')}>
      Blog
    </div>
  </motion.div>  )
}
