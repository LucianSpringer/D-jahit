import React, { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-pink-50 dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Kata Mereka</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon Background */}
          <div className="absolute top-0 left-0 text-pink-200 dark:text-slate-800 transform -translate-x-10 -translate-y-10">
            <Quote className="h-32 w-32 opacity-50" />
          </div>

          <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 min-h-[300px] flex items-center transition-colors duration-300">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 p-8 md:p-12 transition-opacity duration-700 flex flex-col md:flex-row items-center gap-8 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                 <div className="flex-shrink-0">
                   <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-24 h-24 rounded-full border-4 border-brand-pink dark:border-slate-700 object-cover"
                    loading="lazy"
                   />
                 </div>
                 <div className="flex-1 text-center md:text-left">
                   <div className="flex justify-center md:justify-start gap-1 mb-4 text-brand-gold">
                     {[...Array(testimonial.rating)].map((_, i) => (
                       <Star key={i} className="h-5 w-5 fill-current" />
                     ))}
                   </div>
                   <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-6 transition-colors">"{testimonial.content}"</p>
                   <div>
                     <h4 className="font-bold text-brand-navy dark:text-white text-lg transition-colors">{testimonial.name}</h4>
                     <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-brand-gold w-8' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;