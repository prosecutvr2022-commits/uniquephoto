import React, { useState } from 'react';
import { Camera, MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const instagramPosts = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=200'
  ];

  return (
    <footer className="bg-[#080808] border-t border-gray-900 text-gray-400 pt-16 pb-8 text-xs font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Overview */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold-gradient p-[1.5px]">
                <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
              <div>
                <span className="font-serif-heading text-lg font-bold text-white tracking-wider">
                  UNIQUE CAPTURE
                </span>
                <span className="block text-[9px] tracking-[0.2em] text-[#D4AF37] uppercase font-semibold">
                  Studio • Tamil Nadu
                </span>
              </div>
            </a>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Tamil Nadu’s leading photography, cinematic videography, and complete event management company. Dedicated to preserving authentic emotions and cultural traditions across Chennai, Coimbatore, Madurai, and beyond.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/uniquecapturestudio"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/uniquecapturestudio"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-gray-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/uniquecapturestudio"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors text-gray-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">Portfolio & Gallery</a></li>
              <li><a href="#event-management" className="hover:text-[#D4AF37] transition-colors">Event Management</a></li>
              <li><a href="#packages" className="hover:text-[#D4AF37] transition-colors">Wedding Packages</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider text-[#D4AF37]">
              Core Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Wedding Photography</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Cinematic Videography</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Pre / Post Wedding Shoots</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Newborn & Baby Shower</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">4K Drone Coverage</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Stage & Mandap Decor</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Live LED Screens</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Canvera Silk Albums</a></li>
            </ul>
          </div>

          {/* Col 4: Instagram Feed Placeholder & Newsletter */}
          <div className="space-y-3">
            <h4 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider text-[#D4AF37]">
              Instagram Gallery
            </h4>
            
            <div className="grid grid-cols-3 gap-1.5 rounded-xl overflow-hidden mb-4">
              {instagramPosts.map((url, i) => (
                <a
                  key={i}
                  href="https://instagram.com/uniquecapturestudio"
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-square relative group overflow-hidden block"
                >
                  <img src={url} alt="Instagram Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Instagram className="w-3.5 h-3.5 text-white" />
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <span className="block text-[11px] font-semibold text-gray-300 mb-1">
                Subscribe for Wedding Tips & Discount Offers:
              </span>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-[#D4AF37]">
                  <Check className="w-4 h-4" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-900 border border-gray-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] w-full"
                  />
                  <button
                    type="submit"
                    className="bg-gold-gradient text-black px-3 py-1.5 rounded-lg font-bold"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} Unique Capture Studio. All Rights Reserved. Tamil Nadu, India.</p>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-gray-400">Privacy Policy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-gray-400">Terms & Conditions</a>
            <span>•</span>
            <a href="#hero" className="hover:text-gray-400">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
