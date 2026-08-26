import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle2, UtensilsCrossed, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBooking } from '../../context/BookingContext';
import type { DiningTable } from '../../types';
import { mockTables } from '../../data/mockRestaurant';
import { InteractiveFloorPlan } from './InteractiveFloorPlan';

interface RestaurantReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RestaurantReservationModal: React.FC<RestaurantReservationModalProps> = ({ isOpen, onClose }) => {
  const { addBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [selectedTable, setSelectedTable] = useState<DiningTable>(mockTables[0]);
  const [reservationDate, setReservationDate] = useState('2026-08-29');
  const [reservationTime, setReservationTime] = useState('08:00 PM');
  const [guests, setGuests] = useState(4);
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const timeslots = ['07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'];

  const handleTableSelect = (table: DiningTable) => {
    setSelectedTable(table);
    setGuests(table.seats);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !phone) return;

    const booking = addBooking({
      businessId: 'restaurant',
      businessName: 'NOIR',
      type: `Table 0${selectedTable.number} (${selectedTable.zone})`,
      date: reservationDate,
      time: reservationTime,
      details: {
        location: 'NOIR, Central Chanakyapuri, New Delhi',
        tableNumber: `Table 0${selectedTable.number}`,
        zone: selectedTable.zone,
        guests,
        guestName,
        phone,
        email: email || 'N/A',
        occasion: occasion || 'Fine Dining Evening'
      }
    });

    setConfirmedBooking(booking);
    setStep(4);

    try {
      confetti({ particleCount: 85, spread: 75, origin: { y: 0.6 } });
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-restaurant-serif overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#050507]/90 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0b0b0f] text-[#e6c88b] border border-[#c87d28]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#c87d28]/30 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#c87d28] flex items-center justify-center text-[#c87d28]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#c87d28] font-bold block">
                  NOIR — NEW DELHI
                </span>
                <h3 className="text-xl font-normal text-white">Reserve Dining Table</h3>
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step <= 3 && (
            <div className="flex items-center justify-between text-xs font-sans text-stone-400 px-1">
              <span>Step {step} of 3</span>
              <div className="flex space-x-1.5">
                {[1, 2, 3].map(s => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      s === step ? 'w-8 bg-[#c87d28]' : s < step ? 'w-3 bg-[#c87d28]/40' : 'w-3 bg-stone-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Interactive Floor Plan Table Selection */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <InteractiveFloorPlan
                selectedTableId={selectedTable.id}
                onSelectTable={handleTableSelect}
              />

              <div className="p-4 rounded-2xl bg-[#121218] border border-[#c87d28]/30 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
                <div>
                  <span className="text-[#c87d28] font-mono block">Selected Table:</span>
                  <span className="font-bold text-base text-white font-serif">
                    Table 0{selectedTable.number} ({selectedTable.zone})
                  </span>
                </div>
                <div>
                  <span className="text-[#c87d28] font-mono block">Table Capacity:</span>
                  <span className="font-bold text-base text-white font-serif">
                    {selectedTable.seats} Guests
                  </span>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-full bg-[#c87d28] hover:bg-[#b06b1f] text-black font-sans font-bold flex items-center justify-center space-x-2 shadow-lg transition-all text-xs uppercase tracking-widest"
              >
                <span>Select Date & Time Slot</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Date & Time Picker */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#c87d28] block mb-2">
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    value={reservationDate}
                    onChange={e => setReservationDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121218] border border-stone-800 text-white text-xs font-mono focus:border-[#c87d28] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[#c87d28] block mb-2">
                    Guest Count
                  </label>
                  <select
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#121218] border border-stone-800 text-white text-xs focus:border-[#c87d28] focus:outline-none"
                  >
                    {[1, 2, 4, 6, 8, 10].map(g => (
                      <option key={g} value={g}>{g} Guests</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#c87d28] block mb-2">
                  Select Seating Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeslots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setReservationTime(slot)}
                      className={`p-3 rounded-xl border text-center font-mono text-sm transition-all flex items-center justify-center space-x-2 ${
                        reservationTime === slot
                          ? 'bg-[#c87d28] border-[#c87d28] text-black font-bold'
                          : 'bg-[#121218] border-stone-800 text-white hover:border-[#c87d28]/40'
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
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 rounded-full bg-[#c87d28] hover:bg-[#b06b1f] text-black font-sans font-bold flex items-center justify-center space-x-2 shadow-lg transition-all text-xs uppercase tracking-widest"
                >
                  <span>Guest Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Guest Form */}
          {step === 3 && (
            <form onSubmit={handleConfirm} className="space-y-4 font-sans text-xs">
              <div className="space-y-3">
                <div>
                  <label className="text-stone-400 block mb-1">Guest Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Kabir & Partner"
                    value={guestName}
                    onChange={e => setGuestName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121218] border border-stone-800 text-white placeholder-stone-600 focus:border-[#c87d28] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-stone-400 block mb-1">Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98100 12345"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121218] border border-stone-800 text-white placeholder-stone-600 focus:border-[#c87d28] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-stone-400 block mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="kabir@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121218] border border-stone-800 text-white placeholder-stone-600 focus:border-[#c87d28] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-stone-400 block mb-1">Special Occasion or Sommelier Requests</label>
                  <input
                    type="text"
                    placeholder="Anniversary Dinner, Truffle Allergy..."
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121218] border border-stone-800 text-white placeholder-stone-600 focus:border-[#c87d28] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 rounded-full bg-[#c87d28] hover:bg-[#b06b1f] text-black font-sans font-bold flex items-center justify-center space-x-2 shadow-lg transition-all text-xs uppercase tracking-widest"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Table Reservation</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Ticket */}
          {step === 4 && confirmedBooking && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full border border-[#c87d28] text-[#c87d28] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#c87d28] font-mono font-bold block">
                  TABLE RESERVED
                </span>
                <h3 className="text-3xl font-normal text-white mt-1">An Evening Worth Remembering</h3>
                <p className="text-xs text-stone-400 mt-1 font-sans">Reservation logged in session local storage.</p>
              </div>

              {/* Ticket Card */}
              <div className="bg-[#121218] border border-[#c87d28]/40 rounded-2xl p-5 text-left space-y-3 font-sans text-xs">
                <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-mono">Reservation ID</span>
                    <span className="font-mono text-xl font-bold text-[#c87d28]">{confirmedBooking.id}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#c87d28]/20 text-[#c87d28] border border-[#c87d28] text-xs font-semibold">
                    Confirmed
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-stone-400 block">Table & Zone</span>
                    <span className="font-bold text-white">{confirmedBooking.details.tableNumber} ({confirmedBooking.details.zone})</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Date & Time</span>
                    <span className="font-bold text-white">{confirmedBooking.date} @ {confirmedBooking.time}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Party Size</span>
                    <span className="font-bold text-white">{confirmedBooking.details.guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Occasion</span>
                    <span className="font-bold text-white">{confirmedBooking.details.occasion}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 rounded-full bg-[#c87d28] hover:bg-[#b06b1f] text-black font-sans font-bold text-xs uppercase tracking-widest transition-all"
              >
                Close & Return to NOIR Dining Experience
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
