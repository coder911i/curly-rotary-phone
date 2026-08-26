import React, { useState, useEffect } from 'react';
import { HeartPulse } from 'lucide-react';

interface DoctorNavProps {
  onOpenBooking: () => void;
}

export const DoctorNav: React.FC<DoctorNavProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-14 left-0 right-0 z-30 transition-all duration-300 font-doctor ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
            <HeartPulse className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-extrabold text-slate-950 tracking-tight block leading-none">
              VÉRA MEDICAL
            </span>
            <span className="text-[10px] uppercase tracking-widest text-blue-600 font-mono font-semibold">
              Precision Health Lab
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs font-semibold text-slate-600">
          <a href="#doc-about" className="hover:text-blue-600 transition-colors">Lab Overview</a>
          <a href="#doc-treatments" className="hover:text-blue-600 transition-colors">Treatments</a>
          <a href="#doc-profile" className="hover:text-blue-600 transition-colors">Dr. Mehra</a>
          <a href="#doc-stats" className="hover:text-blue-600 transition-colors">Metrics</a>
          <a href="#doc-gallery" className="hover:text-blue-600 transition-colors">Facilities</a>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wide shadow-md shadow-blue-600/20 transition-all"
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
};
