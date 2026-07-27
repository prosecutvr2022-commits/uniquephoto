import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Facebook, ArrowUp, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenChat: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenChat }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 pointer-events-auto">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918754643897?text=Hi%20Unique%20Capture%20Studio,%20I%20want%20to%20enquire%20about%20your%20photography%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
        title="Chat on WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-black" />
        <span className="absolute left-14 bg-black/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-800">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918754643897"
        className="w-12 h-12 rounded-full bg-[#0D0D0D] border border-[#D4AF37] text-[#D4AF37] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
        title="Call Directly"
        aria-label="Phone Call"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute left-14 bg-black/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-800">
          Call +91 87546 43897
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative cursor-default"
        title="Follow on Instagram"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>

      {/* Facebook Button */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="w-10 h-10 rounded-full bg-[#1877F2] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative cursor-default"
        title="Facebook Page"
        aria-label="Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>

      {/* Back to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gold-gradient text-black font-bold shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
