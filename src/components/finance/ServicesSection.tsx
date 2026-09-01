import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  UserCheck, 
  Briefcase, 
  Coins, 
  Car, 
  Building2, 
  Factory, 
  GraduationCap, 
  Landmark, 
  TrendingUp, 
  FileSpreadsheet, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Info, 
  Sparkles
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../../data/financeData';
import type { ServiceItem } from '../../types/finance';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenLeadModal: (initialService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenLeadModal }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'individual' | 'business' | 'government' | 'advisory'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-amber-400" };
    switch (iconName) {
      case 'Home': return <Home {...props} />;
      case 'UserCheck': return <UserCheck {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Factory': return <Factory {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Landmark': return <Landmark {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'FileSpreadsheet': return <FileSpreadsheet {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  const handleWhatsAppForService = (service: ServiceItem) => {
    const text = `Hello Valiant Capital, I would like to inquire about ${service.title}. Please provide details on current interest rates and eligibility.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-[#070c18] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Financial Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Tailored Financial Solutions for <br />
            <span className="gold-gradient-text">Individuals, Families & Enterprises</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            From premier residential mortgages and collateral-free commercial loans to central government subsidy schemes, we structure the exact financing your ambitions demand.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Solutions' },
            { id: 'individual', label: 'Personal & Family Loans' },
            { id: 'business', label: 'Commercial & MSME' },
            { id: 'government', label: 'Government & Subsidies' },
            { id: 'advisory', label: 'Financial Advisory & CMA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl glass-panel p-6 flex flex-col justify-between group glass-panel-hover relative overflow-hidden"
            >
              {/* Subtle card top gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent group-hover:via-amber-400 transition-all"></div>

              <div>
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center group-hover:border-amber-400 group-hover:scale-105 transition-all shadow-md">
                    {getIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-semibold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Metrics Pill */}
                <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-[11px]">
                  {service.interestRate && (
                    <div>
                      <span className="text-[10px] text-slate-500 block font-mono">Interest Rate</span>
                      <span className="font-bold text-slate-200 font-mono">{service.interestRate}</span>
                    </div>
                  )}
                  {service.maxAmount && (
                    <div>
                      <span className="text-[10px] text-slate-500 block font-mono">Max Limit</span>
                      <span className="font-bold text-emerald-400 font-mono">{service.maxAmount}</span>
                    </div>
                  )}
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.slice(0, 3).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="text-amber-400 font-bold text-xs mt-0.5">•</span>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Learn More</span>
                </button>

                <button
                  onClick={() => onOpenLeadModal(service.title)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:brightness-110 shadow-md transition-all cursor-pointer"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleWhatsAppForService(service)}
                  className="p-2.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 transition-all cursor-pointer"
                  title="WhatsApp Inquiry"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d162d] to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need a Customized or High-Value Enterprise Financial Structure?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Our Senior Debt Syndication partners handle complex corporate structuring &amp; consortium funding.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal('Customized Financial Solutions')}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 shrink-0 transition-all cursor-pointer"
          >
            Request Corporate Advisory
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onApply={(serviceTitle) => {
          setSelectedService(null);
          onOpenLeadModal(serviceTitle);
        }}
      />

    </section>
  );
};
