import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function ContactSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    '2nd Main, 5th Cross, Balaji Layout, Prakruthi Nagar, Kogilu, Yelahanka, Bengaluru, Karnataka 560064'
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>CONNECT WITH BIOGLAM</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-warm-white tracking-tight uppercase leading-tight">
            Let&apos;s Talk About <br />
            <span className="text-gold-gradient italic font-light">Your Story</span>
          </h2>

          <p className="text-sm sm:text-base text-warm-muted font-light mt-4">
            Visit our studio in Yelahanka or connect with us directly over call or WhatsApp.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Location Card */}
              <div className="p-5 rounded-sm bg-charcoal-900 border border-white/10 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                    Location
                  </h3>
                  <p className="text-sm text-warm-white/90 leading-relaxed font-light">
                    2nd Main, 5th Cross, Balaji Layout,<br />
                    Prakruthi Nagar, Kogilu, Yelahanka,<br />
                    Bengaluru, Karnataka – 560064
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-sm bg-charcoal-900 border border-white/10 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+919019937351"
                    className="text-base text-warm-white hover:text-gold-300 font-medium transition-colors"
                  >
                    +91 90199 37351
                  </a>
                  <p className="text-xs text-warm-muted mt-0.5">Direct line to Nagaraj</p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="p-5 rounded-sm bg-charcoal-900 border border-white/10 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0 mt-0.5">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-1">
                    Instagram
                  </h3>
                  <a
                    href="https://www.instagram.com/bioglam_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-warm-white hover:text-pink-300 font-medium transition-colors flex items-center"
                  >
                    <span>@bioglam_official</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-warm-muted" />
                  </a>
                  <p className="text-xs text-warm-muted mt-0.5">Daily reels, galleries & behind-the-scenes</p>
                </div>
              </div>

              {/* Availability Card */}
              <div className="p-5 rounded-sm bg-charcoal-900 border border-white/10 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
                    Availability
                  </h3>
                  <p className="text-sm text-warm-white font-medium">
                    Open 24 Hours
                  </p>
                  <p className="text-xs text-warm-muted mt-0.5">Available for morning rituals & night receptions</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <a
                href="tel:+919019937351"
                className="py-3 px-3 rounded-sm bg-charcoal-900 border border-gold-500/30 text-gold-300 hover:bg-gold-500/20 text-xs font-semibold uppercase tracking-wider text-center flex flex-col items-center justify-center gap-1 transition-all"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919019937351?text=Hi%20BioGlam%20Photography%2C%20I%20would%20like%20to%20enquire%20about%20a%20photography%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-sm bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40 text-xs font-semibold uppercase tracking-wider text-center flex flex-col items-center justify-center gap-1 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/bioglam_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-sm bg-charcoal-900 border border-pink-500/30 text-pink-300 hover:bg-pink-500/20 text-xs font-semibold uppercase tracking-wider text-center flex flex-col items-center justify-center gap-1 transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-sm bg-charcoal-900 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 text-xs font-semibold uppercase tracking-wider text-center flex flex-col items-center justify-center gap-1 transition-all"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[400px] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative">
            <iframe
              title="BioGlam Photography Studio Location in Kogilu, Yelahanka, Bengaluru"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.129331566896!2d77.6186411!3d13.1118182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190772242b3b%3A0x8e82ef6fae5452f1!2sKogilu%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 glass-dark p-3 rounded-sm border border-gold-400/30 pointer-events-none">
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                BioGlam Photography
              </span>
              <span className="text-xs text-warm-white font-medium">
                Kogilu, Yelahanka, Bengaluru – 560064
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
