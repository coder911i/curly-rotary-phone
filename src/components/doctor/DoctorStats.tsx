import React from 'react';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const DoctorStats: React.FC = () => {
  const stats = [
    { label: 'Active Clinical Cases', value: 12000, suffix: '+' },
    { label: 'Clinical Leadership', value: 18, suffix: ' Yrs' },
    { label: 'Verified Rating', value: 4.9, isDecimal: true },
    { label: 'Patient Recovery Rate', value: 98, suffix: '%' }
  ];

  return (
    <section id="doc-stats" className="py-20 px-4 sm:px-8 bg-white border-y border-slate-200 text-slate-900 font-doctor">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-blue-600">
              {stat.isDecimal ? (
                <span>4.9 / 5</span>
              ) : (
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              )}
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-500 block font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
