import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../utils/data";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative z-10">Education</span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[#0f9df8] to-blue-400 rounded-full"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-900/50 to-blue-800/20 rounded-lg text-[#0f9df8] text-xl border border-blue-700/30 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                        {edu.school}
                    </h3>
                    <span className="text-xs font-medium bg-blue-900/40 text-blue-200 px-3 py-1 rounded-full border border-blue-700/30 whitespace-nowrap">
                        {edu.duration}
                    </span>
                </div>
                
                <p className="text-blue-400 text-sm mt-1 mb-1 font-medium">{edu.degree}</p>
                <p className="text-slate-400 text-xs mb-3">{edu.location}</p>
                
                <div className="mt-4 pt-4 border-t border-blue-800/30">
                    <p className="text-sm text-blue-100/90 leading-relaxed mb-2">
                        {edu.description}
                    </p>
                    <p className="text-sm font-semibold text-[#0f9df8]">
                        {edu.grade}
                    </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
