import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale, Calendar, Clock, User, Building, Mail, Phone, CheckCircle2, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBooking } from '../../context/BookingContext';
import { mockAttorneys, mockPracticeAreas } from '../../data/mockLaw';

interface LawConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LawConsultationModal: React.FC<LawConsultationModalProps> = ({ isOpen, onClose }) => {
  const { addBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [selectedPractice, setSelectedPractice] = useState(mockPracticeAreas[0].title);
  const [selectedAttorney, setSelectedAttorney] = useState(mockAttorneys[0].name);
  const [selectedDate, setSelectedDate] = useState('2026-08-31');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [clientName, setClientName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [matter, setMatter] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const timeslots = ['09:00 AM', '11:00 AM', '02:30 PM', '04:00 PM'];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !phone) return;

    const booking = addBooking({
      businessId: 'law',
      businessName: 'BLACKSTONE & CO.',
      type: `${selectedPractice} Consultation`,
      date: selectedDate,
      time: selectedTime,
      details: {
        attorney: selectedAttorney,
        clientName,
        company: company || 'Private Principal',
        phone,
        email: email || 'N/A',
        matterSummary: matter || 'Strategic Legal Counsel'
      }
    });

    setConfirmedBooking(booking);
    setStep(5);

    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    } catch {}
  };

  const resetAndClose = () => {
    setStep(1);
    setConfirmedBooking(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-law-sans overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#080806]/90"
        />

        {/* Modal Container — Private Legal Chamber Inquiry Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#12120e] text-[#f5f0eb] border border-[#c5a059] rounded-none p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#c5a059]/40 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a059] font-bold block">
                  BLACKSTONE & CO. — CHAMBER DOCKET
                </span>
                <h3 className="text-xl font-law-serif text-white">Legal Consultation Inquiry</h3>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step <= 4 && (
            <div className="flex items-center justify-between text-xs font-mono text-[#c5a059] px-1">
              <span>Section {step} of 4</span>
              <div className="flex space-x-1.5">
                {[1, 2, 3, 4].map(s => (
                  <div
                    key={s}
                    className={`h-1 transition-all duration-300 ${
                      s === step ? 'w-8 bg-[#c5a059]' : s < step ? 'w-3 bg-[#c5a059]/50' : 'w-3 bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Practice Area */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-widest text-[#c5a059] block">
                Primary Legal Practice Sector
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                {mockPracticeAreas.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPractice(p.title)}
                    className={`p-3.5 border text-left font-law-sans transition-all ${
                      selectedPractice === p.title
                        ? 'bg-[#c5a059] text-[#080806] border-[#c5a059] font-bold'
                        : 'bg-black/40 border-[#c5a059]/30 text-[#f5f0eb] hover:border-[#c5a059]'
                    }`}
                  >
                    <span className="font-serif text-base block">{p.title}</span>
                    <span className="text-xs font-mono opacity-80">{p.subtitle}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold font-mono uppercase tracking-widest flex items-center justify-center space-x-2 transition-all text-xs mt-4"
              >
                <span>Select Chamber Counsel</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Attorney Selection */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <label className="text-xs font-mono uppercase tracking-widest text-[#c5a059] block">
                Select Lead Attorney
              </label>

              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                {mockAttorneys.map(att => (
                  <button
                    key={att.id}
                    onClick={() => setSelectedAttorney(att.name)}
                    className={`w-full p-4 border text-left flex items-center space-x-4 transition-all ${
                      selectedAttorney === att.name
                        ? 'bg-[#c5a059] text-[#080806] border-[#c5a059] font-bold'
                        : 'bg-black/40 border-[#c5a059]/30 text-[#f5f0eb] hover:border-[#c5a059]'
                    }`}
                  >
                    <img src={att.image} alt={att.name} className="w-14 h-14 object-cover filter grayscale" />
                    <div>
                      <h4 className="font-serif text-lg">{att.name}</h4>
                      <p className="text-xs font-mono">{att.role}</p>
                      <p className="text-[11px] opacity-70 font-mono">{att.experience} Yrs Experience • {att.specialization}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 border border-[#c5a059]/40 text-[#f5f0eb] font-mono text-xs uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Select Window</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-[#c5a059] block mb-2">
                  Select Calendar Date
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['2026-08-31', '2026-09-01', '2026-09-02'].map(date => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 border text-center font-mono text-xs transition-all ${
                        selectedDate === date
                          ? 'bg-[#c5a059] text-[#080806] font-bold'
                          : 'bg-black/40 border-[#c5a059]/30 text-[#f5f0eb] hover:border-[#c5a059]'
                      }`}
                    >
                      <Calendar className="w-4 h-4 mx-auto mb-1 opacity-70" />
                      <span>{date}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-[#c5a059] block mb-2">
                  Select Consultation Time
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timeslots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-3 border text-center font-mono text-xs transition-all flex items-center justify-center space-x-2 ${
                        selectedTime === slot
                          ? 'bg-[#c5a059] text-[#080806] font-bold'
                          : 'bg-black/40 border-[#c5a059]/30 text-[#f5f0eb] hover:border-[#c5a059]'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 border border-[#c5a059]/40 text-[#f5f0eb] font-mono text-xs uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 py-3 bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Client Information</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Client & Matter Info Form */}
          {step === 4 && (
            <form onSubmit={handleConfirm} className="space-y-4 font-mono text-xs">
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#c5a059] block mb-1">Client Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a059]" />
                      <input
                        type="text"
                        required
                        placeholder="Sir Marcus Sterling"
                        value={clientName}
                        onChange={e => setClientName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-[#c5a059]/40 text-white placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#c5a059] block mb-1">Company / Corporate Entity</label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a059]" />
                      <input
                        type="text"
                        placeholder="Sterling Capital Partners"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-[#c5a059]/40 text-white placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[#c5a059] block mb-1">Direct Telephone *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a059]" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (212) 555-0199"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-[#c5a059]/40 text-white placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#c5a059] block mb-1">Corporate Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#c5a059]" />
                      <input
                        type="email"
                        placeholder="marcus@sterling.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-[#c5a059]/40 text-white placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[#c5a059] block mb-1">Summary of Legal Matter</label>
                  <textarea
                    rows={2}
                    placeholder="Cross-border acquisition structuring or litigation..."
                    value={matter}
                    onChange={e => setMatter(e.target.value)}
                    className="w-full p-3 bg-black/60 border border-[#c5a059]/40 text-white placeholder-white/30 focus:border-[#c5a059] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-[#c5a059]/30">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-3 border border-[#c5a059]/40 text-[#f5f0eb] font-mono text-xs uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold font-mono text-xs uppercase tracking-widest flex items-center justify-center space-x-2 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: Confirmation Screen */}
          {step === 5 && confirmedBooking && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
              <div className="w-16 h-16 border border-[#c5a059] text-[#c5a059] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-mono font-bold block">
                  CONSULTATION REGISTERED
                </span>
                <h3 className="text-2xl font-law-serif text-white mt-1">Chamber Inquiry Logged</h3>
                <p className="text-xs text-white/60 mt-1 font-mono">Executive legal clerk will acknowledge within 2 hours.</p>
              </div>

              {/* Legal Ticket Docket */}
              <div className="bg-black/60 border border-[#c5a059] p-5 text-left space-y-3 font-mono">
                <div className="flex justify-between items-center border-b border-[#c5a059]/30 pb-3">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase block">Docket Number</span>
                    <span className="text-lg font-bold text-[#c5a059]">{confirmedBooking.id}</span>
                  </div>
                  <span className="px-2.5 py-1 bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059] text-xs font-semibold">
                    REGISTERED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-white/40 block">Counsel</span>
                    <span className="font-semibold text-white">{confirmedBooking.details.attorney}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Sector</span>
                    <span className="font-semibold text-white">{confirmedBooking.type}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Date</span>
                    <span className="font-semibold text-white">{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Window</span>
                    <span className="font-semibold text-white">{confirmedBooking.time}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold text-xs uppercase tracking-widest font-mono transition-all"
              >
                Close & Return to Legal Docket
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
