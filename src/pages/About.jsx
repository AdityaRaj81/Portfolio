import { useState } from 'react';
import { Download, Code, User, Eye, ExternalLink, Mail, Github, Trophy } from 'lucide-react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [imageError, setImageError] = useState(false);
  
  const skills = {
    'Programming & Languages': [
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'Java', level: 88, icon: '☕' },
      { name: 'SQL', level: 85, icon: '🗃️' },
      { name: 'HTML5', level: 98, icon: '🏗️' },
      { name: 'CSS3', level: 95, icon: '🎨' }
    ],
    'Frontend & UI': [
      { name: 'React.js', level: 95, icon: '⚛️' },
      { name: 'Tailwind CSS', level: 92, icon: '💨' },
      { name: 'Responsive Design', level: 90, icon: '📱' },
      { name: 'Component Architecture', level: 88, icon: '🧩' }
    ],
    'Backend & APIs': [
      { name: 'Spring Boot', level: 85, icon: '🍃' },
      { name: 'REST API', level: 90, icon: '🔗' },
      { name: 'JWT Authentication', level: 80, icon: '🔐' },
      { name: 'Microservices', level: 75, icon: '🔧' }
    ],
    'Database & DevOps': [
      { name: 'MySQL', level: 88, icon: '🐬' },
      { name: 'PostgreSQL', level: 82, icon: '🐘' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'Docker', level: 78, icon: '🐳' },
      { name: 'Git/GitHub', level: 95, icon: '🔧' }
    ]
  };

  const codingProfiles = [
    {
      platform: 'LeetCode',
      username: 'AdityaRaj81',
      stats: '500+ Problems Solved',
      achievement: 'Algorithm Expert',
      rating: '1850+',
      link: 'https://leetcode.com/u/AdityaRaj81/',
      icon: '💻',
      color: 'from-orange-500 to-yellow-500',
      badge: 'Expert'
    },
    {
      platform: 'HackerRank',
      username: 'AdityaRaj81',
      stats: '5 Star Problem Solving',
      achievement: 'Gold Badge Holder',
      rating: '2100+',
      link: 'https://www.hackerrank.com/profile/AdityaRaj81',
      icon: '⭐',
      color: 'from-emerald-500 to-green-600',
      badge: '5★'
    },
    {
      platform: 'CodeChef',
      username: 'AdityaRaj81',
      stats: '4 Star Coder',
      achievement: 'Competitive Programmer',
      rating: '1950+',
      link: 'https://www.codechef.com/users/adityaraj81',
      icon: '🍳',
      color: 'from-amber-500 to-orange-600',
      badge: '4★'
    },
    // {
    //   platform: 'GitHub',
    //   username: 'AdityaRaj81',
    //   stats: '50+ Repositories',
    //   achievement: 'Open Source Contributor',
    //   rating: '100+ Commits',
    //   link: 'https://github.com/AdityaRaj81',
    //   icon: '🐙',
    //   color: 'from-purple-600 to-indigo-600',
    //   badge: 'Active'
    // }
  ];

  const handleDownloadResume = () => {
    // Create a link element for downloading the resume
    const link = document.createElement('a');
    link.href = '/Aditya_resume.pdf'; // Path to your resume in the public folder
    link.download = 'Aditya_Raj_Resume.pdf'; // Name for the downloaded file
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className="min-h-screen p-4 lg:p-8 space-y-4 lg:space-y-6 pt-24 lg:pt-6">
        {/* Header Section */}
        <div className="text-center space-y-3 lg:space-y-4 animate-[fadeInUp_0.8s_ease] mt-4 lg:mt-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-gradient mb-3 lg:mb-4">
            About Me
          </h1>
          
          {/* Profile Card */}
          <div className="bg-bg-secondary/80 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-border-primary max-w-xs lg:max-w-md mx-auto hover:border-primary-500 transition-all duration-300 hover:shadow-glow group animate-float">
            <div className="aspect-square bg-bg-tertiary rounded-lg overflow-hidden border-2 border-accent-cyan/30 group-hover:border-accent-cyan transition-all duration-300 relative">
              {!imageError ? (
                <img 
                  src="/profile.png" 
                  alt="Aditya Raj - Software Engineer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImageError(true)}
                />
              ) : (
                // Fallback content if image fails to load
                <div className="w-full h-full flex items-center justify-center text-text-muted bg-bg-tertiary">
                  <div className="text-center">
                    <div className="text-4xl lg:text-6xl mb-2 lg:mb-4 group-hover:scale-110 transition-transform duration-300">👨‍💻</div>
                    <p className="font-fira text-xs lg:text-sm text-text-primary">Aditya Raj</p>
                    <p className="font-fira text-xs text-text-muted mt-1 lg:mt-2">Software Engineer</p>
                  </div>
                </div>
              )}
              {/* Shimmer effect overlay */}
              {!imageError && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>
              )}
            </div>
          </div>

          {/* Resume Download Button */}
          <button 
            className="inline-flex items-center gap-2 lg:gap-3 text-sm lg:text-base bg-gradient-primary hover:shadow-glow-lg px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            onClick={handleDownloadResume}
          >
            <Download size={16} className="lg:w-5 lg:h-5" />
            Download Resume
          </button>
        </div>

        {/* Professional Summary */}
        <div className="bg-bg-secondary/80 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-border-primary hover:border-primary-500 transition-all duration-300 hover:shadow-glow animate-[fadeInUp_0.8s_ease_0.2s] animate-fill-both">
          <h2 className="text-xl lg:text-3xl font-bold text-gradient mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3">
            <div className="text-primary-500">
              <User size={20} className="lg:w-7 lg:h-7" />
            </div>
            Professional Summary
          </h2>
          <div className="space-y-2 lg:space-y-3 text-text-secondary leading-relaxed text-sm lg:text-base">
            <p className="hover:text-text-primary transition-colors duration-300">
              I'm <span className="text-gradient font-semibold">Aditya Raj</span>, a passionate Software Engineer currently pursuing B.Tech in Computer Science Engineering at Parul University. My journey from Mechanical Engineering to the world of code represents my dedication to continuous learning and innovation.
            </p>
            <p className="hover:text-text-primary transition-colors duration-300">
              With hands-on experience gained through technical apprenticeships at <span className="text-accent-cyan font-medium">General Electric</span> and <span className="text-accent-cyan font-medium">Wabtec Corporation</span>, I bring a unique perspective that combines engineering precision with software development creativity.
            </p>
            <p className="hover:text-text-primary transition-colors duration-300">
              My expertise spans across <span className="text-accent-green font-medium">full-stack development</span>, with proficiency in modern JavaScript frameworks, backend technologies, and database management. I'm passionate about <span className="text-secondary-500 font-medium">clean code architecture</span> and building scalable applications that solve real-world problems.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <section className="space-y-3 lg:space-y-4 animate-[fadeInUp_0.8s_ease_0.4s] animate-fill-both">
          <h2 className="text-xl lg:text-3xl font-bold text-center flex items-center justify-center gap-2 lg:gap-3 text-text-primary">
            <div className="text-primary-500">
              <Code size={20} className="lg:w-7 lg:h-7" />
            </div>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <div 
                key={category} 
                className="bg-bg-secondary/80 backdrop-blur-md rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-border-primary hover:border-primary-500 transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-gradient flex items-center gap-2">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {category === 'Programming & Languages' ? '⌨️' : 
                     category === 'Frontend & UI' ? '🎨' : 
                     category === 'Backend & APIs' ? '⚙️' :
                     category === 'Database & DevOps' ? '🗄️' : '🛠️'}
                  </span>
                  {category}
                </h3>
                <div className="space-y-2 lg:space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="space-y-1 lg:space-y-2 group/skill cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${category}-${skill.name}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg group-hover/skill:scale-110 transition-transform duration-300">{skill.icon}</span>
                          <span className="text-text-primary font-medium text-sm lg:text-base group-hover/skill:text-gradient transition-colors duration-300">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-accent-cyan font-fira text-xs lg:text-sm">{skill.level}%</span>
                          {hoveredSkill === `${category}-${skill.name}` && (
                            <Eye size={14} className="text-primary-500 animate-pulse" />
                          )}
                        </div>
                      </div>
                      <div className="w-full bg-bg-primary/50 rounded-full h-1.5 lg:h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-primary h-1.5 lg:h-2 rounded-full transition-all duration-700 ease-out hover:shadow-glow ${
                            hoveredSkill === `${category}-${skill.name}` ? 'animate-glow-pulse' : ''
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Profiles */}
        <section className="space-y-3 lg:space-y-4 animate-[fadeInUp_0.8s_ease_0.6s] animate-fill-both">
          <h2 className="text-xl lg:text-3xl font-bold text-center flex items-center justify-center gap-2 lg:gap-3 text-text-primary">
            <div className="text-accent-green">
              <Trophy size={20} className="lg:w-7 lg:h-7" />
            </div>
            Coding Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {codingProfiles.map((profile, index) => (
              <a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-secondary/80 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-3 border border-border-primary text-center transition-all duration-300 hover:scale-105 hover:border-accent-cyan hover:shadow-glow-cyan group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 transition-opacity duration-400 rounded-xl lg:rounded-2xl group-hover:opacity-10`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 relative">
                      {profile.icon}
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent-cyan to-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                    </div>
                    <div className={`px-2 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${profile.color} text-white`}>
                      {profile.badge}
                    </div>
                  </div>
                  
                  <div className="text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg lg:text-xl font-semibold text-text-primary group-hover:text-gradient transition-colors duration-300 flex items-center gap-2">
                        {profile.platform}
                        <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-text-muted font-fira text-xs lg:text-sm">@{profile.username}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-accent-green font-medium text-sm">{profile.stats}</span>
                        <span className="text-accent-cyan text-xs font-mono">{profile.rating}</span>
                      </div>
                      <p className="text-text-muted text-xs italic group-hover:text-text-secondary transition-colors duration-300">
                        {profile.achievement}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className="text-center animate-[fadeInUp_0.8s_ease_0.8s] animate-fill-both">
          <div className="bg-bg-secondary/80 backdrop-blur-md rounded-2xl lg:rounded-3xl p-4 lg:p-6 border border-border-primary hover:border-accent-cyan transition-all duration-300 hover:shadow-glow-cyan">
            <h3 className="text-xl lg:text-2xl font-bold text-gradient mb-3">
              Let's Build Something Amazing Together!
            </h3>
            <p className="text-text-muted mb-4 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to collaborate on innovative projects and explore new opportunities. 
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="inline-flex items-center gap-2 bg-gradient-primary hover:shadow-glow-lg px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => window.location.href = '/contact'}
              >
                <Mail size={18} />
                Get In Touch
              </button>
              <button 
                className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://github.com/AdityaRaj81';
                  link.target = '_blank';
                  link.rel = 'noopener noreferrer';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Github size={18} />
                View GitHub
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;