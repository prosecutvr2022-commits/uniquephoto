import React, { useState } from 'react';
import { Sparkles, Calendar, Flower2, Monitor, Music, Tv, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface EventManagementProps {
  onOpenBookModalWithService: (serviceName: string) => void;
}

const EVENT_SERVICES = [
  {
    title: 'Wedding Planning & Mandapam',
    desc: 'Complete venue selection, Muhurtham timing, guest hospitality, traditional South Indian banana tree & fresh flower mandapam setup.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Birthday & Anniversary Decor',
    desc: 'Theme backdrops, organic balloon arches, cake table framing, cartoon mascot entertainers, and return gift counters.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Stage & Floral Decoration',
    desc: 'Fresh Jasmine, Rose, Orchid & Lotus floral backdrops, crystal drapes, royal throne seating, and entryway arches.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'P2.5 / P3 LED Wall Screens',
    desc: 'Ultra-clear seamless indoor & outdoor LED video walls for live multi-camera relay, photo slideshows, and cinema trailers.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Sound & Lighting Design',
    desc: 'JBL Concert line array audio, sharp beam intelligent moving heads, ambient warm LED wash, and dry ice fog machines.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Live Streaming & Media Relay',
    desc: 'Multi-cam HD broadcasting for guests across the globe in USA, UK, Singapore, Malaysia, and Dubai.',
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
  }
];

export const EventManagement: React.FC<EventManagementProps> = ({ onOpenBookModalWithService }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Wedding Planning & Mandapam',
    'Stage & Floral Decoration',
    'Sound & Lighting Design'
  ]);

  const toggleItem = (title: string) => {
    if (selectedItems.includes(title)) {
      setSelectedItems(selectedItems.filter((i) => i !== title));
    } else {
      setSelectedItems([...selectedItems, title]);
    }
  };

  return (
    <section id="event-management" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Event Management</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Grand Stage Decor, Sound, Lighting & <span className="text-gold-gradient">Full Planning</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Beyond photography, we bring complete event management excellence to Tamil Nadu. From stage mandapam aesthetics to live LED walls and sound engineering.
          </p>
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {EVENT_SERVICES.map((serv) => {
            const Icon = serv.icon;
            return (
              <div
                key={serv.title}
                className="glass-card rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/40 to-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {serv.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => onOpenBookModalWithService(serv.title)}
                    className="w-full py-2.5 rounded-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Book {serv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Event Setup Planner Box */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
              Custom Event Package Builder
            </span>

            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
              Build Your Complete Event Package in Tamil Nadu
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 font-light mb-6">
              Select the event services you need and click below to request a tailored bundle discount with full coordination!
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {EVENT_SERVICES.map((s) => {
                const isSelected = selectedItems.includes(s.title);
                return (
                  <button
                    key={s.title}
                    onClick={() => toggleItem(s.title)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all text-xs font-medium ${
                      isSelected
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                        : 'bg-black/40 border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-[#D4AF37] border-[#D4AF37] text-black'
                          : 'border-gray-700'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                onOpenBookModalWithService(`Custom Event Bundle (${selectedItems.join(', ')})`)
              }
              className="px-8 py-4 rounded-full bg-gold-gradient text-black font-bold text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Get Custom Quote for Selected Services ({selectedItems.length})</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
