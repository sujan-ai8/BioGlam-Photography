import React from 'react';
import { Phone, MapPin, ArrowUp, Heart, Star } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Weddings', href: '#featured-wedding' },
    { name: 'Pre-Weddings', href: '#services' },
    { name: 'Portraits', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal-950 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Gold Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="font-display text-2xl tracking-widest2 font-semibold text-warm-white block">
                BIOGLAM
              </span>
              <span className="text-[11px] tracking-widest3 uppercase text-gold-400 font-semibold block">
                PHOTOGRAPHY
              </span>
            </div>

            <p className="font-serif-luxury text-xl text-warm-white/80 italic font-light">
              &ldquo;Stories. Emotions. Memories.&rdquo;
            </p>

            <p className="text-xs text-warm-muted leading-relaxed max-w-sm font-light">
              A boutique wedding, maternity, and event photography studio based in Yelahanka, Bengaluru. Creating heartfelt, candid, and cinematic memories for couples and families.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="text-warm-white font-medium text-[11px]">5.0 ★ Google Rating (9 Reviews)</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest2 text-gold-400 font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs uppercase tracking-wider text-warm-white/70 hover:text-gold-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest2 text-gold-400 font-semibold mb-6">
              Studio & Contact
            </h4>
            
            <div className="flex items-start space-x-3 text-xs text-warm-white/80">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                2nd Main, 5th Cross, Balaji Layout,<br />
                Prakruthi Nagar, Kogilu, Yelahanka,<br />
                Bengaluru, Karnataka – 560064
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs text-warm-white/80">
              <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <a href="tel:+919019937351" className="hover:text-gold-300 transition-colors">
                +91 90199 37351
              </a>
            </div>

            <div className="flex items-center space-x-3 text-xs text-warm-white/80">
              <InstagramIcon className="w-4 h-4 text-pink-400 flex-shrink-0" />
              <a
                href="https://www.instagram.com/thehouseofweddings.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-300 transition-colors"
              >
                @thehouseofweddings.in
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-emerald-400 tracking-wider uppercase font-semibold flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                Open 24 Hours • 7 Days a Week
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-muted">
          <p>
            &copy; 2026 BioGlam Photography. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <span className="text-[11px]">
              Crafted for BioGlam Photography, Bengaluru
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-gold-400 text-warm-white hover:text-gold-300 transition-all focus:outline-none"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
