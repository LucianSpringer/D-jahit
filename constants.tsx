import { 
  Scissors, Ruler, Shirt, Star, Clock, Heart, 
  MapPin, Phone, Mail, CheckCircle, Truck, 
  Gem, Palette, Users, Layers
} from 'lucide-react';
import { 
  Service, TrustBadge, ProcessStep, PortfolioItem, 
  PricingItem, Testimonial, TeamMember, BlogPost, FAQItem 
} from './types';

export const COMPANY_INFO = {
  name: "D’Jahit Boutique",
  tagline: "Jahit Custom Rapi ⊹ Cepat ⊹ Terjangkau",
  city: "Bandung, Jawa Barat",
  address: "Jl. Riau No. 123, Bandung Wetan",
  phone: "+62 812-9988-7766",
  email: "hello@djahitboutique.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.838084896792!2d107.61678931477265!3d-6.909903995007058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e88662f%3A0x37a5d3848b89e7a!2sJl.%20L.20R.E.%20Martadinata%2C%20Bandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1645524268152!5m2!1sen!2sid"
};

export const SERVICES: Service[] = [
  { id: 1, title: "Custom Dress & Gaun", description: "Gaun pesta, bridesmaid, dan casual dress sesuai ukuran tubuh.", icon: Gem, image: "https://picsum.photos/400/300?random=1" },
  { id: 2, title: "Kebaya Modern & Klasik", description: "Jahit kebaya wisuda, lamaran, dan pernikahan dengan payet detail.", icon: Heart, image: "https://picsum.photos/400/300?random=2" },
  { id: 3, title: "Seragam Keluarga & Kantor", description: "Pemesanan partai besar untuk seragam keluarga atau korporat.", icon: Users, image: "https://picsum.photos/400/300?random=3" },
  { id: 4, title: "Permak Premium", description: "Resize, potong celana, ganti resleting dengan finishing butik.", icon: Scissors, image: "https://picsum.photos/400/300?random=4" },
  { id: 5, title: "Jas & Blazer Wanita", description: "Tailoring jas formal dengan cuttingan sharp dan elegan.", icon: Shirt, image: "https://picsum.photos/400/300?random=5" },
  { id: 6, title: "Baju Anak", description: "Pakaian anak yang nyaman dengan desain lucu dan unik.", icon: Palette, image: "https://picsum.photos/400/300?random=6" },
  { id: 7, title: "Gamis & Syar'i", description: "Busana muslimah yang anggun, tidak menerawang, dan nyaman.", icon: Layers, image: "https://picsum.photos/400/300?random=7" },
  { id: 8, title: "Konsultasi Desain", description: "Bingung model? Desainer kami siap membantu sketsa impian Anda.", icon: Star, image: "https://picsum.photos/400/300?random=8" },
];

export const TRUST_BADGES: TrustBadge[] = [
  { id: 1, number: "10+", title: "Tahun Pengalaman", description: "Melayani warga Bandung sejak 2013." },
  { id: 2, number: "5K+", title: "Baju Terjahit", description: "Ribuan pelanggan puas dengan hasil kami." },
  { id: 3, number: "100%", title: "Jaminan Pas", description: "Garansi perbaikan gratis jika ukuran tidak sesuai." },
  { id: 4, number: "3", title: "Hari Kilat", description: "Layanan ekspres tersedia untuk kebutuhan mendesak." },
  { id: 5, number: "A+", title: "Kualitas Butik", description: "Jahitan halus, obras rapi, fitting sempurna." },
  { id: 6, number: "24/7", title: "Support", description: "Siap menjawab pertanyaan via WhatsApp." },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: "Konsultasi", description: "Diskusikan model, bahan, dan budget via WA atau di butik.", icon: Phone },
  { id: 2, title: "Pengukuran", description: "Diukur langsung oleh penjahit profesional kami.", icon: Ruler },
  { id: 3, title: "Pembayaran DP", description: "Konfirmasi pesanan dengan deposit 50%.", icon: CheckCircle },
  { id: 4, title: "Proses Jahit", description: "Pengerjaan teliti oleh tim berpengalaman.", icon: Scissors },
  { id: 5, title: "Fitting", description: "Mencoba baju (opsional) untuk memastikan kenyamanan.", icon: Shirt },
  { id: 6, title: "Pengambilan", description: "Baju siap diambil atau dikirim ke rumah Anda.", icon: Truck },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: "Wedding Dress Satin", category: "Gaun", image: "https://picsum.photos/600/800?random=10", size: "large" },
  { id: 2, title: "Kebaya Brokat Sage", category: "Kebaya", image: "https://picsum.photos/600/600?random=11", size: "medium" },
  { id: 3, title: "Blazer Kantor Navy", category: "Formal", image: "https://picsum.photos/600/400?random=12", size: "small" },
  { id: 4, title: "Gamis Syar'i Premium", category: "Muslim", image: "https://picsum.photos/600/700?random=13", size: "large" },
  { id: 5, title: "Summer Dress Floral", category: "Casual", image: "https://picsum.photos/600/500?random=14", size: "medium" },
  { id: 6, title: "Kemeja Batik Custom", category: "Pria", image: "https://picsum.photos/600/600?random=15", size: "medium" },
];

export const PRICING_2025: PricingItem[] = [
  { id: 1, service: "Permak Ringan", priceRange: "Mulai Rp 25rb", features: ["Potong Celana", "Ganti Resleting", "Kecilkan Pinggang"] },
  { id: 2, service: "Jahit Blouse/Kemeja", priceRange: "Mulai Rp 150rb", features: ["Tanpa Furing", "Jahitan Butik", "Free Konsultasi"] },
  { id: 3, service: "Jahit Dress/Gamis", priceRange: "Mulai Rp 250rb", features: ["Model Simple", "Termasuk Furing Standar", "Fitting 1x"] },
  { id: 4, service: "Kebaya & Gaun Pesta", priceRange: "Mulai Rp 500rb", features: ["Pola Custom", "Aplikasi Payet Ringan", "Fitting 2x"] },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah A.", role: "Mahasiswi", content: "Suka banget sama hasil jahitannya! Rapi banget dan pas di badan. Mbak-mbaknya juga ramah banget pas konsul.", avatar: "https://picsum.photos/100/100?random=20", rating: 5 },
  { id: 2, name: "Ibu Ratna", role: "Ibu Rumah Tangga", content: "Langganan jahit seragam keluarga di sini. Selalu tepat waktu dan hasilnya memuaskan. Recommended!", avatar: "https://picsum.photos/100/100?random=21", rating: 5 },
  { id: 3, name: "Diana P.", role: "Karyawan Swasta", content: "Awalnya ragu jahit online, tapi ternyata ukurannya pas banget sesuai panduan. Next pasti order lagi.", avatar: "https://picsum.photos/100/100?random=22", rating: 4 },
];

export const TEAM: TeamMember[] = [
  { id: 1, name: "Ibu Ani", role: "Kepala Penjahit", image: "https://picsum.photos/300/400?random=30" },
  { id: 2, name: "Siti", role: "Spesialis Payet", image: "https://picsum.photos/300/400?random=31" },
  { id: 3, name: "Budi", role: "Pattern Maker", image: "https://picsum.photos/300/400?random=32" },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: "Tren Warna Kebaya 2025", excerpt: "Simak warna-warna pastel yang akan mendominasi pernikahan tahun depan.", date: "12 Jan 2025", image: "https://picsum.photos/400/250?random=40" },
  { id: 2, title: "Tips Memilih Kain untuk Gamis", excerpt: "Jangan salah pilih! Ini jenis kain yang adem dan jatuh untuk busana muslim.", date: "05 Feb 2025", image: "https://picsum.photos/400/250?random=41" },
  { id: 3, title: "Cara Merawat Gaun Berpayet", excerpt: "Panduan mencuci dan menyimpan gaun pesta agar awet bertahun-tahun.", date: "20 Feb 2025", image: "https://picsum.photos/400/250?random=42" },
];

export const FAQS: FAQItem[] = [
  { id: 1, question: "Apakah bisa jahit online?", answer: "Bisa! Kami menyediakan panduan ukur mandiri via video call atau PDF." },
  { id: 2, question: "Berapa lama proses pengerjaan?", answer: "Standar 1-2 minggu tergantung antrian. Layanan kilat 3 hari tersedia dengan biaya tambahan." },
  { id: 3, question: "Apakah bahan disediakan?", answer: "Kami menyediakan beberapa jenis bahan, namun Anda juga bebas membawa bahan sendiri." },
  { id: 4, question: "Jika ukuran tidak pas, apakah ada garansi?", answer: "Ya, kami memberikan garansi perbaikan gratis 1x jika kesalahan dari pihak kami." },
  { id: 5, question: "Berapa kisaran harga jahit?", answer: "Harga bervariasi tergantung model dan tingkat kesulitan. Silakan cek bagian Daftar Harga atau hubungi kami untuk estimasi." },
  { id: 6, question: "Apakah menerima permak jeans?", answer: "Tentu, kami menerima permak segala jenis pakaian termasuk jeans, jas, dan jaket." },
];
