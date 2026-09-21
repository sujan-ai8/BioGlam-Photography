import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Calendar, Phone, Mail, User, MapPin, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingSection({ preselectedEventType }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: preselectedEventType || 'Wedding',
    eventDate: '',
    location: '',
    numberOfPeople: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const eventTypes = [
    'Wedding',
    'Pre-Wedding',
    'Engagement',
    'Maternity',
    'Portrait',
    'Family',
    'Birthday',
    'Corporate Event',
    'Other'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    
    // Indian phone number regex or standard 10+ digit
    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (phoneClean.length < 10) {
      errs.phone = 'Please enter a valid phone number (at least 10 digits)';
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.eventType) {
      errs.eventType = 'Event Type is required';
    }

    if (!formData.eventDate) {
      errs.eventDate = 'Event Date is required';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Simulate reliable submission and trigger confetti
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#e5c583', '#f5ebd7', '#ffffff']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const text = `Hi BioGlam Photography, I would like to enquire about a photography session:
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Event Type: ${formData.eventType}
• Event Date: ${formData.eventDate}
• Location: ${formData.location || 'Bengaluru'}
• Guests: ${formData.numberOfPeople || 'N/A'}
• Details: ${formData.message || 'Standard Session'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919019937351?text=${encoded}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-charcoal-900 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gold-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest2 text-gold-400 mb-3 font-semibold">
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>RESERVE YOUR DATE</span>
            <span className="w-6 h-[1px] bg-gold-400" />
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-warm-white tracking-tight uppercase leading-tight">
            Let&apos;s Create <br />
            <span className="text-gold-gradient italic font-light">Something Beautiful</span>
          </h2>

          <p className="text-sm sm:text-base text-warm-muted font-light mt-4">
            Planning a wedding, pre-wedding, portrait session, or special event?
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="bg-charcoal-950 p-6 sm:p-10 md:p-12 rounded-sm border border-gold-500/20 shadow-2xl relative">
          
          {isSubmitted ? (
            <div className="text-center py-12 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-gold-400" />
              </div>

              <div className="space-y-3">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-warm-white">
                  Enquiry Received
                </h3>
                <p className="text-base text-gold-200 font-light max-w-md mx-auto">
                  &ldquo;Thank you! Your enquiry has been received. BioGlam Photography will get back to you shortly.&rdquo;
                </p>
                <p className="text-xs text-warm-muted">
                  Need immediate confirmation? Call Nagaraj directly at{' '}
                  <a href="tel:+919019937351" className="text-gold-400 underline font-semibold">
                    +91 90199 37351
                  </a>
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleWhatsAppSend}
                  className="px-6 py-3 rounded-sm bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send copy to WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      eventType: 'Wedding',
                      eventDate: '',
                      location: '',
                      numberOfPeople: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-3 rounded-sm border border-white/20 text-warm-white hover:border-gold-400 text-xs uppercase tracking-widest font-semibold"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                    Full Name <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Rao"
                      className={`w-full px-4 py-3 bg-charcoal-900 border rounded-sm text-sm text-warm-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    <User className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                    Phone Number <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 bg-charcoal-900 border rounded-sm text-sm text-warm-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Email & Event Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                    Email Address <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ananya@example.com"
                      className={`w-full px-4 py-3 bg-charcoal-900 border rounded-sm text-sm text-warm-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                    Event Type <span className="text-gold-400">*</span>
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-charcoal-900 border rounded-sm text-sm text-warm-white focus:outline-none focus:border-gold-400 transition-colors ${
                      errors.eventType ? 'border-red-500' : 'border-white/10'
                    }`}
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-charcoal-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="text-xs text-red-400 mt-1">{errors.eventType}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Event Date & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                    Event Date <span className="text-gold-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-charcoal-900 border rounded-sm text-sm text-warm-white focus:outline-none focus:border-gold-400 transition-colors ${
                        errors.eventDate ? 'border-red-500' : 'border-white/10'
                      }`}
                    />
                  </div>
                  {errors.eventDate && (
                    <p className="text-xs text-red-400 mt-1">{errors.eventDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                    Location / Venue
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Yelahanka, Bangalore"
                      className="w-full px-4 py-3 bg-charcoal-900 border border-white/10 rounded-sm text-sm text-warm-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                    <MapPin className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* Row 4: Number of People */}
              <div>
                <label htmlFor="numberOfPeople" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                  Number of People / Expected Guests
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="numberOfPeople"
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    placeholder="e.g. 2 (Couple) or 250 (Wedding)"
                    className="w-full px-4 py-3 bg-charcoal-900 border border-white/10 rounded-sm text-sm text-warm-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                  <Users className="w-4 h-4 text-white/30 absolute right-3.5 top-3.5" />
                </div>
              </div>

              {/* Row 5: Message */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-warm-white/80 font-semibold mb-2">
                  Message / Tell us about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the schedule, ritual details, special photo requests, or outfits..."
                  className="w-full px-4 py-3 bg-charcoal-900 border border-white/10 rounded-sm text-sm text-warm-white placeholder-white/30 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:flex-1 py-4 px-6 rounded-sm bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-charcoal-950 font-semibold text-xs uppercase tracking-widest2 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-gold-950/50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'SENDING...' : 'SEND ENQUIRY'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-4 px-6 rounded-sm bg-emerald-600/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/25 text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              {/* Privacy / Direct reach reassurance */}
              <p className="text-[11px] text-center text-warm-muted pt-2">
                🔒 Your details are held strictly confidential. No spam. Fast 24-hour response directly from Nagaraj.
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
