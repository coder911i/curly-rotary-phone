import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SalonHeroProps {
  onOpenBooking: () => void;
}

export const SalonHero: React.FC<SalonHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen bg-[#1a1412] text-[#faf7f2] font-salon-serif pt-36 pb-20 px-4 sm:px-8 overflow-hidden flex items-center">
      {/* Overlapping Asymmetric Fashion Photography Grid Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1600&auto=format&fit=crop"
          alt="Maison Élan Editorial"
          className="w-full h-full object-cover object-right brightness-[0.35] filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1412] via-[#1a1412]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1412] via-[#1a1412]/80 to-transparent" />
      </div>

      {/* Decorative Vertical Typography Stamp */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-xs font-mono tracking-widest text-[#d4978a]/40 writing-mode-vertical uppercase">
        PARIS • TOKYO • NEW DELHI • MAISON ÉLAN ATELIER
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#d4978a]/20 border border-[#d4978a]/40 text-[#d4978a] font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d4978a]" />
            <span className="uppercase tracking-widest font-semibold">HAUTE BEAUTÉ & SCULPTING</span>
          </div>

          {/* Overlapping Fashion Headline */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight text-white leading-[0.88] uppercase">
            Your best look,
            <br />
            <span className="italic text-[#d4978a] lowercase font-light">beautifully</span>
            <br />
            considered.
          </h1>

          <p className="text-lg sm:text-xl text-[#faf7f2]/80 font-sans font-light max-w-xl leading-relaxed">
            High-fashion hair design, Parisian balayage, and lymphatic skincare rituals. Thoughtfully tailored to reveal individual radiance.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 font-sans">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-bold text-xs uppercase tracking-widest shadow-2xl transition-all transform hover:scale-105"
            >
              <span>Book Atelier Session</span>
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
            <a
              href="#salon-services"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-[#d4978a]/40 text-[#faf7f2] font-semibold text-xs uppercase tracking-widest transition-all"
            >
              Explore Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
