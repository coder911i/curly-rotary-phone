import React, { useState, useEffect } from 'react';
import { BedDouble } from 'lucide-react';

interface HotelNavProps {
  onOpenBooking: () => void;
}

export const HotelNav: React.FC<HotelNavProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-14 left-0 right-0 z-30 transition-all duration-300 font-hotel-serif ${
        isScrolled ? 'bg-[#141210]/95 backdrop-blur-md border-b border-stone-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-[#e5c158] flex items-center justify-center text-[#e5c158]">
            <BedDouble className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xl font-normal text-white tracking-widest block leading-none">
              THE AURELIA
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#e5c158] font-sans font-semibold">
              LAKE COMO • ITALY
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-sans text-[#e6e2dd]/80">
          <a href="#hotel-rooms" className="hover:text-[#e5c158] transition-colors">Residences</a>
          <a href="#hotel-exp" className="hover:text-[#e5c158] transition-colors">Experiences</a>
          <a href="#hotel-dining" className="hover:text-[#e5c158] transition-colors">Gastronomy</a>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-sans font-bold text-xs uppercase tracking-widest transition-all"
        >
          Check Availability
        </button>
      </div>
    </nav>
  );
};
