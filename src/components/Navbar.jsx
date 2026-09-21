import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Calendar } from 'lucide-react';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Weddings', href: '#featured-wedding' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-display text-xl sm:text-2xl tracking-widest2 font-semibold text-warm-white group-hover:text-gold-300 transition-colors">
              BIOGLAM
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest3 uppercase text-gold-400 font-medium">
              PHOTOGRAPHY
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs tracking-widest2 uppercase text-warm-white/80 hover:text-gold-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="tel:+919019937351"
              className="text-warm-white/80 hover:text-gold-400 p-2 rounded-full border border-white/10 hover:border-gold-500/40 transition-all"
              title="Call BioGlam: +91 90199 37351"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                if (onBookClick) onBookClick();
                else {
                  document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-widest uppercase text-charcoal-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 rounded-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-gold-900/30"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book a Shoot
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => {
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3 py-1.5 text-[11px] font-medium tracking-wider uppercase text-charcoal-950 bg-gold-400 rounded-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-warm-white hover:text-gold-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal-950/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 sm:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-5">
            <div className="border-b border-gold-500/20 pb-4">
              <span className="text-xs uppercase tracking-widest text-gold-400">BioGlam Photography</span>
              <p className="text-xs text-warm-muted mt-0.5">Bengaluru, Karnataka</p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif-luxury tracking-wider text-warm-white hover:text-gold-300 py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 text-center text-xs tracking-widest2 uppercase font-semibold text-charcoal-950 bg-gold-400 rounded-sm shadow-lg shadow-gold-500/20"
            >
              Book Your Shoot
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919019937351"
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded border border-white/10 text-xs text-warm-white hover:border-gold-500/40"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919019937351?text=Hi%20BioGlam%20Photography%2C%20I%20would%20like%20to%20enquire%20about%20a%20photography%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded border border-green-500/30 text-xs text-warm-white hover:bg-green-500/10"
              >
                <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
