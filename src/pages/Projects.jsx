import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/aditya/ecommerce',
      demo: 'https://demo.ecommerce.com',
      insights: 'Built with scalability in mind, handles 10k+ concurrent users with optimized database queries and caching strategies.'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/aditya/taskmanager',
      demo: 'https://demo.taskmanager.com',
      insights: 'Implemented real-time synchronization using Firebase Realtime Database with offline support and conflict resolution.'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with 7-day forecasts, interactive maps, and weather alerts using multiple APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/aditya/weather',
      demo: 'https://demo.weather.com',
      insights: 'Integrated multiple weather APIs with fallback mechanisms and implemented custom caching to reduce API calls by 80%.'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and automated reporting features.',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/aditya/analytics',
      demo: 'https://demo.analytics.com',
      insights: 'Processes millions of data points efficiently using PostgreSQL with custom indexing and materialized views for instant insights.'
    },
    {
      id: 5,
      title: 'Code Snippet Manager',
      description: 'Developer tool for organizing and sharing code snippets with syntax highlighting and version control.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Monaco Editor', 'Node.js'],
      github: 'https://github.com/aditya/snippets',
      demo: 'https://demo.snippets.com',
      insights: 'Integrated Monaco Editor with custom language support and implemented efficient search using Elasticsearch.'
    },
    {
      id: 6,
      title: 'Portfolio Generator',
      description: 'No-code solution for developers to create stunning portfolios with customizable themes and templates.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/aditya/portfolio-gen',
      demo: 'https://demo.portfoliogen.com',
      insights: 'Built with a modular architecture allowing users to mix and match components with live preview and export functionality.'
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
          Projects
        </h1>
        <p className="text-text-muted text-sm lg:text-lg max-w-2xl mx-auto px-4">
          Showcasing my journey through code, innovation, and problem-solving
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl lg:rounded-3xl overflow-hidden border border-primary-500/30 transition-all duration-500 hover:scale-[1.02] hover:border-accent-cyan hover:shadow-[0_20px_60px_rgba(0,242,254,0.3)] group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-32 lg:h-48">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent transition-opacity duration-300 ${
                hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 flex gap-2 lg:gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-text-white/20 backdrop-blur-sm p-2 lg:p-3 rounded-full text-text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                  >
                    <Github size={16} className="lg:w-5 lg:h-5" />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-text-white/20 backdrop-blur-sm p-2 lg:p-3 rounded-full text-text-white hover:bg-accent-cyan hover:scale-110 transition-all duration-300"
                  >
                    <ExternalLink size={16} className="lg:w-5 lg:h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
              <h3 className="text-lg lg:text-xl font-bold text-text-white group-hover:text-accent-cyan transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-text-muted leading-relaxed text-sm lg:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 lg:gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 lg:px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-xs lg:text-sm font-medium border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* AI Insights Button */}
              <button className="flex items-center gap-2 text-accent-green font-medium hover:text-text-white transition-colors duration-300 group/insights text-sm lg:text-base">
                <Sparkles size={14} className="lg:w-4 lg:h-4 group-hover/insights:animate-spin" />
                AI Insights
              </button>

              {/* Project Insights */}
              <div className="bg-bg-primary/50 rounded-xl p-3 lg:p-4 border border-accent-green/30">
                <p className="text-text-light text-xs lg:text-sm leading-relaxed">
                  {project.insights}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Projects;
