import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Send, Bot, User, CheckCircle2, ChevronRight, RefreshCw, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { JotformLead } from '../types';

interface JotformAIChatPluginProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadCaptured: (lead: JotformLead) => void;
}

type StepKey = 
  | 'welcome'
  | 'fullName'
  | 'phone'
  | 'email'
  | 'city'
  | 'eventType'
  | 'eventDate'
  | 'eventLocation'
  | 'photographyRequired'
  | 'videographyRequired'
  | 'droneRequired'
  | 'eventMgmtRequired'
  | 'budget'
  | 'contactTime'
  | 'additionalReqs'
  | 'complete';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
  isPills?: boolean;
}

const CITY_OPTIONS = ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Erode', 'Tirunelveli', 'Vellore', 'Other'];

const EVENT_TYPE_OPTIONS = [
  'Wedding',
  'Engagement',
  'Reception',
  'Birthday',
  'Baby Shower',
  'Corporate Event',
  'School Event',
  'College Event',
  'Product Shoot',
  'Other'
];

const YES_NO_OPTIONS = ['Yes', 'No'];

const BUDGET_OPTIONS = [
  'Under ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,00,000',
  '₹2,00,000 - ₹3,50,000',
  '₹3,50,000+'
];

const TIME_OPTIONS = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
  'Anytime'
];

export const JotformAIChatPlugin: React.FC<JotformAIChatPluginProps> = ({
  isOpen,
  onClose,
  onLeadCaptured
}) => {
  const [currentStep, setCurrentStep] = useState<StepKey>('fullName');
  const [inputText, setInputText] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const [lead, setLead] = useState<Partial<JotformLead>>({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    services: [],
    budget: '',
    preferredContactTime: '',
    additionalRequirements: ''
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: `📸 Vanakkam!\n\nWelcome to **Unique Capture Studio**.\nI'm your Booking Assistant.\n\nI can help you:\n• Book Photography Services\n• Check Package Details\n• Request a Free Quote\n• Book Event Management Services\n• Schedule a Consultation\n\nLet's get started!\n\nMay I know your name?`
    }
  ]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiLoading]);

  // Handle option click selection
  const handleSelectOption = (option: string) => {
    processUserInput(option);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText('');
    processUserInput(text);
  };

  const processUserInput = async (text: string) => {
    // Add user message
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text
    };
    setMessages((prev) => [...prev, userMsg]);

    // Update lead state based on current step
    let nextStep: StepKey = currentStep;
    let botReplyText = '';
    let nextOptions: string[] | undefined = undefined;

    switch (currentStep) {
      case 'fullName':
        setLead((prev) => ({ ...prev, fullName: text }));
        nextStep = 'phone';
        botReplyText = `Great to connect with you, ${text}! 👋\n\nCould you please share your Phone Number so our team can send you sample packages on WhatsApp?`;
        break;

      case 'phone':
        setLead((prev) => ({ ...prev, phone: text }));
        nextStep = 'email';
        botReplyText = `Thank you! Got your phone number (${text}). 📱\n\nWhat is your Email Address? (Or type 'skip')`;
        break;

      case 'email':
        setLead((prev) => ({ ...prev, email: text.toLowerCase() === 'skip' ? 'Not provided' : text }));
        nextStep = 'city';
        botReplyText = `Which City in Tamil Nadu will your event take place in?`;
        nextOptions = CITY_OPTIONS;
        break;

      case 'city':
        setLead((prev) => ({ ...prev, city: text }));
        nextStep = 'eventType';
        botReplyText = `Wonderful! City set to ${text}. 📍\n\nWhat type of event are you celebrating?`;
        nextOptions = EVENT_TYPE_OPTIONS;
        break;

      case 'eventType':
        setLead((prev) => ({ ...prev, eventType: text }));
        nextStep = 'eventDate';
        botReplyText = `Awesome! ${text} celebrations are our specialty. 🎉\n\nWhat is your planned Event Date? (e.g. 15th September 2026)`;
        break;

      case 'eventDate':
        setLead((prev) => ({ ...prev, eventDate: text }));
        nextStep = 'eventLocation';
        botReplyText = `Got it! Date: ${text}. 📅\n\nWhat is the specific Event Location / Hall Name? (Or city area)`;
        break;

      case 'eventLocation':
        setLead((prev) => ({ ...prev, eventLocation: text }));
        nextStep = 'photographyRequired';
        botReplyText = `Perfect! Hall / Venue: ${text}. 🏰\n\nIs Photography required?`;
        nextOptions = YES_NO_OPTIONS;
        break;

      case 'photographyRequired':
        if (text.toLowerCase() === 'yes') {
          setLead((prev) => ({ ...prev, services: [...(prev.services || []), 'Photography'] }));
        }
        nextStep = 'videographyRequired';
        botReplyText = `Is Cinematic Videography required?`;
        nextOptions = YES_NO_OPTIONS;
        break;

      case 'videographyRequired':
        if (text.toLowerCase() === 'yes') {
          setLead((prev) => ({ ...prev, services: [...(prev.services || []), 'Cinematic Videography'] }));
        }
        nextStep = 'droneRequired';
        botReplyText = `Would you like 4K Drone Aerial Coverage?`;
        nextOptions = YES_NO_OPTIONS;
        break;

      case 'droneRequired':
        if (text.toLowerCase() === 'yes') {
          setLead((prev) => ({ ...prev, services: [...(prev.services || []), '4K Drone Coverage'] }));
        }
        nextStep = 'eventMgmtRequired';
        botReplyText = `Do you require Complete Event Management (Stage Decor, Sound, Lighting)?`;
        nextOptions = YES_NO_OPTIONS;
        break;

      case 'eventMgmtRequired':
        if (text.toLowerCase() === 'yes') {
          setLead((prev) => ({ ...prev, services: [...(prev.services || []), 'Event Management'] }));
        }
        nextStep = 'budget';
        botReplyText = `Thank you! What is your approximate Budget range for the services?`;
        nextOptions = BUDGET_OPTIONS;
        break;

      case 'budget':
        setLead((prev) => ({ ...prev, budget: text }));
        nextStep = 'contactTime';
        botReplyText = `Budget recorded: ${text}. 💼\n\nWhat is your preferred time for our team to call you?`;
        nextOptions = TIME_OPTIONS;
        break;

      case 'contactTime':
        setLead((prev) => ({ ...prev, preferredContactTime: text }));
        nextStep = 'additionalReqs';
        botReplyText = `Almost done! Do you have any Additional Requirements, album preferences, or special notes? (Type 'none' if none)`;
        break;

      case 'additionalReqs':
        const finalLead: JotformLead = {
          fullName: lead.fullName || 'Valued Client',
          phone: lead.phone || '',
          email: lead.email || '',
          city: lead.city || 'Tamil Nadu',
          eventType: lead.eventType || 'Event',
          eventDate: lead.eventDate || '',
          eventLocation: lead.eventLocation || '',
          services: lead.services || ['Photography'],
          budget: lead.budget || 'Flexible',
          preferredContactTime: lead.preferredContactTime || 'Anytime',
          additionalRequirements: text.toLowerCase() === 'none' ? '' : text
        };

        setLead(finalLead);
        nextStep = 'complete';

        // Submit Lead to API
        try {
          await fetch('/api/enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalLead)
          });
        } catch (err) {
          console.error('Failed to post Jotform lead:', err);
        }

        onLeadCaptured(finalLead);

        botReplyText = `✅ Thank you for contacting **Unique Capture Studio**!\n\nWe have received your enquiry.\n\nOur team will contact you shortly to discuss your requirements.`;
        break;

      case 'complete':
        // Ask Gemini AI for custom questions after flow completed
        setIsAiLoading(true);
        try {
          const aiRes = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              message: text,
              leadContext: lead
            })
          });
          const aiData = await aiRes.json();
          botReplyText = aiData.reply || `Thank you! We have noted your message: "${text}". Our manager will reach out to you directly.`;
        } catch (err) {
          botReplyText = `Thank you! Your enquiry is already saved in Jotform. We will contact you at ${lead.phone} soon.`;
        } finally {
          setIsAiLoading(false);
        }
        break;
    }

    setCurrentStep(nextStep);

    // Append Bot Reply
    setMessages((prev) => [
      ...prev,
      {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: botReplyText,
        options: nextOptions
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm sm:max-w-md h-[580px] max-h-[85vh] glass-card-gold rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/50 flex flex-col overflow-hidden animate-float-up transition-all duration-300">
      
      {/* Jotform Header */}
      <div className="bg-gradient-to-r from-amber-950 via-[#1A160D] to-black px-4 py-3.5 border-b border-[#D4AF37]/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gold-gradient p-[1.5px] shadow-md">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif-heading text-sm font-bold text-white">Jotform AI Assistant</span>
              <span className="bg-[#D4AF37] text-black text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded">AI</span>
            </div>
            <span className="text-[10px] text-[#D4AF37] font-medium block">
              Unique Capture Studio Booking Bot
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          title="Minimize Chatbot"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs font-light leading-relaxed">
        {messages.map((m) => {
          const isBot = m.sender === 'bot';

          return (
            <div
              key={m.id}
              className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-1`}
            >
              <div className="flex items-end gap-2 max-w-[88%]">
                {isBot && (
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mb-1">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl ${
                    isBot
                      ? 'bg-gray-900/90 text-gray-100 border border-gray-800 rounded-bl-none shadow-md'
                      : 'bg-gold-gradient text-black font-medium rounded-br-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>

              {/* Bot Option Buttons / Pills */}
              {isBot && m.options && (
                <div className="flex flex-wrap gap-1.5 pl-8 pt-1 max-w-[95%]">
                  {m.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelectOption(opt)}
                      className="px-3 py-1.5 rounded-full bg-black/80 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold text-[11px] transition-all duration-200 shadow-sm"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {isAiLoading && (
          <div className="flex items-center gap-2 pl-2 text-xs text-[#D4AF37]">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Jotform AI thinking...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* Bottom Input Field */}
      <div className="p-3 bg-black/80 border-t border-gray-800 flex items-center gap-2">
        <input
          type="text"
          placeholder={
            currentStep === 'complete'
              ? 'Ask any question about prices or dates...'
              : 'Type your answer here...'
          }
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-gray-900 border border-gray-800 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
        />

        <button
          onClick={handleSend}
          disabled={!inputText.trim()}
          className="w-9 h-9 rounded-xl bg-gold-gradient text-black flex items-center justify-center disabled:opacity-40 disabled:pointer-events-none hover:scale-105 transition-transform shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      {/* Footer Branding */}
      <div className="px-3 py-1 bg-black text-center text-[9px] text-gray-500 border-t border-gray-950 flex items-center justify-between">
        <span>Powered by Jotform AI Submissions Engine</span>
        <span className="text-[#D4AF37]">Unique Capture Studio</span>
      </div>

    </div>
  );
};
