import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Tim Ahli</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Di Balik Jahitan Rapi</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member) => (
             <div key={member.id} className="text-center group">
               <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 dark:border-slate-700 group-hover:border-brand-pink dark:group-hover:border-brand-gold transition-colors">
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                   loading="lazy"
                 />
               </div>
               <h3 className="text-xl font-bold text-brand-navy dark:text-white transition-colors">{member.name}</h3>
               <p className="text-brand-gold font-serif italic">{member.role}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;