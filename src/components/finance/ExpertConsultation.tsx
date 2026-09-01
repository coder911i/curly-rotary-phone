import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  MessageSquare, 
  CalendarClock, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Headphones,
  CheckCircle2,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/financeData';

interface ExpertConsultationProps {
  onOpenLeadModal: (initialService?: string) => void;
}

export const ExpertConsultation: React.FC<ExpertConsultationProps> = ({ onOpenLeadModal }) => {
  const handleWhatsApp = () => {
    const text = `Hello Valiant Capital team, I need expert advisory to evaluate which loan or government scheme matches my requirements.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-[#060913] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl glass-panel-gold p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-gradient-to-br from-[#0a1224] via-[#080d1a] to-[#0a1428] border border-amber-500/30 shadow-2xl">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Narrative & Conversion Pitch */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                <Headphones className="w-3.5 h-3.5" />
                <span>1-on-1 Personalized Advisory Desk</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white leading-tight">
                Not Sure Which Financial <br />
                <span className="gold-gradient-text">Solution Is Right for You?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                Speak directly with our senior credit underwriters. We analyze your income profile, balance sheet, and collateral to engineer the lowest possible interest structure with zero obligation.
              </p>

              {/* Advisory Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>&lt; 15 Mins Response</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Free Initial Review</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Fast Action Channel Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              
              {/* Option 1: Direct Hotline */}
              <a
                href={`tel:${COMPANY_INFO.helpline.replace(/\s+/g, '')}`}
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all group shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">Immediate Assistance</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {COMPANY_INFO.helplineDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Option 2: WhatsApp Chat */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 hover:bg-emerald-900/80 transition-all group shadow-lg cursor-pointer text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 font-mono block">Instant Messaging</span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      Chat with Senior Advisor
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-all" />
              </button>

              {/* Option 3: Request Scheduled Callback */}
              <button
                onClick={() => onOpenLeadModal('Callback Request')}
                className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold hover:brightness-110 transition-all group shadow-xl shadow-amber-500/20 cursor-pointer text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/20 flex items-center justify-center text-slate-950">
                    <CalendarClock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-900 font-mono block">
                      Guaranteed Callback
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-950">
                      Request Strategic Callback
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-all" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
