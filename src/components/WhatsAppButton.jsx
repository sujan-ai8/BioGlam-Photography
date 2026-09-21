import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/919019937351?text=${encodeURIComponent(
    'Hi BioGlam Photography, I would like to enquire about a photography session.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Interactive Tooltip / Badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 bg-charcoal-900/95 text-warm-white text-xs py-2 px-3.5 rounded-full border border-gold-500/30 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right-4 duration-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-gold-300 transition-colors"
          >
            Chat with BioGlam
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/40 hover:text-white p-0.5 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center border border-emerald-400/40"
        title="Chat on WhatsApp (+91 90199 37351)"
        aria-label="Chat with BioGlam Photography on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-charcoal-950" />
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </a>
    </div>
  );
}
