import React from 'react';
import { motion } from 'framer-motion';

interface PhotoBreakProps {
  imageUrl: string;
  headline: string;
  subtext?: string;
  overlayOpacity?: number;
}

export const PhotoBreak: React.FC<PhotoBreakProps> = ({
  imageUrl,
  headline,
  subtext,
  overlayOpacity = 0.55
}) => {
  return (
    <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: `brightness(${1 - overlayOpacity * 0.6}) saturate(0.85)` }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(2, 6, 23, ${overlayOpacity}) 0%, rgba(10, 22, 40, ${overlayOpacity + 0.15}) 100%)`
          }}
        ></div>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-luxury text-white leading-tight">
            {headline}
          </h2>
          {subtext && (
            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
              {subtext}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none"></div>
    </section>
  );
};
