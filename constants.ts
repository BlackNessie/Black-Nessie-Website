
import { Project, ProjectCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NexaUI Dashboard',
    description: 'Sistema de gestión administrativa de alta escalabilidad con visualización de datos en tiempo real.',
    category: ProjectCategory.FRONTEND,
    tags: ['React', 'Node.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/nexa/800/800'
  },
  {
    id: '2',
    title: 'PixelFlow Store',
    description: 'Tienda digital optimizada para conversión con pasarela de pagos integrada y diseño mobile-first.',
    category: ProjectCategory.ECOMMERCE,
    tags: ['Next.js', 'Stripe', 'Supabase'],
    imageUrl: 'https://picsum.photos/seed/pixel/800/800'
  },
  {
    id: '3',
    title: 'Creative Studio',
    description: 'Experiencia inmersiva para artistas visuales con animaciones fluidas y layout asimétrico.',
    category: ProjectCategory.UIUX,
    tags: ['Framer Motion', 'Three.js'],
    imageUrl: 'https://picsum.photos/seed/creative/800/800'
  },
  {
    id: '4',
    title: 'Vortex App',
    description: 'Aplicación web progresiva con enfoque en rendimiento y accesibilidad nivel AA.',
    category: ProjectCategory.FULLSTACK,
    tags: ['TypeScript', 'FastAPI', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/vortex/800/800'
  },
  {
    id: '5',
    title: 'Zenith Portals',
    description: 'Plataforma B2B para la gestión de activos digitales a gran escala.',
    category: ProjectCategory.BACKEND,
    tags: ['Go', 'Redis', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/zenith/800/800'
  },
  {
    id: '6',
    title: 'E-Commerce Elite',
    description: 'Personalización avanzada de Shopify con headless commerce architecture.',
    category: ProjectCategory.ECOMMERCE,
    tags: ['Shopify', 'Liquid', 'React'],
    imageUrl: 'https://picsum.photos/seed/shop/800/800'
  }
];

export const CLIENTS = [
  { name: 'MILANO', style: 'tracking-widest font-bold' },
  { name: 'RobotX', style: 'italic font-black' },
  { name: '</> On_Event', style: 'font-mono text-yellow-500' },
  { name: 'Grindelwald', style: 'font-serif' },
  { name: 'RISE™', style: 'font-black uppercase italic' }
];
