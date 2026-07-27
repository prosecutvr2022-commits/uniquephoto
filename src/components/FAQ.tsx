import React, { useState } from 'react';
import { FAQS } from '../data/studioData';
import { Sparkles, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('f1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0B0B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Everything You Need To <span className="text-gold-gradient">Know</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Have questions about booking terms, advance payments, travel across Tamil Nadu, or album finishes? Find quick answers below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen ? 'border-[#D4AF37] bg-[#14120B]' : 'border-gray-800/80 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif-heading text-base sm:text-lg font-bold text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#D4AF37]' : 'text-gray-500'}`} />
                    <span>{faq.question}</span>
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-gray-800/60 mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp direct help banner */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 mb-3">
            Have a custom question not listed here?
          </p>
          <a
            href="https://wa.me/918754643897?text=Hi%20Unique%20Capture%20Studio,%20I%20have%20a%20question%20regarding%20booking%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs hover:opacity-95 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Chat Directly on WhatsApp (+91 87546 43897)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
