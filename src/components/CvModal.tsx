import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, Sparkles, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'vi';
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const cvPdfUrl = PORTFOLIO_DATA.personal.cvPath || './cv/MinhAnhNgo_Resume.pdf';
  const cvPreviewImg = './cv/cv_preview.png';

  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 20, 180));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 20, 70));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[92vh] bg-white rounded-[32px] overflow-hidden shadow-2xl border border-rose-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 p-[2px] shadow-md flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base tracking-tight text-white">
                  {PORTFOLIO_DATA.personal.displayName} — Curriculum Vitae
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 border border-rose-400/40 text-[10px] font-extrabold text-rose-200 uppercase">
                  Verified PDF
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {lang === 'en' ? 'Official Marketing & E-Commerce Resume' : 'Hồ Sơ Năng Lực & Kinh Nghiệm Marketing'}
              </p>
            </div>
          </div>

          {/* Top Actions: Zoom controls & Download & Close */}
          <div className="flex items-center gap-2.5">
            {/* Zoom controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-slate-300">
              <button 
                onClick={handleZoomOut}
                className="p-1.5 hover:text-white rounded-lg transition-colors" 
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold px-1.5">{zoomLevel}%</span>
              <button 
                onClick={handleZoomIn}
                className="p-1.5 hover:text-white rounded-lg transition-colors" 
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {zoomLevel !== 100 && (
                <button 
                  onClick={handleResetZoom}
                  className="p-1.5 hover:text-white rounded-lg transition-colors" 
                  title="Đặt lại"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Download PDF button */}
            <a
              href={cvPdfUrl}
              download="MinhAnhNgo_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-extrabold shadow-md hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download PDF' : 'Tải CV PDF'}</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Crisp High-Res Document Viewer Window */}
        <div className="flex-1 bg-slate-900/95 overflow-y-auto p-4 sm:p-8 flex justify-center items-start">
          <div 
            className="transition-all duration-300 max-w-full shadow-2xl rounded-2xl overflow-hidden bg-white border border-slate-700"
            style={{ width: `${zoomLevel}%`, maxWidth: '900px' }}
          >
            {/* Crisp rendered PDF Page Image View */}
            <img 
              src={cvPreviewImg} 
              alt="Minh Anh Ngo Resume Official Document"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Modal Bottom Footer Info Bar */}
        <div className="px-6 py-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-bold">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span>{lang === 'en' ? 'Hoa Sen University Graduate • Marketing • IELTS 6.5' : 'Cử nhân Marketing ĐH Hoa Sen • GPA Khóa Luận 4.0/4.0 • IELTS 6.5'}</span>
          </div>

          <a
            href={cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-extrabold hover:underline flex items-center gap-1"
          >
            <span>{lang === 'en' ? 'Open Raw PDF' : 'Mở PDF gốc'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
