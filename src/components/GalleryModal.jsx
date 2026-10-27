import React from 'react';
import { LuX, LuChevronLeft, LuChevronRight } from 'react-icons/lu';

export default function GalleryModal({ isOpen, onClose, items, currentIndex, onIndexChange }) {
  if (!isOpen || !items?.length) return null;
  const item = items[currentIndex];
  const prev = () => onIndexChange((currentIndex - 1 + items.length) % items.length);
  const next = () => onIndexChange((currentIndex + 1) % items.length);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1A1208]/80 backdrop-blur-xl" />

      {/* Modal */}
      <div
        className="relative z-10 max-w-4xl w-full mx-4 bg-white rounded-3xl overflow-hidden shadow-2xl border border-[rgba(30,22,21,0.12)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(30,22,21,0.08)]">
          <div>
            <div className="text-[10px] font-mono text-[#F45F02] uppercase font-bold tracking-wider">{item.category}</div>
            <h3 className="font-bold text-base text-[#2D241C]">{item.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#9A8470]">{currentIndex + 1}/{items.length}</span>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-[#FFF7EC] border border-[rgba(30,22,21,0.1)] flex items-center justify-center text-[#2D241C] hover:bg-[#F45F02] hover:text-white transition-colors">
              <LuX className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative bg-[#FFFDF9] flex items-center justify-center p-4">
          <img src={item.image} alt={item.title} className="w-full max-h-[65vh] object-contain rounded-xl" />
          {/* Nav arrows */}
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-[rgba(30,22,21,0.1)] flex items-center justify-center hover:bg-[#F45F02] hover:text-white transition-all shadow-md">
            <LuChevronLeft className="w-5 h-5 stroke-[2]" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-[rgba(30,22,21,0.1)] flex items-center justify-center hover:bg-[#F45F02] hover:text-white transition-all shadow-md">
            <LuChevronRight className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Caption */}
        <div className="px-6 py-5 border-t border-[rgba(30,22,21,0.06)]">
          <p className="text-sm text-[#5C4D3E] leading-relaxed">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}
