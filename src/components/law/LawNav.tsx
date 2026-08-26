import React, { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

interface LawNavProps {
  onOpenConsultation: () => void;
}

export const LawNav: React.FC<LawNavProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-14 left-0 right-0 z-30 transition-all duration-300 font-law-sans ${
        isScrolled ? 'bg-[#080806] border-b border-[#c5a059]/30 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-bold font-law-serif text-[#f5f0eb] tracking-wider block leading-none">
              BLACKSTONE & CO.
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-mono">
              Legal Advocates & Solicitors
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-mono text-[#f5f0eb]/70">
          <a href="#law-practices" className="hover:text-[#c5a059] transition-colors">Practice Sectors</a>
          <a href="#law-attorneys" className="hover:text-[#c5a059] transition-colors">Senior Partners</a>
          <a href="#law-cases" className="hover:text-[#c5a059] transition-colors">Legal Record</a>
        </div>

        <button
          onClick={onOpenConsultation}
          className="px-5 py-2.5 rounded-none bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold text-xs uppercase tracking-widest font-mono transition-all"
        >
          Request Consultation
        </button>
      </div>
    </nav>
  );
};
