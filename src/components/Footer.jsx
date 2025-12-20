import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full py-8 mt-20 border-t border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">


      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-light text-slate-400">
            <p>
                &copy; {new Date().getFullYear()} <span className="text-white font-medium">Mozammil Ali</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 rounded-full px-1 py-1 border border-white/5">
                <div className="p-1.5 rounded-full bg-white/10 text-yellow-300 shadow-sm cursor-not-allowed">
                    <FiSun size={14} />
                </div>
                <div className="p-1.5 rounded-full text-slate-500 cursor-not-allowed">
                    <FiMoon size={14} />
                </div>
            </div>

            <div className="h-4 w-px bg-white/10 mx-2" />

            <div className="flex gap-5 text-slate-400">
                <a href="https://github.com/codxbrexx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <FaTwitter size={20} />
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
