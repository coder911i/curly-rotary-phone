import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Trash2, CheckCircle2, Building2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export const BookingsDrawer: React.FC = () => {
  const { bookings, isBookingsDrawerOpen, setIsBookingsDrawerOpen, cancelBooking } = useBooking();

  return (
    <AnimatePresence>
      {isBookingsDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsBookingsDrawerOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0f0f14] border-l border-white/10 text-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">My Active Bookings</h3>
                  <p className="text-xs text-white/50">{bookings.length} reservations across demos</p>
                </div>
              </div>
              <button
                onClick={() => setIsBookingsDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {bookings.length === 0 ? (
                <div className="text-center py-16 text-white/40 space-y-3">
                  <Building2 className="w-12 h-12 mx-auto stroke-1 text-white/20" />
                  <p className="text-sm">No active reservations yet.</p>
                  <p className="text-xs text-white/30">Book an appointment or reservation in any of the 5 demo websites!</p>
                </div>
              ) : (
                bookings.map(booking => (
                  <motion.div
                    key={booking.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 transition-colors space-y-3 relative group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                          {booking.businessName}
                        </span>
                        <h4 className="text-base font-medium mt-1 text-white">{booking.type}</h4>
                      </div>
                      <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded">
                        {booking.id}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-white/70 pt-1">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-white/40" />
                        <span>{booking.date}</span>
                      </div>
                      {booking.time && (
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-3.5 h-3.5 text-white/40" />
                          <span>{booking.time}</span>
                        </div>
                      )}
                    </div>

                    {/* Details breakdown */}
                    <div className="text-xs text-white/50 bg-black/30 p-2.5 rounded-lg space-y-1">
                      {Object.entries(booking.details).map(([key, val]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize text-white/40">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="text-white/80 font-medium">{String(val)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                      <span className="flex items-center text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Confirmed
                      </span>
                      <button
                        onClick={() => cancelBooking(booking.id)}
                        className="text-red-400/70 hover:text-red-400 flex items-center space-x-1 hover:underline transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancel Demo</span>
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-black/40 text-center text-xs text-white/40">
              State is saved locally in browser memory (`localStorage`).
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
