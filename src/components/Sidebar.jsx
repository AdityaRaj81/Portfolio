import { NavLink } from 'react-router-dom';
import { Hop as Home, User, Briefcase, MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 w-[280px] h-screen bg-bg-secondary/85 backdrop-blur-[20px] border-r-2 border-primary-500/20 z-[1000] overflow-y-auto shadow-[4px_0_20px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col h-full p-8 px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-text-white mb-2 bg-gradient-primary bg-clip-text text-transparent animate-pulse">
              Aditya
            </h2>
            <p className="text-sm text-text-muted font-normal">
              Software Engineer
            </p>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center gap-4 p-4 px-5 text-text-light rounded-lg transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/20 to-transparent text-primary-500 font-semibold before:scale-y-100' 
                    : 'hover:bg-gradient-to-r hover:from-primary-500/15 hover:to-transparent hover:text-primary-500 hover:translate-x-2 hover:shadow-[0_2px_10px_rgba(102,126,234,0.2)]'
                } before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-primary before:scale-y-0 before:transition-transform before:duration-300 before:rounded-r-md hover:before:scale-y-100`
              }
            >
              <Home size={20} />
              <span className="font-medium text-base">Home</span>
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `flex items-center gap-4 p-4 px-5 text-text-light rounded-lg transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/20 to-transparent text-primary-500 font-semibold before:scale-y-100' 
                    : 'hover:bg-gradient-to-r hover:from-primary-500/15 hover:to-transparent hover:text-primary-500 hover:translate-x-2 hover:shadow-[0_2px_10px_rgba(102,126,234,0.2)]'
                } before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-primary before:scale-y-0 before:transition-transform before:duration-300 before:rounded-r-md hover:before:scale-y-100`
              }
            >
              <User size={20} />
              <span className="font-medium text-base">About</span>
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center gap-4 p-4 px-5 text-text-light rounded-lg transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/20 to-transparent text-primary-500 font-semibold before:scale-y-100' 
                    : 'hover:bg-gradient-to-r hover:from-primary-500/15 hover:to-transparent hover:text-primary-500 hover:translate-x-2 hover:shadow-[0_2px_10px_rgba(102,126,234,0.2)]'
                } before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-primary before:scale-y-0 before:transition-transform before:duration-300 before:rounded-r-md hover:before:scale-y-100`
              }
            >
              <Briefcase size={20} />
              <span className="font-medium text-base">Projects</span>
            </NavLink>
            
            <NavLink 
              to="/journey" 
              className={({ isActive }) => 
                `flex items-center gap-4 p-4 px-5 text-text-light rounded-lg transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/20 to-transparent text-primary-500 font-semibold before:scale-y-100' 
                    : 'hover:bg-gradient-to-r hover:from-primary-500/15 hover:to-transparent hover:text-primary-500 hover:translate-x-2 hover:shadow-[0_2px_10px_rgba(102,126,234,0.2)]'
                } before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-primary before:scale-y-0 before:transition-transform before:duration-300 before:rounded-r-md hover:before:scale-y-100`
              }
            >
              <MapPin size={20} />
              <span className="font-medium text-base">Journey</span>
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `flex items-center gap-4 p-4 px-5 text-text-light rounded-lg transition-all duration-300 ease-in-out relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary-500/20 to-transparent text-primary-500 font-semibold before:scale-y-100' 
                    : 'hover:bg-gradient-to-r hover:from-primary-500/15 hover:to-transparent hover:text-primary-500 hover:translate-x-2 hover:shadow-[0_2px_10px_rgba(102,126,234,0.2)]'
                } before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-primary before:scale-y-0 before:transition-transform before:duration-300 before:rounded-r-md hover:before:scale-y-100`
              }
            >
              <Mail size={20} />
              <span className="font-medium text-base">Contact</span>
            </NavLink>
          </nav>

          <div className="flex justify-center gap-6 pt-8 border-t border-cyan-400/10 mt-auto">
            <a 
              href="https://github.com/aditya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-light transition-all duration-300 ease-in-out flex items-center justify-center w-10 h-10 rounded-lg hover:text-text-white hover:bg-gradient-primary hover:-translate-y-1 hover:scale-110 hover:shadow-[0_5px_20px_rgba(102,126,234,0.4)]"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/aditya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-light transition-all duration-300 ease-in-out flex items-center justify-center w-10 h-10 rounded-lg hover:text-text-white hover:bg-gradient-primary hover:-translate-y-1 hover:scale-110 hover:shadow-[0_5px_20px_rgba(102,126,234,0.4)]"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-bg-secondary/95 backdrop-blur-[20px] border-t-2 border-primary-500/20 z-[1000] px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/10' 
                  : 'text-text-light hover:text-primary-500'
              }`
            }
          >
            <Home size={20} />
            <span className="text-xs font-medium">Home</span>
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/10' 
                  : 'text-text-light hover:text-primary-500'
              }`
            }
          >
            <User size={20} />
            <span className="text-xs font-medium">About</span>
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/10' 
                  : 'text-text-light hover:text-primary-500'
              }`
            }
          >
            <Briefcase size={20} />
            <span className="text-xs font-medium">Projects</span>
          </NavLink>
          
          <NavLink 
            to="/journey" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/10' 
                  : 'text-text-light hover:text-primary-500'
              }`
            }
          >
            <MapPin size={20} />
            <span className="text-xs font-medium">Journey</span>
          </NavLink>
          
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-primary-500 bg-primary-500/10' 
                  : 'text-text-light hover:text-primary-500'
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
