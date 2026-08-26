import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

export const ShowcaseFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-black/80 border-t border-white/10 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h4 className="text-xl font-bold tracking-tight font-serif-luxury">FIVE EXPERIENCES</h4>
          </div>
          <p className="text-sm text-white/50 max-w-md">
            Production-quality interactive website showcase engineered for modern businesses. Built with React, TypeScript, Framer Motion, and Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center space-x-6 text-xs text-white/60">
          <span>01 Véra Medical</span>
          <span>•</span>
          <span>02 Blackstone & Co.</span>
          <span>•</span>
          <span>03 The Aurelia</span>
          <span>•</span>
          <span>04 Maison Élan</span>
          <span>•</span>
          <span>05 NOIR</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors flex items-center space-x-2 text-xs font-medium"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-xs text-white/40">
        © 2026 Five Experiences. All rights reserved. Persistent localStorage enabled.
      </div>
    </footer>
  );
};
