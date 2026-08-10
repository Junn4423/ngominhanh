import React from 'react';
import { User, Target, TrendingUp, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutProps {
  lang: 'en' | 'vi';
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ lang, onOpenCvModal }) => {
  const { bio, goals } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-rose-200 text-rose-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <User className="w-4 h-4 text-rose-500" />
            <span>{lang === 'en' ? 'About Minh Anh' : 'Giới Thiệu Bản Thân'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'en' ? 'Passionate Marketer & ' : 'Nhà Sáng Tạo Nội Dung & '}
            <span className="text-gradient-rose font-serif italic font-normal">
              {lang === 'en' ? 'Digital Strategist' : 'Marketing Digital'}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Box */}
          <div className="lg:col-span-6 hologram-card p-8 rounded-[32px] space-y-4" data-aos="fade-up">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-rose-500" />
              <span>{lang === 'en' ? 'Professional Narrative' : 'Câu Chuyện Nghề Nghiệp'}</span>
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {bio[lang]}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={onOpenCvModal}
                className="btn-secondary-modern text-xs py-2.5 px-5 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-rose-500" />
                <span>{lang === 'en' ? 'Read Full CV (PDF)' : 'Xem Đầy Đủ CV (PDF)'}</span>
              </button>
            </div>
          </div>

          {/* Goals Stack */}
          <div className="lg:col-span-6 space-y-5" data-aos="fade-up" data-aos-delay="100">
            
            {/* Short term */}
            <div className="hologram-card p-7 rounded-[32px] border-l-8 border-l-rose-500">
              <div className="flex items-center gap-2 text-rose-600 font-extrabold text-base mb-2">
                <Target className="w-5 h-5" />
                <span>{goals.shortTerm.title[lang]}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {goals.shortTerm.desc[lang]}
              </p>
            </div>

            {/* Long term */}
            <div className="hologram-card p-7 rounded-[32px] border-l-8 border-l-sky-500">
              <div className="flex items-center gap-2 text-sky-600 font-extrabold text-base mb-2">
                <TrendingUp className="w-5 h-5" />
                <span>{goals.longTerm.title[lang]}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {goals.longTerm.desc[lang]}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

