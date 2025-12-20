import React from "react";
import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "../utils/data";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Journey</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          Building scalable solutions and driving technical innovation.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {WORK_EXPERIENCE.map((job, index) => (
          <ExperienceCard 
            key={job.id} 
            job={job} 
            isCurrent={index === 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ job, isCurrent, index }) => {
  return (
    <motion.div
      className="relative bg-[#0a0a0a]/60 backdrop-blur-xl rounded-2xl border border-white/5 p-8 transition-all duration-300 hover:border-purple-500/20 group hover:bg-[#0a0a0a]/80 hover:shadow-2xl hover:shadow-purple-900/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {isCurrent && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl rounded-tr-xl shadow-lg">
            Current Role
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {job.position}
          </h3>
          <div className="flex items-center gap-3">
             <span className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                <FaBriefcase className="text-xs" />
                {job.company}
             </span>
             <span className="text-slate-600">•</span>
             <span className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                {job.type}
             </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
          <FaCalendarAlt className="text-xs" />
          {job.duration}
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-7 mb-6">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {job.skills?.map((skill, i) => (
          <span 
            key={i} 
            className="text-[11px] font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-white/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
