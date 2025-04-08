import React, { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <div className="w-screen hidden md:flex justify-center items-center py-4 fixed top-0 z-50">
        <nav className="max-w-screen-xl bg-[var(--navbg)] rounded-xl shadow-lg shadow-sky-600/10 mx-auto px-6 py-3">
          <ul className="flex items-center gap-14">
            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-items">
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth spy offset={-80} className="menu-items">
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth
                spy
                offset={-80}
                className="menu-items"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link to="about" smooth spy offset={-80} className="menu-items">
                About Me
              </Link>
            </li>
            <li>
              <Link to="contact" smooth spy offset={-80} className="menu-items">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          onClick={toggleMenu}
          className="w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex justify-center items-center rounded md:hidden ml-auto"
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
