import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>

      <motion.div
        className="w-screen hidden md:flex justify-center items-center py-4 fixed top-0 z-[999]"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.nav
          className={`max-w-screen-xl rounded-xl shadow-2xl mx-auto px-6 py-3 transition-all duration-500 ${scrolled
            ? 'bg-[#030014]/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/10'
            : 'bg-[#030014]/50 backdrop-blur-md border border-white/5'
            }`}
          whileHover={{ scale: 1.02 }}
        >
          <motion.ul
            className="flex items-center gap-14"
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { to: "hero", label: "Home", type: "scroll" },
              { to: "projects", label: "Projects", type: "scroll" },
              { to: "skills", label: "Skills", type: "scroll" },
              { to: "about", label: "About Me", type: "scroll" },
              { to: "contact", label: "Contact", type: "scroll" }
            ].map((item, index) => (
              <motion.li
                key={item.to}
                variants={menuItemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.type === "scroll" ? (
                  <Link
                    to={item.to}
                    spy
                    offset={-80}
                    className="text-xs md:text-sm font-normal text-white relative cursor-pointer group"
                    activeClass="active"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-[#0f9df8] to-blue-400 rounded transition-all duration-500 ease-out group-hover:w-full group-[.active]:w-full"></span>
                  </Link>
                ) : (
                  <RouterLink
                    to={item.to}
                    className="text-xs md:text-sm font-normal text-white relative cursor-pointer group"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-[#0f9df8] to-blue-400 rounded transition-all duration-500 ease-out group-hover:w-full"></span>
                  </RouterLink>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </motion.div>

      <motion.div
        className="p-3 fixed top-0 right-0 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          onClick={toggleMenu}
          className="w-11 h-11 text-2xl text-sky-300 bg-gradient-to-r from-blue-800/60 to-blue-900/60 border border-sky-900/80 backdrop-blur-lg flex justify-center items-center rounded md:hidden ml-auto shadow-lg shadow-blue-500/20"
          whileHover={{
            scale: 1.1,
            rotate: 180,
            boxShadow: "0 0 20px rgba(15, 157, 248, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RiCloseFill />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CgMenuMotion />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
};

export default Navbar;
