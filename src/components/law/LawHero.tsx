import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

interface LawHeroProps {
  onOpenConsultation: () => void;
}

export const LawHero: React.FC<LawHeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-screen bg-[#080806] text-[#f5f0eb] pt-36 pb-20 px-4 sm:px-8 font-law-sans overflow-hidden flex items-center">
      {/* Background Architectural Courtroom Photograph with Dark Tone Overlay - NO PARTICLES/GLOWS */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop"
          alt="Courthouse Architecture"
          className="w-full h-full object-cover object-center brightness-[0.2] filter contrast-125 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-[#080806]/85" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl space-y-8 text-left"
        >
          <div className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-[#c5a059] uppercase border-b border-[#c5a059]/40 pb-1">
            <Scale className="w-4 h-4" />
            <span>ESTABLISHED 1999 • PRIVATE LEGAL INSTITUTION</span>
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-normal font-law-serif tracking-tight text-[#f5f0eb] leading-[0.92]">
            Precision
            <br />
            <span className="italic text-[#c5a059]">in every</span>
            <br />
            argument.
          </h1>

          <p className="text-lg sm:text-xl text-[#f5f0eb]/70 font-light max-w-xl leading-relaxed font-serif">
            Institutional counsel for sovereign entities, multinational boards, and cross-border commercial litigation.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-none bg-[#c5a059] hover:bg-[#b08b46] text-[#080806] font-bold text-xs uppercase tracking-widest transition-all font-mono"
            >
              Request Chamber Consultation
            </button>
            <a
              href="#law-practices"
              className="px-8 py-4 rounded-none bg-transparent hover:bg-white/5 border border-[#c5a059]/40 text-[#f5f0eb] font-semibold text-xs uppercase tracking-widest transition-all font-mono"
            >
              Explore Practices
            </a>
          </div>

          {/* Editorial Column Strip */}
          <div className="pt-12 border-t border-[#c5a059]/30 grid grid-cols-2 sm:grid-cols-4 gap-8 font-law-serif">
            <div>
              <span className="text-3xl font-bold text-[#c5a059] block">$4.8B+</span>
              <span className="text-xs text-[#f5f0eb]/60 font-sans uppercase tracking-wider block mt-1">Transactions Structured</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#c5a059] block">320+</span>
              <span className="text-xs text-[#f5f0eb]/60 font-sans uppercase tracking-wider block mt-1">High-Stakes Cases</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#c5a059] block">27 Yrs</span>
              <span className="text-xs text-[#f5f0eb]/60 font-sans uppercase tracking-wider block mt-1">Chamber History</span>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#c5a059] block">94%</span>
              <span className="text-xs text-[#f5f0eb]/60 font-sans uppercase tracking-wider block mt-1">Favorable Outcomes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
