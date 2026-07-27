import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnimatedStats } from './components/AnimatedStats';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { EventManagement } from './components/EventManagement';
import { PricingPackages } from './components/PricingPackages';
import { Testimonials } from './components/Testimonials';
import { BehindTheScenes } from './components/BehindTheScenes';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { JotformAIChatPlugin } from './components/JotformAIChatPlugin';
import { LightBoxModal } from './components/LightBoxModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { AdminSubmissionsModal } from './components/AdminSubmissionsModal';
import { EnquiryModal } from './components/EnquiryModal';
import { PortfolioItem, SubmissionRecord, JotformLead } from './types';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);

  // Automatic open of Jotform AI Chatbot after 5.5 seconds unless closed in session
  useEffect(() => {
    const hasClosedInSession = sessionStorage.getItem('jotform_chat_closed');
    if (!hasClosedInSession) {
      const timer = setTimeout(() => {
        setIsChatOpen(true);
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseChat = () => {
    setIsChatOpen(false);
    sessionStorage.setItem('jotform_chat_closed', 'true');
  };

  const handleOpenChatManual = () => {
    setIsChatOpen(true);
  };

  const handleOpenBookWithService = (serviceName: string) => {
    setPreselectedService(serviceName);
    setIsBookModalOpen(true);
  };

  const handleLeadCaptured = (lead: JotformLead) => {
    const newRecord: SubmissionRecord = {
      ...lead,
      id: `UCS-TN-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'Submitted'
    };
    setSubmissions((prev) => [newRecord, ...prev]);
  };

  return (
    <div className="min-h-screen bg-frosted-dark text-gray-100 font-sans-body selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Header */}
      <Navbar
        onOpenBookModal={() => handleOpenBookWithService('General Photography')}
        onOpenChat={handleOpenChatManual}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        submissionsCount={submissions.length}
      />

      {/* Main Sections */}
      <main>
        {/* Fullscreen Hero */}
        <Hero
          onOpenBookModal={() => handleOpenBookWithService('Wedding Shoot')}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenPortfolio={() => {
            const element = document.getElementById('portfolio');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Animated Statistics */}
        <AnimatedStats />

        {/* About Studio */}
        <About />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* All Services Grid */}
        <Services onSelectService={handleOpenBookWithService} />

        {/* Portfolio Showcase & Video Lightbox */}
        <Portfolio onOpenLightbox={(item) => setActiveLightboxItem(item)} />

        {/* Event Management & Mandap Setup Planner */}
        <EventManagement onOpenBookModalWithService={handleOpenBookWithService} />

        {/* Pricing & Packages */}
        <PricingPackages
          onSelectPackage={handleOpenBookWithService}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* Reviews & Testimonials */}
        <Testimonials />

        {/* Behind The Scenes */}
        <BehindTheScenes />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Us & Address */}
        <ContactSection onSubmitSuccess={handleLeadCaptured} />

        {/* CTA Banner */}
        <CTASection onOpenBookModal={() => handleOpenBookWithService('Wedding & Event')} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenChat={handleOpenChatManual} />

      {/* Jotform AI Chatbot Integration (Auto-opens after 5 seconds) */}
      <JotformAIChatPlugin
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        onLeadCaptured={handleLeadCaptured}
      />

      {/* Lightbox Modal */}
      <LightBoxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onInquire={handleOpenBookWithService}
      />

      {/* Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onBookWithQuote={handleOpenBookWithService}
      />

      {/* Direct Booking Modal */}
      <EnquiryModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        preselectedService={preselectedService}
        onSuccess={handleLeadCaptured}
      />

      {/* Admin Leads Modal */}
      <AdminSubmissionsModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        localSubmissions={submissions}
      />

    </div>
  );
}
