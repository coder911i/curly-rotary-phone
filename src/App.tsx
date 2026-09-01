import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/finance/LoadingScreen';
import { Navbar } from './components/finance/Navbar';
import { HeroSection } from './components/finance/HeroSection';
import { QuickQueryPopup } from './components/finance/QuickQueryPopup';
import { ServicesSection } from './components/finance/ServicesSection';
import { PhotoBreak } from './components/finance/PhotoBreak';
import { WhyChooseUs } from './components/finance/WhyChooseUs';
import { AchievementsTimeline } from './components/finance/AchievementsTimeline';
import { HowItWorks } from './components/finance/HowItWorks';
import { EligibilityCalculator } from './components/finance/EligibilityCalculator';
import { GovernmentSchemes } from './components/finance/GovernmentSchemes';
import { TestimonialsSection } from './components/finance/TestimonialsSection';
import { ExpertConsultation } from './components/finance/ExpertConsultation';
import { FaqSection } from './components/finance/FaqSection';
import { ContactSection } from './components/finance/ContactSection';
import { FloatingActions } from './components/finance/FloatingActions';
import { SmartLeadModal } from './components/finance/SmartLeadModal';
import { Footer } from './components/finance/Footer';
import type { LeadFormData } from './types/finance';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  // Modals & Popups State
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasPopupBeenShown, setHasPopupBeenShown] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const [prefillDataForModal, setPrefillDataForModal] = useState<Partial<LeadFormData> | undefined>(undefined);

  // Submission Toast Notification
  const [toastNotification, setToastNotification] = useState<{
    show: boolean;
    refId: string;
    name: string;
  }>({
    show: false,
    refId: '',
    name: ''
  });

  // Timed non-intrusive popup trigger (5s delay — after loading screen)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasPopupBeenShown) {
        setIsPopupOpen(true);
        setHasPopupBeenShown(true);
      }
    }, 5500);

    return () => clearTimeout(timer);
  }, [hasPopupBeenShown]);

  const handleOpenLeadModal = (initialService?: string, prefill?: Partial<LeadFormData>) => {
    setSelectedServiceForModal(initialService);
    setPrefillDataForModal(prefill);
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
    setSelectedServiceForModal(undefined);
    setPrefillDataForModal(undefined);
  };

  const handleLeadSubmitSuccess = (refId: string, name: string) => {
    setToastNotification({
      show: true,
      refId,
      name
    });

    setTimeout(() => {
      setToastNotification(prev => ({ ...prev, show: false }));
    }, 6000);
  };

  const handleCheckEligibilityWithData = (data: {
    serviceType: string;
    monthlyIncome: number;
    employmentType: string;
    city: string;
    loanAmount: number;
    tenureYears: number;
  }) => {
    handleOpenLeadModal(data.serviceType, {
      serviceType: data.serviceType,
      monthlyIncome: data.monthlyIncome,
      employmentType: data.employmentType as any,
      city: data.city,
      loanAmount: data.loanAmount,
      tenureYears: data.tenureYears
    });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans-main selection:bg-[#e8c547] selection:text-[#020617]">

      {/* Premium Loading Screen */}
      <LoadingScreen />

      {/* Sticky Navigation */}
      <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* 1. Cinematic Hero with 3D Configurator */}
      <HeroSection
        onOpenLeadModal={(svc) => handleOpenLeadModal(svc)}
        onExploreServices={() => scrollToSection('services')}
        onOpenCalculator={() => scrollToSection('calculator')}
      />

      {/* 2. Comprehensive Services Grid */}
      <ServicesSection onOpenLeadModal={(svc) => handleOpenLeadModal(svc)} />

      {/* === PHOTO BREAK: Financial Planning === */}
      <PhotoBreak
        imageUrl="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2000&auto=format&fit=crop"
        headline="Empowering Financial Decisions with Expert Guidance"
        subtext="From first-time home buyers to established enterprises — we structure the financing that turns ambitious goals into reality."
      />

      {/* 3. Why Choose Us (8 Pillars + Comparison Matrix) */}
      <WhyChooseUs onOpenLeadModal={() => handleOpenLeadModal('General Inquiry')} />

      {/* 4. Achievements & Interactive Journey Timeline */}
      <AchievementsTimeline />

      {/* === PHOTO BREAK: Business Growth === */}
      <PhotoBreak
        imageUrl="https://images.unsplash.com/photo-1553729459-uj5uknehr66?q=80&w=2000&auto=format&fit=crop"
        headline="A Decade of Building Financial Partnerships"
        subtext="Over 25,000 clients and ₹4,800+ crore facilitated across retail, commercial, and government lending."
      />

      {/* 5. How It Works (Connected 5-Step Process) */}
      <HowItWorks onOpenLeadModal={() => handleOpenLeadModal('Process Consultation')} />

      {/* 6. Interactive Loan Eligibility & EMI Calculator */}
      <EligibilityCalculator
        onCheckEligibilityWithData={handleCheckEligibilityWithData}
      />

      {/* 7. Government Financial Schemes & Subsidies */}
      <GovernmentSchemes onOpenLeadModal={(svc) => handleOpenLeadModal(svc)} />

      {/* === PHOTO BREAK: Professional Advisory === */}
      <PhotoBreak
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
        headline="Your Financial Goals Deserve Expert Strategy"
        subtext="Speak directly with certified credit underwriters who negotiate the lowest rates on your behalf."
      />

      {/* 8. Testimonials & Client Success Stories */}
      <TestimonialsSection onOpenLeadModal={() => handleOpenLeadModal('Consultation Request')} />

      {/* 9. Expert Consultation High-Conversion Desk */}
      <ExpertConsultation onOpenLeadModal={(svc) => handleOpenLeadModal(svc)} />

      {/* 10. Frequently Asked Questions */}
      <FaqSection onOpenLeadModal={() => handleOpenLeadModal('General Consultation')} />

      {/* 11. Contact Section & Regional Hubs */}
      <ContactSection onSubmitSuccess={handleLeadSubmitSuccess} />

      {/* 12. Enterprise Footer & Legal Disclaimers */}
      <Footer onOpenLeadModal={(svc) => handleOpenLeadModal(svc)} />

      {/* Floating WhatsApp & Quick Actions */}
      <FloatingActions
        onOpenLeadModal={() => handleOpenLeadModal()}
        isPopupDismissed={hasPopupBeenShown && !isPopupOpen}
      />

      {/* Timed Quick Query Popup */}
      <QuickQueryPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmitSuccess={handleLeadSubmitSuccess}
      />

      {/* Smart 5-Step Lead Management Modal */}
      <SmartLeadModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        initialService={selectedServiceForModal}
        prefillData={prefillDataForModal}
      />

      {/* Global Success Notification Toast */}
      <AnimatePresence>
        {toastNotification.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 p-4 rounded-2xl glass-panel-gold bg-[#0a1628] border border-emerald-500/25 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1 text-xs">
              <span className="font-bold text-white block">Inquiry Received</span>
              <span className="text-slate-300">
                Ref <strong className="text-[#e8c547] font-mono">{toastNotification.refId}</strong> for {toastNotification.name}.
              </span>
            </div>
            <button
              onClick={() => setToastNotification(prev => ({ ...prev, show: false }))}
              className="p-1 text-slate-500 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
