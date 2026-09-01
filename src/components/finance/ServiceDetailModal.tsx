import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  MessageSquare,
  UserCheck
} from 'lucide-react';
import type { ServiceItem } from '../../types/finance';
import { COMPANY_INFO } from '../../data/financeData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onApply
}) => {
  if (!isOpen || !service) return null;

  const handleWhatsAppChat = () => {
    const text = `Hi Valiant Capital team, I am interested in ${service.title} (${service.tagline}). Please share detailed eligibility terms.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-2xl glass-panel-gold p-6 sm:p-8 bg-[#090f20] border border-amber-500/30 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="space-y-2 border-b border-slate-800 pb-5 pr-8">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono uppercase tracking-wider">
                {service.category} Solution
              </span>
              {service.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                  {service.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
              {service.title}
            </h2>
            <p className="text-sm text-amber-400 font-medium">{service.tagline}</p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {service.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
            {service.interestRate && (
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Interest Rate</span>
                <span className="text-sm font-bold font-mono text-amber-400">{service.interestRate}</span>
              </div>
            )}
            {service.maxAmount && (
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Maximum Limit</span>
                <span className="text-sm font-bold font-mono text-emerald-400">{service.maxAmount}</span>
              </div>
            )}
            {service.processingTime && (
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Turnaround Time</span>
                <span className="text-sm font-bold font-mono text-sky-400">{service.processingTime}</span>
              </div>
            )}
          </div>

          {/* Key Advantages */}
          <div className="space-y-2 mb-5">
            <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 font-semibold">
              Key Features & Advantages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Checklist & Eligibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            
            {/* Required Documents */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>Documents Checklist</span>
              </div>
              <ul className="space-y-1.5">
                {service.documents.map((doc, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase font-mono">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Eligibility Criteria</span>
              </div>
              <ul className="space-y-1.5">
                {service.eligibility.map((el, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                onClose();
                onApply(service.title);
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply For {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppChat}
              className="py-3 px-5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
