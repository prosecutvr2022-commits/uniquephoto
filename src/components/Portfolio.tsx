import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { GalleryCategory, PortfolioItem } from '../types';
import { Sparkles, Play, MapPin, Eye, Film } from 'lucide-react';

interface PortfolioProps {
  onOpenLightbox: (item: PortfolioItem) => void;
}

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Weddings',
  'Engagement',
  'Reception',
  'Baby Shoot',
  'Maternity',
  'Fashion',
  'Corporate',
  'Events',
  'Drone Photography',
  'Cinematic Films'
];

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Gallery</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Our Showcase Portfolio & <span className="text-gold-gradient">Cinematic Films</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Explore authentic wedding stories, bridal fashion, drone landscapes, and milestone celebrations captured across Tamil Nadu.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.3)]'
                  : 'bg-gray-900/90 text-gray-300 border border-gray-800 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden glass-card border border-gray-800 hover:border-[#D4AF37]/60 group cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Play Badge if Video */}
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-black ml-0.5" />
                </div>
              )}

              {/* Category Tag */}
              <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md">
                {item.category}
              </span>

              {/* Bottom Metadata */}
              <div className="relative z-10 text-left">
                <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-2 font-light">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>{item.location}</span>
                </div>

                <p className="text-xs text-gray-400 font-light line-clamp-2">
                  {item.description}
                </p>

                <div className="mt-3 pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-semibold text-[#D4AF37]">
                  <span>{item.type === 'video' ? 'Watch Film' : 'View Full Image'}</span>
                  <Eye className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
