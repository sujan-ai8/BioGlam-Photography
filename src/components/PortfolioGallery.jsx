import React, { useState } from 'react';
import { portfolioCategories, portfolioItems } from '../data/portfolioData';
import Lightbox from './Lightbox';
import { Eye, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items based on active category
  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory || item.subCategory === activeCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>PORTFOLIO SHOWCASE</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-warm-white tracking-tight uppercase leading-tight mb-4">
            Visual <span className="text-gold-gradient italic font-light">Narratives</span>
          </h2>

          <p className="text-sm sm:text-base text-warm-muted font-light max-w-xl mx-auto">
            Explore genuine love stories, sacred rites, and joyful family celebrations documented with editorial precision.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {portfolioCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-charcoal-950 font-semibold shadow-md shadow-gold-900/30 scale-105'
                    : 'bg-charcoal-950/80 text-warm-white/70 border border-white/10 hover:border-gold-500/40 hover:text-gold-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Masonry / Columns Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative rounded-sm overflow-hidden group cursor-pointer border border-white/10 hover:border-gold-400/60 transition-all duration-500 bg-charcoal-950 shadow-xl"
            >
              {/* Image with Aspect Ratio & Gentle Hover Zoom */}
              <div className="relative overflow-hidden w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />

                {/* Real BioGlam Badge */}
                {item.isRealBioGlam && (
                  <div className="absolute top-3 left-3 glass-gold px-2.5 py-1 rounded-sm text-[10px] font-semibold text-gold-300 tracking-wider flex items-center shadow-lg z-10">
                    <Sparkles className="w-3 h-3 mr-1" />
                    BioGlam Original
                  </div>
                )}

                {/* Dark Hover Overlay with Details & Eye Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-widest2 text-gold-400 font-semibold block mb-1">
                      {item.category} • {item.location}
                    </span>
                    <h3 className="font-serif-luxury text-xl text-warm-white leading-tight mb-2">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center text-xs text-gold-300 font-medium">
                      <Eye className="w-3.5 h-3.5 mr-1.5" />
                      <span>View Fullscreen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-widest text-warm-muted mb-3">
            Want photographs like these for your special day?
          </p>
          <button
            onClick={() => {
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-sm border border-gold-400/40 text-gold-300 hover:bg-gold-500/10 hover:border-gold-300 text-xs uppercase tracking-widest font-semibold transition-all"
          >
            <span>Book A Session With Nagaraj</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
