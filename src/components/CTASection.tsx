import React from 'react';
import { Calendar, Phone, MessageCircle, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenBookModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBookModal }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-amber-950/60 via-black to-amber-950/60 border-t border-[#D4AF37]/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Unique Capture Studio • Tamil Nadu</span>
        </div>

        <h2 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Let’s Capture Your <span className="text-gold-gradient">Beautiful Story</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Whether it’s your wedding, birthday, corporate event, or family celebration, Unique Capture Studio is ready to preserve your memories forever.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-4">
          
          {/* Book Now */}
          <button
            onClick={onOpenBookModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-black font-bold text-base shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-transform"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>

          {/* Call Us */}
          <a
            href="tel:+918754643897"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/80 border border-[#D4AF37]/50 text-white font-bold text-base hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
          >
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            <span>Call Us (+91 87546 43897)</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918754643897?text=Hi%20Unique%20Capture%20Studio,%20I%20would%20like%20to%20book%20a%20shoot."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-bold text-base hover:opacity-95 transition-opacity shadow-lg"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>WhatsApp</span>
          </a>

        </div>

      </div>
    </section>
  );
};
