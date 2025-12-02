import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Layanan Kami</span>
          <h2 className="mt-3 text-4xl font-serif font-bold text-brand-navy dark:text-white mb-4 transition-colors">Solusi Jahit Profesional</h2>
          <p className="text-gray-500 dark:text-gray-400 transition-colors">Apapun kebutuhan busana Anda, dari perbaikan kecil hingga gaun pernikahan, kami siap melayani dengan sepenuh hati.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 hover:border-brand-pink dark:hover:border-brand-gold transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-300"></div>
                {/* Enhanced Icon Hover Effect */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 dark:bg-slate-700 p-2.5 rounded-full shadow-md text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-white hover:scale-125 group-hover:rotate-6">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed transition-colors">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;