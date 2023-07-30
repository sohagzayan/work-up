import React from 'react'
import { motion } from 'framer-motion';

export default function NestedMenu({closeNestedMenu}:any) {
  return (
    <motion.div className="nested-drawer" initial={{ x: '100%' }} animate={{ x: '0%' }}>
    <div className="back-btn" onClick={closeNestedMenu}>
      Back
    </div>
    {/* Nested menu items */}
    <div className="nested-menu-item">Blog</div>
    {/* Add more nested menu items here */}
  </motion.div>
  )
}
