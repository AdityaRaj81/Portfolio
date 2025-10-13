import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Rocket, Terminal, Bug, Coffee, Zap, Map } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [terminalText, setTerminalText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullText = '$ Error: Route not found... Redirecting to homepage? (Y/n)';

  // Terminal typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20
    });
  };

  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    const floatInterval = setInterval(() => {
      setFloatY(Math.sin(Date.now() / 500) * 10);
    }, 30);

    return () => clearInterval(floatInterval);
  }, []);

  const navCards = [
    { 
      name: 'Home', 
      icon: Home, 
      path: '/', 
      color: 'cyan',
      desc: 'Start fresh'
    },
    { 
      name: 'Projects', 
      icon: Rocket, 
      path: '/projects', 
      color: 'green',
      desc: 'See my work'
    },
    { 
      name: 'Journey', 
      icon: Map, 
      path: '/journey', 
      color: 'purple',
      desc: 'My story'
    },
    { 
      name: 'Contact', 
      icon: Coffee, 
      path: '/contact', 
      color: 'orange',
      desc: 'Let\'s talk'
    }
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Mobile Header */}
      <div className="lg:hidden bg-bg-secondary/60 backdrop-blur-[10px] border-b border-primary-500/30 p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Aditya Raj
          </span>
        </h1>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent-green/10 rounded-full blur-3xl animate-pulse delay-150"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl animate-pulse delay-300"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Glitchy 404 */}
          <div className="relative mb-8">
            <div className="relative inline-block">
              {/* Animated icons floating around */}
              <Bug 
                className="absolute -top-8 -left-8 text-red-400 animate-bounce"
                size={32}
                style={{ animationDelay: '0s' }}
              />
              <Zap 
                className="absolute -top-8 -right-8 text-yellow-400 animate-bounce"
                size={32}
                style={{ animationDelay: '0.2s' }}
              />
              <Terminal 
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-accent-cyan animate-bounce"
                size={32}
                style={{ animationDelay: '0.4s' }}
              />

              <div 
                className="relative"
                style={{ transform: `translateY(${floatY}px)`, transition: 'transform 0.1s ease-out' }}
              >
                <h1 className="text-[100px] lg:text-[160px] font-bold leading-none relative">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-accent-cyan via-primary-500 to-accent-cyan animate-pulse"></div>
                  
                  {/* Main 404 text */}
                  <span className="relative bg-gradient-primary bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                    404
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Error Message with animation */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-text-white">
              <span className="inline-block animate-bounce-slow">Page</span>
              <span className="inline-block animate-bounce-slow" style={{ animationDelay: '0.1s' }}> Not</span>
              <span className="inline-block animate-bounce-slow text-accent-cyan" style={{ animationDelay: '0.2s' }}> Found!</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Looks like this page took a wrong turn and got lost in the digital world. 
              <br />
              <span className="text-primary-400 font-mono">// No worries, let's get you back on track 🚀</span>
            </p>
          </div>

          {/* Terminal-style Box */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-bg-primary/90 backdrop-blur-[10px] rounded-2xl border border-accent-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.3)] overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-bg-secondary/60 border-b border-primary-500/30 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-text-muted text-sm font-mono ml-2">terminal — bash</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-left">
                <div className="text-accent-green text-sm">
                  {terminalText}
                  <span className={`inline-block w-2 h-4 bg-accent-green ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="pt-8">
            <p className="text-text-muted mb-6 text-sm">Choose your path:</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {navCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <button
                    key={card.path}
                    onClick={() => navigate(card.path)}
                    className={`group relative bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl border p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,242,254,0.2)] ${
                      card.color === 'cyan' ? 'border-accent-cyan/30 hover:border-accent-cyan/60' :
                      card.color === 'green' ? 'border-accent-green/30 hover:border-accent-green/60' :
                      card.color === 'purple' ? 'border-purple-500/30 hover:border-purple-500/60' :
                      'border-orange-500/30 hover:border-orange-500/60'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${
                      card.color === 'cyan' ? 'bg-accent-cyan/20' :
                      card.color === 'green' ? 'bg-accent-green/20' :
                      card.color === 'purple' ? 'bg-purple-500/20' :
                      'bg-orange-500/20'
                    }`}></div>

                    <div className="relative space-y-3">
                      <Icon 
                        className={`mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                          card.color === 'cyan' ? 'text-accent-cyan' :
                          card.color === 'green' ? 'text-accent-green' :
                          card.color === 'purple' ? 'text-purple-400' :
                          'text-orange-400'
                        }`}
                        size={32}
                      />
                      <div>
                        <div className="text-text-white font-semibold text-lg">{card.name}</div>
                        <div className="text-text-muted text-xs mt-1">{card.desc}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Fun Developer Message */}
          <div className="pt-6">
            <div className="inline-block bg-bg-secondary/40 backdrop-blur-[10px] rounded-xl border border-primary-500/20 px-6 py-3">
              <p className="text-text-muted text-sm font-mono">
                <span className="text-red-400">Error:</span> 
                <span className="text-yellow-400"> ENOENT</span> - 
                <span className="text-accent-cyan"> No such route found</span> 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
