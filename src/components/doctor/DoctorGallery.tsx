import React from 'react';
import { motion } from 'framer-motion';
import { mockDoctorGallery, mockTestimonials } from '../../data/mockDoctor';
import { Star, Quote } from 'lucide-react';

export const DoctorGallery: React.FC = () => {
  return (
    <section id="doc-gallery" className="py-24 px-4 sm:px-8 bg-[#f8fafc] text-slate-900 font-doctor space-y-24">
      {/* Testimonials */}
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
            03 — Patient Outcomes
          </span>
          <h2 className="text-4xl font-extrabold text-slate-950">Patient Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6 relative"
            >
              <Quote className="w-8 h-8 text-blue-500/10 absolute top-6 right-6" />
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star key={r} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 font-normal italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-sm text-slate-950">{t.author}</h4>
                <p className="text-xs text-slate-500 font-mono">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
            04 — Precision Infrastructure
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950">Clinical Facilities</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockDoctorGallery.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 h-64 group bg-white p-1">
              <img
                src={img}
                alt="Clinic Laboratory"
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
