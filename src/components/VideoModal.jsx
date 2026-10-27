import React, { useEffect, useRef } from 'react';
import { LuX, LuChevronLeft, LuChevronRight, LuPlay, LuPause, LuVolume2, LuVolumeX, LuMessageSquare, LuMaximize, LuClock, LuTag } from 'react-icons/lu';
import { companyInfo } from '../data/companyData';

export default function VideoModal({ isOpen, onClose, videos, currentIndex, onIndexChange }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, videos]);

  if (!isOpen || !videos?.length) return null;
  const currentVideo = videos[currentIndex];

  const prev = () => onIndexChange((currentIndex - 1 + videos.length) % videos.length);
  const next = () => onIndexChange((currentIndex + 1) % videos.length);

  return (
    <div
      className="fixed inset-0 z-[220] flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#07101E]/90 backdrop-blur-xl transition-opacity animate-fade-in" />

      {/* Modal Dialog */}
      <div
        className="relative z-10 max-w-4xl w-full bg-[#0F1C2E] text-white rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.65)] border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-[#0A1424]">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F45F02] animate-pulse shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#F45F02] uppercase font-bold tracking-wider">
                  {currentVideo.category}
                </span>
                <span className="text-[10px] font-mono text-white/40">·</span>
                <span className="text-[10px] font-mono text-white/60 flex items-center gap-1">
                  <LuClock className="w-3 h-3 text-[#F45F02]" />
                  {currentVideo.duration}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white truncate max-w-md sm:max-w-xl">
                {currentVideo.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-3">
            <span className="text-xs font-mono text-white/50 hidden sm:inline">
              {currentIndex + 1} / {videos.length}
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F45F02] text-white flex items-center justify-center transition-all duration-200"
              title="Close (Esc)"
            >
              <LuX className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative bg-black flex items-center justify-center max-h-[62vh] overflow-hidden group">
          <video
            ref={videoRef}
            key={currentVideo.src}
            src={currentVideo.src}
            controls
            autoPlay
            playsInline
            className="w-full max-h-[62vh] object-contain mx-auto"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#F45F02] text-white border border-white/15 flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
            title="Previous Video (←)"
          >
            <LuChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#F45F02] text-white border border-white/15 flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
            title="Next Video (→)"
          >
            <LuChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Footer Details & Action Bar */}
        <div className="px-5 sm:px-7 py-4 sm:py-5 bg-[#0C1728] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {currentVideo.description}
            </p>
            {currentVideo.tags && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentVideo.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/70"
                  >
                    <LuTag className="w-2.5 h-2.5 text-[#F45F02]" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/919437564007?text=${encodeURIComponent(`Hello Shree Krishna Traders, I saw your warehouse video "${currentVideo.title}" and would like to inquire about current stock and pricing.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02]"
            >
              <LuMessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
