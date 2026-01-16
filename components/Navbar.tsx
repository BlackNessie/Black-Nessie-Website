
import React from 'react';
import { View } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-background-dark/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-brand-green-vibrant rounded-full overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(230,57,70,0.3)] group-hover:scale-110 transition-transform">
            <img src="./assets/logo.jfif" alt="Black Nessie Logo" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Black Nessie</h1>
            <p className="text-[10px] text-primary uppercase tracking-widest font-bold">Desarrollo & Diseño Web</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-semibold uppercase tracking-wider">
            <button
              onClick={() => onNavigate('works')}
              className={`${currentView === 'works' ? 'text-primary' : 'text-gray-600 dark:text-light-gray'} hover:text-primary transition-colors`}
            >
              Trabajos
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`${currentView === 'about' ? 'text-primary' : 'text-gray-600 dark:text-light-gray'} hover:text-primary transition-colors`}
            >
              Acerca
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`${currentView === 'contact' ? 'text-primary' : 'text-gray-600 dark:text-light-gray'} hover:text-primary transition-colors`}
            >
              Contacto
            </button>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-white/10">
            <ThemeToggle />
            <div className="hidden lg:block">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gray-900 dark:bg-white/5 border border-gray-800 dark:border-white/10 hover:border-primary/50 text-white px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg dark:shadow-none"
              >
                EMPEZAR PROYECTO
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
