import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Clock,
  ChevronRight,
  Calculator,
  Landmark,
  Users,
  Building2,
  Star
} from 'lucide-react';
import { COMPANY_INFO, BANKING_PARTNERS } from '../../data/financeData';

interface HeroSectionProps {
  onOpenLeadModal: (initialService?: string) => void;
  onExploreServices: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLeadModal,
  onExploreServices,
  onOpenCalculator
}) => {
  const [quickLoanType, setQuickLoanType] = useState('Home Loan');
  const [quickAmount, setQuickAmount] = useState(5000000);
  const [quickTenure, setQuickTenure] = useState(20);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax for 3D objects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };
    const el = sceneRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const getEstRate = () => {
    switch (quickLoanType) {
      case 'Home Loan': return 8.35;
      case 'Personal Loan': return 10.49;
      case 'Business Loan': return 11.25;
      case 'Loan Against Property': return 9.15;
      default: return 8.75;
    }
  };

  const calculateMiniEmi = () => {
    const rate = getEstRate();
    const r = rate / (12 * 100);
    const n = quickTenure * 12;
    const emi = (quickAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakh`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  // Framer-motion stagger variants
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" ref={sceneRef} className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-[#020617]">

      {/* === BACKGROUND LAYERS === */}
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      {/* Ambient gradients */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-600/6 via-amber-500/4 to-transparent blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-700/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-600/3 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Background Photography — Subtle professional office environment */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.04]"
          loading="eager"
        />
      </div>

      {/* === FLOATING 3D DECORATIVE ELEMENTS (mouse-reactive) === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric 1 */}
        <div
          className="absolute top-[15%] right-[8%] w-20 h-20 rounded-2xl border border-amber-500/10 bg-gradient-to-br from-amber-500/5 to-transparent animate-float-slow-alt"
          style={{ transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -8}px) rotate(${mousePos.x * 3}deg)` }}
        ></div>
        {/* Floating geometric 2 */}
        <div
          className="absolute top-[60%] left-[5%] w-16 h-16 rounded-full border border-blue-500/10 bg-blue-500/3 animate-float-slow"
          style={{ transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 10}px)`, animationDelay: '2s' }}
        ></div>
        {/* Floating geometric 3 */}
        <div
          className="absolute top-[35%] right-[18%] w-3 h-3 rounded-full bg-amber-400/30 animate-pulse-subtle"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -15}px)` }}
        ></div>
        {/* Abstract ring */}
        <div
          className="absolute bottom-[20%] right-[12%] w-32 h-32 rounded-full border-2 border-dashed border-blue-500/6 animate-rotate-slow"
          style={{ transform: `translate(${mousePos.x * -6}px, ${mousePos.y * -4}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Trust Announcement Pill */}
        <div className="flex items-center justify-center lg:justify-start mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/8 border border-blue-400/20 text-blue-300 text-xs font-medium tracking-wide backdrop-blur-md"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <span>Fast-Track Loan Approvals & Subsidies Across 45+ Banking Partners</span>
            <ArrowRight className="w-3 h-3 text-blue-400" />
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >

          {/* ===== LEFT COLUMN: VALUE PROPOSITION ===== */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-7 text-center lg:text-left">

            <div className="space-y-3">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#d4a537] font-mono font-medium block">
                Your Trusted Partner for Loans & Financial Solutions
              </span>
              <h1 className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4.2rem] font-extrabold text-white font-serif-luxury leading-[1.08] tracking-tight">
                Making Financial<br className="hidden sm:block" />
                Solutions{' '}
                <span className="gold-gradient-text">Simple,</span>
                <br className="hidden lg:block" />
                <span className="gold-gradient-text">Smart & Accessible.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300/90 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Helping individuals, families, and high-growth enterprises explore tailored loan solutions, competitive interest rates, government subsidies, and end-to-end documentation support with institutional trust.
            </p>

            {/* Trust Checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-1 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                { title: 'Expert Financial Guidance', desc: 'Certified Loan Specialists', icon: Shield },
                { title: 'Multiple Loan Solutions', desc: '45+ Banking Partners', icon: Building2 },
                { title: 'Personalized Assistance', desc: 'Doorstep & Digital KYC', icon: Users },
                { title: 'Trusted & Transparent', desc: 'Zero Hidden Charges', icon: Star }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/20 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/8 border border-blue-400/15 flex items-center justify-center shrink-0 group-hover:border-amber-500/30 transition-colors">
                    <item.icon className="w-3.5 h-3.5 text-blue-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">{item.title}</span>
                    <span className="text-[10px] text-slate-500">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button onClick={() => onOpenLeadModal()} className="btn-primary w-full sm:w-auto">
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onExploreServices} className="btn-secondary w-full sm:w-auto">
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button onClick={onOpenCalculator} className="btn-royal w-full sm:w-auto">
                <Calculator className="w-4 h-4 text-blue-400" />
                <span>Check EMI</span>
              </button>
            </motion.div>

            {/* Quick Live Stat Indicators */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-5 pt-6 border-t border-white/[0.06] max-w-lg mx-auto lg:mx-0">
              {[
                { value: COMPANY_INFO.stats.capitalDisbursed, label: 'Facilitated', color: 'text-[#e8c547]' },
                { value: COMPANY_INFO.stats.clientsAssisted, label: 'Clients Served', color: 'text-blue-400' },
                { value: COMPANY_INFO.stats.bankPartners, label: 'Bank Partners', color: 'text-emerald-400' }
              ].map((stat, idx) => (
                <div key={idx}>
                  <span className={`text-xl sm:text-2xl font-bold font-mono-numbers block ${stat.color}`}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* ===== RIGHT COLUMN: INTERACTIVE 3D CONFIGURATOR CARD ===== */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="relative hero-3d-scene">

              {/* 3D Glow Backdrop */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/20 via-amber-500/10 to-blue-600/20 blur-2xl opacity-60 animate-gradient-shift"></div>

              <div
                className="relative rounded-2xl glass-panel-gold p-6 sm:p-7 space-y-5 shadow-2xl hero-3d-object bg-[#0a1628]/90"
                style={{
                  transform: `rotateY(${mousePos.x * 2}deg) rotateX(${mousePos.y * -2}deg) translateZ(0)`
                }}
              >

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-blue-500/10 border border-amber-500/25 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-[#e8c547]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e8c547] block">
                        Live Loan Configurator
                      </span>
                      <h3 className="text-sm font-bold text-white">Instant Estimated EMI</h3>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/8 border border-emerald-500/25 text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Best Rates</span>
                  </div>
                </div>

                {/* Loan Type Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-medium">Select Loan Solution</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {['Home Loan', 'Personal Loan', 'Business Loan', 'Loan Against Property'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setQuickLoanType(type)}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer ${
                          quickLoanType === type
                            ? 'bg-gradient-to-r from-[#d4a537] to-[#e8c547] text-[#020617] shadow-md font-bold'
                            : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] border border-white/[0.06]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Required Amount:</span>
                    <span className="font-mono font-bold text-white text-sm bg-white/[0.04] px-2.5 py-0.5 rounded-lg border border-white/[0.08]">
                      {formatCurrency(quickAmount)}
                    </span>
                  </div>
                  <input type="range" min={500000} max={20000000} step={100000} value={quickAmount}
                    onChange={(e) => setQuickAmount(Number(e.target.value))} className="w-full cursor-pointer" />
                  <div className="flex justify-between text-[10px] text-slate-600 font-mono">
                    <span>₹5 Lakh</span><span>₹1 Cr</span><span>₹2 Cr</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Repayment Tenure:</span>
                    <span className="font-mono font-bold text-white text-sm bg-white/[0.04] px-2.5 py-0.5 rounded-lg border border-white/[0.08]">
                      {quickTenure} Years
                    </span>
                  </div>
                  <input type="range" min={1} max={30} step={1} value={quickTenure}
                    onChange={(e) => setQuickTenure(Number(e.target.value))} className="w-full cursor-pointer" />
                </div>

                {/* EMI Result */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#0a1628] to-[#0f1d32] border border-amber-500/20 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Indicative Interest Rate</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm">{getEstRate()}% p.a.</span>
                  </div>
                  <div className="flex items-baseline justify-between pt-1 border-t border-white/[0.06]">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Estimated Monthly EMI</span>
                      <span className="text-2xl font-extrabold font-mono-numbers text-[#e8c547]">
                        ₹{calculateMiniEmi().toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-slate-600"> / month</span>
                    </div>
                    <button
                      onClick={() => onOpenLeadModal(quickLoanType)}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4a537] to-[#e8c547] hover:brightness-110 text-[#020617] font-bold text-xs shadow-lg transition-all cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> No CIBIL Impact
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" /> 48hr Approval
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Banking Partners Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.06]"
        >
          <p className="text-center text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-6">
            Institutional Tie-ups Across 45+ Premier Scheduled Banks & NBFCs
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {BANKING_PARTNERS.slice(0, 6).map((bank, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/20 transition-all text-center group"
              >
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <Landmark className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#d4a537] transition-colors" />
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                    {bank.short}
                  </span>
                </div>
                <span className="text-[9px] text-slate-600 block truncate font-mono">
                  {bank.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
