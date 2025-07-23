// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()} Kashaf Shaikh. All rights reserved.
      </p>
      <p className="text-xs mt-1">
        Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
