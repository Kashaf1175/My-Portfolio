import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, Code2, Trophy } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      company: "Riskguard Enterprises",
      position: "Backend Developer Intern",
      duration: "May 2025 – Present",
      location: "Remote",
      type: "Current",
      technologies: ["Django", "PostgreSQL", "Git", "RESTful APIs"],
      responsibilities: [
        "Building and maintaining scalable backend systems using Django and Django REST Framework",
        "Designing RESTful APIs and integrating with databases like PostgreSQL",
        "Collaborating in Agile teams and using Git for version control"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "Cubicles Technology",
      position: "Project Intern",
      duration: "Nov 2024 – Jan 2025",
      location: "Nanded, India",
      type: "Completed",
      technologies: ["React.js", "Web3Forms", "Vercel", "Git"],
      responsibilities: [
        "Built and deployed the company website using React.js and Vercel",
        "Integrated Web3Forms for contact functionality and used Git for version control",
        "Enhanced user experience with responsive design and modern UI components"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const positions = [
    {
      organization: "Training at placement cell, SGGSIE&T, Nanded",
      position: "Human Relations(HR) Executive",
      year: "July 2025",
      location: "Nanded, India",
      description: "Actively coordinate campus placements, liaise with recruiters, manage student data, and support training initiatives. Focused on streamlining placement processes and enhancing student employability through continuous interaction with industry partners.",
      color: "from-purple-500 to-pink-500"
    },
    {
      organization: "Swag Club",
      position: "Website Coordinator",
      year: "Feb 2025",
      location: "Nanded, India",
      description: "Developed the official hackathon website with responsive UI and backend for registrations",
      color: "from-orange-500 to-red-500"
    },
    {
      organization: "Swag Club",
      position: "Event coordinator",
      year: "2024",
      location: "Nanded, India",
      description: "As an active member of the SWAG Club, I took the lead in planning and organizing fun, impactful events that brought students together. From brainstorming fresh ideas to handling logistics and making sure everything ran smoothly on the day — I truly enjoyed creating memorable experiences and working with a creative, enthusiastic team.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      organization: "Green Latur Vruksh Team",
      position: "Social Internship",
      year: "June 2024",
      description: "Contributed to environmental awareness and tree plantation drives across Latur. Worked closely with a passionate team to promote sustainability, organize community outreach, and actively participate in planting and nurturing saplings to help build a greener future.",
      color: "from-green-500 to-lime-500"
    }
  ];

  const certifications = [
    {
      name: "Hackspectra",
      issuer: "MGM College",
      date: "March 2024",
      type: "Competition",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "HackNova Hackathon",
      issuer: "Technical Event",
      date: "Feb 2025",
      type: "Competition",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Great Ninja Hackathon",
      issuer: "Coding Ninjas",
      date: "March 2024",
      type: "Competition",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform -rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional <span className="text-purple-600">Journey</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation - Mobile Responsive */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-full p-2 shadow-xl w-full sm:w-auto max-w-md sm:max-w-none">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 sm:px-6 py-3 rounded-xl sm:rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mb-2 sm:mb-0 ${
                activeTab === 'experience'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Briefcase size={18} sm:size={20} />
              <span className="text-sm sm:text-base">Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('positions')}
              className={`px-4 sm:px-6 py-3 rounded-xl sm:rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mb-2 sm:mb-0 sm:mx-2 ${
                activeTab === 'positions'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Code2 size={18} sm:size={20} />
              <span className="text-sm sm:text-base">Positions</span>
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-4 sm:px-6 py-3 rounded-xl sm:rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                activeTab === 'certifications'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <Trophy size={18} sm:size={20} />
              <span className="text-sm sm:text-base">Certifications</span>
            </button>
          </div>
        </div>

        {/* Experience Content - Mobile Responsive Timeline */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line - Hidden on very small screens */}
              <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-8 sm:mb-12 group">
                  {/* Timeline Dot - Hidden on very small screens */}
                  <div className={`hidden sm:block absolute left-4 lg:left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                  
                  {/* Experience Card */}
                  <div className="sm:ml-16 lg:ml-20 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div className="mb-3 sm:mb-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{exp.position}</h3>
                          <h4 className="text-base sm:text-lg text-purple-600 font-semibold mb-2">{exp.company}</h4>
                        </div>
                        <div className="self-start">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === 'Current' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-600">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-3">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Positions of Responsibility - Mobile Responsive Grid */}
        {activeTab === 'positions' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {positions.map((pos, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${pos.color} group-hover:h-4 transition-all duration-300`}></div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="mb-3 sm:mb-0 flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 leading-tight">{pos.position}</h3>
                        <h4 className="text-sm sm:text-base lg:text-lg text-purple-600 font-semibold leading-tight">{pos.organization}</h4>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start flex-shrink-0">
                        {pos.year}
                      </span>
                    </div>
                    
                    {pos.location && (
                      <div className="flex items-center space-x-1 text-gray-600 mb-4">
                        <MapPin size={16} />
                        <span className="text-sm">{pos.location}</span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{pos.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications - Mobile Responsive Grid */}
        {activeTab === 'certifications' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${cert.color} group-hover:h-4 transition-all duration-300`}></div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Trophy className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${cert.color} text-white p-2 rounded-lg flex-shrink-0`} />
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full ml-4">
                        {cert.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{cert.name}</h3>
                    <p className="text-purple-600 font-semibold mb-2 text-sm sm:text-base">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;