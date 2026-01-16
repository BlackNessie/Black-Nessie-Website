
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-all group overflow-hidden"
      aria-label="Cambiar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-400 text-xl"
          >
            🌙
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.3 }}
            className="text-orange-500 text-xl"
          >
            ☀️
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};
