import React, { useState } from 'react';
import { ExternalLink, Video, FileText, Sparkles, ArrowUpRight, X, Maximize2, ZoomIn, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  lang: 'en' | 'vi';
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'seo' | 'media' | 'ecom'>('all');
  
  // Lightbox Modal state
  const [activeLightbox, setActiveLightbox] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Work' : 'Tất Cả Tác Phẩm' },
    { id: 'seo', label: lang === 'en' ? 'SEO & Articles' : 'Bài Viết SEO' },
    { id: 'media', label: lang === 'en' ? 'Social Reels & Media' : 'Video Truyền Thông' },
    { id: 'ecom', label: lang === 'en' ? 'E-Commerce & Events' : 'E-Com & Sự Kiện' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'seo') return p.category.en.includes('SEO');
    if (filter === 'media') return p.isVideo || p.category.en.includes('Reels') || p.category.en.includes('Media');
    if (filter === 'ecom') return p.category.en.includes('Event') || p.category.en.includes('E-Commerce') || p.category.en.includes('Digital');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-rose-200 shadow-md shadow-rose-500/5 text-rose-700 text-xs font-extrabold tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>{lang === 'en' ? 'Selected Portfolio Works' : 'Dự Án & Tác Phẩm Nổi Bật'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {lang === 'en' ? 'Featured ' : 'Tác Phẩm '}
              <span className="text-gradient-rose font-serif italic font-normal">
                {lang === 'en' ? 'Marketing Projects' : 'Marketing & Digital'}
              </span>
            </h2>
          </div>

          {/* Modern Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 shadow-sm ${
                  filter === cat.id
                    ? 'bg-slate-900 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 border border-rose-200/80 hover:border-rose-400 hover:text-rose-600 hover:bg-rose-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="hologram-card rounded-[32px] overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-rose-300 transition-all duration-500"
            >
              <div>
                {/* Image Showcase Banner with Interactive Hover Zoom & Lightbox Trigger */}
                <div 
                  onClick={() => setActiveLightbox(project)}
                  className="relative h-60 overflow-hidden bg-slate-950 cursor-pointer group/img"
                >
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 opacity-90 group-hover/img:opacity-100"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover/img:opacity-40 transition-opacity" />

                  {/* Zoom Icon Hover Backdrop */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-rose-950/40 backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-white/95 text-rose-600 flex items-center justify-center shadow-xl transform scale-75 group-hover/img:scale-100 transition-transform font-bold">
                      <ZoomIn className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-rose-700 font-extrabold text-[11px] border border-rose-100 shadow-md flex items-center gap-1.5">
                      {project.isVideo ? <Video className="w-3.5 h-3.5 text-rose-500" /> : <FileText className="w-3.5 h-3.5 text-pink-500" />}
                      <span>{project.category[lang]}</span>
                    </span>
                  </div>

                  {/* Expand indicator tag */}
                  <div className="absolute bottom-3 right-4 z-10 text-[10px] text-white/90 font-extrabold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Maximize2 className="w-3 h-3 text-pink-400" />
                    <span>{lang === 'en' ? 'Click to Expand' : 'Phóng To'}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 
                    onClick={() => setActiveLightbox(project)}
                    className="font-extrabold text-slate-900 text-lg group-hover:text-rose-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed font-medium">
                    {project.description[lang]}
                  </p>
                </div>
              </div>

              {/* Card Footer Links & Tags */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-lg bg-rose-50 text-rose-700 text-[11px] font-extrabold border border-rose-100/60">
                      #{tag}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-rose-50 text-rose-700 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                  >
                    <span>{project.isVideo ? (lang === 'en' ? 'Watch Facebook Reel' : 'Xem Facebook Reel') : (lang === 'en' ? 'Read Published Article' : 'Xem Bài Viết Xuất Bản')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Fullscreen Preview Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fade-in">
          
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-pink-100 flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-lg"
              title="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High-res Image Preview */}
            <div className="relative max-h-[60vh] bg-slate-950 overflow-hidden flex items-center justify-center">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title[lang]}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>

            {/* Lightbox Details */}
            <div className="p-6 sm:p-8 space-y-3 bg-white">
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-extrabold">
                  {activeLightbox.category[lang]}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {activeLightbox.title[lang]}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {activeLightbox.description[lang]}
              </p>

              {activeLightbox.url && (
                <div className="pt-3">
                  <a
                    href={activeLightbox.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-modern text-xs inline-flex items-center gap-2"
                  >
                    <span>{activeLightbox.isVideo ? (lang === 'en' ? 'Open Facebook Reel Link' : 'Mở Video Reel Trực Tiếp') : (lang === 'en' ? 'Visit Published Website' : 'Xem Trang Web Đã Xuất Bản')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

          </div>

        </div>
      )}

    </section>
  );
};

