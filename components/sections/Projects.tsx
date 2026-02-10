import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { PROJECTS } from '../../constants';
import GlowButton from '../ui/GlowButton';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6 flex">
        <SectionLabel number="04" label="Our Work" />

        <div ref={ref} className="flex-1">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-text-muted text-lg">A showcase of our recent work and technical capabilities.</p>
          </div>

          <div className="space-y-24">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isVisible={isVisible}
              />
            ))}

            {/* Coming Soon Card */}
            <div className="w-full h-48 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-text-muted hover:border-primary/30 transition-colors">
              <span className="text-xl font-display">More Projects Coming Soon...</span>
              <span className="text-sm mt-2">We are constantly building.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      {/* Image Side */}
      <div className={`w-full md:w-3/5 group relative overflow-hidden rounded-2xl border border-white/10 ${!isEven ? 'md:order-2' : ''}`}>
        <div className="aspect-video bg-surface relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <GlowButton onClick={() => window.open(project.link, '_blank')} icon={<ExternalLink size={18} />}>
              View Project
            </GlowButton>
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className={`w-full md:w-2/5 ${!isEven ? 'md:order-1 text-right md:text-right' : ''}`}>
        <h3 className="text-3xl font-display font-bold text-white mb-4">{project.title}</h3>
        <p className="text-text-muted leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className={`flex flex-wrap gap-2 mb-8 ${!isEven ? 'justify-end' : ''}`}>
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        
        <div className={!isEven ? 'flex justify-end' : ''}>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary font-bold inline-flex items-center gap-2 group transition-colors"
          >
            Live Preview <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;