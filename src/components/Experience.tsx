import React, { useState } from 'react';
import { Calendar, MapPin, Check, X, ArrowRight, Eye, ZoomIn, Sparkles, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';

interface ExperienceProps {
  lang: 'en' | 'vi';
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const { experiences } = PORTFOLIO_DATA;

  // Active hover/popover state
  const [activePeekId, setActivePeekId] = useState<string | null>(null);
  
  // Lightbox Modal for enlarged photo view
  const [activeLightbox, setActiveLightbox] = useState<{ item: ExperienceItem; activeIndex: number } | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-rose-200 shadow-md text-rose-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4 text-rose-500" />
            <span>{lang === 'en' ? 'Career Milestones' : 'Hành Trình Sự Nghiệp'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? 'Professional ' : 'Hành Trình '}
            <span className="text-gradient-rose font-serif italic font-normal">
              {lang === 'en' ? 'Experience Timeline' : 'Kinh Nghiệm & Dự Án'}
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium max-w-xl mx-auto">
            {lang === 'en' 
              ? 'Staggered timeline showcase. Hover over any card to trigger the interactive detail popover.' 
              : 'Giao diện so le chữ một bên ảnh một bên. Rê chuột vào ảnh để bật cửa sổ popover chi tiết.'}
          </p>
        </div>

        {/* Staggered Central Line Timeline */}
        <div className="relative">
          
          {/* Glowing Central Vertical Axis Line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-rose-500 via-pink-400 to-sky-400 rounded-full shadow-md pointer-events-none hidden md:block" />

          <div className="space-y-20">
            {experiences.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isPeekOpen = activePeekId === item.id;
              const gallery = item.gallery || (item.image ? [item.image] : []);

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 py-4"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  onMouseLeave={() => setActivePeekId(null)}
                >
                  
                  {/* Timeline Glowing Node Marker */}
                  <div className="hidden md:flex absolute left-1/2 top-12 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-rose-500 shadow-xl items-center justify-center z-20 hover:scale-125 transition-transform cursor-pointer">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                  </div>

                  {/* LEFT COLUMN: (Text info for Even, Big Image Card for Odd) */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] relative">
                    {isEven ? (
                      /* Text Info Block (Left side for even) */
                      <div className="space-y-4 p-2 relative">
                        {/* Hover Peek Modal (Pops up over Text side when hovering image card on Right) */}
                        {isPeekOpen && (
                          <div 
                            className="absolute inset-0 -top-4 z-40 bg-white rounded-3xl p-6 shadow-2xl border-2 border-rose-300 animate-fade-in text-left overflow-y-auto max-h-[500px]"
                            onMouseEnter={() => setActivePeekId(item.id)}
                          >
                            <button
                              onClick={() => setActivePeekId(null)}
                              className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>

                            {/* 2x2 Thumbnail Grid */}
                            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-900 rounded-2xl overflow-hidden mb-4">
                              {gallery.slice(0, 4).map((gImg, gIdx) => (
                                <div 
                                  key={gIdx} 
                                  className="h-24 overflow-hidden relative group/thumb cursor-pointer"
                                  onClick={() => setActiveLightbox({ item, activeIndex: gIdx })}
                                >
                                  <img src={gImg} alt="Gallery" className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform" />
                                  <div className="absolute inset-0 bg-rose-900/30 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                                    <ZoomIn className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <h4 className="font-extrabold text-slate-900 text-base mb-1">{item.role[lang]} — {item.company}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.description[lang][0]}</p>
                            
                            <div className="text-[11px] font-extrabold text-rose-600 uppercase tracking-wider mb-2">KEY ACHIEVEMENTS</div>
                            <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                              {item.description[lang].map((desc, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-1.5">
                                  <span className="text-rose-500 font-bold">✓</span>
                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-rose-200 text-rose-600 text-xs font-extrabold shadow-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                          {item.description[lang].join(' ')}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Big Featured Image Card (Left side for odd) */
                      <div 
                        className="hologram-card rounded-[32px] overflow-hidden group cursor-pointer border-2 border-white shadow-xl hover:border-rose-300 transition-all"
                        onMouseEnter={() => setActivePeekId(item.id)}
                        onClick={() => setActivePeekId(activePeekId === item.id ? null : item.id)}
                      >
                        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                          <img 
                            src={item.image} 
                            alt={item.company}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white font-extrabold text-xs">
                              {item.company}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 bg-white">
                          <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-rose-600 transition-colors">
                            {item.role[lang]}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-slate-500 font-bold mt-1 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-sky-500" />
                            <span>{item.location[lang]}</span>
                          </div>
                          
                          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-extrabold text-rose-600">
                            <span>{lang === 'en' ? 'Hover for Detail Popover' : 'Rê chuột xem popover chi tiết'}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>


                  {/* RIGHT COLUMN: (Big Image Card for Even, Text info for Odd) */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] relative">
                    {isEven ? (
                      /* Big Featured Image Card (Right side for even) */
                      <div 
                        className="hologram-card rounded-[32px] overflow-hidden group cursor-pointer border-2 border-white shadow-xl hover:border-rose-300 transition-all"
                        onMouseEnter={() => setActivePeekId(item.id)}
                        onClick={() => setActivePeekId(activePeekId === item.id ? null : item.id)}
                      >
                        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                          <img 
                            src={item.image} 
                            alt={item.company}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white font-extrabold text-xs">
                              {item.company}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 bg-white">
                          <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-rose-600 transition-colors">
                            {item.role[lang]}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-slate-500 font-bold mt-1 mb-3">
                            <MapPin className="w-3.5 h-3.5 text-sky-500" />
                            <span>{item.location[lang]}</span>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-extrabold text-rose-600">
                            <span>{lang === 'en' ? 'Hover for Detail Popover' : 'Rê chuột xem popover chi tiết'}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Text Info Block (Right side for odd) */
                      <div className="space-y-4 p-2 relative">
                        {/* Hover Peek Modal (Pops up over Text side when hovering image card on Left) */}
                        {isPeekOpen && (
                          <div 
                            className="absolute inset-0 -top-4 z-40 bg-white rounded-3xl p-6 shadow-2xl border-2 border-rose-300 animate-fade-in text-left overflow-y-auto max-h-[500px]"
                            onMouseEnter={() => setActivePeekId(item.id)}
                          >
                            <button
                              onClick={() => setActivePeekId(null)}
                              className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>

                            {/* 2x2 Thumbnail Grid */}
                            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-900 rounded-2xl overflow-hidden mb-4">
                              {gallery.slice(0, 4).map((gImg, gIdx) => (
                                <div 
                                  key={gIdx} 
                                  className="h-24 overflow-hidden relative group/thumb cursor-pointer"
                                  onClick={() => setActiveLightbox({ item, activeIndex: gIdx })}
                                >
                                  <img src={gImg} alt="Gallery" className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform" />
                                  <div className="absolute inset-0 bg-rose-900/30 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity">
                                    <ZoomIn className="w-4 h-4 text-white" />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <h4 className="font-extrabold text-slate-900 text-base mb-1">{item.role[lang]} — {item.company}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">{item.description[lang][0]}</p>

                            <div className="text-[11px] font-extrabold text-rose-600 uppercase tracking-wider mb-2">KEY ACHIEVEMENTS</div>
                            <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                              {item.description[lang].map((desc, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-1.5">
                                  <span className="text-rose-500 font-bold">✓</span>
                                  <span>{desc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-rose-200 text-rose-600 text-xs font-extrabold shadow-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                          {item.description[lang].join(' ')}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Lightbox Modal for enlarged photo viewing */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100 flex flex-col">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-extrabold">
                  {activeLightbox.item.company}
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {activeLightbox.item.role[lang]}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-[55vh] bg-slate-950 flex items-center justify-center p-2">
              <img
                src={activeLightbox.item.gallery ? activeLightbox.item.gallery[activeLightbox.activeIndex] : activeLightbox.item.image}
                alt="Enlarged experience preview"
                className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
