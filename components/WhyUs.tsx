import React from 'react';
import { TRUST_BADGES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-pink/30 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Mengapa Memilih D’Jahit?</h2>
           <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:-translate-y-2 transition-all duration-300 border-b-4 border-brand-gold">
              <div className="text-4xl font-serif font-bold text-brand-gold mb-3">{badge.number}</div>
              <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2 transition-colors">{badge.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;