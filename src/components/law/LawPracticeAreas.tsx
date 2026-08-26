import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { mockPracticeAreas } from '../../data/mockLaw';

interface LawPracticeAreasProps {
  onSelectPractice: (title: string) => void;
}

export const LawPracticeAreas: React.FC<LawPracticeAreasProps> = ({ onSelectPractice }) => {
  return (
    <section id="law-practices" className="py-24 px-4 sm:px-8 bg-[#0d0d0a] text-[#f5f0eb] font-law-sans border-t border-[#c5a059]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/30 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
              CHAPTER 01 — LEGAL SECTORS
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal font-law-serif tracking-tight">
              Institutional Practice Areas
            </h2>
          </div>
          <p className="text-sm text-[#f5f0eb]/70 max-w-md font-serif italic">
            Formidable representation in international arbitration chambers, supreme benches, and cross-border regulatory hearings.
          </p>
        </div>

        {/* Editorial Journal Column Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockPracticeAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onSelectPractice(area.title)}
              className="group cursor-pointer p-6 bg-[#12120e] border border-[#c5a059]/30 hover:border-[#c5a059] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#c5a059]/20 pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
                    SECTOR 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-[#f5f0eb]/50">
                    {area.casesHandled}+ VERDICTS
                  </span>
                </div>

                <h3 className="text-2xl font-normal font-law-serif text-white group-hover:text-[#c5a059] transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs text-[#f5f0eb]/70 font-light leading-relaxed font-serif">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#c5a059]">
                <span>Retain Lead Counsel</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
