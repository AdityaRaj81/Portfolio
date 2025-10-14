import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, MapPin, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 w-[280px] h-screen bg-bg-secondary/90 backdrop-blur-[24px] border-r border-border-primary z-[1000] overflow-y-auto shadow-2xl">
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="mb-10 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden shadow-lg ring-2 ring-primary-500/20">
              <img 
                src="/Slidebar2.png" 
                alt="Aditya Raj - Full Stack Developer" 
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <h2 className="text-2xl font-bold text-gradient mb-1">
              Aditya Raj
            </h2>
            <p className="text-sm text-text-muted font-medium">
              Full Stack Developer
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-3"></div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 flex-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 px-4 text-text-secondary rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/15 to-purple-500/5 text-primary-500 font-medium shadow-md border border-primary-500/20' 
                    : 'hover:bg-bg-primary/50 hover:text-text-primary hover:translate-x-1 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-primary-500/20 text-primary-500' : 'group-hover:bg-primary-500/10 group-hover:text-primary-500'
                  }`}>
                    <Home size={18} />
                  </div>
                  <span className="font-medium">Home</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 px-4 text-text-secondary rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/15 to-purple-500/5 text-primary-500 font-medium shadow-md border border-primary-500/20' 
                    : 'hover:bg-bg-primary/50 hover:text-text-primary hover:translate-x-1 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-primary-500/20 text-primary-500' : 'group-hover:bg-primary-500/10 group-hover:text-primary-500'
                  }`}>
                    <User size={18} />
                  </div>
                  <span className="font-medium">About</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 px-4 text-text-secondary rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/15 to-purple-500/5 text-primary-500 font-medium shadow-md border border-primary-500/20' 
                    : 'hover:bg-bg-primary/50 hover:text-text-primary hover:translate-x-1 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-primary-500/20 text-primary-500' : 'group-hover:bg-primary-500/10 group-hover:text-primary-500'
                  }`}>
                    <Briefcase size={18} />
                  </div>
                  <span className="font-medium">Projects</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/journey" 
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 px-4 text-text-secondary rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/15 to-purple-500/5 text-primary-500 font-medium shadow-md border border-primary-500/20' 
                    : 'hover:bg-bg-primary/50 hover:text-text-primary hover:translate-x-1 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-primary-500/20 text-primary-500' : 'group-hover:bg-primary-500/10 group-hover:text-primary-500'
                  }`}>
                    <MapPin size={18} />
                  </div>
                  <span className="font-medium">Journey</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>}
                </>
              )}
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `flex items-center gap-3 p-3 px-4 text-text-secondary rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/15 to-purple-500/5 text-primary-500 font-medium shadow-md border border-primary-500/20' 
                    : 'hover:bg-bg-primary/50 hover:text-text-primary hover:translate-x-1 hover:shadow-lg'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                    isActive ? 'bg-primary-500/20 text-primary-500' : 'group-hover:bg-primary-500/10 group-hover:text-primary-500'
                  }`}>
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">Contact</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></div>}
                </>
              )}
            </NavLink>
          </nav>

          {/* Social Links */}
          <div className="pt-6 border-t border-border-primary mt-auto">
            <div className="flex justify-center gap-3">
              <a 
                href="https://github.com/adityaraj81" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-xl bg-bg-primary/50 border border-border-primary transition-all duration-300 hover:border-primary-500/50 hover:bg-primary-500/10 hover:scale-105 hover:shadow-lg"
              >
                <Github size={20} className="text-text-secondary group-hover:text-primary-500 transition-colors duration-300" />
                <ExternalLink size={12} className="absolute -top-1 -right-1 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="https://linkedin.com/in/adityaRaj81" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-3 rounded-xl bg-bg-primary/50 border border-border-primary transition-all duration-300 hover:border-primary-500/50 hover:bg-primary-500/10 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin size={20} className="text-text-secondary group-hover:text-primary-500 transition-colors duration-300" />
                <ExternalLink size={12} className="absolute -top-1 -right-1 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
            <p className="text-xs text-center text-text-muted mt-4 font-medium">
              © 2025 Aditya Raj
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-bg-secondary/95 backdrop-blur-[24px] border-t border-border-primary z-[1000] px-2 py-3 shadow-2xl">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-300 min-w-[60px] ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/15 scale-105 shadow-lg' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/30'
              }`
            }
          >
            <Home size={20} />
            <span className="text-xs font-medium">Home</span>
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-300 min-w-[60px] ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/15 scale-105 shadow-lg' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/30'
              }`
            }
          >
            <User size={20} />
            <span className="text-xs font-medium">About</span>
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-300 min-w-[60px] ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/15 scale-105 shadow-lg' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/30'
              }`
            }
          >
            <Briefcase size={20} />
            <span className="text-xs font-medium">Projects</span>
          </NavLink>
          
          <NavLink 
            to="/journey" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-300 min-w-[60px] ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/15 scale-105 shadow-lg' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/30'
              }`
            }
          >
            <MapPin size={20} />
            <span className="text-xs font-medium">Journey</span>
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all duration-300 min-w-[60px] ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/15 scale-105 shadow-lg' 
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-primary/30'
              }`
            }
          >
            <Mail size={20} />
            <span className="text-xs font-medium">Contact</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
