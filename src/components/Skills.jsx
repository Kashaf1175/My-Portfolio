import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Smartphone, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedBars, setAnimatedBars] = useState(false);

  const skillCategories = [
    {
      name: "Frontend",
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 88 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Django", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      name: "Database",
      icon: <Database size={24} />,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 78 }
      ]
    },
    {
      name: "Languages",
      icon: <Globe size={24} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "Dart (Flutter)", level: 75 }
      ]
    },
    {
      name: "Tools & Others",
      icon: <Settings size={24} />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Vercel", level: 88 },
        { name: "JWT", level: 82 }
      ]
    },
    {
      name: "Mobile",
      icon: <Smartphone size={24} />,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "Flutter", level: 75 },
        { name: "Dart", level: 75 },
        { name: "Firebase Integration", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setAnimatedBars(false);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Skills List */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className={`mr-3 p-2 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color}`}>
                    {skillCategories[activeCategory].icon}
                  </span>
                  {skillCategories[activeCategory].name} Skills
                </h3>

                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: animatedBars ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Representation */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className={`w-64 h-64 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-20 animate-pulse`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-8xl bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent font-bold animate-bounce`}>
                      {skillCategories[activeCategory].icon}
                    </div>
                  </div>
                  
                  {/* Floating skill badges */}
                  {skillCategories[activeCategory].skills.slice(0, 3).map((skill, index) => (
                    <div
                      key={index}
                      className={`absolute bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium animate-float`}
                      style={{
                        top: `${20 + index * 25}%`,
                        left: `${80 + index * 10}%`,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Overall Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">ologies</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-300">Projects</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">9.13</div>
              <div className="text-gray-300">CGPA</div>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;