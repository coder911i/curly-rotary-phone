import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  Phone, 
  User, 
  Mail, 
  Briefcase 
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/financeData';

interface QuickQueryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (refId: string, name: string) => void;
}

export const QuickQueryPopup: React.FC<QuickQueryPopupProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    lookingFor: 'Home Loan',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const loanOptions = [
    'Home Loan',
    'Personal Loan',
    'Business Loan',
    'Gold Loan',
    'Vehicle Loan',
    'Loan Against Property',
    'MSME Loan',
    'Government Scheme',
    'Financial Consultation',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'VAL-' + Math.floor(10000 + Math.random() * 90000);
      onSubmitSuccess(generatedRef, formData.fullName);
      onClose();
    }, 1000);
  };

  const handleWhatsAppChat = () => {
    const text = `Hi Valiant Capital, my name is ${formData.fullName || 'a client'}. I am interested in ${formData.lookingFor}. ${formData.notes ? 'Details: ' + formData.notes : ''}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg rounded-2xl glass-panel-gold p-6 sm:p-8 bg-[#0b1224] border border-amber-500/30 shadow-2xl shadow-black z-10 overflow-hidden"
        >
          {/* Subtle Top Gold Banner Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-400"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="space-y-1.5 mb-6">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-semibold">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Priority Fast-Track Desk</span>
            </div>
            <h3 className="text-2xl font-bold font-serif-luxury text-white">
              Looking for Financial Assistance?
            </h3>
            <p className="text-xs text-slate-300">
              Get customized loan options and scheme advice from senior credit underwriters.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-4 p-2.5 rounded-lg bg-red-950/80 border border-red-500/50 text-red-300 text-xs">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium flex items-center gap-1">
                  <User className="w-3 h-3 text-amber-400" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium flex items-center gap-1">
                  <Phone className="w-3 h-3 text-amber-400" /> Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none font-mono"
                />
              </div>
            </div>

            {/* Email & Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium flex items-center gap-1">
                  <Mail className="w-3 h-3 text-amber-400" /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-300 font-medium flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-amber-400" /> What are you looking for?
                </label>
                <select
                  value={formData.lookingFor}
                  onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950/80 border border-slate-800 focus:border-amber-400 text-white text-xs focus:outline-none"
                >
                  {loanOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Brief Notes */}
            <div className="space-y-1">
              <label className="text-xs text-slate-300 font-medium">
                Tell us briefly how we can help you:
              </label>
              <textarea
                rows={2}
                placeholder="Loan amount needed, city, property details or subsidy queries..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Processing...' : 'Submit Request'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppChat}
                className="w-full py-3 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Trust Footer */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Confidential
              </span>
              <span>Response in &lt; 15 mins</span>
            </div>

          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
