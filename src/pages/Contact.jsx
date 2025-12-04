import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MapPin, Phone, Send, Download, ExternalLink, Github, Linkedin, Twitter, Instagram, Facebook, MessageCircle, Users } from 'lucide-react';
import { sanitizeInput, sanitizeEmail, sanitizePhone } from '../utils/sanitize';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const [errors, setErrors] = useState({});

  // Rate limiting states
  const [submissionCount, setSubmissionCount] = useState(0);
  const [lastSubmission, setLastSubmission] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name is too long';
    }

    // Email validation - Improved regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation - Improved
    const phoneDigits = formData.phone.replace(/[^\d]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    } else if (phoneDigits.length > 15) {
      newErrors.phone = 'Phone number is too long';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please tell me what\'s on your mind';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 5000) {
      newErrors.message = 'Message is too long (max 5000 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let sanitizedValue = value;

    // Sanitize based on field type for security
    if (name === 'email') {
      sanitizedValue = sanitizeEmail(value);
    } else if (name === 'phone') {
      sanitizedValue = sanitizePhone(value);
    } else {
      sanitizedValue = sanitizeInput(value);
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot for bot detection (CRITICAL SECURITY)
    const honeypot = e.target.elements['bot-field'];
    if (honeypot && honeypot.value !== '') {
      // Silent fail for bots - no logging to prevent info leakage
      return;
    }

    // Rate limiting (CRITICAL SECURITY)
    const now = Date.now();
    if (lastSubmission && (now - lastSubmission) < 5000) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Please wait a few seconds before sending another message.'
      });
      return;
    }

    if (submissionCount >= 3) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Too many submissions. Please try again later or email me directly at Connect2RajAditya@gmail.com'
      });
      return;
    }

    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: '' });

    try {
      // Use sanitized formData instead of raw form data for security
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        // Update rate limiting counters
        setSubmissionCount(prev => prev + 1);
        setLastSubmission(now);

        // Redirect to thank you page
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again or contact me directly via email at Connect2RajAditya@gmail.com'
      });
    }
  };

  const handleDownloadResume = () => {
    // Open resume in a new tab for viewing
    window.open('/Aditya_Raj_Resume.pdf', '_blank');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'Connect2RajAditya@gmail.com',
      link: 'mailto:Connect2RajAditya@gmail.com',
      gradient: 'from-primary-500 to-purple-600'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 86510 65233',
      link: 'tel:+918651065233',
      gradient: 'from-accent-cyan to-blue-500'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Patna, Bihar, India',
      link: null,
      gradient: 'from-accent-green to-emerald-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com/adityaraj81'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/adityaraj81'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      link: 'https://instagram.com/adityaraj_81'
    },
    {
      icon: <Facebook size={24} />,
      label: 'Facebook',
      link: 'https://www.facebook.com/AdityaRaj812'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      link: 'https://twitter.com/adityaraj_81'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      link: 'https://wa.me/918651065233'
    },
    {
      icon: <Users size={24} />,
      label: 'Telegram',
      link: 'https://t.me/Unknown0User0'
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
      <div className="min-h-screen p-4 lg:p-8 space-y-8 lg:space-y-12 pt-24 lg:pt-16">
        {/* Header */}
        <div className="text-center space-y-6 mt-8 lg:mt-12 pb-8 lg:pb-12">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Let's Work Together
            </h1>
            <p className="text-text-muted text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Whether you have a project in mind, need consultation,
              or just want to connect, I'm here to help turn your vision into reality.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex justify-center items-center gap-8 lg:gap-12 pt-4">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent-cyan">24h</div>
              <div className="text-text-muted text-xs lg:text-sm">Response Time</div>
            </div>
            <div className="w-px h-8 bg-primary-500/30"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent-green">15+</div>
              <div className="text-text-muted text-xs lg:text-sm">Projects Done</div>
            </div>
            <div className="w-px h-8 bg-primary-500/30"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary-400">100%</div>
              <div className="text-text-muted text-xs lg:text-sm">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-primary-500/30 hover:border-accent-cyan/50 transition-all duration-300">
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-text-white mb-2">Send me a message</h2>
              <p className="text-text-muted text-sm lg:text-base">I'd love to hear from you. Fill out the form below and I'll get back to you soon!</p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4 lg:space-y-6"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              {/* Name Field */}
              <div className="space-y-1 lg:space-y-2">
                <label htmlFor="name" className="block text-text-white font-medium text-sm lg:text-base">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 text-sm lg:text-base ${errors.name
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                  placeholder="Raj Kumar"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs lg:text-sm">{errors.name}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1 lg:space-y-2">
                <label htmlFor="email" className="block text-text-white font-medium text-sm lg:text-base">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 text-sm lg:text-base ${errors.email
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                  placeholder="raj.kumar@gmail.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs lg:text-sm">{errors.email}</span>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-1 lg:space-y-2">
                <label htmlFor="phone" className="block text-text-white font-medium text-sm lg:text-base">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 text-sm lg:text-base ${errors.phone
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <span className="text-red-400 text-xs lg:text-sm">{errors.phone}</span>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-1 lg:space-y-2">
                <label htmlFor="subject" className="block text-text-white font-medium text-sm lg:text-base">
                  What's on your mind? *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 text-sm lg:text-base ${errors.subject
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                  placeholder="I need help with my business website..."
                />
                {errors.subject && (
                  <span className="text-red-400 text-xs lg:text-sm">{errors.subject}</span>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1 lg:space-y-2">
                <label htmlFor="message" className="block text-text-white font-medium text-sm lg:text-base">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 lg:px-4 py-2 lg:py-3 bg-bg-primary/50 border rounded-lg lg:rounded-xl text-text-white placeholder-text-muted focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-sm lg:text-base ${errors.message
                    ? 'border-red-500 focus:ring-red-500/50'
                    : 'border-primary-500/30 focus:border-accent-cyan focus:ring-accent-cyan/50'
                    }`}
                  placeholder="Namaste! I would like to discuss about my business website. Looking forward to working with you..."
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
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg lg:rounded-xl p-3 lg:p-4 text-red-400 text-center text-sm lg:text-base">
                  ❌ {formStatus.error}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Why Choose Me Section with Resume Download */}
            <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30">
              <h3 className="text-lg lg:text-xl font-semibold text-text-white mb-4">Why Work With Me?</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="text-text-muted">Fast turnaround & reliable delivery</span>
                </div>
                <div className="flex items-center gap-3 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-text-muted">Modern tech stack & best practices</span>
                </div>
                <div className="flex items-center gap-3 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className="text-text-muted">Clear communication throughout</span>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="border-t border-primary-500/20 pt-4">
                <p className="text-xs lg:text-sm text-text-muted text-center mb-3">
                  Want to know more about my experience?
                </p>
                <button
                  className="btn-primary text-sm lg:text-base w-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
                  onClick={handleDownloadResume}
                >
                  <ExternalLink size={16} className="lg:w-5 lg:h-5" />
                  View Resume
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-3 lg:space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30 hover:border-accent-cyan/60 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] group"
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="scale-75 lg:scale-100">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-text-white font-medium mb-1 text-sm lg:text-base">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-text-muted hover:text-accent-cyan transition-colors duration-300 text-sm lg:text-base break-all group-hover:text-accent-cyan"
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
              <div className="flex items-center justify-between">
                <h3 className="text-lg lg:text-xl font-semibold text-text-white">Let's Connect</h3>
                <div className="text-xs lg:text-sm text-text-muted">Follow for updates</div>
              </div>
              <div className="grid grid-cols-4 lg:grid-cols-7 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-text-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl flex items-center justify-center text-text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_5px_20px_rgba(102,126,234,0.4)] group"
                    aria-label={social.label}
                  >
                    <div className="scale-75 lg:scale-100 group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-xs lg:text-sm text-text-muted text-center">
                Drop a follow and stay updated with my latest projects and tech insights!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
