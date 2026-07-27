import React, { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithQuote: (quoteSummary: string) => void;
}

const SERVICE_ADDONS = [
  'Cinematic Videography',
  'Drone Photography/Videography',
  'Stage Decoration',
  'LED Wall Setup',
  'Live Streaming',
  'Album Design & Printing'
];

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookWithQuote
}) => {
  const [eventType, setEventType] = useState('Wedding');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Cinematic Videography',
    'Drone Photography/Videography',
    'Album Design & Printing'
  ]);
  const [days, setDays] = useState(2);
  const [quoteResult, setQuoteResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const toggleService = (serv: string) => {
    if (selectedServices.includes(serv)) {
      setSelectedServices(selectedServices.filter((s) => s !== serv));
    } else {
      setSelectedServices([...selectedServices, serv]);
    }
  };

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType,
          services: selectedServices,
          durationDays: days
        })
      });
      const data = await res.json();
      setQuoteResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card-gold max-w-xl w-full rounded-3xl overflow-hidden border border-[#D4AF37]/40 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-gray-400 hover:text-white flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider mb-1">
          <Calculator className="w-4 h-4" />
          <span>Instant Quote Calculator</span>
        </div>

        <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">
          Calculate Your Event Estimate
        </h3>

        <p className="text-xs text-gray-300 font-light mb-6">
          Select your requirements below to calculate an instant estimated package price range for Tamil Nadu events.
        </p>

        {/* Event Type */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full bg-black/70 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
          >
            <option value="Wedding">Wedding (Traditional & Reception)</option>
            <option value="Engagement">Engagement</option>
            <option value="Reception">Reception Gala</option>
            <option value="Baby Shower">Baby Shower / Seemantham</option>
            <option value="Birthday">1st Birthday Party</option>
            <option value="Corporate Event">Corporate Event / Summit</option>
          </select>
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-300 mb-1">Duration (Days)</label>
          <div className="flex gap-2">
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  days === d
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'bg-black/60 text-gray-300 border-gray-800 hover:border-gray-700'
                }`}
              >
                {d} {d === 1 ? 'Day' : 'Days'}
              </button>
            ))}
          </div>
        </div>

        {/* Service Addons */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-gray-300 mb-2">Include Addon Modules</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SERVICE_ADDONS.map((addon) => {
              const isSelected = selectedServices.includes(addon);
              return (
                <button
                  key={addon}
                  type="button"
                  onClick={() => toggleService(addon)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-all ${
                    isSelected
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                      : 'bg-black/50 border-gray-800 text-gray-400'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                      isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-gray-700'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{addon}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-gold-gradient text-black font-bold text-xs shadow-lg hover:opacity-95 transition-opacity mb-6"
        >
          {loading ? 'Calculating...' : 'Calculate Price Estimate'}
        </button>

        {/* Result Banner */}
        {quoteResult && (
          <div className="p-4 rounded-2xl bg-black/80 border border-[#D4AF37]/50 text-center space-y-2">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
              Estimated Investment Range
            </span>
            <div className="text-2xl font-bold font-serif-heading text-gold-gradient">
              {quoteResult.formattedRange}
            </div>
            <p className="text-[11px] text-gray-300 font-light">
              Includes selected services ({selectedServices.length}) for {days} day(s).
            </p>

            <button
              onClick={() => {
                const summary = `${eventType} Quote (${days} Days, ${quoteResult.formattedRange})`;
                onClose();
                onBookWithQuote(summary);
              }}
              className="mt-2 w-full py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Lock This Quote & Book Shoot</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
