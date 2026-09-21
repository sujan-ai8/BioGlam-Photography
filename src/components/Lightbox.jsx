import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  isOpen
}) {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  // Mobile swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      onNext();
    } else if (distance < -minSwipeDistance) {
      onPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photography Lightbox"
      className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Top Bar: Brand, Counter, Close Button */}
      <div
        className="flex items-center justify-between w-full max-w-7xl mx-auto z-10 py-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="font-display text-sm tracking-widest2 text-gold-400 font-semibold">
            BIOGLAM
          </span>
          <span className="text-xs text-warm-muted">/</span>
          <span className="text-xs text-warm-white/70 tracking-widest font-mono">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-warm-white hover:text-gold-300 border border-white/10 transition-all focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Area with Prev / Next Controls */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/50 hover:bg-gold-500 hover:text-charcoal-950 text-white border border-white/20 transition-all focus:outline-none backdrop-blur-sm"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Displayed Photograph */}
        <div className="relative max-h-[75vh] sm:max-h-[80vh] flex flex-col items-center justify-center">
          <img
            key={currentImage.id}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-sm shadow-2xl transition-all duration-300 animate-in zoom-in-95"
          />

          {currentImage.isRealBioGlam && (
            <div className="absolute top-4 left-4 glass-gold px-3 py-1 rounded-sm text-[11px] font-semibold text-gold-300 tracking-wider flex items-center shadow-lg">
              <Sparkles className="w-3 h-3 mr-1.5" />
              BioGlam Original
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/50 hover:bg-gold-500 hover:text-charcoal-950 text-white border border-white/20 transition-all focus:outline-none backdrop-blur-sm"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Info Bar: Title, Category, Location */}
      <div
        className="w-full max-w-3xl mx-auto text-center z-10 py-3 bg-charcoal-900/60 backdrop-blur-md rounded-sm border border-white/10 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-widest2 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/30">
            {currentImage.category}
          </span>
          {currentImage.location && (
            <span className="text-[11px] text-warm-muted flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-gold-400" />
              {currentImage.location}
            </span>
          )}
        </div>
        
        <h4 className="font-serif-luxury text-lg sm:text-xl text-warm-white">
          {currentImage.title}
        </h4>
        
        {currentImage.description && (
          <p className="text-xs text-warm-white/70 font-light mt-1 max-w-xl mx-auto">
            {currentImage.description}
          </p>
        )}
      </div>
    </div>
  );
}
