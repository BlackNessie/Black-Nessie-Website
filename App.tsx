
import React, { useState, useEffect } from 'react';
import { View } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorksSection } from './components/WorksSection';
import { AboutSection } from './components/AboutSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CLIENTS } from './constants';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <div className="space-y-32">
            <Hero onNavigate={setView} />

            <section className="text-center space-y-12">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold display-font text-gray-900 dark:text-white uppercase tracking-widest">Nuestros Clientes</h3>
                <p className="text-gray-500 dark:text-light-gray text-sm">Marcas líderes que han potenciado su presencia digital con nosotros</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {CLIENTS.map((client, i) => (
                  <div key={i} className="w-44 h-24 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-pointer shadow-sm dark:shadow-none">
                    <span className={`text-gray-800 dark:text-white text-xl opacity-80 ${client.style}`}>{client.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <WorksSection />

            <section className="bg-gradient-to-br from-brand-green to-brand-green-vibrant dark:from-brand-green dark:to-background-dark rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white">¿Listo para empezar tu próximo gran proyecto?</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  Estamos listos para transformar tus ideas en una realidad digital impactante. Hablemos sobre cómo podemos ayudarte a escalar tu negocio.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button onClick={() => setView('contact')} className="bg-primary hover:bg-red-600 text-white px-10 py-4 rounded-2xl font-bold shadow-2xl transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95">
                    Trabajemos Juntos
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold backdrop-blur-sm transition-all border border-white/10 transform hover:scale-105 active:scale-95">
                    Agendar Llamada
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      case 'works':
        return <WorksSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/30 transition-colors duration-300">
      <Navbar currentView={view} onNavigate={setView} />

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-white dark:bg-card-dark shadow-2xl rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white transition-all group"
      >
        <span className="transition-transform group-hover:-translate-y-1 font-bold">↑</span>
      </button>
    </div>
  );
};

export default App;
