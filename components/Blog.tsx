import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Blog & Tips</span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Cerita dari Ruang Jahit</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-brand-navy dark:text-white font-bold hover:text-brand-gold dark:hover:text-brand-gold transition-colors">Lihat Semua Artikel &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-400 mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
                <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2 line-clamp-2 hover:text-brand-gold cursor-pointer transition-colors">{post.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 transition-colors">{post.excerpt}</p>
                <a href="#" className="text-brand-gold text-sm font-bold hover:underline">Baca Selengkapnya</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;