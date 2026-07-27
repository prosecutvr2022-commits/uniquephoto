import React, { useState } from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onSubmitSuccess: (data: any) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Chennai',
    eventType: 'Wedding',
    eventDate: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setLoading(false);
      setSubmitted(true);
      onSubmitSuccess(data.enquiry || formData);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-white">
            Let’s Capture Your <span className="text-gold-gradient">Beautiful Story</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light">
            Visit our studio locations in Chennai & Coimbatore or submit a quick enquiry below for immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Studio Contact Info & Map */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 border border-gray-800 space-y-6">
              
              <h3 className="font-serif-heading text-2xl font-bold text-white">
                Unique Capture Studio • Tamil Nadu
              </h3>

              <div className="space-y-4 text-sm font-light">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Headquarters & Experience Centre:</strong>
                    <p className="text-gray-300">
                      No. 42, 2nd Avenue, Block Z, Anna Nagar, Chennai - 600040, Tamil Nadu, India
                    </p>
                    <p className="text-xs text-[#D4AF37] mt-1">
                      Branch Office: Avinashi Road, Opposite Residency Towers, Coimbatore - 641018
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Phone / WhatsApp:</strong>
                    <a href="tel:+919876543210" className="text-gray-300 hover:text-[#D4AF37]">
                      +91 98765 43210 / +91 98765 43211
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Email Address:</strong>
                    <a href="mailto:info@uniquecapturestudio.com" className="text-gray-300 hover:text-[#D4AF37]">
                      info@uniquecapturestudio.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Studio Business Hours:</strong>
                    <p className="text-gray-300">
                      Monday - Sunday: 8:00 AM - 9:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Embed */}
            <div className="glass-card rounded-3xl overflow-hidden border border-gray-800 h-64 relative">
              <iframe
                title="Unique Capture Studio Anna Nagar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.002821213444!2d80.2091!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e300000001%3A0x8888888888888888!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!2m3!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 brightness-75"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold">
                Chennai Studio Map View
              </div>
            </div>

          </div>

          {/* Quick Enquiry Form */}
          <div className="glass-card-gold rounded-3xl p-8 border border-[#D4AF37]/40 shadow-2xl">
            <h3 className="font-serif-heading text-2xl font-bold text-white mb-2">
              Send Quick Enquiry
            </h3>
            <p className="text-xs text-gray-300 font-light mb-6">
              Fill out the form below. Our sales manager will contact you within 30 minutes!
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full text-black flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif-heading text-2xl font-bold text-white">
                  Enquiry Received!
                </h4>
                <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">
                  Thank you for contacting <strong className="text-[#D4AF37]">Unique Capture Studio</strong>. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#D4AF37] text-[#D4AF37] font-semibold text-xs hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthik Raja"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="karthik@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* City & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      City in Tamil Nadu
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    >
                      <option value="Chennai">Chennai</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Madurai">Madurai</option>
                      <option value="Trichy">Trichy</option>
                      <option value="Salem">Salem</option>
                      <option value="Erode">Erode</option>
                      <option value="Tirunelveli">Tirunelveli</option>
                      <option value="Vellore">Vellore</option>
                      <option value="Other">Other Tamil Nadu City</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Reception">Reception</option>
                      <option value="Baby Shower">Baby Shower / Seemantham</option>
                      <option value="Birthday">Birthday Party</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Event Management">Complete Event Management</option>
                      <option value="Other">Other Shoot</option>
                    </select>
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Message / Additional Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your venue, drone requirements, or album preferences..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gold-gradient text-black font-bold text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting...' : 'Submit Enquiry Now'}</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
