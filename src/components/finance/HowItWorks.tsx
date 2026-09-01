import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  UserCheck, 
  Layers, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Clock,
  ShieldAlert
} from 'lucide-react';
import { PROCESS_STEPS } from '../../data/financeData';

interface HowItWorksProps {
  onOpenLeadModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenLeadModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    const props = { className: "w-5 h-5" };
    switch (index) {
      case 0: return <Send {...props} />;
      case 1: return <UserCheck {...props} />;
      case 2: return <Layers {...props} />;
      case 3: return <FileCheck2 {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Background Radial Ambiance */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frictionless 5-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            From Requirement to Disbursal, <br />
            <span className="gold-gradient-text">Streamlined for Speed & Precision</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Experience our intelligent 5-step advisory model designed to secure optimum loan approvals without tedious bank follow-ups.
          </p>
        </div>

        {/* Connected Interactive Process Flow */}
        <div className="relative mb-16">
          
          {/* Progress Track Line */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-1 bg-slate-800 z-0">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((item, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(idx)}
                  className={`rounded-2xl p-5 flex flex-col justify-between transition-all cursor-pointer ${
                    isActive 
                      ? 'glass-panel-gold ring-2 ring-amber-400/40 shadow-2xl scale-[1.03] bg-[#0e162a]' 
                      : isPast
                        ? 'glass-panel bg-slate-900/60 border-emerald-500/30'
                        : 'glass-panel opacity-80 hover:opacity-100 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Step Circle & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                          isActive 
                            ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30 ring-4 ring-amber-400/20' 
                            : isPast
                              ? 'bg-emerald-500 text-slate-950'
                              : 'bg-slate-900 border border-slate-700 text-slate-400'
                        }`}
                      >
                        {getStepIcon(idx)}
                      </div>

                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase ${
                        isActive 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                          : 'bg-slate-900 text-slate-500'
                      }`}>
                        Step {item.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-amber-400 font-bold block mb-1">
                      {item.subtitle}
                    </span>

                    <h3 className="text-base font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                    <span className={`font-mono font-bold ${
                      isActive ? 'text-amber-400' : 'text-slate-500'
                    }`}>
                      {item.badge}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                    } transition-transform`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="text-center">
          <button
            onClick={onOpenLeadModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Start Step 1: Share Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
