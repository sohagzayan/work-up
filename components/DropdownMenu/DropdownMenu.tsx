import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/DropdownMenu/DropdownMenu.module.css"; // Import CSS as a module

export default function DropdownMenu({ menuItems, menu }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={styles["dropdown-container"]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        className={styles["dropdown-button"]}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {menu} <span><i className="ri-arrow-down-s-line text-lg font-light  font-['Jost'] text-[#202124]"></i></span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles["dropdown-content"]}
          >
            {/* Add your dropdown menu content here */}
            {menuItems?.map(({title, link}:any) => (
              <motion.p key={title + 1} whileHover={{ scale: 1.1 }}>{title}</motion.p>
            ))}
            {/* <motion.p whileHover={{ scale: 1.1 }}>Item 1</motion.p>
            <motion.p whileHover={{ scale: 1.1 }}>Item 2</motion.p>
            <motion.p whileHover={{ scale: 1.1 }}>Item 3</motion.p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
