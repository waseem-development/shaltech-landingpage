import { Globe, Smartphone, Bot, Settings, Users, Code, Zap, Layers } from 'lucide-react';
import { Service, Project, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
];

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Applications',
    description: 'Modern, responsive, and blazing-fast web apps built with Next.js and React. Designed for performance, SEO, and scalability.',
    icon: Globe,
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native iOS/Android and cross-platform Flutter apps with smooth animations and clean UX. Apps users love to use.',
    icon: Smartphone,
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Custom AI-powered chatbots, workflow automation, and smart integrations using the latest LLM APIs.',
    icon: Bot,
  },
  {
    id: 'custom',
    title: 'Custom Software',
    description: 'Tailor-made software systems solving specific business challenges — dashboards, ERPs, internal tools, APIs.',
    icon: Settings,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'anonify',
    title: 'Anonify',
    description: 'Modern web application enabling anonymous, AI-powered conversations. Built with Next.js and OpenAI integration, featuring real-time messaging.',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'Real-time'],
    link: 'https://anonify-rho.vercel.app/',
    image: 'anonify.png'  // Just the filename, no path needed
  },
  {
    id: 'excellent',
    title: 'Excellent School & Academy',
    description: 'A responsive, modern website for an educational institution featuring interactive sections and smooth animations.',
    tags: ['React', 'UI/UX', 'Education', 'Responsive'],
    link: 'https://excellent-project.vercel.app/',
    image: 'excellent.png'  // Just the filename
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "ShalTech delivered our website ahead of schedule and it looked better than we imagined. The attention to detail was incredible.",
    author: "Ahmed K.",
    role: "Business Owner, Quetta"
  },
  {
    id: '2',
    quote: "The mobile app they built for us works flawlessly. Our customers love it. We couldn't be happier with the result.",
    author: "Sara M.",
    role: "Startup Founder"
  },
  {
    id: '3',
    quote: "Their AI chatbot completely transformed our customer support. Response time dropped by 80%. Highly recommend!",
    author: "Bilal R.",
    role: "Operations Manager"
  }
];

export const TECH_STACK = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Layers },
  { name: 'Node.js', icon: Settings },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Python', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Firebase', icon: Zap },
  { name: 'OpenAI', icon: Bot },
  { name: 'TailwindCSS', icon: Layers },
  { name: 'AWS', icon: Globe },
];

export const CONTACT_INFO = {
  whatsapp1: '+92 348 2035277',
  whatsapp2: '+92 341 2011877',
  email: 'shaltechquetta@gmail.com'
};