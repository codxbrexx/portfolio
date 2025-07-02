import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_ME_DATA } from '../utils/data';
import Hero from '../assets/Hero6.png';
import { FaBriefcase, FaProjectDiagram, FaCertificate } from 'react-icons/fa';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id="about" 
      className="max-w-screen-xl px-6 mx-auto py-16 md:py-28 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Enhanced Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="flex flex-col md:flex-row md:items-center mb-12"
        variants={itemVariants}
      >
        <h2 className="section-title text-3xl md:text-4xl font-bold text-white flex-1">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent flex-1"></div>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        variants={containerVariants}
      >
        {/* Image column */}
        <motion.div 
          className="md:col-span-4 relative group"
          variants={itemVariants}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img 
              src={Hero} 
              alt="Profile" 
              className="w-full h-auto object-cover rounded-lg border border-blue-500/20 shadow-xl shadow-blue-900/20" 
              whileHover={{ 
                boxShadow: "0 25px 50px rgba(15, 157, 248, 0.3)"
              }}
            />
            {/* Experience tag */}
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-400 py-2 px-4 rounded-lg shadow-lg"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <p className="text-sm font-medium text-white">
                {ABOUT_ME_DATA.stats.yearsOfExperience}+ Years Experience
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Content column */}
        <motion.div 
          className="md:col-span-8"
          variants={itemVariants}
        >
          <motion.div 
            className="glass-card p-6 md:p-8 group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(15, 157, 248, 0.2)"
            }}
          >
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-blue-300 mb-4 group-hover:text-blue-200 transition-colors"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {ABOUT_ME_DATA.title || "Full Stack Developer & Problem Solver"}
            </motion.h3>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {[
                ABOUT_ME_DATA.introduction,
                ABOUT_ME_DATA.background,
                ABOUT_ME_DATA.skills,
                ABOUT_ME_DATA.interests + " " + ABOUT_ME_DATA.careerGoals
              ].map((text, index) => (
                <motion.p 
                  key={index}
                  className="text-blue-50 text-sm md:text-base font-normal leading-relaxed group-hover:text-blue-100 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
            
            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 mt-6"
              variants={containerVariants}
            >
              {ABOUT_ME_DATA.tags?.map((tag, index) => (
                <motion.span 
                  key={index}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Stats section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        variants={containerVariants}
      >
        <InfoCard 
          icon={<FaBriefcase />}
          label="Years of Experience" 
          count={ABOUT_ME_DATA.stats.yearsOfExperience}
          description="Working with top clients"
          index={0}
        />
        <InfoCard 
          icon={<FaProjectDiagram />}
          label="Projects Completed" 
          count={ABOUT_ME_DATA.stats.projectsCompleted}
          description="With 100% client satisfaction"
          index={1}
        />
        <InfoCard 
          icon={<FaCertificate />}
          label="Certifications Earned" 
          count={ABOUT_ME_DATA.stats.clientsWorkedWith}
          description="Professional achievements"
          index={2}
        />
      </motion.div>
    </motion.section>
  );
};

const InfoCard = ({ icon, label, count, description, index }) => {
  return (
    <motion.div 
      className="card group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(15, 157, 248, 0.3)"
      }}
    >
      <motion.div 
        className="flex items-start gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        <motion.div 
          className="p-3 bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-lg text-[var(--primary)] text-2xl border border-blue-700/30"
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            boxShadow: "0 0 20px rgba(15, 157, 248, 0.5)"
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        
        <div>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold gradient-text"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
          >
            {count}
          </motion.h3>
          <p className="text-sm md:text-base font-medium text-blue-200 mb-1 group-hover:text-blue-100 transition-colors">
            {label}
          </p>
          <p className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;