import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, Mail, Phone, Calendar, MapPin, RefreshCw, Database } from 'lucide-react';
import { SubmissionRecord } from '../types';

interface AdminSubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  localSubmissions: SubmissionRecord[];
}

export const AdminSubmissionsModal: React.FC<AdminSubmissionsModalProps> = ({
  isOpen,
  onClose,
  localSubmissions
}) => {
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>(localSubmissions);
  const [loading, setLoading] = useState(false);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.enquiries) {
        setSubmissions(data.enquiries);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchSubmissions();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-card-gold max-w-4xl w-full rounded-3xl overflow-hidden border border-[#D4AF37]/50 p-6 sm:p-8 relative max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading text-xl font-bold text-white">
                Jotform Captured Submissions
              </h3>
              <p className="text-xs text-gray-400">
                Live leads stored in Jotform database & emailed to owner (aarthikameshwara@gmail.com)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchSubmissions}
              className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-[#D4AF37]"
              title="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Submissions List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-xs">
          {submissions.length === 0 ? (
            <div className="py-16 text-center text-gray-400">
              No submissions recorded yet. Use the Jotform AI Chatbot to test lead capture!
            </div>
          ) : (
            submissions.map((s) => (
              <div
                key={s.id}
                className="bg-black/70 rounded-2xl p-5 border border-gray-800 hover:border-[#D4AF37]/40 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{s.fullName}</span>
                    <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] font-bold">
                      {s.eventType}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">ID: {s.id}</span>
                  </div>

                  <span className="text-[10px] text-gray-400">
                    {new Date(s.createdAt).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{s.phone}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{s.email || 'N/A'}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{s.city} ({s.eventLocation || 'TN'})</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-800/60 text-[11px]">
                  <div>
                    <span className="text-gray-400">Date: </span>
                    <span className="text-white font-medium">{s.eventDate || 'TBD'}</span>
                  </div>

                  <div>
                    <span className="text-gray-400">Services: </span>
                    <span className="text-[#D4AF37] font-medium">
                      {Array.isArray(s.services) ? s.services.join(', ') : s.services}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400">Budget: </span>
                    <span className="text-emerald-400 font-medium">{s.budget || 'Custom'}</span>
                  </div>
                </div>

                {s.additionalRequirements && (
                  <div className="bg-gray-900/60 p-2.5 rounded-xl text-[11px] text-gray-300 font-light italic">
                    "{s.additionalRequirements}"
                  </div>
                )}
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
