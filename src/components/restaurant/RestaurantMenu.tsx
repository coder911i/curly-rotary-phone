import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuItem } from '../../types';
import { mockMenuItems } from '../../data/mockRestaurant';

// Build tasting-menu courses from menu items
const TASTING_COURSES: (MenuItem & { course: string; pairing?: string })[] = [
  { ...mockMenuItems[0], course: 'Amuse-Bouche' },
  { ...mockMenuItems[2], course: 'First Course' },
  { ...mockMenuItems[3], course: 'Second Course' },
  { ...mockMenuItems[4], course: 'Smoke & Fire' },
  { ...mockMenuItems[6], course: 'Main Dish',   pairing: 'Château Margaux 2015' },
  { ...mockMenuItems[7], course: 'Dessert Ritual' },
];

export const RestaurantMenu: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState(TASTING_COURSES[0].id);

  const activeDish = TASTING_COURSES.find((m) => m.id === activeCourseId) || TASTING_COURSES[0];

  return (
    <section id="noir-menu" className="py-24 px-4 sm:px-8 bg-[#08080a] text-[#e6c88b] font-restaurant-serif border-t border-[#c87d28]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c87d28]/30 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c87d28]">
              COURSE-BY-COURSE TASTING JOURNEY
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal text-white">
              7-Course Culinary Opera
            </h2>
          </div>
          <p className="text-sm font-sans text-stone-400 max-w-md font-light leading-relaxed">
            Hover or select any course row to transition the dish photography and sommelier notes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vertical Course Rows (NO CARDS!) */}
          <div className="lg:col-span-7 space-y-4">
            {TASTING_COURSES.map((item, index) => (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActiveCourseId(item.id)}
                onClick={() => setActiveCourseId(item.id)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  activeCourseId === item.id
                    ? 'bg-[#c87d28]/20 border-[#c87d28] shadow-2xl'
                    : 'bg-[#0e0e12] border-stone-800 hover:border-[#c87d28]/40'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#c87d28] font-bold">
                      {String(index + 1).padStart(2, '0')} — {item.course.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white group-hover:text-[#c87d28] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-sans text-stone-400 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="text-right shrink-0 pl-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#c87d28] bg-[#c87d28]/10 px-3 py-1 rounded border border-[#c87d28]/30">
                    {item.course}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Full-Bleed Dish Visual Swap */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDish.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-[#c87d28]/40 shadow-2xl h-[520px]"
              >
                <img
                  src={activeDish.image}
                  alt={activeDish.name}
                  className="w-full h-full object-cover filter brightness-90 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-white space-y-2">
                  <span className="text-[10px] font-mono text-[#c87d28] uppercase tracking-widest block font-bold">
                    {activeDish.course} — SOMMELIER PAIRING
                  </span>
                  <h4 className="text-xl font-normal">{activeDish.name}</h4>
                  <p className="text-xs font-sans text-stone-300 font-light">
                    Paired with {activeDish.pairing}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
