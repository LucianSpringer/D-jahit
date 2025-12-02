import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Alur Pemesanan</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Mudahnya Menjahit di Sini</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop Only) */}
           <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-slate-700 -z-0"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-pink-50 dark:border-slate-700 group hover:border-brand-gold transition-colors duration-300">
                <step.icon className="h-10 w-10 text-brand-gold" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-navy dark:bg-brand-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3 transition-colors">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs transition-colors">{step.description}</p>
              
              {/* Mobile Arrow */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="lg:hidden mt-8 text-gray-300 dark:text-gray-600">
                  <ChevronRight className="h-8 w-8 mx-auto rotate-90 md:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;