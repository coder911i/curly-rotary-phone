import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Activity, ShieldCheck, Stethoscope, Zap, UserCheck, ArrowUpRight } from 'lucide-react';
import { mockTreatments } from '../../data/mockDoctor';

interface DoctorTreatmentsProps {
  onSelectTreatment: (treatmentTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-5 h-5 text-blue-600" />,
  Activity: <Activity className="w-5 h-5 text-cyan-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-indigo-600" />,
  Zap: <Zap className="w-5 h-5 text-amber-600" />,
  UserCheck: <UserCheck className="w-5 h-5 text-teal-600" />
};

export const DoctorTreatments: React.FC<DoctorTreatmentsProps> = ({ onSelectTreatment }) => {
  return (
    <section id="doc-treatments" className="py-24 px-4 sm:px-8 bg-white text-slate-900 font-doctor border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              01 — Targeted Clinical Protocols
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Cardiovascular Specialties
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            Multi-disciplinary cardiac interventions and preventive endothelial screening protocols.
          </p>
        </div>

        {/* Technical Grid of Clinical Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTreatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => onSelectTreatment(treatment.title)}
              className="group cursor-pointer rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    {iconMap[treatment.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                    {treatment.price}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 font-semibold tracking-wider">
                    {treatment.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                    {treatment.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {treatment.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="font-mono text-slate-500">Duration: {treatment.duration}</span>
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center">
                  Book Protocol <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
