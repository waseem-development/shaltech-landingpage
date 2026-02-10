import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string; // Placeholder or url
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface NavItem {
  label: string;
  href: string;
}
