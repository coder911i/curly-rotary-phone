import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookmarkCheck, ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import type { ViewState } from '../../types';

const SHOWCASE_ITEMS: { id: ViewState; label: string; tag: string }[] = [
  { id: 'showcase', label: 'Main Showcase', tag: '00 — Overview' },
  { id: 'doctor', label: 'VÉRA MEDICAL', tag: '01 — Healthcare' },
  { id: 'law', label: 'BLACKSTONE & CO.', tag: '02 — Law Firm' },
  { id: 'hotel', label: 'THE AURELIA', tag: '03 — Luxury Hotel' },
  { id: 'salon', label: 'MAISON ÉLAN', tag: '04 — Salon Studio' },
  { id: 'restaurant', label: 'NOIR', tag: '05 — Fine Dining' }
];

export const GlobalTopBar: React.FC = () => {
  const { activeView, setActiveView, bookings, setIsBookingsDrawerOpen } = useBooking();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const currentItem = SHOWCASE_ITEMS.find(item => item.id === activeView) || SHOWCASE_ITEMS[0];

  const handleSelectView = (view: ViewState) => {
    setActiveView(view);
    setIsDropdownOpen(false);
    setIsMobileDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Back to Showcase or Title Dropdown */}
        <div className="relative">
          {activeView !== 'showcase' ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleSelectView('showcase')}
                className="group px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/15 text-white text-xs font-medium tracking-wide flex items-center space-x-2 transition-all shadow-lg hover:border-white/30"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Showcase</span>
              </button>

              {/* Quick Switcher dropdown pill */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/15 text-white/90 text-xs font-medium flex items-center space-x-1.5 transition-all"
                >
                  <span className="text-amber-400 font-mono text-[10px]">{currentItem.tag.split(' ')[0]}</span>
                  <span className="font-semibold">{currentItem.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-56 py-2 rounded-2xl bg-[#0f0f14]/95 backdrop-blur-2xl border border-white/15 shadow-2xl text-white z-50 space-y-0.5"
                    >
                      {SHOWCASE_ITEMS.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleSelectView(item.id)}
                          className={`w-full px-4 py-2 text-left text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                            activeView === item.id ? 'bg-amber-400/10 text-amber-400 font-semibold' : 'text-white/80'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] opacity-40 font-mono">{item.tag}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white/80 text-xs flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span className="font-medium tracking-wide">FIVE EXPERIENCES</span>
            </div>
          )}
        </div>

        {/* Right: Desktop Nav & Bookings Drawer Toggle */}
        <div className="flex items-center space-x-3">
          {/* Desktop Showcase quick links */}
          <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-black/60 backdrop-blur-xl border border-white/15">
            {SHOWCASE_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => handleSelectView(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeView === item.id
                    ? 'bg-white text-black shadow-md font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.id === 'showcase' ? 'Overview' : item.label.split(' ')[0]}
              </button>
            ))}
          </nav>

          {/* Bookings Drawer Button */}
          <button
            onClick={() => setIsBookingsDrawerOpen(true)}
            className="relative px-3.5 py-2 rounded-full bg-amber-400/10 hover:bg-amber-400/20 backdrop-blur-xl border border-amber-400/30 text-amber-300 text-xs font-medium flex items-center space-x-2 transition-all group"
          >
            <BookmarkCheck className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">My Bookings</span>
            {bookings.length > 0 && (
              <span className="px-1.5 py-0.2 bg-amber-400 text-black font-bold text-[10px] rounded-full">
                {bookings.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="md:hidden p-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#08080a] text-white z-50 p-6 flex flex-col justify-between pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-mono">
                Five Experiences — Navigation
              </span>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 my-auto">
              {SHOWCASE_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => handleSelectView(item.id)}
                  className={`w-full p-4 rounded-2xl text-left border flex items-center justify-between transition-all ${
                    activeView === item.id
                      ? 'bg-amber-400/10 border-amber-400 text-amber-400 font-bold'
                      : 'bg-white/[0.03] border-white/10 text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono opacity-50 block">{item.tag}</span>
                    <span className="text-xl font-semibold tracking-tight">{item.label}</span>
                  </div>
                  <span className="text-xs opacity-40">Explore →</span>
                </motion.button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 text-center text-xs text-white/40">
              Select any website to jump directly into the full interactive experience.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
