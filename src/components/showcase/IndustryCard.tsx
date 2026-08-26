import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ViewState } from '../../types';

export interface IndustryCardData {
  id: ViewState;
  number: string;
  industry: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  features: string[];
  themeClass: string;
}

interface IndustryCardProps {
  card: IndustryCardData;
  index: number;
  onSelect: (id: ViewState) => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ card, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onClick={() => onSelect(card.id)}
      className="group cursor-pointer rounded-3xl overflow-hidden bg-[#0d0d12] border border-white/10 hover:border-amber-400/50 shadow-2xl transition-all duration-500 relative"
    >
      <div className="relative min-h-[480px] flex flex-col justify-between p-8 sm:p-10 overflow-hidden">
        {/* Background Image with custom hover zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.35] group-hover:brightness-[0.5]"
          />

          {/* Industry-Specific Hover Glow Overlays */}
          {card.id === 'doctor' && (
            <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          {card.id === 'law' && (
            <div className="absolute inset-0 bg-[#261d12]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          {card.id === 'hotel' && (
            <div className="absolute inset-0 bg-amber-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          {card.id === 'salon' && (
            <div className="absolute inset-0 bg-rose-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          {card.id === 'restaurant' && (
            <div className="absolute inset-0 bg-stone-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Top Header Row */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-4xl font-mono font-bold text-amber-400 tracking-tighter">
            {card.number}
          </span>
          <div className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-wider text-white">
            {card.industry}
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="relative z-10 space-y-4 pt-16">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-mono text-amber-300 block">
              {card.tagline}
            </span>
            <h3 className={`text-3xl sm:text-4xl font-bold text-white ${card.themeClass} group-hover:text-amber-200 transition-colors`}>
              {card.name}
            </h3>
          </div>

          <p className="text-sm text-white/70 font-light leading-relaxed max-w-lg">
            {card.description}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {card.features.map((feat, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-white/80 border border-white/10"
              >
                {feat}
              </span>
            ))}
          </div>

          {/* Launch Action Bar */}
          <div className="pt-4 flex items-center justify-between border-t border-white/15">
            <span className="text-xs font-mono uppercase tracking-widest text-white/90 group-hover:text-amber-300 transition-colors">
              Launch {card.name} Demo
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all duration-300 transform group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
