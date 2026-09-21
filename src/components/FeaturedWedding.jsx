import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function FeaturedWedding({ onExploreStories }) {
  const handleExplore = () => {
    if (onExploreStories) {
      onExploreStories();
    } else {
      const gallery = document.querySelector('#gallery');
      if (gallery) {
        gallery.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="featured-wedding" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest3 text-gold-400 mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CINEMATIC WEDDING DOCUMENTARY</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-warm-white tracking-tight leading-tight uppercase">
            YOUR DAY. <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic font-light">YOUR STORY.</span> <br className="hidden sm:inline" />
            YOUR MEMORIES.
          </h2>
        </div>

        {/* Cinematic Overlapping Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Main Hero Showcase Photo */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-sm overflow-hidden border border-gold-500/20 shadow-2xl group">
              <img
                src="/images/bioglam/wedding-ritual.jpg"
                alt="BioGlam Photography — Grand Indian Wedding Ritual with Golden Petals"
                loading="lazy"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block mb-1">
                  Bengaluru Wedding Story
                </span>
                <p className="font-serif-luxury text-xl sm:text-2xl text-warm-white">
                  Sacred Rituals & Pure Euphoria
                </p>
              </div>
            </div>

            {/* Floating Overlapping Small Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 lg:w-56 rounded-sm overflow-hidden border-2 border-gold-400/40 shadow-2xl shadow-black z-20 group">
              <img
                src="/images/bioglam/bridal-portrait.jpg"
                alt="BioGlam Bridal Portrait"
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="text-[10px] tracking-widest uppercase text-gold-300 font-medium">
                  The Radiant Bride
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Card & Second Overlapping Photo */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Real BioGlam Couple Preview Card */}
            <div className="relative rounded-sm overflow-hidden border border-white/10 group shadow-xl">
              <img
                src="/images/bioglam/wedding-couple.png"
                alt="BioGlam Official Wedding Couple"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-gold-400 font-semibold block">
                    BioGlam Signature
                  </span>
                  <span className="text-sm font-medium text-warm-white">
                    The Reception Elegance
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
                  <Heart className="w-4 h-4 fill-gold-400" />
                </div>
              </div>
            </div>

            {/* Editorial Text Block */}
            <div className="space-y-4">
              <blockquote className="font-serif-luxury text-xl sm:text-2xl text-warm-white/90 leading-snug font-light italic">
                &ldquo;From the quiet moments before the ceremony to the laughter, tears, celebrations, and everything in between — we document your wedding as it truly happens.&rdquo;
              </blockquote>

              <p className="text-sm text-warm-muted leading-relaxed font-light">
                We believe your wedding album should be an emotional time machine. Not a checklist of stiff poses, but an artful narrative preserving every heartfelt glance, proud tear from parents, and spontaneous burst of dance floor laughter.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleExplore}
                  className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-sm bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent border border-gold-400/40 text-gold-300 hover:text-white hover:border-gold-300 transition-all group"
                >
                  <span className="text-xs uppercase tracking-widest2 font-semibold">
                    Explore Wedding Stories
                  </span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
