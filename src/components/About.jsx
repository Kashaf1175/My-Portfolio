import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const educationData = [
    {
      degree: "B.Tech., CSE",
      institute: "SGGS, Nanded",
      grade: "9.13 CGPA",
      year: "2023-2027",
      current: true
    },
    {
      degree: "Senior Secondary",
      institute: "Rajarshi Shahu College, Latur",
      grade: "70%",
      year: "2021-2023"
    },
    {
      degree: "Secondary",
      institute: "Wisewoods International School, Gudivada, AP",
      grade: "9.2 CGPA",
      year: "2016-2021"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Who I Am</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate B.Tech Computer Science Engineering student at SGGS, Nanded, with a strong foundation in full-stack development. Currently maintaining an excellent CGPA of 9.13, I'm dedicated to building scalable web applications and solving complex problems through technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in tech has been driven by curiosity and the desire to create meaningful digital experiences. I specialize in modern web technologies including React.js, Node.js, and various database systems, always staying updated with the latest industry trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <MapPin className="text-purple-600 mb-3" size={24} />
                <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                <p className="text-gray-600 text-sm">Nanded, Maharashtra</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Calendar className="text-purple-600 mb-3" size={24} />
                <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                <p className="text-gray-600 text-sm">1+ Years</p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-purple-600" size={28} />
              Education Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start mb-8 group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 group-hover:scale-125 ${
                    edu.current ? 'bg-purple-600' : 'bg-gray-400'
                  }`}></div>
                  
                  {/* Content Card */}
                  <div className="ml-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 w-full">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                      {edu.current && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{edu.institute}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-600 font-semibold">{edu.grade}</span>
                      <span className="text-gray-500 text-sm">{edu.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;