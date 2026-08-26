import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { mockDoctorProfile } from '../../data/mockDoctor';

interface DoctorHeroProps {
  onOpenBooking: () => void;
}

export const DoctorHero: React.FC<DoctorHeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen bg-[#f8fafc] text-slate-900 pt-36 pb-20 px-4 sm:px-8 font-doctor overflow-hidden flex items-center">
      {/* Precision Clinical Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Subtle Cyan Light Glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Asymmetric Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>PRECISION MEDICINE LAB • REGEN-CARDIO</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-slate-950 leading-[0.92]">
            Precision
            <br />
            <span className="text-blue-600">Care.</span>
            <br />
            Humanly
            <br />
            <span className="text-slate-400 font-light italic">Delivered.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
            Advanced cardiovascular diagnostics and targeted metabolic therapies led by Dr. Arjun Mehra. Combining 18 years of clinical precision with non-invasive molecular profiling.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-semibold text-sm tracking-wide shadow-xl shadow-slate-950/10 flex items-center space-x-3 transition-all transform hover:-translate-y-0.5"
            >
              <span>Schedule OS Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#doc-treatments"
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-semibold text-sm transition-all"
            >
              Explore Clinical Treatments
            </a>
          </div>

          <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <span className="text-2xl font-bold text-slate-950 block">{mockDoctorProfile.rating} / 5.0</span>
              <span className="text-slate-500 text-[11px]">Verified Patient Rating</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-950 block">{mockDoctorProfile.patients}</span>
              <span className="text-slate-500 text-[11px]">Active Clinical Cases</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-950 block">{mockDoctorProfile.experience} Yrs</span>
              <span className="text-slate-500 text-[11px]">Department Leadership</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Doctor Portrait + Medical HUD Translucent Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
            <img
              src={mockDoctorProfile.image}
              alt={mockDoctorProfile.name}
              className="w-full h-[520px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-900 shadow-lg">
              <h3 className="text-lg font-bold text-slate-950">{mockDoctorProfile.name}</h3>
              <p className="text-xs text-blue-600 font-semibold">{mockDoctorProfile.role}</p>
            </div>
          </div>

          {/* Floating Medical HUD Card 1 */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute -top-6 -left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-xl text-slate-900 flex items-center space-x-3 hidden sm:flex"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Live Status</span>
              <span className="text-xs font-bold text-slate-900">Slots Open Today @ 05:30 PM</span>
            </div>
          </motion.div>

          {/* Floating Medical HUD Card 2 */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-slate-950 text-white backdrop-blur-xl border border-slate-800 shadow-xl flex items-center space-x-3 hidden sm:flex"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Accreditation</span>
              <span className="text-xs font-bold text-white">Board Certified Cardiologist</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
