import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const HERO_IMAGES = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=102",
  "https://picsum.photos/1920/1080?random=103"
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <span className="h-px w-8 bg-brand-gold"></span>
            <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">Butik Jahit Premium Bandung</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Jahit Custom <br/>
            <span className="text-brand-pink text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-white">
              Sempurna Untukmu
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-light drop-shadow-md">
            {COMPANY_INFO.tagline}. Wujudkan busana impian Anda dengan sentuhan personal dari penjahit profesional berpengalaman.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-brand-navy bg-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(217,119,6,0.5)] hover:bg-white"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-base font-medium rounded-full text-white backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/20 hover:text-white"
            >
              Lihat Galeri
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-brand-gold mb-1">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="text-xs text-gray-300">4.9/5 Rating Pelanggan</p>
            </div>
            <div className="text-center sm:text-left">
               <h4 className="text-xl font-bold font-serif">10+</h4>
               <p className="text-xs text-gray-300 uppercase tracking-wider">Tahun Pengalaman</p>
            </div>
            <div className="text-center sm:text-left">
               <h4 className="text-xl font-bold font-serif">100%</h4>
               <p className="text-xs text-gray-300 uppercase tracking-wider">Jaminan Kepuasan</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Book Appointment CTA */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-4 animate-bounce hover:animate-none group">
        <a 
          href="#contact"
          className="inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full shadow-2xl hover:bg-white hover:text-brand-gold transition-all duration-300 font-bold text-sm tracking-wide transform hover:scale-105 border border-brand-gold"
        >
          <Calendar className="h-4 w-4" />
          Buat Janji Sekarang
        </a>
      </div>
    </section>
  );
};

export default Hero;