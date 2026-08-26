import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, HeartPulse, ChevronRight, CalendarPlus, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBooking } from '../../context/BookingContext';
import { mockTreatments } from '../../data/mockDoctor';

interface DoctorBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorBookingModal: React.FC<DoctorBookingModalProps> = ({ isOpen, onClose }) => {
  const { addBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(mockTreatments[0].title);
  const [selectedDate, setSelectedDate] = useState('2026-08-28');
  const [selectedTime, setSelectedTime] = useState('05:30 PM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const timeslots = ['09:30 AM', '10:30 AM', '11:30 AM', '02:00 PM', '04:30 PM', '05:30 PM'];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const booking = addBooking({
      businessId: 'doctor',
      businessName: 'VÉRA MEDICAL',
      type: selectedTreatment,
      date: selectedDate,
      time: selectedTime,
      details: {
        doctor: 'Dr. Arjun Mehra',
        patientName: fullName,
        phone,
        email: email || 'N/A',
        reason: reason || 'Routine Cardiovascular Consultation',
        clinic: 'Véra Medical Suites, Central Tower'
      }
    });

    setConfirmedBooking(booking);
    setStep(6);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-doctor overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Container — Medical Operating System Drawer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-blue-600 font-bold block">
                  MEDICAL OS v4.2 — SCHEDULER
                </span>
                <h3 className="text-xl font-extrabold text-slate-950">VÉRA Medical Clinical Intake</h3>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step <= 5 && (
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
              <span>Step {step} of 5 — Clinical Sequence</span>
              <div className="flex space-x-1.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step ? 'w-8 bg-blue-600' : s < step ? 'w-3 bg-blue-400' : 'w-3 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Doctor & Department */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"
                  alt="Dr. Arjun Mehra"
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-950">Dr. Arjun Mehra</h4>
                  <p className="text-xs text-blue-600 font-semibold">Consultant Cardiologist</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-mono">18 Years Experience • 4.9 Rating</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Target Clinical Department
                </label>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-950 flex items-center justify-between">
                  <span>Cardiology & Molecular Health</span>
                  <Activity className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 transition-all"
              >
                <span>Continue to Protocol Selection</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Treatment Selection */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                Select Medical Treatment Protocol
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                {mockTreatments.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTreatment(t.title)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedTreatment === t.title
                        ? 'bg-blue-50 border-blue-600 text-slate-950'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-sm text-slate-950">{t.title}</span>
                      <span className="text-xs font-mono text-blue-600 font-bold">{t.price}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{t.description}</p>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 transition-all text-sm"
                >
                  <span>Select Date</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Date Picker */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                Choose Preferred Date
              </label>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {['2026-08-28', '2026-08-29', '2026-08-30', '2026-08-31', '2026-09-01', '2026-09-02'].map(date => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedDate === date
                        ? 'bg-blue-600 border-blue-600 text-white font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Calendar className="w-4 h-4 mx-auto mb-1 opacity-70" />
                    <span className="text-xs block font-mono">{date}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 transition-all text-sm"
                >
                  <span>Choose Time Slot</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Time Slot */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                Available Time Slots ({selectedDate})
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeslots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`p-3.5 rounded-xl border text-center transition-all flex items-center justify-center space-x-2 ${
                      selectedTime === slot
                        ? 'bg-blue-600 border-blue-600 text-white font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <Clock className="w-4 h-4 opacity-70" />
                    <span className="text-sm font-mono">{slot}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(3)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20 transition-all text-sm"
                >
                  <span>Enter Patient Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Patient Details Form */}
          {step === 5 && (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-600 block mb-1 font-mono">Patient Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 block mb-1 font-mono">Phone Contact *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 019-2834"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-600 block mb-1 font-mono">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        placeholder="alexander@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-600 block mb-1 font-mono">Reason for Visit</label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe symptoms or checkup goals..."
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 text-sm"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all text-sm"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 6: Confirmation Screen */}
          {step === 6 && confirmedBooking && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-600 font-mono font-bold block">
                  CLINICAL APPOINTMENT CONFIRMED
                </span>
                <h3 className="text-2xl font-bold text-slate-950 mt-1">VÉRA Medical Intake Received</h3>
                <p className="text-xs text-slate-500 mt-1 font-mono">Saved to local session memory.</p>
              </div>

              {/* Ticket Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-3 font-sans">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono block">Appointment ID</span>
                    <span className="font-mono text-lg font-bold text-blue-600">{confirmedBooking.id}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Doctor</span>
                    <span className="font-semibold text-slate-950">{confirmedBooking.details.doctor}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Treatment</span>
                    <span className="font-semibold text-slate-950">{confirmedBooking.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date</span>
                    <span className="font-semibold text-slate-950">{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Time Slot</span>
                    <span className="font-semibold text-slate-950">{confirmedBooking.time}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => alert(`Added Appointment ${confirmedBooking.id} to your calendar!`)}
                  className="flex-1 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-semibold flex items-center justify-center space-x-2 text-sm transition-colors"
                >
                  <CalendarPlus className="w-4 h-4" />
                  <span>Add to Calendar</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="flex-1 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
