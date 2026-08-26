import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';
import { mockDoctorProfile } from '../../data/mockDoctor';

export const DoctorProfile: React.FC = () => {
  return (
    <section id="doc-profile" className="py-24 px-4 sm:px-8 bg-[#f8fafc] text-slate-900 font-doctor">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
            <img
              src={mockDoctorProfile.image}
              alt={mockDoctorProfile.name}
              className="w-full h-[500px] object-cover object-center rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Right Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              02 — Clinical Director
            </span>
            <h2 className="text-4xl font-extrabold text-slate-950">
              {mockDoctorProfile.name}
            </h2>
            <p className="text-sm text-blue-600 font-semibold">{mockDoctorProfile.role}</p>
          </div>

          <p className="text-sm text-slate-600 font-normal leading-relaxed">
            {mockDoctorProfile.bio}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-2 text-blue-600">
                <GraduationCap className="w-5 h-5" />
                <h4 className="font-bold text-sm text-slate-950">Education & Academic Record</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {mockDoctorProfile.education.map((edu, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-2 text-blue-600">
                <Award className="w-5 h-5" />
                <h4 className="font-bold text-sm text-slate-950">Certifications & Leadership</h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {mockDoctorProfile.certifications.map((cert, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs text-slate-600 pt-2 font-mono">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Spoken Languages: <strong className="text-slate-950">{mockDoctorProfile.languages.join(', ')}</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
