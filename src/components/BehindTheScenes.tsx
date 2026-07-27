import React from 'react';
import { Sparkles, Camera, Film, Navigation, Award, Cpu } from 'lucide-react';

const BTS_ITEMS = [
  {
    title: 'Dual-Camera Muhurtham Sync',
    desc: 'Our lead cinematographers monitoring 4K HDR live feeds on Atomos Ninja screens during the Thali ritual.',
    image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&q=80&w=800',
    tag: 'Cinema Rig'
  },
  {
    title: 'Licensed 4K Drone Operations',
    desc: 'DGCA-aware aerial pilot prepping DJI Mavic 3 Cine for beachside pavilion sweeping angles.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
    tag: 'Drone Fleet'
  },
  {
    title: 'Precision Color Grading Suite',
    desc: 'In-house post-production colorists refining DaVinci Resolve color profiles for authentic skin tones.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800',
    tag: 'Color Editing'
  },
  {
    title: 'Heirloom Canvera Album Binding',
    desc: 'Handcrafted Italian leather covers, flush-mount binding, and silk paper quality check.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800',
    tag: 'Album Craft'
  }
];

export const BehindTheScenes: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Scenes</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Masters At Work Behind The <span className="text-gold-gradient">Lens</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Take a look at our dedicated technical crew, high-end cinema equipment, and meticulous album creation process.
          </p>
        </div>

        {/* BTS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BTS_ITEMS.map((bts) => (
            <div
              key={bts.title}
              className="glass-card rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-300 group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={bts.image}
                  alt={bts.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                  {bts.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-serif-heading text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {bts.title}
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {bts.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
