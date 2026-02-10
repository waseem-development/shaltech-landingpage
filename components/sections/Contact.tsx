import React, { useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { CONTACT_INFO } from '../../constants';
import { Phone, Mail, Send } from 'lucide-react';
import GlowButton from '../ui/GlowButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 flex">
        <SectionLabel number="06" />

        <div ref={ref} className="flex-1 grid md:grid-cols-2 gap-16">
          {/* Left Info */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Have a project in mind?</h2>
              <p className="text-text-muted text-lg">
                Reach out via WhatsApp for the fastest response, or send us an email — we reply within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <a href={`https://wa.me/${CONTACT_INFO.whatsapp1.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group">
                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">WhatsApp Support</div>
                  <div className="text-white font-mono font-bold">{CONTACT_INFO.whatsapp1}</div>
                </div>
              </a>

               <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-text-muted">Email Us</div>
                  <div className="text-white font-mono font-bold">{CONTACT_INFO.email}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form 
            onSubmit={handleSubmit}
            className={`space-y-6 bg-surface/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-text-muted uppercase">Your Name</label>
                <input required type="text" className="w-full bg-[#050810] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-text-muted uppercase">Your Email</label>
                <input required type="email" className="w-full bg-[#050810] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-text-muted uppercase">Project Type</label>
              <select className="w-full bg-[#050810] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>AI Solution</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-text-muted uppercase">Tell us about your project</label>
              <textarea required rows={4} className="w-full bg-[#050810] border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="We need a modern website for..." />
            </div>

            <GlowButton type="submit" className="w-full justify-center" disabled={formState !== 'idle'}>
              {formState === 'idle' ? (
                <>Send Message <Send size={18} /></>
              ) : formState === 'sending' ? (
                'Sending...'
              ) : (
                'Message Sent!'
              )}
            </GlowButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;