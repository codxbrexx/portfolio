import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { x: -50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="w-screen fixed top-0 z-50"
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Overlay */}
          <motion.div 
            className="w-screen h-screen bg-black/50 backdrop-blur-sm fixed top-0 -z-10" 
            onClick={() => setIsMenuOpen(false)}
            variants={overlayVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Menu Panel */}
          <motion.div 
            className="w-3/4 md:w-1/2 h-screen flex flex-col p-8 glass-card"
            variants={menuVariants}
          >
            {/* Background decoration */}
            <motion.div 
              className="ui-circle -ml-20 -mt-10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Menu Items */}
            <motion.ul 
              className="flex-1 flex flex-col justify-center space-y-6"
              variants={menuVariants}
            >
              {[
                { id: "hero", label: "Home" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Work Experience" },
                { id: "about", label: "About Me" },
              ].map((item, index) => (
                <motion.li 
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.a 
                    className="text-xl font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer block py-2"
                    onClick={() => handleScroll(item.id)}
                    whileHover={{ 
                      textShadow: "0 0 20px rgba(15, 157, 248, 0.5)"
                    }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
            
            {/* Contact Button */}
            <motion.button 
              className="primary-btn mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")}
            >
              Contact Us
            </motion.button>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;



