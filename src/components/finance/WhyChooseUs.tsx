import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Landmark, 
  Award, 
  Eye, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Check, 
  X as CloseIcon, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, COMPANY_INFO } from '../../data/financeData';

interface WhyChooseUsProps {
  onOpenLeadModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenLeadModal }) => {
  const [activeTab, setActiveTab] = useState<'grid' | 'comparison'>('grid');

  const getPointIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-amber-400" };
    switch (iconName) {
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      default: return <TrendingUp {...props} />;
    }
  };

  const comparisonRows = [
    {
      feature: 'Bank Options & Selection',
      valiant: '45+ Scheduled Banks & NBFCs Auctioned',
      bankDirect: 'Restricted to 1 Single Bank Catalog',
      broker: 'Limited to 2-3 Local Agent Contacts'
    },
    {
      feature: 'Interest Rate Optimization',
      valiant: 'Guaranteed Lowest Rate Comparison Matrix',
      bankDirect: 'Fixed Standard Shelf Pricing',
      broker: 'Unvetted / Variable Surcharges'
    },
    {
      feature: 'Underwriting & Eligibility Structuring',
      valiant: 'Specialized CA & Credit Committee Structuring',
      bankDirect: 'Rigid Rule-Based Auto-Reject',
      broker: 'No Technical Financial Knowledge'
    },
    {
      feature: 'Government Subsidy (PMEGP / Mudra / CLSS)',
      valiant: 'Dedicated DPR & Nodal Portal Liaison Desk',
      bankDirect: 'Rarely Handled / Bureaucratic Delays',
      broker: 'Zero Subsidy Expertise'
    },
    {
      feature: 'Doorstep Documentation & Legal Check',
      valiant: '100% Dedicated Legal & Technical Team',
      bankDirect: 'Customer Must Visit Multiple Branches',
      broker: 'Document Safety Risk'
    },
    {
      feature: 'Advisory Charges & Transparency',
      valiant: '100% Zero Upfront Advisory Fee',
      bankDirect: 'Mandatory Non-Refundable Processing Fee',
      broker: 'High Hidden Commissions & Cuts'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Enterprise Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Why Discerning Borrowers Choose <br />
            <span className="gold-gradient-text">Valiant Capital Partners</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            We bridge the gap between complex banking institutions and borrowers, delivering structured financing with maximum sanction limits and zero friction.
          </p>

          {/* Toggle View Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 mt-2">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              8 Pillars of Trust
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Institutional Comparison
            </button>
          </div>
        </div>

        {/* TAB 1: 8 Pillars Grid */}
        {activeTab === 'grid' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {WHY_CHOOSE_US_POINTS.map((point, idx) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl glass-panel p-6 flex flex-col justify-between group glass-panel-hover"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:border-amber-400 group-hover:scale-105 transition-all shadow-md">
                    {getPointIcon(point.icon)}
                  </div>

                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                    {point.short}
                  </span>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Advantage</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* TAB 2: Comparison Matrix */}
        {activeTab === 'comparison' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl glass-panel overflow-hidden border border-slate-800 shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/80">
                    <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 font-bold">
                      Strategic Feature
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-mono uppercase text-amber-400 font-bold bg-amber-500/10 border-x border-amber-500/30">
                      Valiant Capital Partners
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 font-bold">
                      Direct Bank Branches
                    </th>
                    <th className="p-4 sm:p-5 text-xs font-mono uppercase text-slate-400 font-bold">
                      Local Brokers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-xs">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-white">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-amber-300 font-bold bg-amber-500/5 border-x border-amber-500/20">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{row.valiant}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400">
                        <div className="flex items-center gap-2">
                          <CloseIcon className="w-4 h-4 text-slate-600 shrink-0" />
                          <span>{row.bankDirect}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-400">
                        <div className="flex items-center gap-2">
                          <CloseIcon className="w-4 h-4 text-red-500/70 shrink-0" />
                          <span>{row.broker}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenLeadModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Experience The Valiant Advantage</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
