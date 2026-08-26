import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { mockSalonServices } from '../../data/mockSalon';

interface SalonServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const SalonServices: React.FC<SalonServicesProps> = ({ onSelectService }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(mockSalonServices[0].id);

  const activeHoveredObj = mockSalonServices.find(s => s.id === hoveredService) || mockSalonServices[0];

  return (
    <section id="salon-services" className="py-24 px-4 sm:px-8 bg-[#1f1816] text-[#faf7f2] font-salon-serif border-t border-[#d4978a]/30">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#d4978a]/30 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4978a]">
              TYPOGRAPHY SERVICE MENU
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal text-white">
              Couture Beauty Rituals
            </h2>
          </div>
          <p className="text-sm font-sans text-stone-300 max-w-md font-light">
            Hover over any service row to preview the editorial look. Click to launch appointment booking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography-Driven Service Rows (NO CARDS!) */}
          <div className="lg:col-span-7 space-y-4">
            {mockSalonServices.map((service, index) => (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onClick={() => onSelectService(service.id)}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  hoveredService === service.id
                    ? 'bg-[#d4978a]/20 border-[#d4978a] shadow-lg'
                    : 'bg-[#181311] border-stone-800 hover:border-[#d4978a]/40'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#d4978a] font-bold">0{index + 1}</span>
                    <h3 className="text-2xl sm:text-3xl font-normal text-white group-hover:text-[#d4978a] transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-xs font-sans text-stone-400 font-light pl-7">
                    {service.description}
                  </p>
                </div>

                <div className="text-right space-y-1 shrink-0 pl-4">
                  <span className="text-xl font-mono font-bold text-[#d4978a] block">
                    ₹{service.price.toLocaleString()}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 flex items-center justify-end">
                    <Clock className="w-3 h-3 mr-1" /> {service.durationMinutes}m
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Dynamic Hover Image Preview */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHoveredObj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-[#d4978a]/40 shadow-2xl h-[500px]"
              >
                <img
                  src={activeHoveredObj.image}
                  alt={activeHoveredObj.name}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1412] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-white space-y-1">
                  <span className="text-[10px] font-mono text-[#d4978a] uppercase tracking-widest block">
                    Selected Atelier Service
                  </span>
                  <h4 className="text-lg font-normal">{activeHoveredObj.name}</h4>
                  <p className="text-xs font-mono text-amber-200">₹{activeHoveredObj.price.toLocaleString()} • {activeHoveredObj.durationMinutes} Mins</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
