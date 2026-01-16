
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-card-dark rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-none transition-all duration-300 hover:border-primary/30 dark:hover:border-primary/30 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-zinc-800">
        <img 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={project.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-background-dark/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
           <div className="bg-primary p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
             <span className="text-xl">↗</span>
           </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold py-1 px-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-600 dark:text-gray-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
