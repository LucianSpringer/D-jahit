import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, Send, Loader2 } from 'lucide-react';
import { Order } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Jahit Custom',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create new order object
      const newOrder: Order = {
        id: Date.now().toString(),
        customerName: formData.name,
        phone: formData.phone,
        serviceType: formData.service,
        message: formData.message,
        status: 'Baru',
        createdAt: new Date().toISOString()
      };

      // Save to LocalStorage (Simulated Database)
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

      // Prepare WhatsApp URL
      const message = `Halo D'Jahit Boutique, saya ingin order:\n\nNama: ${formData.name}\nLayanan: ${formData.service}\nPesan: ${formData.message}\n\nMohon info selanjutnya.`;
      const whatsappUrl = `https://wa.me/6281299887766?text=${encodeURIComponent(message)}`;

      // Reset form immediately
      setFormData({ name: '', phone: '', service: 'Jahit Custom', message: '' });
      
      // Open WhatsApp immediately (Synchronous to avoid popup blockers)
      window.open(whatsappUrl, '_blank');
      
      alert("Pesanan berhasil dicatat! Anda akan dialihkan ke WhatsApp.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Hubungi Kami</h2>
            <p className="text-gray-300 mb-8 text-lg">Siap mewujudkan busana impian Anda? Kunjungi butik kami atau konsultasi online sekarang.</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-brand-gold/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Lokasi Butik</h4>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                  <p className="text-gray-400 text-sm">{COMPANY_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-gold/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp / Telepon</h4>
                  <p className="text-gray-300">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-gold/20 p-3 rounded-lg mr-4">
                   <Clock className="h-6 w-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Jam Operasional</h4>
                  <p className="text-gray-300">Senin - Sabtu: 09.00 - 18.00</p>
                  <p className="text-gray-300">Minggu: Janji Temu</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-xl overflow-hidden shadow-lg border border-gray-700">
               <iframe 
                 src={COMPANY_INFO.mapEmbedUrl}
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 title="Google Maps"
               />
            </div>
          </div>

          {/* Smart Order Form */}
          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold font-serif text-brand-navy mb-6">Formulir Pemesanan</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" 
                    placeholder="Nama Anda" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">No. WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" 
                    placeholder="08xx-xxxx-xxxx" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Layanan yang Diminati</label>
                <select 
                  id="service" 
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none bg-white"
                >
                  <option value="Jahit Custom">Jahit Custom (Dress/Kebaya/Jas)</option>
                  <option value="Permak">Permak & Perbaikan</option>
                  <option value="Seragam">Seragam Keluarga/Kantor</option>
                  <option value="Konsultasi">Konsultasi Desain</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Detail Pesanan / Ukuran</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none" 
                  placeholder="Ceritakan model, bahan, atau kebutuhan khusus Anda..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-gold text-white font-bold py-3 rounded-lg hover:bg-yellow-700 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Memproses...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" /> Kirim Pesan & Order via WA
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                Data pesanan akan disimpan otomatis dan Anda akan diarahkan ke WhatsApp untuk konfirmasi instan.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;