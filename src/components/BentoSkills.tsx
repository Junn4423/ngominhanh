import React from 'react';
import { ShoppingBag, FileText, Video, Calendar, Sparkles, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface BentoSkillsProps {
  lang: 'en' | 'vi';
}

export const BentoSkills: React.FC<BentoSkillsProps> = ({ lang }) => {
  const { skills } = PORTFOLIO_DATA;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-rose-500" />;
      case 'FileText': return <FileText className="w-5 h-5 text-sky-500" />;
      case 'Video': return <Video className="w-5 h-5 text-pink-500" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-amber-500" />;
      default: return <Sparkles className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-rose-200 text-rose-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>{lang === 'en' ? 'Core Competencies' : 'Kỹ Năng & Chuyên Môn'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'en' ? 'Skills & ' : 'Kỹ Năng & '}
            <span className="text-gradient-rose font-serif italic font-normal">
              {lang === 'en' ? 'Capabilities' : 'Năng Lực Digital'}
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="hologram-card p-7 rounded-[32px] flex flex-col justify-between hover:border-rose-300 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-white border border-rose-100 shadow-md">
                    {renderIcon(group.iconName)}
                  </div>
                  <h3 className="font-black text-slate-900 text-lg">
                    {group.title[lang]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3.5 py-2 rounded-2xl text-xs font-extrabold transition-colors ${
                        skill.highlight
                          ? 'bg-rose-50 text-rose-700 border border-rose-200/80 shadow-sm'
                          : 'bg-slate-100/80 text-slate-700 border border-slate-200/50'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

