import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { mockAttorneys } from '../../data/mockLaw';

interface LawAttorneysProps {
  onSelectAttorney: (attorneyName: string) => void;
}

export const LawAttorneys: React.FC<LawAttorneysProps> = ({ onSelectAttorney }) => {
  return (
    <section id="law-attorneys" className="py-24 px-4 sm:px-8 bg-[#080806] text-[#f5f0eb] font-law-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
            CHAPTER 02 — CHAMBER PARTNERS
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal font-law-serif">Senior Legal Masters</h2>
          <p className="text-sm text-[#f5f0eb]/70 font-serif italic">
            Advising supreme courts, international tribunals, and sovereign boards across global jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockAttorneys.map((attorney, i) => (
            <motion.div
              key={attorney.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-6 bg-[#10100c] border border-[#c5a059]/30 hover:border-[#c5a059] transition-all space-y-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="overflow-hidden h-72 border border-[#c5a059]/20 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-normal font-law-serif text-white group-hover:text-[#c5a059] transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-xs text-[#c5a059] font-mono font-semibold uppercase tracking-wider mt-0.5">
                    {attorney.role}
                  </p>
                </div>

                <p className="text-xs text-[#f5f0eb]/70 font-light leading-relaxed font-serif">
                  {attorney.bio}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#c5a059]/20 text-xs text-[#f5f0eb]/80 font-mono">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{attorney.education}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Briefcase className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{attorney.specialization} ({attorney.experience} Yrs)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectAttorney(attorney.name)}
                className="w-full py-3 bg-[#c5a059]/10 hover:bg-[#c5a059] border border-[#c5a059]/40 text-[#c5a059] hover:text-[#080806] font-bold text-xs uppercase tracking-widest font-mono transition-all"
              >
                Request Private Inquiry
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
