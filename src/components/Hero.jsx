import React from "react";
import { motion } from "framer-motion";
import PROFILE_PIC from "../assets/Hero.jpg";
import PROFILE_PIC_6 from "../assets/Hero6.png";
import { PROFILE_DATA } from "../utils/data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail, FiExternalLink } from "react-icons/fi";
import { MdOutlineBadge } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const {
    name,
    tagline,
    jobTitle,
    location,
    yearsOfExperience,
    skills,
    email,
    website,
  } = PROFILE_DATA;

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="hero"
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Background Elements */}
      <motion.div 
        className="ui-circle absolute top-6 md:top-10 -left-10 md:left-0 z-0"
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
      <motion.div 
        className="ui-circle absolute bottom-6 md:bottom-10 right-0 rotate-45 z-0"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Left Content Section */}
      <motion.div 
        className="flex-1 text-center md:text-left z-10"
        variants={itemVariants}
      >
        <motion.div 
          className="inline-block px-4 py-2 bg-gradient-to-r from-blue-800/30 to-blue-900/30 backdrop-blur-sm rounded-full mb-4 border border-blue-700/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xs md:text-sm text-blue-300 font-medium">
            Full Stack Developer
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl font-bold gradient-text"
          variants={itemVariants}
        >
          {name}
        </motion.h1>
        
        <motion.p 
          className="w-full text-sm font-light text-blue-100 leading-6 my-6 lg:w-[38vw] md:text-base md:leading-7 md:my-8"
          variants={itemVariants}
        >
          {tagline}
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center md:justify-start"
          variants={itemVariants}
        >
          <motion.button 
            className="primary-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
          <motion.a 
            href="#projects" 
            className="h-10 md:h-12 text-white font-medium text-sm px-6 py-2 rounded-md 
                     border border-blue-600/40 hover:border-blue-500 
                     cursor-pointer transition-all duration-300 flex items-center justify-center
                     hover:bg-blue-600/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Profile Card Section */}
      <motion.div 
        className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-10"
        variants={cardVariants}
      >
        <motion.div 
          className="w-full max-w-md glass-card p-6"
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <motion.img
                src={PROFILE_PIC_6}
                alt={name}
                className="hero-img object-cover"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 rgba(15, 157, 248, 0.4)",
                    "0 0 20px rgba(15, 157, 248, 0.8)",
                    "0 0 0 rgba(15, 157, 248, 0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-6 h-6 bg-blue-400 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-[var(--cardbg)]/80 to-blue-950/60 backdrop-blur-sm text-center rounded-md p-4 border border-blue-800/30"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-base md:text-lg font-semibold text-white">{name}</h2>
            <p className="text-blue-300 text-sm md:text-base font-medium mt-1">{jobTitle}</p>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-2">
              <HiOutlineLocationMarker className="text-blue-400"/>
              <p className="font-medium">{location}</p>
            </div>
          </motion.div>
          
          <InfoTile 
            icon={<FiMail size={18} className="text-blue-400"/>}
            text={email}
          />
          
          <InfoTile 
            icon={<MdOutlineBadge size={18} className="text-blue-400"/>}
            text={`${yearsOfExperience} Years of Experience`}
          />
          
          {website && (
            <InfoTile 
              icon={<FiExternalLink size={18} className="text-blue-400"/>}
              text={website}
              isLink
            />
          )}
          
          <motion.div 
            className="flex items-center gap-2 flex-wrap my-4"
            variants={itemVariants}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-badge"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-3 mt-4"
            variants={itemVariants}
          >
            <SocialIcon icon={<FaGithub />} />
            <SocialIcon icon={<FaLinkedin />} />
            <SocialIcon icon={<FaXTwitter />} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const InfoTile = ({ icon, text, isLink = false }) => {
  return (
    <motion.div 
      className="flex items-center gap-4 bg-gradient-to-br from-[var(--cardbg)]/80 to-blue-950/60 backdrop-blur-sm p-4 mt-3 rounded-md border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300"
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {isLink ? (
        <a href={text} className="text-xs md:text-sm font-normal text-blue-200 hover:text-blue-400 transition-colors">
          {text}
        </a>
      ) : (
        <p className="text-xs md:text-sm font-normal text-blue-100">{text}</p>
      )}
    </motion.div>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-800/40 to-blue-900/40 backdrop-blur-sm p-2 rounded-full hover:from-blue-700/50 hover:to-blue-800/50 transition-all duration-300 cursor-pointer border border-blue-700/30"
      whileHover={{ 
        scale: 1.2, 
        rotate: 360,
        boxShadow: "0 0 20px rgba(15, 157, 248, 0.5)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="text-lg md:text-xl text-blue-300">
        {icon}
      </div>
    </motion.div>
  );
};

export default Hero;