import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { mockCaseStudies } from '../../data/mockLaw';

export const LawCaseStudies: React.FC = () => {
  return (
    <section id="law-cases" className="py-24 px-4 sm:px-8 bg-[#0d0d0a] text-[#f5f0eb] font-law-sans border-t border-[#c5a059]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c5a059]/30 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c5a059]">
              CHAPTER 03 — CASE RECORD
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal font-law-serif">Transformative Verdicts</h2>
          </div>
          <p className="text-sm text-[#f5f0eb]/70 max-w-md font-serif italic">
            Documented outcomes from cross-border commercial litigation and high-stakes arbitration hearings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockCaseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-8 bg-[#12120e] border border-[#c5a059]/30 flex flex-col justify-between space-y-6 group hover:border-[#c5a059] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#c5a059]/20 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                    {cs.clientCategory}
                  </span>
                  <span className="text-2xl font-normal font-law-serif text-[#c5a059]">{cs.value}</span>
                </div>

                <h3 className="text-2xl font-normal font-law-serif text-white group-hover:text-[#c5a059] transition-colors">
                  {cs.title}
                </h3>

                <p className="text-xs text-[#f5f0eb]/70 font-light leading-relaxed font-serif">
                  {cs.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 space-y-1">
                <span className="text-[10px] text-[#c5a059] uppercase tracking-widest block font-mono">Case Outcome</span>
                <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{cs.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
