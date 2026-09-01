import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Search, 
  MessageSquare, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../../data/financeData';

interface FaqSectionProps {
  onOpenLeadModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenLeadModal }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'general' | 'eligibility' | 'schemes' | 'documentation' | 'rates'>('all');

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleWhatsAppHelp = () => {
    const text = `Hello Valiant Capital team, I have a specific question about loan requirements and eligibility.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="faqs" className="py-24 bg-[#070c18] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white">
            Frequently Asked <br />
            <span className="gold-gradient-text">Financial Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Clear, transparent answers to help you navigate loan eligibility, government subsidies, and banking procedures.
          </p>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search answers (e.g. CIBIL, documents, subsidy)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-amber-400 text-white text-xs placeholder:text-slate-500 focus:outline-none shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'general', label: 'General Advisory' },
              { id: 'eligibility', label: 'Eligibility & CIBIL' },
              { id: 'schemes', label: 'Govt Subsidies' },
              { id: 'documentation', label: 'Documentation' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center glass-panel rounded-2xl text-slate-400 text-sm">
              No matching questions found for "{searchQuery}". Please reach out to our team directly!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl glass-panel border border-slate-800/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/40 transition-colors"
                  >
                    <span className={`text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? 'text-amber-400' : 'text-white'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800 transition-transform ${
                      isOpen ? 'rotate-180 border-amber-500/40 text-amber-400' : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0d162d] to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Still have questions regarding your financial profile?
            </h4>
            <p className="text-xs text-slate-300">
              Our financial consultants are ready to guide you 6 days a week.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsAppHelp}
              className="px-4 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </button>

            <button
              onClick={onOpenLeadModal}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Request Callback</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
