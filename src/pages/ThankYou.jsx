import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home, Mail, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <ParticleBackground />
      
      <div className="lg:hidden bg-bg-secondary/60 backdrop-blur-[10px] border-b border-primary-500/30 p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Aditya Raj
          </span>
        </h1>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-accent-green/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative flex justify-center">
            <CheckCircle 
              className="text-accent-green w-24 h-24 lg:w-32 lg:h-32 animate-bounce-slow" 
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-accent-green to-emerald-400 bg-clip-text text-transparent">
            Thank You! 
          </h1>
          <p className="text-text-muted text-lg lg:text-xl max-w-xl mx-auto leading-relaxed">
            Your message has been received successfully! 
            <br />
            I will get back to you within <span className="text-accent-cyan font-semibold">24 hours</span>.
          </p>
        </div>

        <div className="bg-bg-secondary/60 backdrop-blur-[10px] rounded-2xl border border-primary-500/30 p-6 lg:p-8 max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3 text-text-white">
            <Mail className="text-accent-cyan" size={24} />
            <span className="font-medium">Check your email for confirmation</span>
          </div>
          
          <div className="border-t border-primary-500/20 pt-4">
            <p className="text-text-muted text-sm">
              Response time: <span className="text-accent-green font-semibold">Usually within 24 hours</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 btn-primary hover:scale-105 transition-transform duration-300"
          >
            <Home size={18} />
            Back to Home
          </button>
          
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-2 px-6 py-3 bg-bg-secondary/60 backdrop-blur-[10px] rounded-xl border border-primary-500/30 text-text-white hover:border-accent-cyan/50 hover:bg-primary-500/20 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Send Another Message
          </button>
        </div>

        <div className="pt-4">
          <div className="inline-block bg-bg-secondary/40 backdrop-blur-[10px] rounded-xl border border-primary-500/20 px-6 py-3">
            <p className="text-text-muted text-sm">
              Redirecting to home in <span className="text-accent-cyan font-bold text-lg">{countdown}</span> seconds...
            </p>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-text-muted text-sm mb-3">Or connect with me on:</p>
          <div className="flex justify-center gap-3">
            <a 
              href="https://github.com/adityaraj81" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-text-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/adityaraj81" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-text-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="mailto:Connect2RajAditya@gmail.com"
              className="w-10 h-10 bg-text-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
