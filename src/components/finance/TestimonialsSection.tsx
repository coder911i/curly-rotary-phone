import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { TESTIMONIALS } from '../../data/financeData';

interface TestimonialsSectionProps {
  onOpenLeadModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenLeadModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'home' | 'business' | 'professional' | 'education'>('all');

  const filteredTestimonials = activeFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tag === activeFilter);

  return (
    <section id="testimonials" className="py-24 bg-[#070c18] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Quote className="w-3.5 h-3.5" />
            <span>Verified Client Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Trusted by Individuals, <br />
            <span className="gold-gradient-text">Families &amp; Enterprises Nationwide</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Discover how our customized financial solutions and fast-track loan approvals turned critical goals into real-world achievements.
          </p>

          {/* Social Proof Badges */}
          <div className="flex items-center justify-center flex-wrap gap-4 pt-2 text-xs">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white font-mono">4.9 / 5.0</span>
              <span className="text-slate-400">(2,400+ Google Reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>99.4% Sanction Success Rate</span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-4">
            {[
              { id: 'all', label: 'All Testimonials' },
              { id: 'home', label: 'Home Owners' },
              { id: 'business', label: 'Business & MSME' },
              { id: 'professional', label: 'Medical & Professionals' },
              { id: 'education', label: 'Overseas Education' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-between group glass-panel-hover relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all"></div>

              <div>
                {/* Header with Star Rating & Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-[10px] font-mono font-bold">
                    {t.amountSanctioned}
                  </span>
                </div>

                {/* Service Used */}
                <span className="text-[11px] font-mono text-emerald-400 font-semibold block mb-2">
                  ✓ {t.serviceUsed}
                </span>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {t.role} • {t.companyOrCity}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={onOpenLeadModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Join 25,000+ Satisfied Clients</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
