
export enum ProjectCategory {
  ALL = 'Todos',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  FULLSTACK = 'Full Stack',
  UIUX = 'UI/UX Design',
  ECOMMERCE = 'E-commerce'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export type View = 'home' | 'works' | 'about' | 'contact';
