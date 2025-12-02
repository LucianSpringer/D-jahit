import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { X, ZoomIn, Search } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories and titles for auto-suggestions
  const categories = useMemo(() => {
    return ['Semua', ...new Set(PORTFOLIO_ITEMS.map(item => item.category))];
  }, []);

  const suggestions = useMemo(() => {
    return [...new Set(PORTFOLIO_ITEMS.map(item => item.title))];
  }, []);

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter(item => {
      const matchesCategory = activeFilter === 'Semua' || item.category === activeFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Galeri & Portofolio</span>
            <h2 className="mt-3 text-4xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Karya Terbaik Kami</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
             {/* Search Bar with Datalist */}
             <div className="relative w-full sm:w-64 group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-brand-gold transition-colors" />
                <input 
                  type="text" 
                  list="portfolio-suggestions"
                  placeholder="Cari model..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-brand-gold outline-none dark:text-white transition-all duration-300"
                />
                <datalist id="portfolio-suggestions">
                  {suggestions.map((title, index) => (
                    <option key={index} value={title} />
                  ))}
                </datalist>
             </div>

             <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-brand-navy dark:bg-brand-gold text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px] min-h-[400px]">
          {filteredItems.length > 0 ? filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up ${
                item.size === 'large' ? 'lg:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.category}
                    </p>
                    <h3 className="text-white text-xl font-serif font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {item.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white hover:text-brand-navy">
                      <ZoomIn className="h-4 w-4" />
                      <span>Perbesar</span>
                    </div>
                 </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full py-20 text-center text-gray-500 dark:text-gray-400 animate-fade-in-up">
               <p className="text-lg">Tidak ada item yang ditemukan untuk "{searchQuery}".</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-brand-gold font-medium hover:text-brand-navy dark:hover:text-white transition-colors">Lihat Semua Karya &rarr;</a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in-up" onClick={() => setSelectedImage(null)}>
          <button 
            type="button"
            className="absolute top-4 right-4 text-white hover:text-brand-gold transition-colors p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full Preview" 
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;