import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, Scissors } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBooking } from '../../context/BookingContext';
import { mockSalonServices, mockStylists } from '../../data/mockSalon';

interface SalonBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const SalonBookingModal: React.FC<SalonBookingModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const { addBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || mockSalonServices[0].id);
  const [selectedStylistId, setSelectedStylistId] = useState(mockStylists[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-08-29');
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const selectedService = mockSalonServices.find(s => s.id === selectedServiceId) || mockSalonServices[0];
  const selectedStylist = mockStylists.find(st => st.id === selectedStylistId) || mockStylists[0];

  const timeslots = ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const booking = addBooking({
      businessId: 'salon',
      businessName: 'MAISON ÉLAN',
      type: selectedService.name,
      date: selectedDate,
      time: selectedTime,
      details: {
        stylist: selectedStylist.name,
        duration: `${selectedService.durationMinutes} mins`,
        price: `₹${selectedService.price.toLocaleString()}`,
        customerName,
        phone: customerPhone,
        email: customerEmail || 'N/A'
      }
    });

    setConfirmedBooking(booking);
    setStep(6);

    try {
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-salon-serif overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#1a1412]/90 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#211b18] text-[#faf7f2] border border-[#d4978a]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#d4978a]/30 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#d4978a] flex items-center justify-center text-[#d4978a]">
                <Scissors className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#d4978a] font-bold block">
                  MAISON ÉLAN — BEAUTY ATELIER
                </span>
                <h3 className="text-xl font-normal text-white">Book Fashion Appointment</h3>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step <= 5 && (
            <div className="flex items-center justify-between text-xs font-sans text-stone-400 px-1">
              <span>Step {step} of 5</span>
              <div className="flex space-x-1.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step ? 'w-8 bg-[#d4978a]' : s < step ? 'w-3 bg-[#d4978a]/40' : 'w-3 bg-stone-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Select Service */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
              <label className="text-xs font-mono uppercase tracking-wider text-[#d4978a] block">
                Select Couture Service
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                {mockSalonServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all ${
                      selectedServiceId === service.id
                        ? 'bg-[#d4978a]/20 border-[#d4978a] text-white'
                        : 'bg-[#181311] border-stone-800 text-stone-300 hover:border-[#d4978a]/40'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-sm text-white">{service.name}</span>
                      <span className="text-xs font-mono font-bold text-[#d4978a]">₹{service.price.toLocaleString()}</span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">{service.description}</p>
                    <span className="text-[10px] font-mono text-[#d4978a] block mt-2">{service.durationMinutes} mins</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all text-xs mt-4"
              >
                <span>Select Stylist</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Choose Stylist */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
              <label className="text-xs font-mono uppercase tracking-wider text-[#d4978a] block">
                Select Lead Stylist
              </label>

              <div className="space-y-3">
                {mockStylists.map(stylist => (
                  <button
                    key={stylist.id}
                    onClick={() => setSelectedStylistId(stylist.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-center space-x-4 transition-all ${
                      selectedStylistId === stylist.id
                        ? 'bg-[#d4978a]/20 border-[#d4978a] text-white'
                        : 'bg-[#181311] border-stone-800 text-stone-300 hover:border-[#d4978a]/40'
                    }`}
                  >
                    <img src={stylist.image} alt={stylist.name} className="w-14 h-14 rounded-xl object-cover" />
                    <div>
                      <h4 className="font-bold text-sm text-white">{stylist.name}</h4>
                      <p className="text-xs text-[#d4978a] font-semibold">{stylist.role}</p>
                      <p className="text-[11px] text-stone-400">{stylist.experienceYears} Yrs Exp • ★ {stylist.rating}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all text-xs"
                >
                  <span>Select Date</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Date */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
              <label className="text-xs font-mono uppercase tracking-wider text-[#d4978a] block">
                Select Date
              </label>

              <div className="grid grid-cols-3 gap-2">
                {['2026-08-29', '2026-08-30', '2026-08-31', '2026-09-01', '2026-09-02', '2026-09-03'].map(date => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-xl border text-center font-mono text-xs transition-all ${
                      selectedDate === date
                        ? 'bg-[#d4978a] border-[#d4978a] text-[#1a1412] font-bold'
                        : 'bg-[#181311] border-stone-800 text-stone-300 hover:border-[#d4978a]/40'
                    }`}
                  >
                    <Calendar className="w-4 h-4 mx-auto mb-1 opacity-70" />
                    <span>{date}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 py-3 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all text-xs"
                >
                  <span>Select Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Time */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 font-sans">
              <label className="text-xs font-mono uppercase tracking-wider text-[#d4978a] block">
                Available Time Window ({selectedDate})
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {timeslots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`p-3.5 rounded-xl border text-center font-mono text-sm transition-all flex items-center justify-center space-x-2 ${
                      selectedTime === slot
                        ? 'bg-[#d4978a] border-[#d4978a] text-[#1a1412] font-bold'
                        : 'bg-[#181311] border-stone-800 text-stone-300 hover:border-[#d4978a]/40'
                    }`}
                  >
                    <Clock className="w-4 h-4 opacity-70" />
                    <span>{slot}</span>
                  </button>
                ))}
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setStep(3)}
                  className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  className="flex-1 py-3 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all text-xs"
                >
                  <span>Customer Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Customer Details Form & Live Summary */}
          {step === 5 && (
            <form onSubmit={handleConfirm} className="space-y-4 font-sans text-xs">
              <div className="p-3.5 rounded-2xl bg-black/50 border border-[#d4978a]/30 space-y-1">
                <span className="text-[10px] text-[#d4978a] uppercase tracking-widest block font-mono">
                  Atelier Summary
                </span>
                <div className="flex justify-between text-stone-300">
                  <span>{selectedService.name} ({selectedService.durationMinutes}m):</span>
                  <span className="font-mono text-[#d4978a] font-bold">₹{selectedService.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Stylist: {selectedStylist.name}</span>
                  <span>{selectedDate} @ {selectedTime}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-stone-400 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sophia Alistair"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#181311] border border-stone-800 text-white placeholder-stone-600 focus:border-[#d4978a] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-stone-400 block mb-1">Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#181311] border border-stone-800 text-white placeholder-stone-600 focus:border-[#d4978a] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-stone-400 block mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="sophia@example.com"
                      value={customerEmail}
                      onChange={e => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#181311] border border-stone-800 text-white placeholder-stone-600 focus:border-[#d4978a] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-bold uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg transition-all text-xs"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 6: Confirmation Ticket */}
          {step === 6 && confirmedBooking && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full border border-[#d4978a] text-[#d4978a] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4978a] font-mono font-bold block">
                  APPOINTMENT REGISTERED
                </span>
                <h3 className="text-2xl font-normal text-white mt-1">We look forward to styling you</h3>
                <p className="text-xs text-stone-400 mt-1 font-sans">Logged in your local session memory.</p>
              </div>

              {/* Ticket Card */}
              <div className="bg-[#181311] border border-[#d4978a]/40 rounded-2xl p-5 text-left space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-mono">Appointment ID</span>
                    <span className="font-mono text-lg font-bold text-[#d4978a]">{confirmedBooking.id}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#d4978a]/20 text-[#d4978a] border border-[#d4978a] text-xs font-semibold">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-stone-400 block">Service</span>
                    <span className="font-bold text-white">{confirmedBooking.type}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Stylist</span>
                    <span className="font-bold text-white">{confirmedBooking.details.stylist}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Date & Time</span>
                    <span className="font-bold text-white">{confirmedBooking.date} @ {confirmedBooking.time}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Total</span>
                    <span className="font-mono font-bold text-[#d4978a] text-sm">{confirmedBooking.details.price}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-sans font-bold text-xs uppercase tracking-widest transition-all"
              >
                Close & Return to Atelier
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
