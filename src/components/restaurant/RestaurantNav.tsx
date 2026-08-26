import React, { useState, useEffect } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface RestaurantNavProps {
  onOpenReservation: () => void;
}

export const RestaurantNav: React.FC<RestaurantNavProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-14 left-0 right-0 z-30 transition-all duration-300 font-restaurant-serif ${
        isScrolled ? 'bg-[#050507]/95 backdrop-blur-md border-b border-[#c87d28]/30 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-[#c87d28] flex items-center justify-center text-[#c87d28]">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <div>
            <span className="text-2xl font-normal text-white tracking-widest block leading-none">
              NOIR
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#c87d28] font-mono">
              New Delhi • Michelin Heritage
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs font-sans uppercase tracking-widest text-[#e6c88b]/80">
          <a href="#noir-chef" className="hover:text-[#c87d28] transition-colors">Chef Kabir</a>
          <a href="#noir-menu" className="hover:text-[#c87d28] transition-colors">Tasting Menu</a>
          <a href="#noir-floor" className="hover:text-[#c87d28] transition-colors">Floor Plan</a>
        </div>

        <button
          onClick={onOpenReservation}
          className="px-5 py-2.5 rounded-full bg-[#c87d28] hover:bg-[#b06b1f] text-black font-sans font-bold text-xs uppercase tracking-widest transition-all"
        >
          Reserve a Table
        </button>
      </div>
    </nav>
  );
};
