import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-screen fixed top-0 z-50 h-screen"
          initial="closed"
          animate="open"
          exit="closed"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm -z-10"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Menu Panel */}
          <motion.div
            className="w-3/4 md:w-1/2 h-full flex flex-col p-8 bg-white/5 backdrop-blur-md border-r border-white/10 shadow-2xl shadow-black/20"
            variants={menuVariants}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute -top-10 -left-20 w-[130px] h-[130px] rounded-full border-b-2 border-sky-500 opacity-70 blur-[1px]"
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
                { id: "hero", label: "Home", type: "scroll" },
                { id: "projects", label: "Projects", type: "scroll" },
                { id: "skills", label: "Skills", type: "scroll" },
                { id: "about", label: "About Me", type: "scroll" }
              ].map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.type === "scroll" ? (
                    <a
                      className="text-xl font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer block py-2"
                      onClick={() => handleScroll(item.id)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <RouterLink
                      to={item.id}
                      className="text-xl font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </RouterLink>
                  )}
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact Button */}
            <motion.button
              className="h-10 bg-gradient-to-r from-[#0f9df8] to-blue-500 text-white font-medium text-sm px-6 py-2 rounded-md border border-[#0f9df8] hover:from-transparent hover:to-transparent hover:text-[#0f9df8] transition-all duration-300 mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")}
            >
              Contact Us
            </motion.button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
