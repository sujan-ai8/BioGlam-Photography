import React from 'react';
import { ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function Introduction() {
  const scrollToAbout = () => {
    document.querySelector('#about-photographer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Photography Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold Border Offset Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-gold-500/30 rounded-sm translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Real BioGlam Photograph */}
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-black/80 group">
                <img
                  src="/images/bioglam/wedding-couple.png"
                  alt="BioGlam Photography — Signature Wedding Couple Session in Bengaluru"
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Verified Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-dark p-3.5 rounded-sm border border-gold-400/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-400 block font-semibold">
                      Authentic Portfolio
                    </span>
                    <span className="text-xs text-warm-white font-medium">
                      BioGlam Wedding Collection
                    </span>
                  </div>
                  <div className="flex items-center text-gold-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5 mr-1" />
                    <span>Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
              <span className="w-8 h-[1px] bg-gold-400" />
              <span>BIOGLAM PHOTOGRAPHY</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-warm-white tracking-tight leading-tight mb-6">
              Stories Worth <br />
              <span className="text-gold-gradient italic">Remembering</span>
            </h2>

            {/* Provided Exact Content */}
            <div className="space-y-4 text-warm-white/80 text-base sm:text-lg leading-relaxed font-light mb-8">
              <p>
                At BioGlam Photography, we believe the best photographs are more than beautiful images — they are memories you can return to for a lifetime.
              </p>
              <p>
                From intimate moments to grand celebrations, we capture genuine emotions, natural expressions, meaningful details, and the people who make your story special.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-warm-white font-semibold">5.0 ★ Google Rating</h4>
                  <p className="text-[11px] text-warm-muted">100% Client Satisfaction</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-warm-white font-semibold">Candid & Natural</h4>
                  <p className="text-[11px] text-warm-muted">Zero Forced Posing</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center text-xs uppercase tracking-widest2 font-semibold text-gold-300 hover:text-gold-100 group transition-colors"
              >
                <span>Discover BioGlam</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
