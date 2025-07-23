import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      info: "2023bcs095@sggs.ac.in",
      link: "mailto:2023bcs095@sggs.ac.in",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      info: "+91-9699848847",
      link: "tel:+919699848847",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      info: "Nanded, Maharashtra, India",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      info: "github.com/Kashaf1175",
      link: "https://github.com/Kashaf1175",
      color: "from-gray-500 to-slate-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://linkedin.com/in/Kashaf1175",
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/Kashaf1175",
      color: "hover:bg-gray-600"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      link: "mailto:2023bcs095@sggs.ac.in",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ready to start your next project? Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <MessageCircle className="mr-3 text-purple-600" size={24} sm:size={28} />
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block group"
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className={`p-2 sm:p-3 bg-gradient-to-r ${item.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm truncate">{item.info}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4 text-sm sm:text-base">Follow Me</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 sm:p-3 bg-gray-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
                <Send className="mr-3 text-purple-600" size={24} sm:size={28} />
                Send a Message
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} sm:size={20} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} sm:size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400" size={18} sm:size={20} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" size={18} sm:size={20} />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300 resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} sm:size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4 text-sm sm:text-base">Quick Contact Options</h4>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <a
                    href="mailto:2023bcs095@sggs.ac.in"
                    className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Mail size={18} sm:size={20} />
                    <span className="font-medium text-sm sm:text-base">Email Me Directly</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/Kashaf1175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Linkedin size={18} sm:size={20} />
                    <span className="font-medium text-sm sm:text-base">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;