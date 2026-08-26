import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HotelHeroProps {
  onOpenBooking: () => void;
}

export const HotelHero: React.FC<HotelHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative h-screen w-full bg-[#141210] text-[#e6e2dd] font-hotel-serif overflow-hidden flex flex-col justify-between p-8 sm:p-12">
      {/* Full Viewport Cinematic Background Image - Minimal UI Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
          alt="Lake Como Sanctuary"
          className="w-full h-full object-cover object-center brightness-[0.45] filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-[#141210]/40" />
      </div>

      {/* Top Left Title */}
      <div className="relative z-10 pt-16 flex justify-between items-start">
        <div className="space-y-1">
          <span className="text-xs uppercase font-mono tracking-widest text-[#e5c158] block">
            PRIVATE RETREAT • LAKE COMO, ITALY
          </span>
          <h2 className="text-2xl font-bold tracking-wider text-white">THE AURELIA</h2>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
        >
          Reserve Stay
        </button>
      </div>

      {/* Bottom Left Huge Campaign Typography */}
      <div className="relative z-10 max-w-4xl space-y-6 mb-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-normal leading-[0.9] text-white">
            An Italian summer,
            <br />
            <span className="italic font-light text-[#e5c158]">without an ending.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#e6e2dd]/80 font-light max-w-xl font-sans leading-relaxed">
            Secluded botanical terraces, personal Riva speedboats, and 18th-century frescoes overlooking Lake Como.
          </p>

          <div className="pt-4 flex items-center space-x-6">
            <button
              onClick={onOpenBooking}
              className="group text-sm font-sans uppercase tracking-widest text-white hover:text-[#e5c158] flex items-center space-x-2 transition-colors border-b border-white/40 pb-1"
            >
              <span>Explore Suites & Villas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
