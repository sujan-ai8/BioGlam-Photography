import React from 'react';
import { Camera, Award, Star, Clock, MapPin } from 'lucide-react';

export default function AboutPhotographer() {
  const stats = [
    { label: 'Google Reviews', value: '9+', sub: '100% Five-Star' },
    { label: 'Google Rating', value: '5.0★', sub: 'Verified Excellence' },
    { label: 'Moments Captured', value: '100+', sub: 'Weddings & Portraits' },
    { label: 'Availability', value: '24/7', sub: 'Always Reachable' },
  ];

  return (
    <section id="about-photographer" className="py-24 sm:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photographer Portrait with Luxury Framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-4 border border-gold-500/20 rounded-sm -rotate-1 pointer-events-none" />
              <div className="absolute -inset-4 border border-gold-400/30 rounded-sm rotate-1 pointer-events-none" />

              {/* Portrait image */}
              <div className="relative rounded-sm overflow-hidden border border-gold-400/40 shadow-2xl bg-charcoal-950">
                <img
                  src="/images/bioglam/photographer-nagaraj.jpg"
                  alt="Nagaraj — Lead Photographer at BioGlam Photography Bengaluru"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Studio Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-dark p-3 rounded-sm border border-gold-400/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-luxury text-lg text-warm-white font-semibold">
                      Nagaraj
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-gold-400 font-medium">
                      Founder & Lead Photographer
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-300">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Stats */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
              <span className="w-8 h-[1px] bg-gold-400" />
              <span>THE ARTIST</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-warm-white tracking-tight uppercase leading-tight mb-6">
              Meet The Person <br />
              <span className="text-gold-gradient italic font-light">Behind The Camera</span>
            </h2>

            {/* Provided Content */}
            <div className="space-y-4 text-warm-white/80 text-base sm:text-lg leading-relaxed font-light mb-8">
              <blockquote className="border-l-2 border-gold-400 pl-4 italic text-warm-white/95">
                &ldquo;Photography is not simply about taking pictures. It is about observing people, understanding emotions, finding the right light, and preserving moments that can never be repeated.&rdquo;
              </blockquote>
              <p>
                At BioGlam Photography, Nagaraj brings a warm, professional and comfortable approach to every session. Whether directing shy couples for natural poses, capturing fast-moving wedding rituals, or curating gentle maternity frames, he ensures your experience is calm, relaxed, and genuinely enjoyable.
              </p>
            </div>

            {/* Real Business Location Subtext */}
            <div className="flex items-center space-x-2 text-xs text-warm-muted mb-8">
              <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>Studio located in Kogilu, Yelahanka, Bengaluru – 560064</span>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-sm bg-charcoal-950/70 border border-white/5">
                  <div className="font-serif-luxury text-2xl sm:text-3xl text-gold-300 font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-warm-white uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-warm-muted mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
