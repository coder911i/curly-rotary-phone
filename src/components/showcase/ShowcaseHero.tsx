import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export const ShowcaseHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden">
      {/* Subtle Radial Mesh Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-amber-500/10 via-blue-500/5 to-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto space-y-6"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <Layers className="w-4 h-4 text-amber-400" />
          <span className="text-xs uppercase tracking-widest text-white/80 font-mono font-medium">
            Digital Agency Portfolio Showcase
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white font-serif-luxury leading-[0.95]">
          FIVE EXPERIENCES.
          <br />
          <span className="bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent italic font-light">
            ONE DIGITAL STANDARD.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto font-light tracking-wide">
          Five distinct digital worlds engineered for five different industries. Each built with a completely independent design language, custom typography stack, and bespoke interaction model.
        </p>

        {/* Scroll Indicator */}
        <div className="pt-8 flex flex-col items-center justify-center opacity-60">
          <span className="text-[11px] uppercase tracking-widest text-amber-400/80 mb-2 font-mono">
            Explore 5 Brand Concepts Below
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1 h-2 rounded-full bg-amber-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
