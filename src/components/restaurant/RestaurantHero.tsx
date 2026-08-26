import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';

interface RestaurantHeroProps {
  onOpenReservation: () => void;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-screen bg-[#050507] text-[#e6c88b] font-restaurant-serif pt-36 pb-20 px-4 sm:px-8 overflow-hidden flex items-center">
      {/* Full-Screen Dark Cinematic Vignette Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
          alt="NOIR Culinary Artistry"
          className="w-full h-full object-cover object-center brightness-[0.25] filter contrast-125 saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent to-[#050507]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#c87d28] border-b border-[#c87d28]/30 pb-1">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>MODERN AVANT-GARDE CUISINE • NEW DELHI</span>
          </div>

          <h1 className="text-7xl sm:text-9xl font-normal tracking-tight text-white leading-[0.88] uppercase">
            NOIR
            <br />
            <span className="italic text-[#c87d28] lowercase font-light">an evening</span>
            <br />
            worth remembering.
          </h1>

          <p className="text-lg sm:text-xl text-[#e6c88b]/80 font-sans font-light max-w-xl leading-relaxed">
            Avant-garde culinary artistry guided by Chef Kabir Malhotra. Fusing sacred Indian botanicals with Nordic smoking and wild mushroom truffle gelée.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 font-sans">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 rounded-full bg-[#c87d28] hover:bg-[#b06b1f] text-black font-bold text-xs uppercase tracking-widest shadow-2xl transition-all"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
            <a
              href="#noir-menu"
              className="px-8 py-4 rounded-full bg-black/60 hover:bg-black/80 border border-[#c87d28]/40 text-[#e6c88b] font-semibold text-xs uppercase tracking-widest transition-all"
            >
              Explore Tasting Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
