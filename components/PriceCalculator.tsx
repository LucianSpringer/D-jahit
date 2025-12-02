import React, { useState, useEffect } from 'react';
import { Calculator, RefreshCw, Check } from 'lucide-react';

const PRICES: any = {
  garment: { dress: 250000, kebaya: 500000, shirt: 150000, pants: 175000, blazer: 300000 },
  fabric: { own: 0, satin: 100000, batik: 120000, brokat: 150000 },
  urgency: { standard: 0, express: 75000 }, // Express +75k
  extras: { furing: 35000, payet: 75000, embroidery: 50000 }
};

const PriceCalculator: React.FC = () => {
  const [garment, setGarment] = useState('dress');
  const [fabric, setFabric] = useState('own');
  const [urgency, setUrgency] = useState('standard');
  const [extras, setExtras] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const toggleExtra = (extra: string) => {
    if (extras.includes(extra)) {
      setExtras(extras.filter(e => e !== extra));
    } else {
      setExtras([...extras, extra]);
    }
  };

  useEffect(() => {
    let sum = PRICES.garment[garment] + PRICES.fabric[fabric] + PRICES.urgency[urgency];
    extras.forEach(e => sum += PRICES.extras[e]);
    setTotal(sum);
  }, [garment, fabric, urgency, extras]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section className="py-20 bg-brand-pink/20 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-full shadow-md mb-4 text-brand-gold">
            <Calculator className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-white transition-colors">Simulasi Harga Jahit</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 transition-colors">Dapatkan estimasi biaya jahit Anda secara instan.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-colors">
          {/* Controls */}
          <div className="p-8 md:w-2/3 space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Jenis Pakaian</label>
              <select 
                value={garment} 
                onChange={(e) => setGarment(e.target.value)}
                className="w-full p-3 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-brand-gold outline-none transition-colors"
              >
                <option value="dress">Dress / Gamis (Start Rp 250rb)</option>
                <option value="kebaya">Kebaya (Start Rp 500rb)</option>
                <option value="shirt">Kemeja / Blouse (Start Rp 150rb)</option>
                <option value="pants">Celana / Rok (Start Rp 175rb)</option>
                <option value="blazer">Jas / Blazer (Start Rp 300rb)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Bahan / Kain</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => setFabric('own')}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${fabric === 'own' ? 'border-brand-gold bg-orange-50 dark:bg-slate-700 text-brand-gold' : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                >
                  Bawa Sendiri
                </button>
                <button 
                  type="button"
                  onClick={() => setFabric('satin')}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${fabric === 'satin' ? 'border-brand-gold bg-orange-50 dark:bg-slate-700 text-brand-gold' : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                >
                  Satin Premium (+100k)
                </button>
                <button 
                  type="button"
                  onClick={() => setFabric('batik')}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${fabric === 'batik' ? 'border-brand-gold bg-orange-50 dark:bg-slate-700 text-brand-gold' : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                >
                  Katun Batik (+120k)
                </button>
                <button 
                  type="button"
                  onClick={() => setFabric('brokat')}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${fabric === 'brokat' ? 'border-brand-gold bg-orange-50 dark:bg-slate-700 text-brand-gold' : 'border-gray-200 dark:border-slate-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                >
                  Brokat Tile (+150k)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Tambahan (Opsional)</label>
              <div className="flex flex-wrap gap-3">
                {Object.keys(PRICES.extras).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleExtra(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all border ${
                      extras.includes(key) 
                        ? 'bg-brand-navy text-white border-brand-navy' 
                        : 'bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-slate-600 hover:border-gray-300'
                    }`}
                  >
                    {extras.includes(key) && <Check className="h-3 w-3" />}
                    <span className="capitalize">{key} (+{PRICES.extras[key]/1000}k)</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
               <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Kecepatan</label>
               <div className="flex items-center gap-4 bg-gray-50 dark:bg-slate-700 p-2 rounded-lg transition-colors">
                 <label className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded transition-colors">
                   <input 
                    type="radio" 
                    name="urgency" 
                    value="standard" 
                    checked={urgency === 'standard'} 
                    onChange={() => setUrgency('standard')} 
                    className="text-brand-gold focus:ring-brand-gold" 
                   />
                   <span className="text-sm dark:text-gray-300">Standar (1-2 Minggu)</span>
                 </label>
                 <label className="flex items-center gap-2 cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded transition-colors">
                   <input 
                    type="radio" 
                    name="urgency" 
                    value="express" 
                    checked={urgency === 'express'} 
                    onChange={() => setUrgency('express')} 
                    className="text-brand-gold focus:ring-brand-gold" 
                   />
                   <span className="text-sm font-bold text-brand-gold">Kilat 3 Hari (+75k)</span>
                 </label>
               </div>
            </div>

          </div>

          {/* Result */}
          <div className="bg-brand-navy text-white p-8 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand-gold rounded-full opacity-20 blur-3xl"></div>
            
            <div>
              <h3 className="text-xl font-serif font-bold mb-1">Estimasi Biaya</h3>
              <p className="text-gray-400 text-xs">*Harga final setelah konsultasi</p>
            </div>

            <div className="my-8">
              <div className="text-4xl font-bold text-brand-gold tracking-tight animate-fade-in-up">
                {formatCurrency(total)}
              </div>
              <div className="text-sm text-gray-300 mt-2">
                {garment.toUpperCase()} • {fabric === 'own' ? 'Bahan Sendiri' : fabric.toUpperCase()}
              </div>
            </div>

            <a 
              href={`https://wa.me/6281299887766?text=Halo%20D'Jahit,%20saya%20ingin%20konsultasi%20jahit%20${garment}%20dengan%20estimasi%20biaya%20${formatCurrency(total)}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-white text-brand-navy font-bold py-3 rounded-lg text-center hover:bg-brand-gold hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;