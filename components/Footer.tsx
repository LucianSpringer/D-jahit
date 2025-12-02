import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Instagram, Facebook, Scissors, Heart, LogIn } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="h-6 w-6 text-brand-gold" />
              <span className="font-serif font-bold text-2xl">D’Jahit Boutique</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Jasa jahit profesional di Bandung dengan dedikasi tinggi pada detail dan kepuasan pelanggan. 
              Mewujudkan busana impian Anda menjadi kenyataan dengan harga terjangkau.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 group" aria-label="Instagram">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all duration-300 group" aria-label="Facebook">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Navigasi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#hero" className="hover:text-brand-gold transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-brand-gold transition-colors">Galeri</a></li>
              <li><a href="#pricing" className="hover:text-brand-gold transition-colors">Daftar Harga</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Layanan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Custom Dress</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Kebaya Wisuda</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Seragam Kantor</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Permak Premium</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 D’Jahit Boutique. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <p className="flex items-center gap-1">
              Dibuat dengan <Heart className="h-3 w-3 text-red-500 fill-current" /> di Bandung
            </p>
            <div className="h-4 w-px bg-slate-700 mx-2"></div>
            <a href="#admin" className="text-gray-500 hover:text-brand-gold transition-colors flex items-center gap-1" title="Admin Dashboard">
              <LogIn className="h-3 w-3" /> Admin Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;