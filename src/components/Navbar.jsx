import React, { useState } from 'react';

const Navbar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            &lt;Kashaf.dev /&gt;
          </span>
        </div>

        <div className="hidden md:flex space-x-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className={`capitalize px-4 py-2 rounded-full text-sm transition duration-300 ${
                activeSection === section
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10 px-4 pb-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleScroll(section)}
              className="block w-full text-left text-white py-2 px-2 hover:bg-white/10 rounded-lg transition"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
