
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCategory } from '../types';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const WorksSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);

  const filteredProjects = activeCategory === ProjectCategory.ALL 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory || (activeCategory as string === 'E-commerce' && p.category === ProjectCategory.ECOMMERCE));

  const categories = [
    ProjectCategory.ALL,
    ProjectCategory.FRONTEND,
    ProjectCategory.BACKEND,
    ProjectCategory.FULLSTACK,
    ProjectCategory.ECOMMERCE,
    ProjectCategory.UIUX
  ];

  return (
    <section className="space-y-16 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portafolio</span>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Nuestros <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Trabajos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
            Explora nuestra selección de proyectos donde la tecnología se encuentra con el diseño excepcional.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20' 
                : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
