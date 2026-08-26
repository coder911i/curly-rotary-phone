import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Coffee, Car, Sparkles, CheckCircle2, ChevronRight, BedDouble } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBooking } from '../../context/BookingContext';
import { mockRooms } from '../../data/mockHotel';

interface HotelBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const HotelBookingModal: React.FC<HotelBookingModalProps> = ({ isOpen, onClose, initialRoomId }) => {
  const { addBooking } = useBooking();

  const [step, setStep] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(initialRoomId || mockRooms[0].id);
  const [checkInDate, setCheckInDate] = useState('2026-09-12');
  const [nights, setNights] = useState(3);
  const [guests, setGuests] = useState(2);
  const [includeBreakfast, setIncludeBreakfast] = useState(true);
  const [includeAirportTransfer, setIncludeAirportTransfer] = useState(true);
  const [includeSpaPackage, setIncludeSpaPackage] = useState(false);

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const selectedRoom = useMemo(() => {
    return mockRooms.find(r => r.id === selectedRoomId) || mockRooms[0];
  }, [selectedRoomId]);

  // Dynamic Price Calculation
  const roomTotal = selectedRoom.pricePerNight * nights;
  const breakfastTotal = includeBreakfast ? 60 * nights * guests : 0;
  const transferTotal = includeAirportTransfer ? 180 : 0;
  const spaTotal = includeSpaPackage ? 250 * guests : 0;

  const grandTotal = roomTotal + breakfastTotal + transferTotal + spaTotal;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;

    const booking = addBooking({
      businessId: 'hotel',
      businessName: 'THE AURELIA',
      type: `${selectedRoom.name} (${nights} Nights)`,
      date: checkInDate,
      details: {
        location: 'Lake Como, Italy',
        roomType: selectedRoom.name,
        guests,
        nights,
        guestName,
        phone: guestPhone,
        email: guestEmail || 'N/A',
        totalAmount: `€${grandTotal.toLocaleString()}`,
        addons: [
          includeBreakfast ? 'Daily Gourmet Breakfast' : null,
          includeAirportTransfer ? 'Private Airport Transfer' : null,
          includeSpaPackage ? 'Valmont Thermal Spa Package' : null
        ].filter(Boolean).join(', ')
      }
    });

    setConfirmedBooking(booking);
    setStep(4);

    try {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-hotel-serif overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-[#0e0d0b]/90 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#171512] text-[#e6e2dd] border border-[#e5c158]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#e5c158] flex items-center justify-center text-[#e5c158]">
                <BedDouble className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#e5c158] font-bold block">
                  THE AURELIA — LAKE COMO
                </span>
                <h3 className="text-xl font-normal text-white">Luxury Stay Reservation</h3>
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
                      s === step ? 'w-8 bg-[#e5c158]' : s < step ? 'w-3 bg-[#e5c158]/50' : 'w-3 bg-stone-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Select Room & Dates */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#e5c158] block mb-3">
                  Select Residence or Villa
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[260px] overflow-y-auto pr-1">
                  {mockRooms.map(room => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition-all ${
                        selectedRoomId === room.id
                          ? 'bg-[#e5c158]/15 border-[#e5c158] text-white'
                          : 'bg-[#201d19] border-stone-800 text-stone-300 hover:border-[#e5c158]/40'
                      }`}
                    >
                      <img src={room.image} alt={room.name} className="w-14 h-14 rounded-xl object-cover" />
                      <div>
                        <h4 className="font-normal text-base text-white">{room.name}</h4>
                        <span className="text-xs font-mono text-[#e5c158] font-bold">
                          €{room.pricePerNight.toLocaleString()} / night
                        </span>
                        <p className="text-[10px] font-sans text-stone-400">{room.sizeSqm} sqm • Max {room.maxGuests} Guests</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates & Guests Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-sans">
                <div>
                  <label className="text-xs text-stone-400 block mb-1">Check-in Date</label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={e => setCheckInDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#201d19] border border-stone-800 text-white text-xs font-mono focus:border-[#e5c158] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-stone-400 block mb-1">Duration (Nights)</label>
                  <select
                    value={nights}
                    onChange={e => setNights(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#201d19] border border-stone-800 text-white text-xs focus:border-[#e5c158] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 7, 10, 14].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Night' : 'Nights'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-stone-400 block mb-1">Guests</label>
                  <select
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-[#201d19] border border-stone-800 text-white text-xs focus:border-[#e5c158] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 6].map(g => (
                      <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-sans font-bold flex items-center justify-center space-x-2 shadow-lg transition-all text-xs uppercase tracking-widest"
              >
                <span>Tailor Resort Add-ons</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: Add-ons & Dynamic Price Breakdown */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 font-sans">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#e5c158] block mb-3">
                  Tailor Your Luxury Stay
                </label>

                <div className="space-y-3">
                  <div
                    onClick={() => setIncludeBreakfast(!includeBreakfast)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      includeBreakfast
                        ? 'bg-[#e5c158]/15 border-[#e5c158] text-white'
                        : 'bg-[#201d19] border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Coffee className="w-5 h-5 text-[#e5c158]" />
                      <div>
                        <h4 className="font-bold text-sm text-white">Daily Gourmet Breakfast</h4>
                        <p className="text-xs text-stone-400">Organic lakeside buffet & champagne à la carte</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#e5c158]">€60 / day / guest</span>
                  </div>

                  <div
                    onClick={() => setIncludeAirportTransfer(!includeAirportTransfer)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      includeAirportTransfer
                        ? 'bg-[#e5c158]/15 border-[#e5c158] text-white'
                        : 'bg-[#201d19] border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Car className="w-5 h-5 text-[#e5c158]" />
                      <div>
                        <h4 className="font-bold text-sm text-white">Chauffeur Airport Transfer</h4>
                        <p className="text-xs text-stone-400">Private Mercedes-Maybach from Milan Malpensa</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#e5c158]">€180 flat</span>
                  </div>

                  <div
                    onClick={() => setIncludeSpaPackage(!includeSpaPackage)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                      includeSpaPackage
                        ? 'bg-[#e5c158]/15 border-[#e5c158] text-white'
                        : 'bg-[#201d19] border-stone-800 text-stone-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-5 h-5 text-[#e5c158]" />
                      <div>
                        <h4 className="font-bold text-sm text-white">Valmont Thermal Spa Package</h4>
                        <p className="text-xs text-stone-400">Hydrotherapy pass + collagen facial treatment</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#e5c158]">€250 / guest</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Live Price Breakdown */}
              <div className="p-4 rounded-2xl bg-black/60 border border-stone-800 space-y-2 text-xs">
                <span className="text-[10px] uppercase font-mono text-stone-400 block tracking-widest">
                  Real-time Investment Calculation
                </span>
                <div className="flex justify-between text-stone-300">
                  <span>{selectedRoom.name} ({nights} nights @ €{selectedRoom.pricePerNight.toLocaleString()}):</span>
                  <span className="font-mono text-white">€{roomTotal.toLocaleString()}</span>
                </div>
                {includeBreakfast && (
                  <div className="flex justify-between text-stone-300">
                    <span>Gourmet Breakfast ({nights}d x {guests}g):</span>
                    <span className="font-mono text-white">€{breakfastTotal.toLocaleString()}</span>
                  </div>
                )}
                {includeAirportTransfer && (
                  <div className="flex justify-between text-stone-300">
                    <span>Chauffeur Airport Transfer:</span>
                    <span className="font-mono text-white">€{transferTotal.toLocaleString()}</span>
                  </div>
                )}
                {includeSpaPackage && (
                  <div className="flex justify-between text-stone-300">
                    <span>Valmont Spa Experience ({guests} guests):</span>
                    <span className="font-mono text-white">€{spaTotal.toLocaleString()}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-stone-800 flex justify-between items-center text-sm font-bold text-white">
                  <span>Total Investment:</span>
                  <span className="font-mono text-xl text-[#e5c158]">€{grandTotal.toLocaleString()}</span>
                </div>
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
                  className="flex-1 py-3.5 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-bold flex items-center justify-center space-x-2 shadow-lg transition-all text-xs uppercase tracking-widest"
                >
                  <span>Guest Information</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Guest Details Form */}
          {step === 3 && (
            <form onSubmit={handleConfirm} className="space-y-4 font-sans text-xs">
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-stone-400 block mb-1">Primary Guest Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Lady Eleanor Vance"
                      value={guestName}
                      onChange={e => setGuestName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#201d19] border border-stone-800 text-white placeholder-stone-600 focus:border-[#e5c158] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-stone-400 block mb-1">Direct Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 20 7946 0912"
                      value={guestPhone}
                      onChange={e => setGuestPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#201d19] border border-stone-800 text-white placeholder-stone-600 focus:border-[#e5c158] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-stone-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="eleanor@vance.co.uk"
                    value={guestEmail}
                    onChange={e => setGuestEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201d19] border border-stone-800 text-white placeholder-stone-600 focus:border-[#e5c158] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-stone-400 block mb-1">Concierge Preferences</label>
                  <textarea
                    rows={2}
                    placeholder="Helipad arrival timing, dietary preferences..."
                    value={specialRequests}
                    onChange={e => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201d19] border border-stone-800 text-white placeholder-stone-600 focus:border-[#e5c158] focus:outline-none"
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
                  className="flex-1 py-3.5 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-bold flex items-center justify-center space-x-2 shadow-lg transition-all text-xs uppercase tracking-widest"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Stay (€{grandTotal.toLocaleString()})</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Confirmation Pass */}
          {step === 4 && confirmedBooking && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full border border-[#e5c158] text-[#e5c158] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#e5c158] font-mono font-bold block">
                  YOUR STAY IS GUARANTEED
                </span>
                <h3 className="text-3xl font-normal text-white mt-1">Welcome to Lake Como</h3>
                <p className="text-xs text-stone-400 mt-1 font-sans">A luxury reservation voucher has been logged.</p>
              </div>

              {/* Luxury Pass Card */}
              <div className="bg-[#201d19] border border-[#e5c158]/40 rounded-2xl p-6 text-left space-y-4 font-sans text-xs">
                <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-mono">Reservation ID</span>
                    <span className="font-mono text-xl font-bold text-[#e5c158]">{confirmedBooking.id}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#e5c158]/20 text-[#e5c158] border border-[#e5c158] text-xs font-bold">
                    SUITE GUARANTEED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-stone-400 block">Accommodations</span>
                    <span className="font-bold text-white">{confirmedBooking.details.roomType}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Arrival Date</span>
                    <span className="font-bold text-white">{confirmedBooking.date}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Party & Duration</span>
                    <span className="font-bold text-white">{confirmedBooking.details.guests} Guests • {confirmedBooking.details.nights} Nights</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Total Investment</span>
                    <span className="font-mono font-bold text-[#e5c158] text-sm">{confirmedBooking.details.totalAmount}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-sans font-bold text-xs uppercase tracking-widest transition-all"
              >
                Close & Return to Sanctuary
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
