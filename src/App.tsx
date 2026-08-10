import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BentoSkills } from './components/BentoSkills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { CvModal } from './components/CvModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<'en' | 'vi'>('en');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  // Holographic scroll & mouse position state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Compute dynamic holographic colors based on scroll progress
  const hueShift1 = (scrollProgress * 180) % 360;
  const hueShift2 = (scrollProgress * 240 + 90) % 360;

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden transition-colors duration-700">
      
      {/* High-Impact Vivid Holographic Dynamic Ambient Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-700 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, hsla(${hueShift1}, 80%, 92%, 0.6) 0%, transparent 45%),
            radial-gradient(circle at ${100 - mousePos.x}% ${mousePos.y + 10}%, hsla(${hueShift2}, 85%, 90%, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 50% ${scrollProgress * 100}%, hsla(${(hueShift1 + 120) % 360}, 90%, 93%, 0.5) 0%, transparent 60%),
            linear-gradient(${135 + scrollProgress * 180}deg, #fff5f7 0%, #f0fdf4 35%, #f0f9ff 70%, #faf5ff 100%)
          `
        }}
      />

      {/* Floating Holographic Light Orbs */}
      <div 
        className="fixed top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: `hsla(${hueShift1}, 85%, 85%, 0.35)`,
          transform: `translateY(${scrollProgress * 250}px)`
        }}
      />
      <div 
        className="fixed bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: `hsla(${hueShift2}, 85%, 85%, 0.35)`,
          transform: `translateY(${-scrollProgress * 200}px)`
        }}
      />

      <div className="relative z-10">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          onOpenCvModal={() => setIsCvModalOpen(true)} 
        />
        <main>
          <Hero 
            lang={lang} 
            onOpenCvModal={() => setIsCvModalOpen(true)} 
          />
          <About 
            lang={lang} 
            onOpenCvModal={() => setIsCvModalOpen(true)} 
          />
          <BentoSkills lang={lang} />
          <Experience lang={lang} />
          <Projects lang={lang} />
          <Education lang={lang} />
          <Contact 
            lang={lang} 
            onOpenCvModal={() => setIsCvModalOpen(true)} 
          />
        </main>
      </div>

      {/* Interactive CV PDF Modal */}
      <CvModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
        lang={lang} 
      />
    </div>
  );
};

export default App;

