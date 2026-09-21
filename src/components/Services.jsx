import React from 'react';
import { servicesData } from '../data/servicesData';
import { ArrowRight, Check } from 'lucide-react';

export default function Services({ onSelectService }) {
  const handleServiceClick = (service) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      // Scroll to booking form and select event type
      const booking = document.querySelector('#booking');
      if (booking) {
        booking.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-charcoal-900 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>OUR SPECIALIZATIONS</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-warm-white tracking-tight leading-tight uppercase mb-4">
            What We <span className="text-gold-gradient italic font-light">Capture</span>
          </h2>

          <p className="text-base sm:text-lg text-warm-muted font-light">
            &ldquo;Photography for life&apos;s most meaningful moments.&rdquo;
          </p>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-charcoal-950 rounded-sm border border-white/10 hover:border-gold-400/50 transition-all duration-500 overflow-hidden flex flex-col justify-between luxury-card-glow"
            >
              {/* Image Container with Hover Zoom & Dark Gradient */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={`BioGlam ${service.title} in Bengaluru`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent" />
                
                {/* Real BioGlam photo tag if applicable */}
                {service.isRealBioGlam && (
                  <div className="absolute top-4 left-4 glass-gold px-2.5 py-1 rounded-sm text-[10px] tracking-wider uppercase font-semibold text-gold-300">
                    Real BioGlam Work
                  </div>
                )}

                {/* Tagline pill */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] tracking-widest3 uppercase text-gold-400 font-semibold block mb-1">
                    {service.tagline}
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-warm-white font-medium">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-warm-white/75 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 mb-6 border-t border-white/5 pt-4">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-warm-white/70">
                        <Check className="w-3.5 h-3.5 text-gold-400 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="w-full py-3 px-4 rounded-sm border border-gold-500/30 text-gold-300 group-hover:bg-gold-500 group-hover:text-charcoal-950 group-hover:border-gold-500 transition-all duration-300 text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2"
                  >
                    <span>{service.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Enquiry Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-sm glass-dark border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-warm-white mb-1">
              Have a custom event or bespoke vision?
            </h4>
            <p className="text-xs sm:text-sm text-warm-muted">
              We tailor custom packages for destination weddings, half-day ceremonies, and private shoots.
            </p>
          </div>
          <button
            onClick={() => {
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="whitespace-nowrap px-6 py-3 text-xs uppercase tracking-widest font-semibold text-charcoal-950 bg-gold-400 rounded-sm hover:bg-gold-300 transition-colors"
          >
            Request Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}
