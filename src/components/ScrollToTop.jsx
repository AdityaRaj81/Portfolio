import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-[50px] h-[50px] lg:bottom-8 lg:right-8 lg:w-[50px] lg:h-[50px] md:bottom-24 md:right-4 md:w-[45px] md:h-[45px] rounded-full bg-gradient-primary flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out z-[999] p-0 shadow-[0_4px_15px_rgba(102,126,234,0.4)] ${
        isVisible 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      } hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(102,126,234,0.6)]`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} className="lg:w-6 lg:h-6 md:w-5 md:h-5" />
    </button>
  );
};

export default ScrollToTop;
