import React from 'react';
import { PRICING_2025 } from '../constants';
import { Check, Download } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleDownload = () => {
    // Simulate a PDF file download using a Blob
    const dummyContent = `
D'JAHIT BOUTIQUE - KATALOG HARGA 2025
=====================================

1. Permak Ringan
   - Harga: Mulai Rp 25.000
   - Layanan: Potong Celana, Ganti Resleting, Kecilkan Pinggang

2. Jahit Blouse/Kemeja
   - Harga: Mulai Rp 150.000
   - Layanan: Tanpa Furing, Jahitan Butik, Free Konsultasi

3. Jahit Dress/Gamis
   - Harga: Mulai Rp 250.000
   - Layanan: Model Simple, Termasuk Furing Standar, Fitting 1x

4. Kebaya & Gaun Pesta
   - Harga: Mulai Rp 500.000
   - Layanan: Pola Custom, Aplikasi Payet Ringan, Fitting 2x

Hubungi kami di +62 812-9988-7766 untuk pemesanan.
    `;
    
    const blob = new Blob([dummyContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Katalog-D-Jahit-2025.pdf');
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="pricing" className="py-20 bg-brand-navy text-white relative overflow-hidden scroll-mt-28">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold tracking-wider text-sm uppercase">Daftar Harga 2025</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif font-bold text-white">Transparan & Terjangkau</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Harga estimasi untuk layanan standar. Harga final ditentukan setelah konsultasi desain dan bahan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_2025.map((item) => (
            <div key={item.id} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-brand-gold transition-colors duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{item.service}</h3>
              <div className="text-brand-gold font-serif text-2xl font-bold mb-6">{item.priceRange}</div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="w-full block text-center bg-white/10 hover:bg-brand-gold text-white py-3 rounded-lg transition-colors font-medium">
                Tanya Detail
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button 
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center text-brand-gold hover:text-white transition-colors border-b border-brand-gold hover:border-white pb-1 group"
          >
            <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            Download Katalog Harga Lengkap (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;