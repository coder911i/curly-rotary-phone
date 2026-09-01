import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Shield, 
  ChevronRight, 
  ArrowUpRight,
  Landmark,
  Calculator,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/financeData';

interface NavbarProps {
  onOpenLeadModal: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Calculators', href: '#calculator' },
    { label: 'Govt Schemes', href: '#government-schemes' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Journey', href: '#achievements' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefill)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#020617]/92 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/50 py-3' 
            : 'bg-gradient-to-b from-[#020617]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Tagline */}
            <a 
              href="#hero" 
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#e8c547] via-[#d4a537] to-[#b8860b] p-[1.5px] shadow-lg shadow-amber-500/15 group-hover:shadow-amber-500/30 transition-all">
                <div className="w-full h-full bg-[#020617] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#e8c547] group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-heading font-bold text-base sm:text-lg tracking-wider text-white">
                    VALIANT
                  </span>
                  <span className="font-serif-heading font-light text-base sm:text-lg tracking-wider text-[#e8c547]">
                    CAPITAL
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-mono font-medium text-slate-400">
                  Financial Advisory & Loans
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-400 hover:text-[#e8c547] transition-colors rounded-md hover:bg-white/[0.04] cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* WhatsApp Quick Chat */}
              <button
                onClick={handleWhatsAppDirect}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-400/40 transition-all text-xs font-semibold group cursor-pointer"
                title="Chat on WhatsApp"
              >
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <span>WhatsApp</span>
              </button>

              {/* Main Consultation CTA */}
              <button
                onClick={() => onOpenLeadModal()}
                className="relative group overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-[#d4a537] via-[#e8c547] to-[#d4a537] text-[#020617] font-bold text-xs tracking-wide uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="flex items-center gap-1.5">
                  <span>Get Free Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handleWhatsAppDirect}
                className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/30 text-emerald-400"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-400"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#020617]/98 backdrop-blur-2xl border-b border-white/[0.06] p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/80">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-left text-sm font-medium text-slate-200 hover:text-amber-400 hover:border-amber-500/40"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLeadModal();
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Get Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.helpline.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call Helpline</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleWhatsAppDirect();
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-xs font-semibold text-emerald-400"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
