import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full Stack Developer",
    "Backend Specialist", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            {/* <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 ">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold">
                KS
              </div>
            </div> */}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kashaf Shaikh
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-12">
            <span className="inline-block transition-all duration-1000 ease-in-out">
              {texts[currentText]}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            B.Tech CSE Student at SGGS, Nanded | Building scalable web applications with modern technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:2023bcs095@sggs.ac.in?subject=Let%27s%20Connect&body=Hi%20Kashaf%2C%20I%20am%20interested%20in%20talking%20to%20you..."
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition duration-300"
              
              
            >
              Get In Touch
            </a>
              <a
                href="/Kashaf_res.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                View Resume
              </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Kashaf1175" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/Kashaf1175" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="mailto:2023bcs095@sggs.ac.in" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
            <a href="tel:+919699848847" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;