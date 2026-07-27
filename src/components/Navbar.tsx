import React, { useState, useEffect } from 'react';
import { Camera, Phone, Calendar, MessageSquareText, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBookModal: () => void;
  onOpenChat: () => void;
  onOpenAdminModal: () => void;
  submissionsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookModal,
  onOpenChat,
  onOpenAdminModal,
  submissionsCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Event Management', href: '#event-management' },
    { name: 'Packages', href: '#packages' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFF0B3] to-[#AA7C11] p-[2px] shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0D0D0D] rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                UNIQUE CAPTURE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                Studio • Tamil Nadu
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Button */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-full border border-[#D4AF37]/30 text-gray-200 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all bg-black/40"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 98765 43210</span>
            </a>

            {/* Jotform AI Chat Quick Badge */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full bg-gradient-to-r from-amber-900/40 to-amber-950/60 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_12px_rgba(212,175,55,0.2)]"
              title="Open Jotform AI Booking Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Jotform AI Chat</span>
            </button>

            {/* Book Shoot CTA */}
            <button
              onClick={onOpenBookModal}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gold-gradient text-black hover:opacity-95 transition-all shadow-[0_0_18px_rgba(212,175,55,0.35)] hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Shoot</span>
            </button>

            {/* Admin Lead Drawer Button */}
            <button
              onClick={onOpenAdminModal}
              className="relative p-2 rounded-full border border-gray-800 bg-gray-950/60 hover:border-[#D4AF37]/40 text-gray-400 hover:text-white transition-all"
              title="View Jotform Saved Submissions"
            >
              <ShieldCheck className="w-4 h-4" />
              {submissionsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {submissionsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenChat}
              className="p-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37]"
              title="Jotform AI Chat"
            >
              <Sparkles className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-200 hover:text-[#D4AF37] font-medium py-2 px-3 rounded-lg hover:bg-gray-900/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-700 text-gray-200 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call +91 98765 43210</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient text-black font-semibold text-sm shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Shoot Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
