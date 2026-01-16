
import React from 'react';
import { motion } from 'framer-motion';
import { View } from '../types';

interface HeroProps {
  onNavigate: (view: View) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-brand-green-vibrant rounded-[2.5rem] overflow-hidden min-h-[550px] flex items-center px-8 md:px-12 py-16 group shadow-2xl shadow-black/50">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          alt="Code Background"
          className="w-full h-full object-cover mix-blend-overlay"
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
        />
      </div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold display-font leading-[1.1]">
            Hola!<br />
            <span className="text-off-white/90">Somos Rashid & Sebas</span>
          </h2>
          <div className="space-y-4">
            <p className="text-xl font-medium text-white/80">Desarrolladores Full Stack</p>
            <p className="text-white/60 max-w-md text-lg leading-relaxed">
              Construimos experiencias web de alta gama, combinando ingeniería robusta con diseño de vanguardia.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate('works')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full font-bold flex items-center gap-2 transition-all group"
            >
              Ver Trabajos

            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-primary hover:bg-red-600 text-white rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_10px_20px_rgba(230,57,70,0.3)] hover:scale-105"
            >
              Contáctanos
              <span>💬</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <img
              alt="Creative Portrait"
              className="relative w-full h-full object-cover rounded-3xl border border-white/20 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out"
              src="./assets/rashid-bollas-nessie.jfif"
            />
            <div className="absolute -top-6 -right-6 bg-primary p-5 rounded-2xl shadow-2xl shadow-primary/40 border border-white/20 animate-bounce">
              <span className="text-white text-3xl">🦕</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
