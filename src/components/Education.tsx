import React from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface EducationProps {
  lang: 'en' | 'vi';
}

export const Education: React.FC<EducationProps> = ({ lang }) => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-rose-200 text-rose-700 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-sm">
            <GraduationCap className="w-4 h-4 text-rose-500" />
            <span>{lang === 'en' ? 'Academic Background' : 'Học Vấn & Bằng Cấp'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'en' ? 'Education & ' : 'Học Vấn & '}
            <span className="text-gradient-rose font-serif italic font-normal">
              {lang === 'en' ? 'Certifications' : 'Thành Tựu'}
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          
          {/* Hoa Sen University */}
          <div className="hologram-card p-8 rounded-[32px] hover:border-rose-300 transition-all shadow-xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold shadow-inner shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-xl">{education.university[lang]}</h3>
                <p className="text-xs font-extrabold text-rose-600 mt-0.5">{education.major[lang]} ({education.period})</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-3 shadow-sm">
              <Award className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900 font-medium leading-relaxed">
                <span className="font-extrabold text-amber-800">{lang === 'en' ? 'Thesis Defense: ' : 'Khóa luận: '}</span>
                <span>{education.thesis[lang]}</span>
                <span className="block mt-1 font-extrabold text-amber-800">
                  {lang === 'en' ? 'Overall GPA: ' : 'GPA toàn phần: '}{education.overallGpa}
                </span>
              </div>
            </div>
          </div>

          {/* IELTS 6.5 */}
          <div className="hologram-card p-8 rounded-[32px] hover:border-sky-300 transition-all shadow-xl">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold shadow-inner shrink-0">
                <Star className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-xl">{education.ielts.score}</h3>
                <p className="text-xs font-extrabold text-sky-600 mt-0.5">{lang === 'en' ? 'English Certification' : 'Chứng Chỉ Tiếng Anh Quốc Tế'}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {education.ielts.desc[lang]}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
