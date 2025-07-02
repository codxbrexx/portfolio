import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../utils/data';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      id="skills" 
      className='max-w-screen-xl px-6 mx-auto pb-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div 
        className='glass-card p-4 md:p-8'
        whileHover={{ scale: 1.02 }}
      >
        <motion.h5 
          className='section-title text-xl font-medium mb-8'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h5>
        
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          variants={containerVariants}
        >
          {SKILLS.map((skill, index) => (
            <SkillsCard 
              key={index}
              icon={skill.Icon}
              iconProps={skill.iconProps}
              title={skill.name}
              comment={skill.comment}
              index={index}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const SkillsCard = ({icon: Icon, iconProps, title, comment, index, variants}) => {
  return (
    <motion.div 
      className='card group'
      variants={variants}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(15, 157, 248, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className='flex items-center justify-between mb-5'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 }}
      >
        <p className='text-base font-semibold text-white group-hover:text-blue-300 transition-colors'>
          {title}
        </p>
        <motion.div
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            color: "#0f9df8"
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon 
            className='text-3xl text-[var(--primary)] group-hover:text-blue-400 transition-colors' 
            {...iconProps}
          />
        </motion.div>
      </motion.div>
      
      <motion.p 
        className='text-xs font-light leading-5 text-blue-100/80 group-hover:text-blue-200 transition-colors'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
      >
        {comment}
      </motion.p>
      
      {/* Skill level indicator */}
      <motion.div 
        className="mt-4 h-1 bg-blue-900/30 rounded-full overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: index * 0.1 + 0.4, duration: 1 }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-[var(--primary)] to-blue-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.random() * 40 + 60}%` }}
          transition={{ delay: index * 0.1 + 0.6, duration: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Skills;