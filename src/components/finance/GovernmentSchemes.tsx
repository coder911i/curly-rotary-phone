import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  ShieldAlert
} from 'lucide-react';
import { GOVERNMENT_SCHEMES, COMPANY_INFO } from '../../data/financeData';
import type { GovernmentScheme } from '../../types/finance';

interface GovernmentSchemesProps {
  onOpenLeadModal: (initialService?: string) => void;
}

export const GovernmentSchemes: React.FC<GovernmentSchemesProps> = ({ onOpenLeadModal }) => {
  const [activeSector, setActiveSector] = useState<'all' | 'msme' | 'startup' | 'women' | 'education' | 'housing' | 'agriculture'>('all');

  const filteredSchemes = activeSector === 'all'
    ? GOVERNMENT_SCHEMES
    : GOVERNMENT_SCHEMES.filter(s => s.sector === activeSector);

  const handleWhatsAppScheme = (scheme: GovernmentScheme) => {
    const text = `Hello Valiant Capital, I want to inquire about the government subsidy under ${scheme.name} (${scheme.acronym}). Please guide me on eligibility and DPR requirements.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="government-schemes" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Government Capital Subsidies &amp; Initiatives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Explore Government <br />
            <span className="gold-gradient-text">Financial Opportunities &amp; Subsidies</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Unlock non-repayable central &amp; state capital subsidies up to 35%, interest subvention, and collateral-free guarantees for your business and personal goals.
          </p>

          {/* Sector Category Filters */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: 'All Schemes' },
              { id: 'msme', label: 'MSME & Industry' },
              { id: 'startup', label: 'Startups & Micro' },
              { id: 'women', label: 'Women & Special Tiers' },
              { id: 'housing', label: 'Housing Subsidies' },
              { id: 'education', label: 'Education Waivers' },
              { id: 'agriculture', label: 'Agri & Logistics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSector(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeSector === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSchemes.map((scheme, idx) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-between group glass-panel-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all"></div>

              <div>
                {/* Header with Acronym & Subsidy Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs">
                    {scheme.acronym}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold text-right">
                    {scheme.subsidyRate}
                  </span>
                </div>

                {/* Scheme Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {scheme.name}
                </h3>

                {/* Overview */}
                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed font-light">
                  {scheme.overview}
                </p>

                {/* Max Funding & Nodal Agency */}
                <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px] mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">Max Loan/Cap:</span>
                    <span className="font-bold text-amber-400 font-mono">{scheme.maxFunding}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-mono">Nodal Agency:</span>
                    <span className="font-medium text-slate-300 truncate max-w-[170px] text-right font-mono">{scheme.nodalAgency}</span>
                  </div>
                </div>

                {/* Top Benefits Checklist */}
                <div className="space-y-1.5 mb-6">
                  {scheme.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  onClick={() => onOpenLeadModal(`Government Scheme: ${scheme.acronym || scheme.name}`)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:brightness-110 shadow-md transition-all cursor-pointer"
                >
                  <span>Ask About Scheme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsAppScheme(scheme)}
                  className="p-2.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 transition-all cursor-pointer"
                  title="WhatsApp Subsidy Inquiry"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-300 font-semibold">Government Scheme Disclaimer:</strong> Scheme availability, sanction limits, interest subventions, and capital subsidy disbursement are governed strictly by the respective Central/State Nodal Agencies, Ministry guidelines, budgetary allocations, and sanctioning bank credit norms. Valiant Capital acts as an authorized facilitation consultant providing DPR preparation, application filing, and institutional liaison.
          </p>
        </div>

      </div>
    </section>
  );
};
