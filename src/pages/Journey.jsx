import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const Journey = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const journeyData = [
    {
      type: 'education',
      icon: <GraduationCap size={24} />,
      date: '2018 - 2022',
      title: 'Bachelor of Technology in Computer Science',
      organization: 'XYZ University',
      location: 'New Delhi, India',
      description: 'Graduated with honors, specializing in software engineering and web technologies. Completed multiple projects in full-stack development.',
      gradient: 'from-primary-500 to-purple-600'
    },
    {
      type: 'work',
      icon: <Briefcase size={24} />,
      date: 'June 2022 - Present',
      title: 'Software Engineer',
      organization: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      description: 'Building scalable web applications using React and Node.js. Led multiple feature developments and optimized system performance by 40%.',
      gradient: 'from-accent-cyan to-blue-500'
    },
    {
      type: 'achievement',
      icon: <Calendar size={24} />,
      date: 'March 2023',
      title: 'Hackathon Winner',
      organization: 'TechFest 2023',
      location: 'Mumbai, India',
      description: 'Won first prize for developing an AI-powered code review tool that increased code quality and reduced review time by 50%.',
      gradient: 'from-accent-green to-emerald-500'
    },
    {
      type: 'work',
      icon: <Briefcase size={24} />,
      date: 'Jan 2022 - May 2022',
      title: 'Software Development Intern',
      organization: 'StartupXYZ',
      location: 'Remote',
      description: 'Developed responsive web interfaces and RESTful APIs. Collaborated with cross-functional teams to deliver features on schedule.',
      gradient: 'from-secondary-500 to-pink-500'
    },
    {
      type: 'achievement',
      icon: <Calendar size={24} />,
      date: 'August 2021',
      title: 'Open Source Contributor',
      organization: 'Major Open Source Project',
      location: 'Remote',
      description: 'Contributed to popular open-source projects with 50+ merged pull requests, focusing on bug fixes and feature enhancements.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      type: 'education',
      icon: <GraduationCap size={24} />,
      date: 'July 2021',
      title: 'Full Stack Web Development Certification',
      organization: 'Coursera',
      location: 'Online',
      description: 'Completed comprehensive course covering MongoDB, Express, React, and Node.js with hands-on projects.',
      gradient: 'from-indigo-500 to-purple-500'
    }
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

    return () => observer.disconnect();
  }, []);

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
          My Journey
        </h1>
        <p className="text-text-muted text-sm lg:text-lg">
          The path of continuous learning and growth
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
        {/* Timeline Line - Mobile: Left side, Desktop: Center */}
        <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-cyan to-accent-green"></div>

        <div className="space-y-6 lg:space-y-8">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`relative timeline-item transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
              data-index={index}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2 lg:left-6 w-4 h-4 bg-bg-secondary border-4 border-primary-500 rounded-full flex items-center justify-center z-10">
                <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-text-white shadow-lg -ml-1 -mt-1 lg:-ml-2 lg:-mt-2`}>
                  <div className="scale-75 lg:scale-100">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Timeline Content */}
              <div className="ml-12 lg:ml-20">
                <div className={`bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30 hover:border-accent-cyan transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,242,254,0.2)] group`}>
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3 lg:mb-4">
                    <span className={`px-2 lg:px-3 py-1 bg-gradient-to-r ${item.gradient} text-white rounded-full text-xs lg:text-sm font-medium w-fit`}>
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1 text-text-muted text-xs lg:text-sm">
                      <MapPin size={12} className="lg:w-3.5 lg:h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {/* Title and Organization */}
                  <h3 className="text-lg lg:text-xl font-bold text-text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-primary-500 font-medium mb-3 text-sm lg:text-base">
                    {item.organization}
                  </p>
                  
                  {/* Description */}
                  <p className="text-text-light leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>
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
