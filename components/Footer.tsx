
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-32 pt-20 border-t border-gray-200 dark:border-white/5">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-brand-green-vibrant border-2 border-primary">
              <img src="./assets/logo.jfif" alt="Black Nessie Logo" />
            </div>
            <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white">Black Nessie</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
            Estudio de desarrollo y diseño web enfocado en la creación de productos digitales que generan impacto.
          </p>
        </div>

        <div>
          <h5 className="text-gray-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Navegación</h5>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Proyectos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-gray-900 dark:text-white font-bold mb-6 uppercase tracking-widest text-[10px]">Contacto</h5>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
            <li className="flex items-center gap-2">hello@blacknessie.com</li>
            <li className="flex items-center gap-2">San Jose, Costa Rica</li>
            <li className="flex items-center gap-2">+506 8803-0381</li>
          </ul>
        </div>
      </div>

      <div className="py-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
        <p>© 2026 Black Nessie. Crafting Digital Excellence.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
};
