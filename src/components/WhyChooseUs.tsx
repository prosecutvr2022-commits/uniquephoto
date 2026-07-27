import React from 'react';
import { WHY_CHOOSE_US } from '../data/studioData';
import { Award, Sparkles, Camera, Sliders, Tag, Zap, BookOpen, Layers } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Award,
  Sparkles,
  Camera,
  Sliders,
  Tag,
  Zap,
  BookOpen,
  Layers
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Unmatched Craftsmanship & <span className="text-gold-gradient">Reliability</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            We blend artistic vision with cutting-edge technology and complete event management so you can enjoy your special day stress-free.
          </p>
        </div>

        {/* Grid of 8 Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => {
            const IconComponent = ICON_MAP[feature.icon] || Sparkles;

            return (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F1C10] to-[#0D0D0D] border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
