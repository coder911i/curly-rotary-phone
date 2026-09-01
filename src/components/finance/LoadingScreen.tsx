import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="loading-screen"
        >
          {/* Subtle ambient light */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-gradient-to-r from-blue-600/8 via-amber-500/5 to-blue-600/8 blur-3xl pointer-events-none"></div>

          {/* Logo Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="loading-logo-ring absolute -inset-3"></div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e8c547] via-[#d4a537] to-[#b8860b] p-[1.5px] shadow-xl shadow-amber-500/20">
              <div className="w-full h-full bg-[#020617] rounded-[13px] flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#e8c547]" />
              </div>
            </div>
          </motion.div>

          {/* Brand Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif-heading font-bold text-xl tracking-[0.2em] text-white">
                VALIANT
              </span>
              <span className="font-serif-heading font-light text-xl tracking-[0.2em] text-[#e8c547]">
                CAPITAL
              </span>
            </div>
            <span className="text-[10px] tracking-[0.35em] uppercase font-mono text-slate-500">
              Enterprise Financial Advisory
            </span>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="loading-bar-track"
          >
            <div className="loading-bar-fill"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
