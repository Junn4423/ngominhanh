import React from 'react';
import { ArrowUpRight, FileText, Mail, Sparkles, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  lang: 'en' | 'vi';
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCvModal }) => {
  const p = PORTFOLIO_DATA.personal;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Decorative Lighting Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-rose-300/30 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-sky-300/25 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Headline & Avant-Garde UI */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-up">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-rose-200 shadow-md shadow-rose-500/5 text-xs font-extrabold text-rose-600">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span>{lang === 'en' ? 'Open for Full-Time Marketing Opportunities' : 'Sẵn Sàng Cho Cơ Hội Marketing Mới'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {lang === 'en' ? "Hello, I'm " : "Xin chào, tôi là "}
              <span className="text-gradient-rose font-serif italic font-normal inline-block">
                {p.displayName}
              </span>
            </h1>

            {/* Sub-headline title */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <h2 className="text-xs sm:text-sm font-extrabold text-rose-600 tracking-widest uppercase bg-rose-50/80 px-4 py-1.5 rounded-full border border-rose-200/60 inline-block">
                {p.title[lang]}
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              {p.tagline[lang]}
            </p>

            {/* Large Avant-Garde Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
              
              {/* Primary View Portfolio Button */}
              <a
                href="#projects"
                className="btn-primary-modern text-xs sm:text-sm"
              >
                <span>{lang === 'en' ? 'Explore Portfolio Work' : 'Khám Phá Dự Án'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* CV PDF Attachment Trigger Button */}
              <button
                onClick={onOpenCvModal}
                className="btn-secondary-modern text-xs sm:text-sm flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-rose-500" />
                <span>{lang === 'en' ? 'View Resume PDF' : 'Xem Hồ Sơ CV (PDF)'}</span>
              </button>

              {/* Contact Button */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-full bg-slate-900 text-white font-extrabold text-xs sm:text-sm hover:bg-slate-800 shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                <span>{lang === 'en' ? 'Contact' : 'Liên Hệ'}</span>
              </a>

            </div>

            {/* Quick Stats Grid */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-xl mx-auto lg:mx-0">
              {p.stats.map((stat, idx) => (
                <div key={idx} className="hologram-card p-4 rounded-2xl text-center group hover:scale-105 transition-transform">
                  <div className="text-xl font-black text-rose-600 font-heading">{stat.value}</div>
                  <div className="text-[11px] font-bold text-slate-500 mt-1">{stat.label[lang]}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Avant-Garde Portrait Card */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-up" data-aos-delay="150">
            <div className="relative w-72 sm:w-84 h-[420px] sm:h-[460px] photo-tilt-card">
              
              {/* Vibrant Outer Glow Ring */}
              <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-tr from-rose-400 via-pink-400 to-sky-300 blur-xl opacity-60 animate-pulse-glow" />

              {/* Frame Card */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden border-4 border-white shadow-2xl bg-white flex flex-col justify-between group">
                
                {/* Main Avatar Image */}
                <img
                  src={p.avatar}
                  alt={p.displayName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Gradient Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-md text-white border border-white/20 shadow-xl flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-sm text-white">{p.displayName}</h3>
                    <p className="text-[11px] text-rose-300 font-semibold">{lang === 'en' ? 'Hoa Sen Univ • GPA 3.0/4.0' : 'ĐH Hoa Sen • GPA 3.0/4.0'}</p>
                  </div>
                  <button
                    onClick={onOpenCvModal}
                    className="p-2.5 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition-colors shadow-md"
                    title="Xem CV PDF"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
