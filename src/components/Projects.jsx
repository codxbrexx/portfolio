import { motion } from "framer-motion";
import { PROJECTS } from "../utils/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-white mb-20 relative inline-block text-center w-full"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
          Featured Projects
        </span>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"></span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} variants={cardVariants} />
        ))}
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div
      className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
      variants={variants}
    >
      {/* Visual Header / Image Placeholder */}
      <div className="h-52 relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#1e1b4b]">
        {/* Abstract geometric overlay */}
        <div className="absolute inset-0 bg-[url('./assets/grid.svg')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-4xl font-black text-white/5 uppercase tracking-widest scale-150 group-hover:scale-110 transition-transform duration-700 select-none">
            {project.category.split(" ")[0]}
          </h3>
        </div>

        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-slate-300 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 4 && (
            <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-slate-500 border border-white/5">
              +{project.skills.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 group/btn"
            >
              <FaGithub className="text-lg text-slate-400 group-hover/btn:text-white transition-colors" />
              <span>Code</span>
            </a>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Live Demo</span>
            </a>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold bg-white/5 text-slate-500 cursor-not-allowed border border-white/5"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Coming Soon</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
