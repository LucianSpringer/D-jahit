import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface TrustBadge {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

export interface PricingItem {
  id: number;
  service: string;
  priceRange: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export type OrderStatus = 'Baru' | 'Diproses' | 'Selesai' | 'Dibatalkan';

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  serviceType: string;
  message: string;
  estimatedPrice?: number;
  status: OrderStatus;
  createdAt: string;
}