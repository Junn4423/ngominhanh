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
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full sm:h-[92vh] sm:max-w-4xl bg-white sm:rounded-[32px] overflow-hidden shadow-2xl border border-rose-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar - Mobile responsive layout */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-900 text-white flex items-center justify-between gap-2 border-b border-slate-800 shrink-0">
          
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 p-[2px] shadow-md flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 truncate">
                <h3 className="font-extrabold text-xs sm:text-base tracking-tight text-white truncate">
                  {PORTFOLIO_DATA.personal.displayName} — CV
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-rose-500/30 border border-rose-400/40 text-[9px] font-extrabold text-rose-200 uppercase">
                  Verified PDF
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium truncate">
                {lang === 'en' ? 'Official Marketing Resume' : 'Hồ Sơ Năng Lực Marketing'}
              </p>
            </div>
          </div>

          {/* Top Actions: Zoom controls & Download & Close */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Desktop Zoom controls */}
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
              className="px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-extrabold shadow-md hover:scale-105 transition-transform flex items-center gap-1 sm:gap-1.5"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{lang === 'en' ? 'Download PDF' : 'Tải CV PDF'}</span>
              <span className="xs:hidden">Tải PDF</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
              title="Close Preview"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

          </div>
        </div>

        {/* Scrollable Crisp High-Res Document Viewer Window */}
        <div className="flex-1 bg-slate-900/95 overflow-y-auto p-2 sm:p-8 flex justify-center items-start">
          <div 
            className="transition-all duration-300 w-full sm:w-auto shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-slate-700"
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
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-600 font-bold shrink-0">
          <div className="flex items-center gap-1.5 truncate pr-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span className="truncate">{lang === 'en' ? 'Hoa Sen University • GPA 4.0/4.0 • IELTS 6.5' : 'ĐH Hoa Sen • GPA 4.0/4.0 • IELTS 6.5'}</span>
          </div>

          <a
            href={cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-extrabold hover:underline flex items-center gap-1 shrink-0"
          >
            <span>{lang === 'en' ? 'Open Raw PDF' : 'Mở PDF gốc'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
