import React from 'react';
import { PortfolioItem } from '../types';
import { X, MapPin, Calendar, Film, ArrowRight } from 'lucide-react';

interface LightBoxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const LightBoxModal: React.FC<LightBoxModalProps> = ({ item, onClose, onInquire }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="glass-card-gold max-w-4xl w-full rounded-3xl overflow-hidden border border-[#D4AF37]/40 p-6 sm:p-8 relative max-h-[90vh] flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#D4AF37] hover:text-black text-gray-300 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Player / Image Display */}
        <div className="relative rounded-2xl overflow-hidden bg-black mb-6 max-h-[55vh] flex items-center justify-center">
          {item.type === 'video' && item.videoUrl ? (
            <iframe
              src={item.videoUrl}
              title={item.title}
              className="w-full aspect-video rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto max-h-[52vh] object-contain rounded-xl"
            />
          )}
        </div>

        {/* Metadata & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-gray-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
              {item.category}
            </span>
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mt-0.5">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-300 mt-1 font-light">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{item.location}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 font-light max-w-2xl">
              {item.description}
            </p>
          </div>

          <button
            onClick={() => {
              const title = item.title;
              onClose();
              onInquire(`Similar shoot to ${title}`);
            }}
            className="px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs shadow-xl shrink-0 hover:scale-105 transition-transform flex items-center gap-2"
          >
            <span>Book Similar Shoot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
