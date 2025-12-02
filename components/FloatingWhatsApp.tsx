import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "6281299887766";
  const message = "Halo D'Jahit Boutique, saya tertarik dengan jasa jahit Anda.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center gap-2 group animate-pulse hover:animate-none"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pl-0 group-hover:pl-2">
        Chat Kami
      </span>
    </a>
  );
};

export default FloatingWhatsApp;