import React from 'react';
import { TESTIMONIALS } from '../data/studioData';
import { Sparkles, Star, Quote, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Loved By Families & Couples Across <span className="text-gold-gradient">Tamil Nadu</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Read authentic 5-star reviews from clients who trusted Unique Capture Studio with their weddings, baby shoots, and milestone events.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-8 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#D4AF37]/15 group-hover:text-[#D4AF37]/30 transition-colors" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Event Badge */}
              <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-[11px] font-semibold px-3 py-1 rounded-full mb-4">
                {t.event}
              </div>

              {/* Comment */}
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6 italic">
                "{t.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-serif-heading text-base font-bold text-white">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-light">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
