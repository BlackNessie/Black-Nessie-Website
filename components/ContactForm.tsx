
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Desarrollo Web', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Desarrollo Web', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12">
      <aside className="lg:col-span-4 space-y-8">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Hablemos directamente</h3>
          <p className="text-gray-500 dark:text-slate-400">Si prefieres una comunicación más rápida, puedes contactarnos por estos canales.</p>
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all group shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center text-xl">💬</div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">WhatsApp</p>
                <p className="font-bold text-gray-900 dark:text-white">+506 8803-0381</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all group shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center text-xl">📧</div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</p>
                <p className="font-bold text-gray-900 dark:text-white">hola@blacknessie.com</p>
              </div>
            </a>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-card-dark rounded-3xl border border-gray-200 dark:border-white/5 space-y-4 shadow-xl dark:shadow-none">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nuestra ubicación</h3>
          <div className="aspect-video bg-gray-100 dark:bg-zinc-900 rounded-2xl overflow-hidden relative grayscale invert dark:invert-0 dark:opacity-40">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm text-gray-500 dark:text-slate-400 flex items-center gap-2 font-medium">📍 San Pedro, San Jose, Costa Rica</p>
        </div>
      </aside>

      <div className="lg:col-span-8 bg-white dark:bg-card-dark rounded-[2.5rem] p-8 md:p-12 border border-gray-200 dark:border-white/5 shadow-2xl dark:shadow-none">
        <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Envíanos un mensaje</h3>
        <p className="text-gray-500 dark:text-slate-400 mb-10 text-lg font-light">Cuéntanos sobre tu negocio y cómo podemos ayudarte.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Nombre Completo</label>
              <input
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-white/20"
                placeholder="Ej. John Wick" required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Email Corporativo</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-white/20"
                placeholder="correo@empresa.com" required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Asunto</label>
            <select
              value={formData.subject}
              onChange={e => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
            >
              <option>Desarrollo Web</option>
              <option>Diseño UI/UX</option>
              <option>E-commerce</option>
              <option>Backend / API</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Tu Mensaje</label>
            <textarea
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-gray-400 dark:placeholder-white/20"
              placeholder="¿En qué podemos ayudarte?" rows={5} required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full md:w-auto bg-primary text-white font-bold py-5 px-12 rounded-2xl hover:bg-red-600 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/30"
          >
            {status === 'loading' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
            <span className="text-xl">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
};
