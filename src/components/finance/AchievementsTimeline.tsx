import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Cpu, 
  Landmark, 
  ShieldCheck, 
  Award, 
  Users, 
  Percent, 
  Clock, 
  Sparkles,
  Calendar
} from 'lucide-react';
import { TIMELINE_MILESTONES, COMPANY_INFO } from '../../data/financeData';

export const AchievementsTimeline: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE_MILESTONES.length - 1);

  const getMilestoneIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-amber-400" };
    switch (iconName) {
      case 'Building': return <Building {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  const statCounters = [
    {
      value: '15+',
      label: 'Years of Experience',
      desc: 'Since 2010 in Institutional Advisory',
      color: 'text-amber-400'
    },
    {
      value: COMPANY_INFO.stats.clientsAssisted,
      label: 'Clients Assisted',
      desc: 'Families, Doctors & MSMEs',
      color: 'text-emerald-400'
    },
    {
      value: COMPANY_INFO.stats.capitalDisbursed,
      label: 'Capital Facilitated',
      desc: 'Across Retail & Commercial Debt',
      color: 'text-amber-300'
    },
    {
      value: COMPANY_INFO.stats.satisfactionRate,
      label: 'Client Satisfaction',
      desc: 'Verified Approval Record',
      color: 'text-sky-400'
    },
    {
      value: COMPANY_INFO.stats.bankPartners,
      label: 'Banking Partners',
      desc: 'Tier-1 PSUs & Private Banks',
      color: 'text-amber-400'
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-[#070c18] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Track Record & Legacy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Over a Decade of Empowering <br />
            <span className="gold-gradient-text">Financial Dreams & Enterprise Growth</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Our numbers reflect our relentless commitment to securing the most competitive credit facilities for our clients with total transparency.
          </p>
        </div>

        {/* 5 Big Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {statCounters.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl glass-panel p-5 text-center relative overflow-hidden group glass-panel-hover"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all"></div>
              <span className={`text-3xl sm:text-4xl font-extrabold font-mono-numbers block mb-1 ${stat.color}`}>
                {stat.value}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-[10px] text-slate-400 font-light">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Journey Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold block">
            Our Evolution &amp; Milestones
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
            The Journey of Valiant Capital
          </h3>
        </div>

        {/* Interactive Desktop Timeline Bar */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connecting Track */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {TIMELINE_MILESTONES.map((m, idx) => {
                const isSelected = selectedMilestone === idx;
                return (
                  <button
                    key={m.year}
                    onClick={() => setSelectedMilestone(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl ${
                        isSelected 
                          ? 'bg-amber-400 text-slate-950 scale-110 shadow-amber-500/40 ring-4 ring-amber-400/20' 
                          : 'bg-slate-900 border border-slate-700 text-slate-400 hover:border-amber-400/50 hover:text-slate-200'
                      }`}
                    >
                      {getMilestoneIcon(m.icon)}
                    </div>

                    <span className={`mt-3 text-sm font-mono font-bold transition-colors ${
                      isSelected ? 'text-amber-400' : 'text-slate-400 group-hover:text-white'
                    }`}>
                      {m.year}
                    </span>

                    <span className="text-[11px] text-slate-300 font-medium text-center mt-1 line-clamp-1 max-w-[140px]">
                      {m.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Milestone Spotlight Card */}
        <div className="max-w-3xl mx-auto rounded-2xl glass-panel-gold p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg font-mono font-extrabold text-base">
                {TIMELINE_MILESTONES[selectedMilestone].year}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-400 block">
                  Strategic Milestone
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                  {TIMELINE_MILESTONES[selectedMilestone].title}
                </h4>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
              {TIMELINE_MILESTONES[selectedMilestone].metrics}
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {TIMELINE_MILESTONES[selectedMilestone].description}
          </p>

          {/* Quick Year Selector For Mobile */}
          <div className="flex lg:hidden items-center justify-between gap-1 overflow-x-auto pb-2">
            {TIMELINE_MILESTONES.map((m, idx) => (
              <button
                key={m.year}
                onClick={() => setSelectedMilestone(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedMilestone === idx
                    ? 'bg-amber-400 text-slate-950'
                    : 'bg-slate-900 text-slate-400'
                }`}
              >
                {m.year}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
