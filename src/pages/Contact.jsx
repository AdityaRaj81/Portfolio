import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: '' });

    setTimeout(() => {
      setFormStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: '' });
      }, 5000);
    }, 2000);
  };

  const handleDownloadResume = () => {
    console.log('Resume download initiated');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'aditya.dev@email.com',
      link: 'mailto:aditya.dev@email.com',
      gradient: 'from-primary-500 to-purple-600'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      gradient: 'from-accent-cyan to-blue-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Bangalore, India',
      link: null,
      gradient: 'from-accent-green to-emerald-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com/aditya'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/aditya'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      link: 'https://twitter.com/aditya'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden bg-bg-secondary/60 backdrop-blur-[10px] border-b border-primary-500/30 p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Aditya Raj
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen p-4 lg:p-8 space-y-8 lg:space-y-12 pt-20 lg:pt-0">
        {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-text-muted text-sm lg:text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-primary-500/30">
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            {/* Name Field */}
            <div className="space-y-1 lg:space-y-2">
              <label htmlFor="name" className="block text-text-white font-medium text-sm lg:text-base">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 text-sm lg:text-base ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <span className="text-red-400 text-xs lg:text-sm">{errors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-1 lg:space-y-2">
              <label htmlFor="email" className="block text-text-white font-medium text-sm lg:text-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 text-sm lg:text-base ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="text-red-400 text-xs lg:text-sm">{errors.email}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1 lg:space-y-2">
              <label htmlFor="message" className="block text-text-white font-medium text-sm lg:text-base">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm lg:text-base ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                }`}
                placeholder="Your message here..."
                rows="5"
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-xs lg:text-sm">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm lg:text-base"
              disabled={formStatus.loading}
            >
              {formStatus.loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-text-white/30 border-t-text-white rounded-full animate-spin"></div>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={16} className="lg:w-5 lg:h-5" />
                  Send Message
                </span>
              )}
            </button>

            {/* Success Message */}
            {formStatus.success && (
              <div className="bg-accent-green/20 border border-accent-green/30 rounded-lg lg:rounded-xl p-3 lg:p-4 text-accent-green text-center text-sm lg:text-base">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 lg:space-y-8">
          {/* Info Cards */}
          <div className="space-y-3 lg:space-y-4">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,242,254,0.2)] group"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-text-white shadow-lg flex-shrink-0`}>
                    <div className="scale-75 lg:scale-100">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-text-white font-medium mb-1 text-sm lg:text-base">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-text-muted hover:text-accent-cyan transition-colors duration-300 text-sm lg:text-base break-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-muted text-sm lg:text-base">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30 space-y-3 lg:space-y-4">
            <h3 className="text-lg lg:text-xl font-semibold text-text-white">Connect With Me</h3>
            <div className="flex gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-text-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl flex items-center justify-center text-text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_5px_20px_rgba(102,126,234,0.4)]"
                  aria-label={social.label}
                >
                  <div className="scale-75 lg:scale-100">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <button 
            className="w-full btn-primary text-sm lg:text-base"
            onClick={handleDownloadResume}
          >
            <Download size={16} className="lg:w-5 lg:h-5" />
            Download Resume
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
