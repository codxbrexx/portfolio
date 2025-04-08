import React from "react";
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

  return (
    <section
      id="hero"
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="ui-circle absolute top-6 md:top-10 -left-10 md:left-0 z-0"></div>
      <div className="ui-circle absolute bottom-6 md:bottom-10 right-0 rotate-45 z-0"></div>
      
      {/* Left Content Section */}
      <div className="flex-1 text-center md:text-left z-10">
        <div className="inline-block px-4 py-2 bg-blue-800/20 rounded-full mb-4">
          <span className="text-xs md:text-sm text-blue-300 font-medium">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
          {name}
        </h1>
        
        <p className="w-full text-sm font-light text-blue-100 leading-6 my-6 lg:w-[38vw] md:text-base md:leading-7 md:my-8">
          {tagline}
        </p>
        
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="primary-btn">
            Contact Me
          </button>
          <a 
            href="#projects" 
            className="h-10 md:h-12 text-white font-medium text-sm px-6 py-2 rounded-md 
                     border border-blue-600/40 hover:border-blue-500 
                     cursor-pointer transition-all duration-300 flex items-center justify-center"
          >
            View Projects
          </a>
        </div>
      </div>
      
      {/* Profile Card Section */}
      <div className="flex gap-2 justify-center md:gap-3 lg:gap-5 z-10">
        <div className="w-full max-w-md bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6 shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img
                src={PROFILE_PIC_6}
                alt={name}
                className="hero-img object-cover float-animation"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--cardbg)] text-center rounded-md p-4 border border-blue-800/20">
            <h2 className="text-base md:text-lg font-semibold text-white">{name}</h2>
            <p className="text-blue-300 text-sm md:text-base font-medium mt-1">{jobTitle}</p>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-2">
              <HiOutlineLocationMarker className="text-blue-400"/>
              <p className="font-medium">{location}</p>
            </div>
          </div>
          
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
          
          <div className="flex items-center gap-2 flex-wrap my-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-xs bg-blue-800/30 px-3 py-1 rounded-full border border-blue-700/30 text-blue-200"
              >
                {skill}
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <SocialIcon icon={<FaGithub />} />
            <SocialIcon icon={<FaLinkedin />} />
            <SocialIcon icon={<FaXTwitter />} />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoTile = ({ icon, text, isLink = false }) => {
  return (
    <div className="flex items-center gap-4 bg-[var(--cardbg)] p-4 mt-3 rounded-md border border-blue-800/20 hover:border-blue-700/40 transition-all duration-300">
      {icon}
      {isLink ? (
        <a href={text} className="text-xs md:text-sm font-normal text-blue-200 hover:text-blue-400 transition-colors">
          {text}
        </a>
      ) : (
        <p className="text-xs md:text-sm font-normal text-blue-100">{text}</p>
      )}
    </div>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <div className="bg-blue-800/30 p-2 rounded-full hover:bg-blue-700/50 transition-all duration-300 cursor-pointer border border-blue-700/30">
      <div className="text-lg md:text-xl text-blue-300">
        {icon}
      </div>
    </div>
  );
};

export default Hero;