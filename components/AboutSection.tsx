
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-32">
      <section className="grid lg:grid-cols-2 gap-20 items-center bg-gray-50 dark:bg-white/5 p-8 md:p-12 rounded-[3rem] border border-gray-200 dark:border-white/10 shadow-inner dark:shadow-none">
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5]">
            <div className="absolute inset-0 bg-brand-green-vibrant/10 dark:bg-brand-green-vibrant/20 blur-[60px] rounded-full scale-110"></div>
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-brand-green rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-10 rotate-6 transition-transform hover:rotate-2 duration-500">
              <img alt="Rashid" className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-500" src="./assets/happy-clients.jfif" />
            </div>
            <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-primary rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20 -rotate-6 transition-transform hover:rotate-0 duration-500">
              <img alt="Sebas" className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-500" src="./assets/nessie-explaining.jfif" />
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase">Experiencia & Pasión</p>
            <h3 className="text-5xl font-extrabold display-font leading-tight text-gray-900 dark:text-white">Por qué elegir a Black Nessie</h3>
          </div>
          <div className="space-y-8 text-gray-600 dark:text-light-gray text-lg leading-relaxed">
            <p>
              <span className="font-bold text-gray-900 dark:text-white border-b-2 border-primary/30">Rashid</span> es un artesano de la interfaz. Especialista en crear mundos digitales donde la intuición y la estética se funden para ofrecer recorridos inolvidables al usuario final.
            </p>
            <p>
              <span className="font-bold text-gray-900 dark:text-white border-b-2 border-brand-green-vibrant/50">Sebas</span> es el arquitecto del sistema. Domina la complejidad del backend para que cada click sea una respuesta inmediata, segura y escalable ante cualquier desafío técnico.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center space-y-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Workflow</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">Ingeniería del Proceso</h2>
          <p className="text-gray-500 dark:text-slate-400 text-lg font-light leading-relaxed">Así es como orquestamos cada proyecto desde el concepto hasta la realidad.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { n: 1, title: 'Briefing', desc: 'Objetivos y audiencia.', icon: '📋' },
            { n: 2, title: 'Estructura', desc: 'UX y wireframing.', icon: '📐' },
            { n: 3, title: 'Diseño UI', desc: 'Estética de impacto.', icon: '🎨' },
            { n: 4, title: 'Desarrollo', desc: 'Código robusto.', icon: '💻' },
            { n: 5, title: 'Live', desc: 'Lanzamiento oficial.', icon: '🚀' },
          ].map((step) => (
            <motion.div
              key={step.n}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-card-dark p-8 rounded-[2rem] border border-gray-200 dark:border-white/5 relative group shadow-lg dark:shadow-none"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 border-2 border-primary text-primary dark:text-white flex items-center justify-center font-black mx-auto mb-6">
                {step.n}
              </div>
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{step.icon}</div>
              <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{step.title}</h4>
              <p className="text-sm text-gray-500 dark:text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
