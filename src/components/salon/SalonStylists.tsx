import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import { mockStylists } from '../../data/mockSalon';

interface SalonStylistsProps {
  onSelectStylist: (stylistId: string) => void;
}

export const SalonStylists: React.FC<SalonStylistsProps> = ({ onSelectStylist }) => {
  return (
    <section id="salon-stylists" className="py-24 px-4 sm:px-8 bg-[#1a1412] text-[#faf7f2] font-salon-serif border-t border-[#d4978a]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4978a]">
            MASTER ARTISTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-white">Paris & Tokyo Trained Stylists</h2>
          <p className="text-sm font-sans text-stone-300 font-light">
            Bringing Paris Fashion Week expertise and bespoke hair sculpting to every session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockStylists.map((stylist, i) => (
            <motion.div
              key={stylist.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-6 bg-[#211b18] border border-[#d4978a]/30 hover:border-[#d4978a] transition-all space-y-6 flex flex-col justify-between group rounded-3xl"
            >
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-72 border border-[#d4978a]/20 relative">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 flex items-center space-x-1 border border-white/10 font-mono">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{stylist.rating}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-normal text-white group-hover:text-[#d4978a] transition-colors">
                    {stylist.name}
                  </h3>
                  <p className="text-xs text-[#d4978a] font-sans font-semibold mt-0.5">{stylist.role}</p>
                  <p className="text-[11px] font-mono text-stone-400 mt-0.5">{stylist.experienceYears} Yrs International Practice</p>
                </div>

                <p className="text-xs font-sans text-stone-300 font-light leading-relaxed">
                  {stylist.bio}
                </p>
              </div>

              <button
                onClick={() => onSelectStylist(stylist.id)}
                className="w-full py-3 rounded-full bg-[#d4978a]/20 hover:bg-[#d4978a] border border-[#d4978a]/40 text-[#d4978a] hover:text-[#1a1412] font-sans font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Select {stylist.name.split(' ')[0]}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
