import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className='relative overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      <motion.div 
        className='relative text-center py-8 px-6'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Social links */}
        <motion.div 
          className="flex justify-center items-center gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {[
            { icon: <FaGithub />, href: "#", label: "GitHub" },
            { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
            { icon: <FaXTwitter />, href: "#", label: "Twitter" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="w-10 h-10 bg-gradient-to-r from-blue-800/40 to-blue-900/40 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-300 border border-blue-700/50 hover:border-blue-500/70 transition-all duration-300"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 0 20px rgba(15, 157, 248, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Main footer text */}
        <motion.div 
          className="text-cyan-300 text-sm md:text-base font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span>Made With </span>
          <motion.span
            className="inline-block text-red-400"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaHeart />
          </motion.span>
          <span> by Your Name • {currentYear}</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-blue-400/70 text-xs mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Happy Coding & Building Amazing Things! 🚀
        </motion.p>

        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 left-1/4 w-1 h-8 bg-gradient-to-b from-transparent to-blue-500/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-1 h-8 bg-gradient-to-b from-transparent to-blue-500/30"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;