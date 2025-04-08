import React from "react";

const MobileNavbar = ({ isOpen, setIsMenuOpen }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen fixed top-0 z-50">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-[var(--background)]">
        <div className="ui-circle -ml-20 -mt-10"/>
          <ul>
            <li className="mb-5">
              <a className="menu-item" onClick={() => handleScroll("hero")}>
                Home
              </a>
            </li>
            <li className="mb-5">
              <a className="menu-item" onClick={() => handleScroll("skills")}>
                Skills
              </a>
            </li>
            <li className="mb-5">
              <a className="menu-item" onClick={() => handleScroll("experience")}>
                Work Experience
              </a>
            </li>
            <li className="mb-5">
              <a className="menu-item" onClick={() => handleScroll("about")}>
                About Me
              </a>
            </li>
            
          </ul>
          <button className="h-10 bg-[var(--primary)] text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-[var(--primary)] md:block" onClick={() => handleScroll("contact")}>
              Contact Us
          </button>
      </div>
      <div className="w-screen h-screen bg-[var(--overlaybg)] fixed top-0 -z-10" onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export default MobileNavbar;



