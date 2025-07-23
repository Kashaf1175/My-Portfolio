import React, { useState } from 'react';
import useWeb3Forms from "@web3forms/react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      access_key: "5feaab23-10bc-4362-b5be-d583910b4634", 
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit",  {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("⚠️ Something went wrong!");
    }
  };

    
    // // Simulate form submission
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   alert('Message sent successfully!');
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // }, 2000);
  // };

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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-purple-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageCircle className="mr-3 text-purple-600" size={28} />
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block group"
                  >
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className={`p-3 bg-gradient-to-r ${item.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.info}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`p-3 bg-gray-800 text-white rounded-full transition-all duration-300 transform hover:scale-110 ${social.color}`}
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
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Send className="mr-3 text-purple-600" size={28} />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="relative">
                  <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" size={20} />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Quick Contact Options</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="mailto:2023bcs095@sggs.ac.in"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Mail size={20} />
                    <span className="font-medium">Email Me Directly</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/Kashaf1175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Linkedin size={20} />
                    <span className="font-medium">Connect on LinkedIn</span>
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