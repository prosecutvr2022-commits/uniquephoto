import React from 'react';
import { Camera, ShieldCheck, Heart, Award, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Grid Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600"
                    alt="Unique Capture Studio Wedding Photography"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600"
                    alt="Cinematic Videography Tamil Nadu"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=600"
                    alt="Candid Tamil Wedding Photography"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=600"
                    alt="Stage Decoration Tamil Nadu"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:right-6 glass-card-gold p-4 rounded-2xl shadow-2xl max-w-xs border border-[#D4AF37]/40">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D4AF37] rounded-xl text-black">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-bold font-serif-heading text-white">10+ Years</div>
                  <div className="text-xs text-gray-300">Preserving Tamil Nadu’s Sacred Ceremonies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Unique Capture Studio</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Crafting Heirloom Visual Stories Across <span className="text-gold-gradient">Tamil Nadu</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Founded with a passion for preserving unscripted emotions and cultural heritage, <strong className="text-white font-medium">Unique Capture Studio</strong> has grown into one of Tamil Nadu’s most revered photography, videography, and event management houses.
            </p>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Whether it’s a traditional South Indian Muhurtham in Chennai, a beachside reception in Mahabalipuram, a cozy newborn shoot in Coimbatore, or a 5,000-guest pavilion event in Madurai — our master cinematographers and event planners bring artistic finesse, state-of-the-art camera gear, and warm hospitality to every occasion.
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'State-of-the-Art Sony Cinema & 4K Drone Fleet',
                'Master Colorists & Album Craft Artisans',
                'Complete Event Planning & Floral Mandaps',
                'Transparent Pricing & 100% On-Time Delivery'
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Presence Cities */}
            <div className="pt-4 border-t border-gray-800">
              <div className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Active Service Across All Districts</span>
              </div>
              <p className="text-xs text-gray-400">
                Chennai • Coimbatore • Madurai • Trichy • Salem • Erode • Tirunelveli • Vellore • Thanjavur • Kanyakumari • Pondicherry
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
