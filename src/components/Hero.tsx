import React, { useState, useEffect } from 'react';
import { Calendar, FileText, Play, ChevronRight, ChevronLeft, Award, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBookModal: () => void;
  onOpenQuoteModal: () => void;
  onOpenPortfolio: () => void;
}

const HERO_SLIDES = [
  {
    title: 'South Indian Wedding Splendor',
    subtitle: 'Mahabalipuram Beachfront Muhurtham & Royal Mandapams',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920',
    tag: 'Traditional & Candid'
  },
  {
    title: 'Bride & Groom Portraits',
    subtitle: 'Timeless Elegance in Kanchipuram Silk & Traditional Attire',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1920',
    tag: 'Bridal Couture'
  },
  {
    title: 'Cinematic 4K Video & Drone Sweeps',
    subtitle: 'Capturing Unscripted Laughter and Sacred Ceremonial Moments',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1920',
    tag: 'Aerial & Cinema'
  },
  {
    title: 'Grand Event Management & Decor',
    subtitle: 'Fresh Floral Mandaps, Crystal Lighting & LED Wall Relays',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920',
    tag: 'Stage & Planning'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onOpenBookModal,
  onOpenQuoteModal,
  onOpenPortfolio
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      
      {/* Slide Background Images */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
      ))}

      {/* Slide Badging Overlay */}
      <div className="absolute top-28 left-6 sm:left-12 z-20 hidden md:flex items-center gap-2 bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full text-xs text-[#D4AF37]">
        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>Tamil Nadu • Chennai | Coimbatore | Madurai | Trichy</span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-16">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#D4AF37] uppercase">
            Unique Capture Studio • Tamil Nadu
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6">
          Capturing Life’s Most <br className="hidden sm:inline" />
          <span className="text-gold-gradient drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
            Beautiful Moments
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Professional Photography, Cinematic Videography & Complete Event Management Across Tamil Nadu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          {/* Book Your Shoot */}
          <button
            onClick={onOpenBookModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-gradient text-black font-semibold text-base shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Shoot</span>
          </button>

          {/* Get Free Quote */}
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/50 text-white font-semibold text-base hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:scale-105 transition-all duration-300"
          >
            <FileText className="w-5 h-5 text-[#D4AF37]" />
            <span>Get Free Quote</span>
          </button>

          {/* Watch Our Portfolio */}
          <button
            onClick={onOpenPortfolio}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-700/80 bg-gray-950/60 text-gray-200 font-medium text-base hover:border-gray-500 hover:text-white transition-all duration-300"
          >
            <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>Watch Portfolio</span>
          </button>
        </div>

        {/* Active Slide Info Bar */}
        <div className="mt-12 inline-flex items-center gap-3 bg-black/70 backdrop-blur-md border border-gray-800 px-5 py-2.5 rounded-full text-xs sm:text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="font-semibold text-white">{HERO_SLIDES[currentSlide].tag}:</span>
          <span className="text-gray-300">{HERO_SLIDES[currentSlide].subtitle}</span>
        </div>

      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all backdrop-blur-sm hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] transition-all backdrop-blur-sm hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
