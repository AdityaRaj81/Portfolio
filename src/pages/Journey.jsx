import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Star, Trophy, Target, Zap, Code2, Building, Wrench, BookOpen, Users } from 'lucide-react';

const Journey = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showStats, setShowStats] = useState(false);
  const timelineRef = useRef(null);

  const journeyData = [
    {
      type: 'current',
      icon: <Code2 size={28} />,
      date: 'Present',
      title: 'Continuous Growth',
      organization: 'Self-Development & Innovation',
      location: 'Digital World',
      description: 'Solving coding problems, building projects, and learning new technologies.',
      gradient: 'from-yellow-500 to-orange-500',
      status: 'current'
    },
    {
      type: 'education',
      icon: <GraduationCap size={28} />,
      date: '2022 - 2025',
      title: 'Bachelor of Technology in Computer Science Engineering',
      organization: 'Parul University',
      location: 'Gujarat, India',
      description: 'Focused on software development, data structures, and web technologies.',
      gradient: 'from-primary-500 to-purple-600',
      status: 'completed'
    },
    {
      type: 'work',
      icon: <Building size={28} />,
      date: '2022 (7 months)',
      title: 'Junior Engineer',
      organization: 'Wabtec Corporation',
      location: 'Bihar, India',
      description: 'Gained experience in engineering systems and technical problem-solving.',
      gradient: 'from-accent-cyan to-blue-500',
      status: 'completed'
    },
    {
      type: 'work',
      icon: <Users size={28} />,
      date: '2021 - 2022',
      title: 'Technical Apprentice',
      organization: 'General Electric',
      location: 'Bihar, India',
      description: 'Gained practical experience in engineering principles and operations.',
      gradient: 'from-accent-green to-emerald-500',
      status: 'completed'
    },
    {
      type: 'education',
      icon: <Wrench size={28} />,
      date: '2020',
      title: 'Diploma in Mechanical Engineering (Production)',
      organization: 'Technical Institute',
      location: 'Bihar, India',
      description: 'Specialized in manufacturing processes and mechanical systems design.',
      gradient: 'from-secondary-500 to-pink-500',
      status: 'completed'
    },
    {
      type: 'education',
      icon: <BookOpen size={28} />,
      date: '2017',
      title: 'Intermediate in PCM (Physics, Chemistry, Mathematics)',
      organization: 'Bihar School Examination Board (BSEB)',
      location: 'Bihar, India',
      description: 'Science stream with strong foundation in analytical and problem-solving skills.',
      gradient: 'from-orange-500 to-red-500',
      status: 'completed'
    },
    {
      type: 'education',
      icon: <Award size={28} />,
      date: '2015',
      title: 'Matriculation (Class 10th)',
      organization: 'Central Board of Secondary Education (CBSE)',
      location: 'Bihar, India',
      description: 'Strong academic foundation across multiple subjects.',
      gradient: 'from-indigo-500 to-purple-500',
      status: 'completed'
    }
  ];

  const stats = [
    { label: 'Qualifications', value: '7', icon: <Award size={20} /> },
    { label: 'Companies', value: '2', icon: <Briefcase size={20} /> },
    { label: 'Projects Built', value: '15+', icon: <Code2 size={20} /> },
    { label: 'Technologies', value: '12+', icon: <Zap size={20} /> }
  ];

  const lifeBegins = {
    year: '2000',
    age: new Date().getFullYear() - 2000,
    description: 'The journey began in the millennium year, shaping a mind curious about technology and innovation'
  };

  const certifications = [
    {
      category: 'Web Development',
      icon: <Zap size={20} />,
      items: [
        { name: 'Full Stack Web Development', issuer: 'Modern Academy', year: '2024', color: 'from-blue-500 to-cyan-500' },
        { name: 'React - The Complete Guide', issuer: 'Udemy', year: '2023', color: 'from-cyan-500 to-blue-500' },
        { name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', year: '2023', color: 'from-yellow-500 to-orange-500' }
      ]
    },
    {
      category: 'Problem Solving',
      icon: <Target size={20} />,
      items: [
        { name: 'Problem Solving (Advanced)', issuer: 'HackerRank', year: '2024', color: 'from-green-500 to-emerald-500' },
        { name: 'Data Structures & Algorithms', issuer: 'Coding Practice', year: '2024', color: 'from-purple-500 to-indigo-500' }
      ]
    }
  ];

  const extracurriculars = [
    { name: 'Technical Society Member', organization: 'College Tech Club', year: '2022-2025', icon: <Trophy size={16} /> },
    { name: 'Hackathon Participant', organization: 'Various Events', year: '2023-2024', icon: <Zap size={16} /> },
    { name: 'Workshop Organizer', organization: 'Department Events', year: '2023', icon: <Award size={16} /> },
    { name: 'Open Source Contributor', organization: 'GitHub Projects', year: '2024', icon: <Star size={16} /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    // Show stats after a delay
    setTimeout(() => setShowStats(true), 1000);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden bg-bg-secondary/80 backdrop-blur-md border-b border-border-primary p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold text-center">
          <span className="text-gradient">
            Aditya Raj
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen p-4 lg:p-8 space-y-8 lg:space-y-12 pt-24 lg:pt-16">
        {/* Life Beginning - Unique Birth Year Display */}
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-3 bg-bg-secondary/80 backdrop-blur-md rounded-full px-6 py-3 border border-border-primary">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center">
              <Calendar size={16} className="text-white" />
            </div>
            <span className="text-text-primary font-medium">Journey started in <span className="text-accent-cyan font-bold">{lifeBegins.year}</span></span>
            <div className="w-px h-6 bg-primary-500/30"></div>
            <span className="text-text-muted text-sm">{lifeBegins.age} years of growth</span>
          </div>
          <p className="text-text-muted text-sm max-w-lg mx-auto italic">
            {lifeBegins.description}
          </p>
        </div>

        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-gradient">
            My Journey
          </h1>
          <p className="text-text-muted text-sm lg:text-lg max-w-2xl mx-auto">
            The path of continuous learning and growth - from mechanical engineering to computer science
          </p>
          
          {/* Animated Stats */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-1000 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-bg-secondary/80 backdrop-blur-md rounded-xl p-4 border border-border-primary hover:border-accent-cyan transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-primary-500 group-hover:text-accent-cyan transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-text-primary">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-text-muted text-center">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeItem === null 
                ? 'bg-primary-500 text-white shadow-glow' 
                : 'bg-bg-secondary/80 text-text-muted hover:text-text-primary border border-border-primary'
            }`}
            onClick={() => setActiveItem(null)}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeItem === 'current' 
                ? 'bg-yellow-500 text-white shadow-glow' 
                : 'bg-bg-secondary/80 text-text-muted hover:text-text-primary border border-border-primary'
            }`}
            onClick={() => setActiveItem('current')}
          >
            Current
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeItem === 'education' 
                ? 'bg-accent-green text-white shadow-glow' 
                : 'bg-bg-secondary/80 text-text-muted hover:text-text-primary border border-border-primary'
            }`}
            onClick={() => setActiveItem('education')}
          >
            Education
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeItem === 'work' 
                ? 'bg-accent-cyan text-white shadow-glow' 
                : 'bg-bg-secondary/80 text-text-muted hover:text-text-primary border border-border-primary'
            }`}
            onClick={() => setActiveItem('work')}
          >
            Experience
          </button>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-cyan to-accent-green opacity-60"></div>
          <div className="absolute left-4 lg:left-8 top-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-cyan to-accent-green animate-pulse" 
               style={{ height: `${(visibleItems.length / journeyData.length) * 100}%` }}></div>

          <div className="space-y-6 lg:space-y-8">
            {journeyData.map((item, index) => {
              const isVisible = visibleItems.includes(index);
              const isFiltered = activeItem && item.type !== activeItem;
              
              return (
                <div
                  key={index}
                  className={`relative timeline-item transition-all duration-700 ${
                    isVisible && !isFiltered
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : isFiltered
                      ? 'opacity-30 translate-x-4 scale-95'
                      : 'opacity-0 translate-x-8 scale-95'
                  }`}
                  data-index={index}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-2 lg:left-6 w-4 h-4 bg-bg-secondary border-4 border-primary-500 rounded-full flex items-center justify-center z-10">
                    {/* Clean Circle Container */}
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-xl -ml-3 -mt-3 lg:-ml-4 lg:-mt-4 transition-all duration-300 border-2 border-white/20 ${
                      hoveredItem === index ? 'scale-110 shadow-2xl ring-4 ring-white/10' : ''
                    } ${item.status === 'current' ? 'animate-pulse' : ''}`}>
                      <div className="text-white opacity-90 scale-75 lg:scale-90">
                        {item.icon}
                      </div>
                    </div>
                    {item.status === 'current' && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-green rounded-full animate-ping shadow-lg"></div>
                    )}
                  </div>

                  {/* Enhanced Timeline Content */}
                  <div className="ml-14 lg:ml-20">
                    <div className={`bg-bg-secondary/80 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-border-primary transition-all duration-300 group relative overflow-hidden ${
                      hoveredItem === index 
                        ? 'border-accent-cyan shadow-glow-cyan -translate-y-2 scale-[1.02]' 
                        : 'hover:border-accent-cyan/50 hover:shadow-glow'
                    }`}>
                      
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 ${
                        hoveredItem === index ? 'opacity-5' : ''
                      }`}></div>
                      
                      {/* Card Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3 lg:mb-4 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 lg:px-3 py-1 bg-gradient-to-r ${item.gradient} text-white rounded-full text-xs lg:text-sm font-medium w-fit shadow-lg`}>
                            {item.date}
                          </span>
                          {item.status === 'current' && (
                            <span className="px-2 py-1 bg-accent-green/20 text-accent-green rounded-full text-xs font-medium animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-text-muted text-xs lg:text-sm">
                          <MapPin size={12} className="lg:w-3.5 lg:h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title and Organization */}
                      <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-300 relative z-10">
                        {item.title}
                      </h3>
                      <p className="text-primary-500 font-medium mb-3 text-sm lg:text-base relative z-10">
                        {item.organization}
                      </p>
                      
                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed text-sm lg:text-base mb-4 relative z-10">
                        {item.description}
                      </p>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gradient">
            Certifications & Achievements
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {certifications.map((category, catIndex) => (
              <div key={catIndex} className="bg-bg-secondary/80 backdrop-blur-md rounded-2xl p-6 border border-border-primary hover:border-accent-cyan transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((cert, certIndex) => (
                    <div key={certIndex} className="bg-bg-primary/30 rounded-xl p-4 hover:bg-bg-primary/50 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                          {cert.name}
                        </h4>
                        <span className={`px-2 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-xs font-medium`}>
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-gradient">
            Beyond Academics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extracurriculars.map((activity, index) => (
              <div key={index} className="bg-bg-secondary/80 backdrop-blur-md rounded-xl p-4 border border-border-primary hover:border-accent-green transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex items-start gap-3">
                  <div className="text-accent-green group-hover:scale-110 transition-transform duration-300 mt-1">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-text-primary mb-1 group-hover:text-accent-green transition-colors duration-300">
                      {activity.name}
                    </h4>
                    <p className="text-text-muted text-sm mb-1">{activity.organization}</p>
                    <span className="text-xs text-primary-500 font-medium">{activity.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Journey;