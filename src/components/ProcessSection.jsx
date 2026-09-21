import React from 'react';
import { PhoneCall, MapPin, Camera, Sliders, Heart } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: "Let's Talk",
      description: 'Tell us about your event, vision, date, and photography requirements.',
      icon: PhoneCall
    },
    {
      number: '02',
      title: 'Plan',
      description: 'We discuss locations, timelines, concepts, outfits, poses, and important moments.',
      icon: MapPin
    },
    {
      number: '03',
      title: 'Shoot',
      description: 'Relax and enjoy your day while we capture authentic moments.',
      icon: Camera
    },
    {
      number: '04',
      title: 'Edit',
      description: 'Your photographs go through careful professional post-production.',
      icon: Sliders
    },
    {
      number: '05',
      title: 'Relive',
      description: 'Receive your photographs and relive your memories again and again.',
      icon: Heart
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative center connecting line for desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>HOW WE WORK</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-warm-white tracking-tight uppercase leading-tight">
            From First Call <br />
            <span className="text-gold-gradient italic font-light">To Final Frame</span>
          </h2>

          <p className="text-sm sm:text-base text-warm-muted font-light mt-4">
            A seamless, stress-free journey tailored around your pace and comfort.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-charcoal-900/80 p-6 rounded-sm border border-white/10 hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Indicator Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-luxury text-3xl text-gold-400/40 group-hover:text-gold-300 font-bold transition-colors">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-charcoal-950 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif-luxury text-xl text-warm-white font-medium mb-2 group-hover:text-gold-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-warm-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step connector indicator */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-warm-muted uppercase tracking-wider">
                  <span>Step {index + 1}</span>
                  <span className="text-gold-400/80 font-mono">BioGlam</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
