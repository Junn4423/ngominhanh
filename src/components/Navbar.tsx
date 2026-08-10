import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, FileText, Menu, X, ArrowUpRight, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  lang: 'en' | 'vi';
  setLang: (lang: 'en' | 'vi') => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user has scrolled near bottom of page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial position check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'About' : 'Giới Thiệu', href: '#about', id: 'about' },
    { name: lang === 'en' ? 'Skills' : 'Kỹ Năng', href: '#skills', id: 'skills' },
    { name: lang === 'en' ? 'Timeline' : 'Hành Trình', href: '#experience', id: 'experience' },
    { name: lang === 'en' ? 'Projects' : 'Dự Án', href: '#projects', id: 'projects' },
    { name: lang === 'en' ? 'Education' : 'Học Vấn', href: '#education', id: 'education' },
    { name: lang === 'en' ? 'Contact' : 'Liên Hệ', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo Pill */}
        <a 
          href="#" 
          className="flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-pink-100/80 px-4 py-2 rounded-full shadow-lg shadow-pink-500/5 hover:border-pink-300 hover:scale-105 transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-400 via-pink-400 to-sky-300 p-[2px] shadow-sm">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-pink-600">
              <Sparkles className="w-4 h-4 text-pink-500 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-sm tracking-tight group-hover:text-rose-600 transition-colors">
              {PORTFOLIO_DATA.personal.displayName}
            </span>
            <span className="text-[10px] font-semibold text-rose-500 tracking-wider uppercase">
              Marketing Portfolio
            </span>
          </div>
        </a>

        {/* Breakthrough Center Dynamic Island Navigation Bar */}
        <nav className="hidden md:flex items-center gap-1.5 floating-nav-container px-3 py-2 rounded-full border border-pink-100 shadow-xl shadow-pink-500/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative px-4 py-2 text-xs font-extrabold transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/60'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-md shadow-pink-300 -z-0 animate-fade-in" />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Resume PDF Trigger & Language Switcher */}
        <div className="hidden md:flex items-center gap-2.5">
          
          {/* CV PDF Quick View Button */}
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 border border-pink-200 text-xs font-extrabold text-slate-800 shadow-md shadow-pink-100 hover:border-rose-400 hover:bg-rose-50/80 hover:text-rose-600 transition-all hover:scale-105"
            title="Xem / Tải Hồ Sơ Resume PDF"
          >
            <FileText className="w-4 h-4 text-rose-500 animate-bounce" />
            <span>{lang === 'en' ? 'Resume PDF' : 'Xem CV (PDF)'}</span>
          </button>

          {/* Language Switcher Button */}
          <button
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-md hover:bg-slate-800 hover:scale-105 transition-all"
            title="Switch Language / Đổi Ngôn Ngữ"
          >
            <Globe className="w-3.5 h-3.5 text-pink-400" />
            <span className={lang === 'en' ? 'text-pink-300 font-extrabold' : 'text-slate-400'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'vi' ? 'text-pink-300 font-extrabold' : 'text-slate-400'}>VI</span>
          </button>

        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCvModal}
            className="px-3 py-1.5 rounded-full bg-rose-500 text-white text-xs font-extrabold flex items-center gap-1 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          <button
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="px-3 py-1.5 rounded-full bg-white border border-pink-200 text-xs font-extrabold text-rose-600 shadow-sm"
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-2xl bg-white border border-pink-100 text-slate-800 shadow-sm hover:text-rose-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white/95 backdrop-blur-2xl border border-pink-100 rounded-3xl p-6 space-y-4 shadow-2xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-2.5 rounded-xl bg-pink-50/60 text-xs font-extrabold text-slate-700 hover:text-rose-600 hover:bg-pink-100/70"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-extrabold shadow-md flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'View Official CV (PDF)' : 'Xem CV Chi Tiết (PDF)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

