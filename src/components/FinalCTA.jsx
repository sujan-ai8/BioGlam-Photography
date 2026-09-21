import React from 'react';
import { Calendar, Eye, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 sm:py-40 bg-charcoal-950 overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bioglam/prewedding-couple.jpg"
          alt="BioGlam Pre-wedding couple shoot at sunset"
          loading="lazy"
          className="w-full h-full object-cover object-center scale-105 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/60 to-charcoal-950" />
      </div>

      {/* Decorative Gold Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-gold text-xs uppercase tracking-widest text-gold-300 font-semibold mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR STORY WITH US</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        {/* Heading */}
        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-warm-white font-normal uppercase leading-[1.08] tracking-tight mb-6">
          YOUR MOMENT <br />
          <span className="text-gold-gradient italic font-light">DESERVES TO BE</span> <br />
          REMEMBERED.
        </h2>

        {/* Text */}
        <p className="max-w-xl mx-auto text-base sm:text-xl text-warm-white/85 font-light leading-relaxed mb-10">
          &ldquo;Let&apos;s turn your moments into photographs you&apos;ll treasure for years to come.&rdquo;
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest2 font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-gold-900/40 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4 mr-1" />
            <span>BOOK YOUR SHOOT</span>
          </button>

          <button
            onClick={scrollToGallery}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest2 font-semibold text-warm-white border border-gold-400/40 rounded-sm hover:bg-gold-500/10 hover:border-gold-300 transition-all flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4 mr-1 text-gold-400" />
            <span>VIEW PORTFOLIO</span>
          </button>
        </div>

      </div>
    </section>
  );
}
