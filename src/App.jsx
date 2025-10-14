import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import ThankYou from "./pages/ThankYou";
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:shadow-glow-lg focus:font-medium"
      >
        Skip to main content
      </a>
      
      <div className="app">
        <ParticleBackground />
        <Sidebar />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
