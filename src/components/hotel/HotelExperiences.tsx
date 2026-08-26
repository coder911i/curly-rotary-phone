import React from 'react';
import { motion } from 'framer-motion';
import { mockExperiences } from '../../data/mockHotel';

export const HotelExperiences: React.FC = () => {
  return (
    <section id="hotel-exp" className="py-24 px-4 sm:px-8 bg-[#0e0d0b] text-[#e6e2dd] font-hotel-serif border-t border-stone-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e5c158]">
            BESPOKE ITINERARIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-white">Curated Lake Experiences</h2>
          <p className="text-sm font-sans text-stone-400 font-light">
            Exclusive excursions arranged by our Head Concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockExperiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden bg-[#181613] border border-stone-800 group"
            >
              <div className="h-60 overflow-hidden relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-mono text-[#e5c158] bg-black/80 px-2.5 py-1 rounded-full">
                  {exp.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-normal text-white">{exp.title}</h3>
                <p className="text-xs font-sans text-stone-400 font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
