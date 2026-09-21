import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import FeaturedWedding from './components/FeaturedWedding';
import PortfolioGallery from './components/PortfolioGallery';
import InstagramFeed from './components/InstagramFeed';
import WhyBioGlam from './components/WhyBioGlam';
import Testimonials from './components/Testimonials';
import AboutPhotographer from './components/AboutPhotographer';
import ProcessSection from './components/ProcessSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [selectedEventType, setSelectedEventType] = useState('Wedding');

  const handleSelectService = (service) => {
    if (service?.eventType) {
      setSelectedEventType(service.eventType);
    }
    const booking = document.querySelector('#booking');
    if (booking) {
      booking.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    const booking = document.querySelector('#booking');
    if (booking) {
      booking.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-warm-white selection:bg-gold-500/30 selection:text-gold-200 relative overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar onBookClick={handleBookClick} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Introduction Section */}
        <Introduction />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Featured Wedding Section */}
        <FeaturedWedding onExploreStories={() => {
          document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Portfolio / Gallery with Lightbox */}
        <PortfolioGallery />

        {/* Instagram Section */}
        <InstagramFeed />

        {/* Why BioGlam */}
        <WhyBioGlam />

        {/* Testimonials */}
        <Testimonials />

        {/* Photographer / About Section */}
        <AboutPhotographer />

        {/* Process Section */}
        <ProcessSection />

        {/* Booking / Enquiry Section */}
        <BookingSection preselectedEventType={selectedEventType} />

        {/* Contact Section & Map */}
        <ContactSection />

        {/* Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </div>
  );
}
