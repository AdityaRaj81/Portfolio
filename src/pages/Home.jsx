import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, Mail, MapPin } from 'lucide-react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const navigate = useNavigate();

  const lines = [
    '> Initializing portfolio...',
    '> Loading developer profile...',
    '> Name: Aditya',
    '> Role: Software Engineer',
    '> Status: Ready to innovate',
    '> Welcome to my digital space!'
  ];

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 30);
        
        return () => clearTimeout(timer);
      } else {
        // Finished typing current line
        const timer = setTimeout(() => {
          if (currentLineIndex < lines.length - 1) {
            setDisplayText(prev => prev + '\n');
          }
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 200);
        
        return () => clearTimeout(timer);
      }
    } else {
      // All lines completed
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, lines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const featureCards = [
    {
      icon: <User size={32} />,
      title: 'About Me',
      description: 'Explore my skills, certifications, and coding journey',
      path: '/about',
      gradient: 'from-primary-500 to-purple-600',
      hoverColor: 'hover:border-primary-500'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Projects',
      description: 'Discover my latest work and technical innovations',
      path: '/projects',
      gradient: 'from-accent-cyan to-blue-500',
      hoverColor: 'hover:border-accent-cyan'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Journey',
      description: "Trace my professional path and key milestones",
      path: '/journey',
      gradient: 'from-accent-green to-emerald-500',
      hoverColor: 'hover:border-accent-green'
    },
    {
      icon: <Mail size={32} />,
      title: 'Contact',
      description: "Let's connect and build something amazing together",
      path: '/contact',
      gradient: 'from-accent-green to-emerald-500',
      hoverColor: 'hover:border-accent-green'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden glass border-b border-border-primary p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold text-center">
          <span className="text-gradient">
            Aditya Raj
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:p-8 gap-8 lg:gap-12 pt-20 lg:pt-0">
        {/* Terminal Container */}
      <div className="w-full max-w-3xl glass rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-float border border-border-primary">
        <div className="bg-bg-tertiary/90 px-4 py-3 flex items-center gap-4 border-b border-border-primary/20">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="text-text-muted text-xs lg:text-sm font-fira">aditya@portfolio:~</span>
        </div>
        <div className="p-4 lg:p-8 min-h-[250px] lg:min-h-[300px]">
          <pre className="font-fira text-sm lg:text-base text-gradient leading-relaxed whitespace-pre-wrap">
            {displayText}
            {!animationComplete && (
              <span className={`font-bold text-accent-cyan transition-opacity duration-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                _
              </span>
            )}
          </pre>
        </div>
      </div>

      {/* Feature Cards */}
      {animationComplete && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full max-w-6xl animate-[fadeInUp_0.8s_ease] px-2 lg:px-0">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className={`card p-6 lg:p-10 rounded-2xl lg:rounded-3xl border-2 border-border-primary cursor-pointer transition-all duration-[0.4s] text-center relative overflow-hidden group ${card.hoverColor} hover:-translate-y-2 lg:hover:-translate-y-4 hover:scale-[1.02] hover:shadow-glow-cyan`}
              onClick={() => navigate(card.path)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background glow effect */}
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-primary-500/30 to-transparent opacity-0 transition-opacity duration-400 pointer-events-none group-hover:opacity-100 group-hover:animate-glow-pulse"></div>
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-400 rounded-2xl lg:rounded-3xl group-hover:opacity-10`}></div>
              
              <div className="relative z-10">
                <div className="text-primary-500 mb-4 lg:mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 lg:group-hover:scale-125 group-hover:rotate-[5deg] group-hover:drop-shadow-[0_0_10px_theme(colors.primary.500)]">
                  {card.icon}
                </div>
                <h3 className={`text-lg lg:text-2xl mb-2 lg:mb-3 text-text-primary transition-all duration-300 group-hover:text-gradient`}>
                  {card.title}
                </h3>
                <p className="text-xs lg:text-sm text-text-muted leading-relaxed group-hover:text-text-secondary transition-colors duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Home;
