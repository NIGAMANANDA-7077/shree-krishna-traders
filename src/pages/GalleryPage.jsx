import React, { useState, useEffect, useRef } from 'react';
import { galleryItems as staticGalleryItems, galleryVideos } from '../data/companyData';
import GalleryModal from '../components/GalleryModal';
import VideoModal from '../components/VideoModal';
import { LuMaximize2, LuPlay, LuFilm, LuImage, LuClock, LuTag, LuSparkles, LuArrowUpRight, LuShieldCheck } from 'react-icons/lu';
import { useInView } from '../hooks/useInView';
import { getDynamicGalleryItems } from '../lib/supabase';

export default function GalleryPage() {
  // Photo modal states
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);

  // Video modal states
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoIdx, setVideoIdx] = useState(0);

  // Active view tab: 'all' | 'videos' | 'photos'
  const [activeTab, setActiveTab] = useState('all');

  // Hero & Grid InView hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [videoRef, videoInView] = useInView({ threshold: 0.05 });
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  const [allItems, setAllItems] = useState(staticGalleryItems);

  useEffect(() => {
    // Fetch live uploaded items from database / storage and prepend to gallery
    getDynamicGalleryItems().then((customItems) => {
      if (customItems && customItems.length > 0) {
        setAllItems([...customItems, ...staticGalleryItems]);
      }
    });
  }, []);

  const categories = ['All', ...new Set(allItems.map((i) => i.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos =
    activeCategory === 'All'
      ? allItems
      : allItems.filter((i) => i.category === activeCategory);

  const featuredVideo = galleryVideos[0];
  const gridVideos = galleryVideos.slice(1);

  const handleOpenVideo = (index) => {
    setVideoIdx(index);
    setVideoModalOpen(true);
  };

  const handleOpenPhoto = (index) => {
    setPhotoIdx(index);
    setPhotoModalOpen(true);
  };

  return (
    <div className="s-section-cream min-h-screen">
      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section className="pt-36 pb-14 px-4 sm:px-6 lg:px-8 s-section-cream">
        <div className="max-w-6xl mx-auto" ref={heroRef}>
          <div className={`s-pill mb-6 reveal d1 ${heroInView ? 'visible' : ''}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
            <span>VISUAL PORTFOLIO &amp; ON-SITE FOOTAGE</span>
          </div>

          <h1 className={`s-heading text-5xl sm:text-7xl lg:text-8xl text-[#2D241C] mb-6 reveal d2 ${heroInView ? 'visible' : ''}`}>
            GALLERY &amp; VIDEOS.
          </h1>

          <p className={`text-base sm:text-lg text-[#8F7D6D] max-w-2xl mb-8 reveal d3 ${heroInView ? 'visible' : ''}`}>
            Explore our authentic warehouse stock, product categories, and live on-site footage from our industrial supply hub in Cuttack, Odisha.
          </p>

          {/* Media Switcher Tabs */}
          <div className={`flex flex-wrap items-center gap-3 reveal d4 ${heroInView ? 'visible' : ''}`}>
            <button
              onClick={() => setActiveTab('all')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeTab === 'all'
                  ? 'bg-[#1A1208] text-white shadow-md'
                  : 'bg-white text-[#2D241C] border border-[rgba(30,22,21,0.1)] hover:border-[#F45F02]'
              }`}
            >
              <LuSparkles className="w-4 h-4 text-[#F45F02]" />
              <span>All Media</span>
              <span className="ml-1 text-[11px] font-mono opacity-60">({galleryVideos.length + allItems.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeTab === 'videos'
                  ? 'bg-[#F45F02] text-white shadow-md'
                  : 'bg-white text-[#2D241C] border border-[rgba(30,22,21,0.1)] hover:border-[#F45F02]'
              }`}
            >
              <LuFilm className="w-4 h-4" />
              <span>Warehouse Videos</span>
              <span className="ml-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/10">
                {galleryVideos.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('photos')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                activeTab === 'photos'
                  ? 'bg-[#1A1208] text-white shadow-md'
                  : 'bg-white text-[#2D241C] border border-[rgba(30,22,21,0.1)] hover:border-[#F45F02]'
              }`}
            >
              <LuImage className="w-4 h-4" />
              <span>Photo Gallery</span>
              <span className="ml-1 text-[11px] font-mono opacity-60">({allItems.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. DEDICATED WAREHOUSE & SITE VIDEOS SECTION ───── */}
      {(activeTab === 'all' || activeTab === 'videos') && (
        <section
          id="video-showcase"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0B1526] text-white border-t border-b border-white/10 relative overflow-hidden"
          ref={videoRef}
        >
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F45F02]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Video Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono text-amber-300 uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#F45F02] animate-pulse" />
                  <span>ON-SITE &amp; WAREHOUSE FOOTAGE</span>
                </div>
                <h2 className="s-heading text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                  LIVE FACILITY &amp; INVENTORY VIDEOS.
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
                  Real video recordings of our central warehouse stock in Cuttack: structural anchors, heavy fasteners, pure epoxy chemical injection mortars, and ready consignments.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-white/60 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>6 Verified Warehouse Clips</span>
              </div>
            </div>

            {/* Featured Hero Video Card */}
            {featuredVideo && (
              <div
                onClick={() => handleOpenVideo(0)}
                className="group relative rounded-3xl overflow-hidden bg-[#122036] border border-white/15 shadow-2xl mb-10 cursor-pointer transition-all duration-300 hover:border-[#F45F02]/60 hover:shadow-[0_20px_60px_-15px_rgba(244,95,2,0.25)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  {/* Video Viewport Container */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[460px] bg-black overflow-hidden flex items-center justify-center">
                    <video
                      src={featuredVideo.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Central Animated Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F45F02] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#ff721a] transition-all duration-300">
                        <LuPlay className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Badges on Video */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F45F02] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                        {featuredVideo.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md flex items-center gap-1.5 border border-white/15">
                        <LuClock className="w-3.5 h-3.5 text-[#F45F02]" />
                        {featuredVideo.duration}
                      </span>
                      <span className="text-white/80 text-[11px]">Click to Watch in Cinema Mode</span>
                    </div>
                  </div>

                  {/* Video Description & Highlights */}
                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#F45F02] uppercase font-bold tracking-wider mb-2">
                        <span>{featuredVideo.category}</span>
                        <span>·</span>
                        <span className="text-white/60">{featuredVideo.subtitle}</span>
                      </div>

                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white group-hover:text-[#F45F02] transition-colors leading-tight mb-3">
                        {featuredVideo.title}
                      </h3>

                      <p className="text-sm text-white/75 leading-relaxed">
                        {featuredVideo.description}
                      </p>
                    </div>

                    {/* Tags */}
                    {featuredVideo.tags && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                        {featuredVideo.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80"
                          >
                            <LuTag className="w-3 h-3 text-[#F45F02]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1A1208] font-bold text-xs sm:text-sm group-hover:bg-[#F45F02] group-hover:text-white transition-all shadow-lg"
                      >
                        <LuPlay className="w-4 h-4 fill-current" />
                        <span>Watch Featured Video ({featuredVideo.duration})</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Other 5 Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridVideos.map((video, vIndex) => {
                const actualIndex = vIndex + 1;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleOpenVideo(actualIndex)}
                    className="group bg-[#122036] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-[#F45F02]/50 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Video Thumbnail / Preview Box */}
                    <div className="relative h-56 bg-black overflow-hidden flex items-center justify-center">
                      <video
                        src={video.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                      {/* Play Button Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-13 h-13 rounded-full bg-[#F45F02] text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#ff721a] transition-all duration-200">
                          <LuPlay className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-[#F45F02] uppercase tracking-wider border border-white/10">
                          {video.category}
                        </span>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1 border border-white/15">
                          <LuClock className="w-3 h-3 text-[#F45F02]" />
                          {video.duration}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-mono text-white/50 mb-1">
                          {video.subtitle}
                        </div>
                        <h4 className="font-bold text-base text-white group-hover:text-[#F45F02] transition-colors leading-snug mb-2">
                          {video.title}
                        </h4>
                        <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>

                      {/* Tags & Play link */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/50">
                          <LuTag className="w-3 h-3 text-[#F45F02]" />
                          <span className="truncate max-w-[150px]">
                            {video.tags ? video.tags.join(' · ') : video.category}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#F45F02] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                          Play <LuArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── 3. PHOTO GALLERY SECTION ───────────────────────── */}
      {(activeTab === 'all' || activeTab === 'photos') && (
        <section className="py-16 s-section-white border-t border-[rgba(30,22,21,0.07)]" ref={gridRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="s-pill mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F45F02]" />
                  <span>PRODUCT &amp; MATERIAL CATALOGUE</span>
                </div>
                <h2 className="s-heading text-3xl sm:text-5xl text-[#2D241C]">
                  PHOTO PORTFOLIO.
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? 'bg-[#F45F02] text-white shadow-sm'
                        : 's-btn-ghost py-2 px-4'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((item, i) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenPhoto(allItems.indexOf(item))}
                  className={`s-card overflow-hidden group cursor-pointer reveal d${Math.min(
                    (i % 3) + 1,
                    6
                  )} ${gridInView ? 'visible' : ''}`}
                >
                  <div className="relative h-64 overflow-hidden bg-[#FFFDF9] flex items-center justify-center p-3 border-b border-[rgba(30,22,21,0.06)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="s-pill text-[10px] bg-white/95 backdrop-blur-sm shadow-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <LuMaximize2 className="w-3.5 h-3.5 text-[#2D241C]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-sm text-[#2D241C] group-hover:text-[#F45F02] transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8F7D6D] line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 4. MODALS ────────────────────────────────────────── */}
      {/* Photo Lightbox Modal */}
      <GalleryModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
        items={allItems}
        currentIndex={photoIdx}
        onIndexChange={setPhotoIdx}
      />

      {/* Cinema Video Player Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videos={galleryVideos}
        currentIndex={videoIdx}
        onIndexChange={setVideoIdx}
      />
    </div>
  );
}
