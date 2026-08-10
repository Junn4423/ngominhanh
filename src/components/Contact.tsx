import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Sparkles, Video, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  lang: 'en' | 'vi';
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ lang, onOpenCvModal }) => {
  const p = PORTFOLIO_DATA.personal;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(p.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(p.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-rose-200 shadow-md shadow-rose-500/5 text-rose-700 text-xs font-extrabold tracking-wider uppercase mb-3">
            <Mail className="w-4 h-4 text-rose-500" />
            <span>{lang === 'en' ? 'Get In Touch' : 'Liên Hệ Co-op'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'en' ? 'Let\'s Connect & ' : 'Cùng Hợp Tác '}
            <span className="text-gradient-rose font-serif italic font-normal">
              {lang === 'en' ? 'Collaborate' : 'Tạo Giá Trị'}
            </span>
          </h2>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          
          {/* Email Card */}
          <div className="hologram-card p-7 rounded-[32px] flex flex-col justify-between hover:border-rose-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-extrabold">{lang === 'en' ? 'Official Email' : 'Địa Chỉ Email'}</div>
                  <a href={`mailto:${p.email}`} className="text-sm font-extrabold text-slate-900 hover:text-rose-600 transition-colors">
                    {p.email}
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full py-3 rounded-2xl bg-rose-50 text-rose-700 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? (lang === 'en' ? 'Copied Email!' : 'Đã Sao Chép!') : (lang === 'en' ? 'Copy Email Address' : 'Sao Chép Email')}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="hologram-card p-7 rounded-[32px] flex flex-col justify-between hover:border-sky-300">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-extrabold">{lang === 'en' ? 'Phone / Zalo' : 'Số Điện Thoại / Zalo'}</div>
                  <a href={`tel:${p.phone}`} className="text-sm font-extrabold text-slate-900 hover:text-sky-600 transition-colors">
                    {p.phone}
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyPhone}
              className="w-full py-3 rounded-2xl bg-sky-50 text-sky-700 font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-sky-500 hover:text-white transition-all shadow-sm"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedPhone ? (lang === 'en' ? 'Copied Phone!' : 'Đã Sao Chép!') : (lang === 'en' ? 'Copy Phone Number' : 'Sao Chép SĐT')}</span>
            </button>
          </div>

          {/* Resume PDF Viewer Card */}
          <div className="hologram-card p-7 rounded-[32px] flex flex-col justify-between border-2 border-rose-200/80 bg-gradient-to-br from-white via-rose-50/30 to-white">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold shadow-md">
                  <FileText className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-extrabold">{lang === 'en' ? 'Curriculum Vitae' : 'Hồ Sơ Năng Lực'}</div>
                  <div className="text-sm font-extrabold text-slate-900">MinhAnhNgo_Resume.pdf</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCvModal}
              className="btn-primary-modern text-xs py-3 w-full"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'View & Download CV PDF' : 'Xem & Tải Resume (PDF)'}</span>
            </button>
          </div>

        </div>

        {/* Footer Bar */}
        <footer className="mt-20 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {p.displayName} ({p.nickname}). {lang === 'en' ? 'All rights reserved.' : 'Bảo lưu mọi quyền.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCvModal}
              className="hover:text-rose-600 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>

            <a
              href="#about"
              className="hover:text-rose-600 transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </footer>

      </div>
    </section>
  );
};

