import React, { useState } from 'react';
import { ALL_SERVICES } from '../data/studioData';
import { ServiceCategory, ServiceItem } from '../types';
import { 
  Camera, Video, Sparkles, Users, Film, Heart, Sun, Award, Crown, Smile,
  HeartHandshake, Gift, Cake, Briefcase, GraduationCap, Package, Navigation,
  Tv, Calendar, Flower2, Monitor, Music, BookOpen, Image as ImageIcon, Printer, ArrowRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const ICON_COMPONENTS: Record<string, React.FC<{ className?: string }>> = {
  Camera,
  Video,
  Sparkles,
  Users,
  Film,
  Heart,
  Sun,
  Award,
  Crown,
  Smile,
  HeartHandshake,
  Gift,
  Cake,
  Briefcase,
  GraduationCap,
  Package,
  Navigation,
  Tv,
  Calendar,
  Flower2,
  Monitor,
  Music,
  BookOpen,
  Image: ImageIcon,
  Printer
};

const CATEGORIES: ServiceCategory[] = [
  'All',
  'Wedding',
  'Portrait & Baby',
  'Corporate & Events',
  'Drone & Live',
  'Event Management'
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'All'
    ? ALL_SERVICES
    : ALL_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Offerings</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            World-Class Photography, Videography & <span className="text-gold-gradient">Event Solutions</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Comprehensive creative services tailored for weddings, family milestones, corporate gatherings, and large-scale celebrations across Tamil Nadu.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105'
                  : 'bg-gray-900/80 text-gray-300 border border-gray-800 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_COMPONENTS[service.iconName] || Camera;

            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />
                    
                    {/* Badge */}
                    {service.popular && (
                      <span className="absolute top-3 right-3 bg-gold-gradient text-black text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-md">
                        Popular
                      </span>
                    )}

                    {/* Category */}
                    <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] uppercase font-semibold px-2.5 py-0.5 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed line-clamp-3 mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-gray-800/80 mt-auto pt-3">
                  <button
                    onClick={() => setSelectedServiceDetail(service)}
                    className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-white transition-colors group/btn"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card-gold max-w-lg w-full rounded-2xl overflow-hidden p-6 relative border border-[#D4AF37]/40">
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            <img
              src={selectedServiceDetail.image}
              alt={selectedServiceDetail.title}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
              {selectedServiceDetail.category}
            </span>

            <h3 className="font-serif-heading text-2xl font-bold text-white mt-1 mb-3">
              {selectedServiceDetail.title}
            </h3>

            <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
              {selectedServiceDetail.description}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const title = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  onSelectService(title);
                }}
                className="w-full py-3 rounded-xl bg-gold-gradient text-black font-semibold text-sm hover:opacity-95 transition-opacity"
              >
                Enquire For {selectedServiceDetail.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
