import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Moon, Sun, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Check if it's the admin link
    if (href === '#admin') {
      window.location.hash = 'admin';
      return;
    }

    // Check if it's a link to the homepage sections from a different view (like admin)
    if (!document.getElementById('hero') && href.startsWith('#')) {
      window.location.hash = href.replace('#', '');
      return;
    }

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const headerOffset = 80; // Height of fixed navbar
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL without jumping
      window.history.pushState(null, "", href);
    }
  };

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Layanan", href: "#services" },
    { name: "Proses", href: "#process" },
    { name: "Galeri", href: "#portfolio" },
    { name: "Harga", href: "#pricing" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm border-b border-pink-100 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, '#hero')}
              className="flex-shrink-0 flex items-center gap-2"
            >
              <div className="bg-pink-100 dark:bg-slate-800 p-2 rounded-full transition-colors">
                <Scissors className="h-6 w-6 text-brand-gold" />
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-brand-navy dark:text-white tracking-tight transition-colors">D’Jahit</span>
                <span className="hidden sm:inline-block ml-1 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Boutique</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="group relative text-gray-600 dark:text-gray-300 hover:text-brand-gold dark:hover:text-brand-gold px-2 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            
            <div className="h-6 w-px bg-gray-300 dark:bg-slate-700 mx-2"></div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
              href="#admin"
              onClick={(e) => handleScroll(e, '#admin')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors flex items-center gap-2"
              title="Admin Login"
            >
              <LogIn className="h-5 w-5" />
            </a>

            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-brand-gold text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-brand-gold border border-transparent hover:border-brand-gold transition-all duration-300 shadow-lg shadow-orange-200 dark:shadow-none transform hover:scale-105 active:scale-95"
            >
              Buat Janji
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-brand-gold focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-gray-600 dark:text-gray-300 hover:text-brand-gold hover:bg-pink-50 dark:hover:bg-slate-800 px-3 py-3 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#admin"
              onClick={(e) => handleScroll(e, '#admin')}
              className="block text-gray-600 dark:text-gray-300 hover:text-brand-gold hover:bg-pink-50 dark:hover:bg-slate-800 px-3 py-3 rounded-md text-base font-medium flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" /> Admin Login
            </a>
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="block w-full text-center mt-4 bg-brand-gold text-white px-5 py-3 rounded-lg font-bold shadow-lg hover:bg-orange-700 transition-colors"
            >
              Buat Janji Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;