import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';

interface SalonNavProps {
  onOpenBooking: () => void;
}

export const SalonNav: React.FC<SalonNavProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-14 left-0 right-0 z-30 transition-all duration-300 font-salon-serif ${
        isScrolled ? 'bg-[#1a1412]/95 backdrop-blur-md border-b border-[#d4978a]/30 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-[#d4978a] flex items-center justify-center text-[#d4978a]">
            <Scissors className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xl font-normal text-white tracking-widest block leading-none">
              MAISON ÉLAN
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#d4978a] font-mono font-semibold">
              HAUTE BEAUTÉ ATELIER
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs font-sans uppercase tracking-widest text-[#faf7f2]/80">
          <a href="#salon-services" className="hover:text-[#d4978a] transition-colors">Couture Menu</a>
          <a href="#salon-stylists" className="hover:text-[#d4978a] transition-colors">Master Artists</a>
          <a href="#salon-philosophy" className="hover:text-[#d4978a] transition-colors">Philosophy</a>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-full bg-[#d4978a] hover:bg-[#c28376] text-[#1a1412] font-sans font-bold text-xs uppercase tracking-widest transition-all"
        >
          Book Atelier Session
        </button>
      </div>
    </nav>
  );
};
