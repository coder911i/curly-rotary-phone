import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { mockRooms } from '../../data/mockHotel';

interface HotelRoomsProps {
  onSelectRoom: (roomId: string) => void;
}

export const HotelRooms: React.FC<HotelRoomsProps> = ({ onSelectRoom }) => {
  return (
    <section id="hotel-rooms" className="py-24 px-4 sm:px-8 bg-[#141210] text-[#e6e2dd] font-hotel-serif">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e5c158]">
              ACCOMMODATIONS & RESIDENCES
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal text-white">
              Private Lake Sanctuaries
            </h2>
          </div>
          <p className="text-sm font-sans text-stone-400 max-w-md font-light leading-relaxed">
            Generous living quarters featuring handcrafted silk drapery, private travertine plunge pools, and uninterrupted views across Lake Como.
          </p>
        </div>

        {/* Full-Bleed Horizontal Immersive Room Sections */}
        <div className="space-y-24">
          {mockRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[440px] group cursor-pointer" onClick={() => onSelectRoom(room.id)}>
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-[#e5c158] font-bold">
                    €{room.pricePerNight.toLocaleString()} / NIGHT
                  </div>
                </div>
              </div>

              {/* Editorial Text Side */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#e5c158] block">
                    ROOM 0{index + 1} • {room.subtitle}
                  </span>
                  <h3 className="text-4xl font-normal text-white">{room.name}</h3>
                </div>

                <p className="text-sm font-sans text-stone-300 font-light leading-relaxed">
                  {room.description}
                </p>

                <div className="space-y-2 font-sans text-xs text-stone-300">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#e5c158]" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between font-sans text-xs text-[#e5c158]">
                  <span>{room.sizeSqm} sqm • Capacity {room.maxGuests} Guests</span>
                  <button
                    onClick={() => onSelectRoom(room.id)}
                    className="px-6 py-3 rounded-full bg-[#e5c158] hover:bg-[#d4b047] text-[#141210] font-bold uppercase tracking-widest transition-all"
                  >
                    Reserve Suite
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
