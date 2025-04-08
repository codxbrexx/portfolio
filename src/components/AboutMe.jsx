import React from 'react';
import { ABOUT_ME_DATA } from '../utils/data';
import Hero from '../assets/Hero6.png';
import { FaBriefcase, FaProjectDiagram, FaCertificate } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="about" className="max-w-screen-xl px-6 mx-auto py-16 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col md:flex-row md:items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex-1">
          About <span className="text-[var(--primary)]">Me</span>
        </h2>
        
        <div className="hidden md:block h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent flex-1"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Image column */}
        <div className="md:col-span-4 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative">
            <img 
              src={Hero} 
              alt="Profile" 
              className="w-full h-auto object-cover rounded-lg border border-blue-500/20 shadow-xl shadow-blue-900/20" 
            />
            {/* Experience tag */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-400 py-2 px-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-white">
                {ABOUT_ME_DATA.stats.yearsOfExperience}+ Years Experience
              </p>
            </div>
          </div>
        </div>
        
        {/* Content column */}
        <div className="md:col-span-8">
          <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6 md:p-8 shadow-lg hover:shadow-blue-900/10 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
              {ABOUT_ME_DATA.title || "Full Stack Developer & Problem Solver"}
            </h3>
            
            <div className="space-y-4">
              <p className="text-blue-50 text-sm md:text-base font-normal leading-relaxed">
                {ABOUT_ME_DATA.introduction}
              </p>
              
              <p className="text-blue-50 text-sm md:text-base font-normal leading-relaxed">
                {ABOUT_ME_DATA.background}
              </p>
              
              <p className="text-blue-50 text-sm md:text-base font-normal leading-relaxed">
                {ABOUT_ME_DATA.skills}
              </p>
              
              <p className="text-blue-50 text-sm md:text-base font-normal leading-relaxed">
                {ABOUT_ME_DATA.interests} {ABOUT_ME_DATA.careerGoals}
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {ABOUT_ME_DATA.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-blue-800/30 px-3 py-1 rounded-full text-xs text-blue-200 border border-blue-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <InfoCard 
          icon={<FaBriefcase />}
          label="Years of Experience" 
          count={ABOUT_ME_DATA.stats.yearsOfExperience}
          description="Working with top clients"
        />
        <InfoCard 
          icon={<FaProjectDiagram />}
          label="Projects Completed" 
          count={ABOUT_ME_DATA.stats.projectsCompleted}
          description="With 100% client satisfaction"
        />
        <InfoCard 
          icon={<FaCertificate />}
          label="Certifications Earned" 
          count={ABOUT_ME_DATA.stats.clientsWorkedWith}
          description="Professional achievements"
        />
      </div>
    </section>
  );
};

const InfoCard = ({ icon, label, count, description }) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6 shadow-lg hover:shadow-blue-900/10 transition-all duration-300 hover:border-blue-700/60">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-900/50 rounded-lg text-[var(--primary)] text-2xl">
          {icon}
        </div>
        
        <div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-[var(--primary)] bg-clip-text text-transparent">
            {count}
          </h3>
          <p className="text-sm md:text-base font-medium text-blue-200 mb-1">
            {label}
          </p>
          <p className="text-xs text-blue-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;