import React, { useState } from 'react';
import { testimonialsData, googleRatingMeta } from '../data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>AUTHENTIC CLIENT EXPERIENCES</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-warm-white tracking-tight uppercase mb-6">
            Kind Words From <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic font-light">Our Clients</span>
          </h2>

          {/* Verified Google Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-full glass-dark border border-gold-400/30 shadow-lg">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            
            <div className="flex items-center space-x-2 text-xs tracking-wider text-warm-white">
              <span className="font-bold text-base text-gold-300">5.0 ★</span>
              <span className="text-white/40">|</span>
              <span className="font-semibold text-warm-white">9 Google Reviews</span>
              <span className="text-white/40">|</span>
              <span className="text-emerald-400 flex items-center text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                100% Verified
              </span>
            </div>
          </div>
        </div>

        {/* Testimonial Slider Card */}
        <div className="relative bg-charcoal-900/90 border border-gold-500/20 rounded-sm p-8 sm:p-12 shadow-2xl glass-dark">
          
          {/* Large Quote Mark */}
          <Quote className="w-12 h-12 text-gold-500/20 mb-6" />

          {/* Review Text */}
          <div className="min-h-[140px] sm:min-h-[120px] flex items-center">
            <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-warm-white font-light leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>
          </div>

          {/* Author & Service Info */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif-luxury text-xl text-gold-300 font-semibold">
                — {current.author}
              </h3>
              <p className="text-xs text-warm-muted tracking-wider uppercase mt-0.5">
                {current.service} • {current.date}
              </p>
            </div>

            {/* Stars */}
            <div className="flex items-center space-x-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 pt-4">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-gold-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-gold-500/10 text-warm-white hover:text-gold-300 transition-all focus:outline-none"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-full border border-white/10 hover:border-gold-400/50 hover:bg-gold-500/10 text-warm-white hover:text-gold-300 transition-all focus:outline-none"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
