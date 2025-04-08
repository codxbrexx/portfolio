import React from "react";
import { WORK_EXPERIENCE } from "../utils/data";

const WorkExperience = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 py-16 md:px-20 relative"
      id="experience"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-500">
        Professional Experience
      </h2>

      <div className="relative">
        {WORK_EXPERIENCE.map((experience, index) => (
          <WorkExperienceCard
            key={experience.company}
            company={experience.company}
            position={experience.position}
            duration={experience.duration}
            description={experience.description}
            index={index}
            isLast={index === WORK_EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const WorkExperienceCard = ({
  company,
  position,
  duration,
  description,
  index,
  isLast,
}) => {
  return (
    <div className="relative mb-16 md:mb-24">
      {/* Timeline connector */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-500 transform -translate-x-1/2 z-0">
        {isLast ? null : <div className="h-full w-full" />}
      </div>
      
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 top-6 w-5 h-5 bg-blue-600 rounded-full shadow-lg transform -translate-x-1/2 z-10 items-center justify-center">
        <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
      </div>

      {/* Content card */}
      <div className={`relative z-10 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
        <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-lg shadow-xl border border-blue-600/40 hover:border-blue-500/70 transition-all duration-300 p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{company}</h3>
              <p className="text-blue-300 font-medium">{position}</p>
            </div>
            <div className="text-white text-sm font-medium bg-blue-800 rounded-full px-4 py-1 shadow-inner shadow-blue-700/50">
              {duration}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-blue-50 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;