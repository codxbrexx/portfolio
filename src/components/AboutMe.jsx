import { motion } from "framer-motion";
import { PERSONAL_BRAND_DATA } from "../utils/data";
import { FaCode, FaRocket, FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const PersonalBrand = () => {

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden"
    >

      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Personal Brand
        </h2>
        <p className="text-blue-200/60 max-w-2xl mx-auto text-lg">
          Beyond the code - discover the philosophy, journey, and vision that drive my development approach.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div
          className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 group"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaCode className="text-2xl text-purple-400" />
            <h3 className="text-xl font-bold text-white">Developer Philosophy</h3>
          </div>
          <div className="space-y-4">
            {PERSONAL_BRAND_DATA.philosophy.map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                <IoIosArrowForward className="mt-1 text-purple-400/60" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <FaRocket className="text-2xl text-blue-400" />
            <h3 className="text-xl font-bold text-white">{PERSONAL_BRAND_DATA.journey.title}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed relative z-10">
            {PERSONAL_BRAND_DATA.journey.description}
          </p>
        </motion.div>

        <motion.div
          className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-yellow-500/30 transition-all duration-500"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FaStar className="text-2xl text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Core Values</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {PERSONAL_BRAND_DATA.values.map((val, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/5">
                <h4 className="text-white font-medium text-sm mb-1">{val.title}</h4>
                <p className="text-xs text-gray-500">{val.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-red-500/30 transition-all duration-500"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1 rounded bg-red-500/10">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white">{PERSONAL_BRAND_DATA.goals.title}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {PERSONAL_BRAND_DATA.goals.description}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {PERSONAL_BRAND_DATA.stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <div className="text-3xl mb-2">
              {index === 0 && "🚀"}
              {index === 1 && "🤖"}
              {index === 2 && "🛠️"}
              {index === 3 && "⭐"}
            </div>
            <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
            <p className="text-sm font-semibold text-gray-300 mb-2">{stat.label}</p>
            <p className="text-xs text-gray-600">{stat.subtext}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-gray-400 ml-2 font-mono">developer.js</span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
          <pre className="text-green-400">
            <code>{PERSONAL_BRAND_DATA.codeSnippet}</code>
          </pre>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-blue-400">➜</span>
            <span className="text-pink-400">~</span>
            <span className="animate-pulse w-2 h-4 bg-gray-500 inline-block align-middle" />
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default PersonalBrand;
