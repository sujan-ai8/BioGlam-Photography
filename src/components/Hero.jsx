import React from 'react';
import { ChevronDown, Sparkles, Star, Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-950">
      {/* Background Image with Zoom & Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bioglam/wedding-ritual.jpg"
          alt="BioGlam Photography — Indian Wedding Ceremony Ritual in Bengaluru"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-75 transition-transform duration-1000"
        />
        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-transparent to-charcoal-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-charcoal-950/40 to-charcoal-950" />
      </div>

      {/* Decorative Gold Light Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        
        {/* Availability & Rating Pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-gold text-warm-white/90 text-xs tracking-wider mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3" />
          <span className="font-medium text-gold-300">Open 24 Hours</span>
          <span className="text-white/30">•</span>
          <div className="flex items-center text-amber-300">
            <Star className="w-3 h-3 fill-amber-300 mr-1" />
            <span className="font-semibold text-white">5.0</span>
            <span className="text-white/60 ml-1">(9 Google Reviews)</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-warm-white font-normal uppercase leading-[1.08] mb-6">
          We Capture <br />
          <span className="text-gold-gradient font-light italic">Your Story.</span>
        </h1>

        {/* Subheading */}
        <p className="text-xs sm:text-sm md:text-base uppercase tracking-widest2 text-gold-300 font-medium mb-4">
          Wedding • Pre-Wedding • Portrait • Event Photography
        </p>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-warm-white/80 font-light leading-relaxed mb-10">
          &ldquo;Timeless photographs, genuine emotions, and beautiful stories captured with passion.&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest2 font-semibold text-warm-white border border-gold-400/40 rounded-sm hover:bg-gold-500/10 hover:border-gold-300 transition-all flex items-center justify-center group"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-gold-400" />
          </button>

          <button
            onClick={scrollToBooking}
            className="w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-widest2 font-semibold text-charcoal-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-gold-900/30 flex items-center justify-center"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Book Your Shoot</span>
          </button>
        </div>

        {/* Location Subtext */}
        <p className="mt-8 text-xs text-warm-muted tracking-widest uppercase">
          Based in Yelahanka, Bengaluru • Covering Karnataka & Beyond
        </p>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div
        onClick={scrollToWork}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
      >
        <span className="text-[10px] uppercase tracking-widest2 text-warm-muted group-hover:text-gold-300 transition-colors mb-1.5">
          Scroll To Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-gold-400/50 transition-colors">
          <div className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
