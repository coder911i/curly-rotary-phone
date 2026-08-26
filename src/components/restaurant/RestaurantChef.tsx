import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { mockChef } from '../../data/mockRestaurant';

export const RestaurantChef: React.FC = () => {
  return (
    <section id="noir-chef" className="py-24 px-4 sm:px-8 bg-[#050507] text-[#e6c88b] font-restaurant-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="rounded-3xl overflow-hidden border border-[#c87d28]/30 shadow-2xl bg-[#0f0f13]">
            <img
              src={mockChef.image}
              alt={mockChef.name}
              className="w-full h-[520px] object-cover object-top filter brightness-90 saturate-90"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#c87d28]">
            01 — CULINARY DIRECTOR
          </span>
          <h2 className="text-5xl font-normal text-white">
            {mockChef.name}
          </h2>
          <p className="text-xs font-mono text-[#c87d28] uppercase tracking-widest">{mockChef.role}</p>

          <p className="text-sm font-sans text-stone-300 font-light leading-relaxed">
            {mockChef.bio}
          </p>

          <div className="space-y-3 pt-4 border-t border-[#c87d28]/20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c87d28] block">Accolades & Heritage</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {mockChef.credentials.map((cred, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-[#c87d28]/30 flex items-center space-x-2 text-xs font-semibold text-stone-200 font-sans">
                  <Award className="w-4 h-4 text-[#c87d28] shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
