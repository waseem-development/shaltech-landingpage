import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050810] border-t border-white/5 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand with Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="ShalTech Logo" 
                className="h-12 w-auto"
              />
              <div>
                <span className="text-3xl font-display font-bold text-white">
                  Shal<span className="text-primary">Tech</span>
                </span>
              </div>
            </div>
            <p className="text-text-muted max-w-sm">
              Code, Create, and Scale. We are a Quetta-based software startup building modern solutions for a digital world.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all group">
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-text-muted">
              <li>{CONTACT_INFO.whatsapp1}</li>
              <li>{CONTACT_INFO.whatsapp2}</li>
              <li>{CONTACT_INFO.email}</li>
              <li className="pt-4 text-sm text-text-dark">Quetta, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-dark">
          <p>© 2026 ShalTech. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> in Quetta
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;