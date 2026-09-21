import React from 'react';
import { Camera, Smile, Briefcase, BookOpen, Sliders, UserCheck } from 'lucide-react';

export default function WhyBioGlam() {
  const pillars = [
    {
      number: '01',
      title: 'Genuine Moments',
      description: 'We focus on authentic emotions instead of forced photographs.',
      icon: Camera
    },
    {
      number: '02',
      title: 'Comfortable Experience',
      description: 'We help clients feel relaxed and confident throughout the shoot.',
      icon: Smile
    },
    {
      number: '03',
      title: 'Professional Approach',
      description: 'From planning to final delivery, every stage is handled with care.',
      icon: Briefcase
    },
    {
      number: '04',
      title: 'Creative Storytelling',
      description: 'Every photograph should contribute to the story of your special day.',
      icon: BookOpen
    },
    {
      number: '05',
      title: 'Quality Post-Production',
      description: 'Images are carefully selected and professionally edited.',
      icon: Sliders
    },
    {
      number: '06',
      title: 'Personalized Sessions',
      description: "Every shoot is planned around the client's personality, preferences, and occasion.",
      icon: UserCheck
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle gold lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>THE BIOGLAM PHILOSOPHY</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-warm-white uppercase tracking-tight">
            Why <span className="text-gold-gradient italic font-light">BioGlam?</span>
          </h2>
          
          <p className="text-sm sm:text-base text-warm-muted font-light mt-3 max-w-xl mx-auto">
            Our approach blends quiet observation with creative artistry so your memories feel alive decades from now.
          </p>
        </div>

        {/* 6 Editorial Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="relative bg-charcoal-950 p-8 rounded-sm border border-white/10 hover:border-gold-400/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-luxury text-3xl text-gold-400/40 group-hover:text-gold-300 transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-warm-white font-medium mb-3 group-hover:text-gold-200 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-warm-white/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle bottom border highlight */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-warm-muted uppercase tracking-wider">
                  <span>BioGlam Standard</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
