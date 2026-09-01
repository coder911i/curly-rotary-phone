import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  MessageSquare,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, COMPANY_INFO } from '../../data/financeData';
import type { LeadFormData } from '../../types/finance';

interface SmartLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  prefillData?: Partial<LeadFormData>;
}

export const SmartLeadModal: React.FC<SmartLeadModalProps> = ({
  isOpen,
  onClose,
  initialService,
  prefillData
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    serviceType: initialService || 'Home Loans',
    loanAmount: 5000000,
    tenureYears: 20,
    employmentType: 'salaried',
    monthlyIncome: 85000,
    existingEmis: 0,
    notes: '',
    preferredTime: 'Morning (9 AM - 12 PM)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Sync initialService or prefillData if updated
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
    if (prefillData) {
      setFormData(prev => ({ ...prev, ...prefillData }));
    }
  }, [initialService, prefillData, isOpen]);

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setIsSuccess(false);
      setErrorMessage('');
    }
  }, [isOpen]);

  const handleNext = () => {
    setErrorMessage('');

    // Step 1 validation
    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        setErrorMessage('Please enter your full name');
        return;
      }
      if (!formData.city.trim()) {
        setErrorMessage('Please specify your city or location');
        return;
      }
    }

    // Step 2 validation
    if (currentStep === 2) {
      if (!formData.phone.trim() || formData.phone.length < 10) {
        setErrorMessage('Please enter a valid 10-digit mobile number');
        return;
      }
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setErrorMessage('');
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = 'VAL-' + Math.floor(10000 + Math.random() * 90000);
      setReferenceId(generatedRef);
      setIsSuccess(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1200);
  };

  const handleWhatsAppWithRef = () => {
    const text = `Hi Valiant Capital, I just submitted an application (Ref ID: ${referenceId}) for ${formData.serviceType} of ₹${formData.loanAmount.toLocaleString('en-IN')}. Please connect me with the assigned underwriter.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const formatLakhCr = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl rounded-3xl glass-panel-gold p-6 sm:p-8 bg-[#090f22] border border-amber-500/30 shadow-2xl z-10 my-6 max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSuccess ? (
            <div>
              
              {/* Progress Step Header */}
              <div className="space-y-2 mb-6 border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Smart Lead Wizard</span>
                  </span>
                  <span className="font-mono text-slate-400">
                    Step {currentStep} of {totalSteps}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  ></div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
                    {currentStep === 1 && 'Personal Profile & Location'}
                    {currentStep === 2 && 'Contact & Communication'}
                    {currentStep === 3 && 'Financial Requirement'}
                    {currentStep === 4 && 'Income & Employment'}
                    {currentStep === 5 && 'Review & Submission'}
                  </h3>
                  <p className="text-xs text-slate-300 font-light">
                    {currentStep === 1 && 'Tell us your name and where your property or business is located.'}
                    {currentStep === 2 && 'Where should our senior financial underwriter reach you?'}
                    {currentStep === 3 && 'Specify the financial solution, loan amount, and expected tenure.'}
                    {currentStep === 4 && 'This helps us calculate your maximum eligibility and lowest rate.'}
                    {currentStep === 5 && 'Review your details and submit for immediate underwriting review.'}
                  </p>
                </div>
              </div>

              {errorMessage && (
                <div className="mb-4 p-2.5 rounded-lg bg-red-950/80 border border-red-500/50 text-red-300 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* STEP 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      autoFocus
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> City / District *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mumbai, Bengaluru, Pune, Delhi..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Contact Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-amber-400" /> Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      autoFocus
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-400" /> Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> Best Time to Call
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs focus:outline-none"
                    >
                      <option value="Immediately (Within 15 mins)">Immediately (Within 15 mins)</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Financial Requirement */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Service or Loan Category
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                          {s.title}
                        </option>
                      ))}
                      <option value="Government Scheme / Subsidy" className="bg-slate-900 text-white">Government Scheme / Subsidy</option>
                      <option value="Other Financial Requirement" className="bg-slate-900 text-white">Other Financial Requirement</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-semibold">Estimated Loan Amount</span>
                      <span className="font-mono font-bold text-amber-400 text-sm bg-slate-900 px-2.5 py-0.5 rounded border border-slate-700">
                        {formatLakhCr(formData.loanAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={20000000}
                      step={100000}
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: Number(e.target.value) })}
                      className="w-full cursor-pointer accent-amber-400"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>₹1 Lakh</span>
                      <span>₹1 Cr</span>
                      <span>₹2 Cr</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-semibold">Desired Tenure</span>
                      <span className="font-mono font-bold text-white text-xs">
                        {formData.tenureYears} Years
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={30}
                      step={1}
                      value={formData.tenureYears}
                      onChange={(e) => setFormData({ ...formData, tenureYears: Number(e.target.value) })}
                      className="w-full cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Income & Employment */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Employment / Occupation Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'salaried', label: 'Salaried' },
                        { id: 'self_employed', label: 'Self-Employed' },
                        { id: 'business_owner', label: 'Business Owner' },
                        { id: 'professional', label: 'Doctor / CA / Lawyer' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, employmentType: item.id as any })}
                          className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                            formData.employmentType === item.id
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                              : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-900'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-semibold">Net Monthly Income</span>
                      <span className="font-mono font-bold text-emerald-400 text-sm bg-slate-900 px-2.5 py-0.5 rounded border border-slate-700">
                        ₹{formData.monthlyIncome.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={20000}
                      max={500000}
                      step={5000}
                      value={formData.monthlyIncome}
                      onChange={(e) => setFormData({ ...formData, monthlyIncome: Number(e.target.value) })}
                      className="w-full cursor-pointer accent-amber-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-semibold">Existing Monthly EMIs</span>
                      <span className="font-mono font-bold text-slate-200 text-xs">
                        ₹{formData.existingEmis.toLocaleString('en-IN')} / mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100000}
                      step={2000}
                      value={formData.existingEmis}
                      onChange={(e) => setFormData({ ...formData, existingEmis: Number(e.target.value) })}
                      className="w-full cursor-pointer accent-amber-400"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: Review & Submission */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Applicant:</span>
                      <span className="font-bold text-white">{formData.fullName} ({formData.city})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact:</span>
                      <span className="font-bold text-white">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Requirement:</span>
                      <span className="font-bold text-amber-400">{formData.serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Loan Amount:</span>
                      <span className="font-bold text-emerald-400">{formatLakhCr(formData.loanAmount)} ({formData.tenureYears} Yrs)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Monthly In-Hand:</span>
                      <span className="font-bold text-white">₹{formData.monthlyIncome.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Additional Notes or Specific Bank Preference:
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need quick sanction for property purchase next week, prefer SBI / HDFC..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-3">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 ml-auto"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : currentStep === totalSteps ? (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </div>
          ) : (
            /* SUCCESS CONFIRMATION SCREEN */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                  Application Logged Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Our credit committee has received your requirement. A senior underwriter will evaluate bank options and contact you shortly.
                </p>
              </div>

              {/* Reference ID Pill */}
              <div className="inline-block p-3 px-6 rounded-2xl bg-slate-950 border border-amber-500/40">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">Application Reference ID</span>
                <span className="text-xl font-bold font-mono text-amber-400 tracking-wider">
                  {referenceId}
                </span>
              </div>

              {/* Assigned Advisor Info Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left flex items-center gap-3.5 max-w-md mx-auto">
                <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                  VC
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">
                    Assigned Desk Underwriter
                  </span>
                  <span className="text-xs font-bold text-white block">Senior Advisory Group</span>
                  <span className="text-[11px] text-slate-400">Response Guaranteed within 15 Minutes</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppWithRef}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Fast-Track on WhatsApp</span>
                </button>

                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
