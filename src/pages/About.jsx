import { Download, Code, Database, Wrench, Award, Trophy } from 'lucide-react';

const About = () => {
  const skills = {
    Frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 92 },
      { name: 'Tailwind CSS', level: 87 }
    ],
    Backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 82 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 88 }
    ],
    Database: [
      { name: 'MongoDB', level: 83 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 78 }
    ],
    Tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 85 }
    ]
  };

  const codingProfiles = [
    {
      platform: 'LeetCode',
      username: 'aditya_dev',
      stats: '500+ Problems Solved',
      link: 'https://leetcode.com/aditya_dev'
    },
    {
      platform: 'HackerRank',
      username: 'aditya',
      stats: '5 Star - Problem Solving',
      link: 'https://hackerrank.com/aditya'
    },
    {
      platform: 'CodeChef',
      username: 'aditya_code',
      stats: '4 Star Coder',
      link: 'https://codechef.com/users/aditya_code'
    },
    {
      platform: 'GitHub',
      username: 'aditya',
      stats: '100+ Repositories',
      link: 'https://github.com/aditya'
    }
  ];

  const certifications = [
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      year: '2023'
    },
    {
      name: 'React - The Complete Guide',
      issuer: 'Udemy',
      year: '2023'
    },
    {
      name: 'Problem Solving (Intermediate)',
      issuer: 'HackerRank',
      year: '2024'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Coursera',
      year: '2022'
    }
  ];

  const handleDownloadResume = () => {
    console.log('Resume download initiated');
  };

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
      <div className="text-center space-y-6 lg:space-y-8">
        <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 lg:mb-8">
          About Me
        </h1>
        
        <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-primary-500/30 max-w-xs lg:max-w-md mx-auto">
          <div className="aspect-square bg-slate-800 rounded-lg overflow-hidden border-2 border-accent-cyan/30">
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              <div className="text-center">
                <div className="text-4xl lg:text-6xl mb-2 lg:mb-4">👨‍💻</div>
                <p className="font-fira text-xs lg:text-sm">Professional Photo</p>
                <p className="font-fira text-xs text-slate-500 mt-1 lg:mt-2">Replace with your image</p>
              </div>
            </div>
          </div>
        </div>

        <button 
          className="btn-primary inline-flex items-center gap-2 lg:gap-3 text-sm lg:text-base"
          onClick={handleDownloadResume}
        >
          <Download size={16} className="lg:w-5 lg:h-5" />
          Download Resume
        </button>
      </div>

      {/* Professional Summary */}
      <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-primary-500/30">
        <h2 className="text-xl lg:text-3xl font-fira text-accent-cyan mb-4 lg:mb-6 flex items-center gap-2 lg:gap-3">
          <Code size={20} className="lg:w-7 lg:h-7" />
          Professional Summary
        </h2>
        <div className="space-y-3 lg:space-y-4 text-text-light leading-relaxed text-sm lg:text-base">
          <p>
            I'm Aditya Raj, a passionate Software Engineer with a unique journey from Mechanical Engineering to the world of code. My transition was driven by an innate love for problem-solving and building impactful digital solutions.
          </p>
          <p>
            With hands-on experience at GE Transportation and a solid foundation in Computer Science Engineering, I specialize in full-stack development, creating scalable applications that bridge user needs with cutting-edge technology.
          </p>
          <p>
            My technical philosophy centers on clean code, continuous learning, and leveraging modern frameworks to deliver high-quality, maintainable software that makes a real difference.
          </p>
        </div>
      </div>

      {/* Technical Skills */}
      <section className="space-y-6 lg:space-y-8">
        <h2 className="text-xl lg:text-3xl font-bold text-center flex items-center justify-center gap-2 lg:gap-3 text-text-white">
          <Code size={20} className="lg:w-7 lg:h-7 text-primary-500" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30">
              <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 text-primary-500">{category}</h3>
              <div className="space-y-3 lg:space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-1 lg:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-white font-medium text-sm lg:text-base">{skill.name}</span>
                      <span className="text-accent-cyan font-fira text-xs lg:text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-bg-primary/50 rounded-full h-1.5 lg:h-2">
                      <div
                        className="bg-gradient-primary h-1.5 lg:h-2 rounded-full transition-all duration-700 ease-out"
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
      <section className="space-y-6 lg:space-y-8">
        <h2 className="text-xl lg:text-3xl font-bold text-center flex items-center justify-center gap-2 lg:gap-3 text-text-white">
          <Trophy size={20} className="lg:w-7 lg:h-7 text-accent-green" />
          Coding Profiles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {codingProfiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30 text-center transition-all duration-300 hover:scale-105 hover:border-accent-cyan hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] group"
            >
              <h3 className="text-lg lg:text-xl font-semibold text-text-white mb-2 group-hover:text-accent-cyan transition-colors">
                {profile.platform}
              </h3>
              <p className="text-text-muted font-fira text-xs lg:text-sm mb-2">@{profile.username}</p>
              <p className="text-accent-green font-medium text-sm lg:text-base">{profile.stats}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-6 lg:space-y-8">
        <h2 className="text-xl lg:text-3xl font-bold text-center flex items-center justify-center gap-2 lg:gap-3 text-text-white">
          <Award size={20} className="lg:w-7 lg:h-7 text-secondary-500" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-primary-500/30 flex items-start gap-3 lg:gap-4 hover:border-secondary-500 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(245,87,108,0.3)]">
              <div className="text-secondary-500 mt-1 flex-shrink-0">
                <Award size={20} className="lg:w-6 lg:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base lg:text-lg font-semibold text-text-white mb-1 lg:mb-2">{cert.name}</h3>
                <p className="text-text-muted mb-1 text-sm lg:text-base">{cert.issuer}</p>
                <p className="text-accent-green font-fira text-xs lg:text-sm">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;
