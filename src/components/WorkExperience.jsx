import React from "react";
import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "../utils/data";

const WorkExperience = () => {
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
    hidden: { opacity: 0, x: index => index % 2 === 0 ? 100 : -100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="max-w-screen-xl mx-auto px-6 py-16 md:px-20 relative"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="section-title text-3xl md:text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional Experience
      </motion.h2>

      <motion.div 
        className="relative"
        variants={containerVariants}
      >
        {/* Timeline line */}
        <motion.div 
          className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[var(--primary)] to-blue-400 transform -translate-x-1/2 z-0"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {WORK_EXPERIENCE.map((experience, index) => (
          <WorkExperienceCard
            key={experience.company}
            company={experience.company}
            position={experience.position}
            duration={experience.duration}
            description={experience.description}
            index={index}
            isLast={index === WORK_EXPERIENCE.length - 1}
            variants={cardVariants}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

const WorkExperienceCard = ({
  company,
  position,
  duration,
  description,
  index,
  isLast,
  variants,
}) => {
  return (
    <motion.div 
      className="relative mb-16 md:mb-24"
      variants={variants}
      custom={index}
      whileHover={{ scale: 1.02 }}
    >
      {/* Timeline dot */}
      <motion.div 
        className="hidden md:flex absolute left-1/2 top-6 w-6 h-6 bg-gradient-to-r from-[var(--primary)] to-blue-400 rounded-full shadow-lg transform -translate-x-1/2 z-10 items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        whileHover={{ 
          scale: 1.3,
          boxShadow: "0 0 20px rgba(15, 157, 248, 0.6)"
        }}
      >
        <motion.div 
          className="w-3 h-3 bg-white rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Content card */}
      <motion.div 
        className={`relative z-10 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.8 }}
      >
        <motion.div 
          className="glass-card p-6 group"
          whileHover={{ 
            scale: 1.02,
            rotateY: index % 2 === 0 ? 2 : -2,
            boxShadow: "0 20px 40px rgba(15, 157, 248, 0.2)"
          }}
        >
          {/* Header */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {company}
              </h3>
              <p className="text-blue-300 font-medium group-hover:text-blue-200 transition-colors">
                {position}
              </p>
            </div>
            <motion.div 
              className="text-white text-sm font-medium bg-gradient-to-r from-blue-800/80 to-blue-900/80 backdrop-blur-sm rounded-full px-4 py-1 border border-blue-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {duration}
            </motion.div>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-blue-50 leading-relaxed group-hover:text-blue-100 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {description}
          </motion.p>
          
          {/* Decorative element */}
          <motion.div 
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 + 0.7 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;