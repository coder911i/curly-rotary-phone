import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowUp, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/financeData';

interface FloatingActionsProps {
  onOpenLeadModal: () => void;
  isPopupDismissed: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenLeadModal,
  isPopupDismissed
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefill)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Re-Open Consultation Floating Button (if popup dismissed) */}
      <AnimatePresence>
        {isPopupDismissed && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            onClick={onOpenLeadModal}
            className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get Free Consultation</span>
            <span className="sm:hidden">Consult</span>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center shadow-xl backdrop-blur-md transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Pulsing Button with Tooltip */}
        <div className="relative group">
          
          {/* Tooltip on Hover */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-semibold whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Chat Online (Avg. 5m Reply)</span>
          </div>

          <button
            onClick={handleWhatsApp}
            className="w-13 h-13 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all cursor-pointer relative"
            aria-label="Chat on WhatsApp"
          >
            {/* Pulsing ring */}
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75"></span>
            <MessageSquare className="w-6 h-6 relative z-10" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950"></span>
          </button>
        </div>
      </div>

    </div>
  );
};
