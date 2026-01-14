
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HERO_CONTENT, PROFILE_DATA } from "../utils/data";
import HeroImage from "../assets/hero-gen.png";

import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa";

const Hero = () => {
  const { name, jobTitle } = PROFILE_DATA;
  const { introduction, resumeLink } = HERO_CONTENT;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}


      <motion.div
        className="w-full max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Avatar */}
        <motion.div variants={itemVariants} className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
          <img
            src={HeroImage}
            alt={name}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          {name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-6"
        >
          {jobTitle}
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-sm"
        >
          {introduction}
        </motion.p>

        {/* Actions */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 mb-12">
          <a
            href={resumeLink}
            download
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            <FaDownload className="text-sm" />
            Download CV
          </a>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0a0a0a]/50 backdrop-blur-md border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <FaEnvelope className="text-sm" />
            Contact Me
          </Link>
        </motion.div>

        {/* Socials - Minimal Row */}
        <motion.div variants={itemVariants} className="flex items-center gap-6 text-slate-400">
          <div className="h-px w-12 bg-white/10 hidden md:block" />
          <a href="https://github.com/codxbrexx" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaGithub size={24} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:scale-110 transition-all"><FaLinkedin size={24} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 hover:scale-110 transition-all"><FaTwitter size={24} /></a>
          <div className="h-px w-12 bg-white/10 hidden md:block" />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
