import React from 'react';
import { PRICING_PACKAGES } from '../data/studioData';
import { Sparkles, Check, Crown, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPackage: (packageName: string) => void;
  onOpenQuoteModal: () => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({
  onSelectPackage,
  onOpenQuoteModal
}) => {
  return (
    <section id="packages" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pricing & Packages</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Transparent Investment in <span className="text-gold-gradient">Lifetime Memories</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Choose from our thoughtfully curated packages or build a bespoke service bundle tailored for your exact event requirements across Tamil Nadu.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'glass-card-gold border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.25)] lg:-translate-y-2'
                    : 'glass-card border border-gray-800 hover:border-[#D4AF37]/50'
                }`}
              >
                {/* Badge Header */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-black font-bold text-[10px] uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-gray-800">
                    <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-gray-400 font-light mb-4 min-h-[32px]">
                      {pkg.tagline}
                    </p>

                    <div className="text-3xl font-bold text-gold-gradient font-serif-heading">
                      {pkg.priceEstimate}
                    </div>
                    <span className="text-[11px] text-gray-400 font-light">
                      Estimated Range (Customizable)
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="py-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                      What’s Included:
                    </span>

                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus Inclusions */}
                  <div className="pt-4 border-t border-gray-800/80 mb-8 space-y-2">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      Bonus Complimentary Addons:
                    </span>
                    {pkg.includes.map((inc) => (
                      <div key={inc} className="flex items-center gap-2 text-[11px] text-[#D4AF37]">
                        <Crown className="w-3.5 h-3.5 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gold-gradient text-black shadow-lg hover:scale-105'
                      : 'bg-black/60 border border-[#D4AF37]/40 text-white hover:bg-[#D4AF37] hover:text-black'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Custom Quote Banner */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif-heading text-xl font-bold text-white mb-1">
              Need a Custom Package for Multi-Day Ceremonies?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              Use our instant quote calculator tool or request a customized budget plan for your exact dates and guest count.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-xs sm:text-sm shadow-xl shrink-0 flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Calculator className="w-4 h-4" />
            <span>Launch Instant Quote Calculator</span>
          </button>
        </div>

      </div>
    </section>
  );
};
