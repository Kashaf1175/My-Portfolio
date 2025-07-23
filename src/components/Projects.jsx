import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Code, Database, Smartphone, Globe, Eye } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "KnockNFix – Hyperlocal Services Finder",
      description: "A full-stack hyperlocal service platform that connects users with nearby service providers. Features user authentication, profile management, feedback system, and an admin panel for service moderation.",
      duration: "May 2025 – Present",
      status: "In Development",
      technologies: ["EJS", "Node.js", "Express.js", "MongoDB", "JWT", "Chatbot Integration"],
      features: [
        "User authentication and profile management",
        "Service provider matching algorithm",
        "Real-time feedback and rating system",
        "Admin panel for service moderation",
        "Integrated help-line chatbot",
        "Responsive web design"
      ],
      category: "Full Stack",
      color: "from-blue-500 to-cyan-500",
      icon: <Globe size={24} />
    },
    {
      id: 2,
      title: "Doctor Appointment System",
      description: "A comprehensive doctor appointment scheduling application built with React.js and Firebase. Features real-time appointment booking, user authentication, and responsive design for mobile devices.",
      duration: "Nov 2024",
      status: "Completed",
      technologies: ["React.js", "Bootstrap", "Firebase", "Authentication", "Real-time Database"],
      features: [
        "Real-time appointment scheduling",
        "Firebase authentication system",
        "Responsive Bootstrap UI",
        "Doctor and patient dashboards",
        "Appointment history tracking",
        "Mobile-friendly interface"
      ],
      category: "Frontend",
      color: "from-green-500 to-emerald-500",
      icon: <Smartphone size={24} />
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, animated portfolio website showcasing my skills and projects. Built with React.js and Tailwind CSS, featuring smooth animations, responsive design, and interactive components.",
      duration: "Current",
      status: "Live",
      technologies: ["React.js", "Tailwind CSS", "Lucide React", "Animations", "Responsive Design"],
      features: [
        "Smooth scroll animations",
        "Interactive skill visualization",
        "Responsive design",
        "Modern UI/UX",
        "Contact form integration",
        "Performance optimized"
      ],
      category: "Frontend",
      color: "from-purple-500 to-pink-500",
      icon: <Code size={24} />
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                {/* Header */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Project Icon & Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' ? 'bg-green-100 text-green-600' :
                      project.status === 'In Development' ? 'bg-blue-100 text-blue-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center text-gray-400 text-xs mb-6">
                    <Calendar size={14} className="mr-2" />
                    {project.duration}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-medium backdrop-blur-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm">
                      <Github size={16} />
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay with Features */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center p-8`}>
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-lg font-bold mb-4">Key Features</h4>
                    <ul className="space-y-2 text-sm">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-300 text-sm">Major Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-pink-400 mb-2">15+</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-gray-300 text-sm">Live Projects</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Responsive</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
