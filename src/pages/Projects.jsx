import { useState } from 'react';
import { ExternalLink, Github, Star, Users, TrendingUp, Calendar, Code, DollarSign } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Expensoo',
      subtitle: 'AI-Powered Expense Tracker',
      description: 'Enterprise-grade financial management platform featuring AI-powered transaction categorization, real-time bank synchronization, and predictive analytics. Trusted by 50,000+ users to manage their finances smarter and save ₹50,000+ annually through intelligent insights and automated budgeting.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      technologies: ['React.js', 'Node.js', 'AI/ML', 'MongoDB', 'Vercel'],
      github: 'https://github.com/AdityaRaj81',
      demo: 'https://expensoo-raj.vercel.app/',
      status: 'Live & Growing',
      stats: '50K+ Users',
      highlight: 'Featured',
      category: 'FinTech SaaS',
      achievements: ['95% AI accuracy', 'Bank-grade security', '50K+ active users', 'Real-time sync']
    },
    {
      id: 2,
      title: 'RxFlow',
      subtitle: 'Healthcare Management System',
      description: 'Comprehensive pharmacy management solution with intelligent inventory tracking, automated billing system, and real-time analytics. Streamlining operations for 100+ medical shops across 50+ cities, processing 10M+ prescriptions with 99.9% uptime reliability.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['React.js', 'Express.js', 'PostgreSQL', 'Node.js', 'REST API'],
      github: 'https://github.com/AdityaRaj81',
      demo: 'https://rxflow.vercel.app/',
      status: 'Production Ready',
      stats: '100+ Shops',
      highlight: 'Popular',
      category: 'Healthcare SaaS',
      achievements: ['10M+ prescriptions', '99.9% uptime', 'Multi-store support', 'Real-time inventory']
    },
    {
      id: 3,
      title: 'BTS Consulting',
      subtitle: 'Digital Marketing Platform',
      description: 'Modern, conversion-optimized business website for a leading digital marketing agency. Features responsive design, SEO optimization, and engaging user experience. Showcases comprehensive digital marketing services including social media strategy and brand development.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify'],
      github: 'https://github.com/AdityaRaj81',
      demo: 'https://btsconsulting.netlify.app/',
      status: 'Live',
      stats: 'Enterprise',
      highlight: 'Professional',
      category: 'Business Web',
      achievements: ['Mobile-first design', 'SEO optimized', 'Fast loading (<2s)', 'Cross-browser compatible']
    },
    {
      id: 4,
      title: '30 Days 30 Projects',
      subtitle: 'JavaScript Mastery Challenge',
      description: 'Intensive coding challenge featuring 30 unique projects built with vanilla JavaScript, HTML5, and CSS3. Demonstrates strong fundamentals in DOM manipulation, API integration, and creative problem-solving without relying on frameworks.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'DOM APIs', 'CSS Animations'],
      github: 'https://github.com/AdityaRaj81/30-Days-30-Projects',
      demo: 'https://adityaraj81.github.io/30-Days-30-Projects/',
      status: 'Completed',
      stats: '30 Projects',
      highlight: 'Learning Journey',
      category: 'Educational',
      achievements: ['30-day challenge', 'Pure JavaScript', 'No frameworks', 'Creative solutions']
    },
    {
      id: 5,
      title: '30 React Projects',
      subtitle: 'Modern React Development',
      description: 'Comprehensive collection of 30 production-ready React applications showcasing modern development patterns, hooks, state management, and component architecture. Features real-world use cases from e-commerce to social media integrations.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      technologies: ['React.js', 'Hooks', 'Context API', 'Tailwind CSS', 'Modern JS'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'In Development',
      stats: '30 Apps',
      highlight: 'Latest Work',
      category: 'Educational',
      achievements: ['Modern patterns', 'Reusable components', 'Best practices', 'Real-world apps']
    },
    {
      id: 6,
      title: 'Smart Calculator',
      subtitle: 'Modern Calculator App',
      description: 'Feature-rich calculator with scientific functions, history tracking, and beautiful UI. Built with vanilla JavaScript to showcase DOM manipulation and event handling skills. Includes theme switching and keyboard support.',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=600&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'Completed',
      stats: 'Beginner',
      highlight: 'Simple',
      category: 'Utility',
      achievements: ['Scientific operations', 'History feature', 'Keyboard support', 'Dark/Light theme']
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      subtitle: 'Real-Time Weather App',
      description: 'Beautiful weather application with 5-day forecast, location search, and real-time updates. Integrates OpenWeather API for accurate weather data. Features animated weather icons and responsive design.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop',
      technologies: ['React', 'Weather API', 'CSS3', 'Geolocation'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'Completed',
      stats: 'Beginner',
      highlight: 'Simple',
      category: 'Utility',
      achievements: ['API integration', '5-day forecast', 'Location search', 'Animated icons']
    },
    {
      id: 8,
      title: 'Task Manager Pro',
      subtitle: 'Smart Todo Application',
      description: 'Advanced task management app with categories, priorities, deadlines, and progress tracking. Features drag-and-drop functionality, local storage persistence, and productivity analytics.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
      technologies: ['React', 'Local Storage', 'CSS3', 'Drag & Drop'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'Completed',
      stats: 'Beginner',
      highlight: 'Simple',
      category: 'Productivity',
      achievements: ['Drag & drop', 'Categories & tags', 'Priority levels', 'Analytics dashboard']
    },
    {
      id: 9,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Shopping Site',
      description: 'Complete e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard. Planning to integrate Razorpay for payments and implement AI-powered product recommendations.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'AI/ML'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'Planning',
      stats: 'Future',
      highlight: 'Coming Soon',
      category: 'E-Commerce',
      achievements: ['Payment gateway', 'Admin dashboard', 'AI recommendations', 'Inventory system']
    },
    {
      id: 10,
      title: 'DevConnect',
      subtitle: 'Developer Social Network',
      description: 'Professional networking platform for developers with profile portfolios, project showcases, collaboration tools, and job board. Planning real-time chat, code collaboration, and tech event listings.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'Planning',
      stats: 'Future',
      highlight: 'Coming Soon',
      category: 'Social Network',
      achievements: ['Real-time chat', 'Code collaboration', 'Job board', 'Event listings']
    },
    {
      id: 11,
      title: 'AI Content Generator',
      subtitle: 'AI-Powered Writing Assistant',
      description: 'Advanced content generation tool using GPT models for blog posts, social media content, emails, and marketing copy. Planning multiple AI models, template library, and SEO optimization features.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'NLP'],
      github: 'https://github.com/AdityaRaj81',
      demo: '#',
      status: 'Planning',
      stats: 'Future',
      highlight: 'Coming Soon',
      category: 'AI/ML',
      achievements: ['GPT integration', 'SEO optimization', 'Template library', 'Multi-language']
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
      <div className="min-h-screen p-4 lg:p-8 space-y-8 lg:space-y-12 pt-20 lg:pt-8">
        {/* Header */}
        <div className="text-center space-y-6 pb-8 lg:pb-12 mt-8 lg:mt-16">
          <div className="space-y-4">
            <div className="inline-block mb-4">
              <span className="bg-primary-500/20 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer & Problem Solver
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Building Solutions That Matter
            </h1>
            <p className="text-text-muted text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
              I specialize in creating innovative web applications that solve real-world problems. 
              From AI-powered financial platforms serving 50,000+ users to healthcare management systems 
              trusted by 100+ medical shops - I transform ideas into impactful digital experiences.
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 lg:gap-12 pt-4">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent-cyan">50K+</div>
              <div className="text-text-muted text-xs lg:text-sm">Active Users</div>
            </div>
            <div className="w-px h-8 bg-primary-500/30"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-accent-green">5+</div>
              <div className="text-text-muted text-xs lg:text-sm">Live Projects</div>
            </div>
            <div className="w-px h-8 bg-primary-500/30"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary-400">100%</div>
              <div className="text-text-muted text-xs lg:text-sm">Open Source</div>
            </div>
          </div>
        </div>

        {/* Featured Project - Full Width */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-text-white flex items-center gap-2">
              <Star className="text-accent-cyan" size={24} />
              Featured Project
            </h2>
          </div>
          
          <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl overflow-hidden border border-accent-cyan/40 hover:border-accent-cyan/60 transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Featured Project Image */}
              <div className="relative overflow-hidden h-64 lg:h-full lg:col-span-2">
                <img 
                  src={projects[0].image} 
                  alt={projects[0].title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-bg-primary via-bg-primary/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-accent-cyan/20 backdrop-blur-sm border border-accent-cyan/30 text-accent-cyan px-3 py-1.5 rounded-full text-xs font-bold uppercase">
                    {projects[0].highlight}
                  </span>
                </div>
              </div>

              {/* Featured Project Content */}
              <div className="p-6 lg:p-8 lg:col-span-3 space-y-3">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-text-white group-hover:text-accent-cyan transition-colors duration-300">
                    {projects[0].title}
                  </h3>
                  <p className="text-primary-400 font-medium mt-1">{projects[0].subtitle}</p>
                </div>
                
                <p className="text-text-muted leading-relaxed text-sm">
                  {projects[0].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {projects[0].technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-lg text-xs font-medium border border-primary-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-3 py-3 border-y border-primary-500/20">
                  {projects[0].achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-accent-cyan text-xs font-semibold">{achievement.split(' ')[0]}</div>
                      <div className="text-text-muted text-[10px]">{achievement.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={projects[0].demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 btn-primary text-sm hover:scale-105 transition-transform duration-300"
                  >
                    <ExternalLink size={16} />
                    Visit Live Site
                  </a>
                  <a 
                    href={projects[0].github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-text-white/10 backdrop-blur-sm text-text-white rounded-xl border border-primary-500/30 hover:bg-primary-500/20 transition-all duration-300 text-sm"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Production Projects - 2 Columns */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-text-white">Production Projects</h2>
            <p className="text-text-muted text-sm mt-1">Live applications serving real users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1, 3).map((project) => (
              <div
                key={project.id}
                className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl overflow-hidden border border-primary-500/30 hover:border-accent-cyan/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,242,254,0.15)] group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`backdrop-blur-sm border px-3 py-1 rounded-full text-xs font-medium ${
                      project.highlight === 'Popular' ? 'bg-accent-green/20 border-accent-green/30 text-accent-green' :
                      'bg-primary-500/20 border-primary-500/30 text-primary-400'
                    }`}>
                      {project.highlight}
                    </span>
                  </div>
                  <div className={`absolute bottom-3 right-3 flex gap-2 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-accent-cyan/90 backdrop-blur-sm p-2 rounded-full text-bg-primary hover:scale-110 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-text-white group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-accent-green text-sm font-semibold">
                        <Users size={14} />
                        {project.stats}
                      </div>
                    </div>
                    <p className="text-primary-400 font-medium text-sm mt-1">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description.substring(0, 120)}...
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Projects */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-text-white">Learning Journey</h2>
            <p className="text-text-muted text-sm mt-1">Challenge-based skill development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(3, 5).map((project) => (
              <div
                key={project.id}
                className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl overflow-hidden border border-primary-500/30 hover:border-yellow-500/50 transition-all duration-500 group"
              >
                <div className="relative overflow-hidden h-40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`backdrop-blur-sm border px-3 py-1 rounded-full text-xs font-medium ${
                      project.highlight === 'Learning Journey' ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' :
                      'bg-purple-500/20 border-purple-500/30 text-purple-400'
                    }`}>
                      {project.highlight}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-text-white">{project.title}</h3>
                    <p className="text-primary-400 text-sm mt-1">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-text-muted text-sm">
                    {project.description.substring(0, 100)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-0.5 bg-primary-500/20 text-primary-400 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Projects - Compact Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-text-white">Simple Projects</h2>
            <p className="text-text-muted text-sm mt-1">Building blocks and fundamentals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.slice(5, 8).map((project) => (
              <div
                key={project.id}
                className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl border border-primary-500/30 hover:border-blue-500/50 transition-all duration-300 p-4 group"
              >
                <div className="flex items-start gap-3">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-text-white truncate">{project.title}</h3>
                    <p className="text-text-muted text-xs mt-0.5">{project.subtitle}</p>
                    <div className="flex gap-1.5 mt-2">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span key={index} className="px-1.5 py-0.5 bg-primary-500/20 text-primary-400 rounded text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future/Planned Projects */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-text-white">Future Roadmap</h2>
            <p className="text-text-muted text-sm mt-1">Upcoming projects and ideas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.slice(8, 11).map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-bg-secondary/60 to-bg-secondary/30 backdrop-blur-[10px] rounded-2xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300 p-5 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="bg-orange-500/20 border border-orange-500/30 text-orange-400 px-2 py-1 rounded-md text-xs font-medium">
                        {project.highlight}
                      </span>
                    </div>
                    <Calendar size={18} className="text-orange-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-text-white">{project.title}</h3>
                    <p className="text-primary-400 text-sm mt-1">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-text-muted text-xs leading-relaxed">
                    {project.description.substring(0, 90)}...
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded text-[10px] border border-orange-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <a 
              href="https://github.com/AdityaRaj81?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl border border-primary-500/30 text-text-white hover:border-accent-cyan/50 hover:shadow-[0_10px_30px_rgba(0,242,254,0.2)] transition-all duration-300 group"
            >
              <Github size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold text-lg">View All Projects on GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
