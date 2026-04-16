interface Nav {
  about: string;
  projects: string;
  skills: string;
  certs: string;
}

interface Hero {
  tag: string;
  title: string;
  description: string;
  cta: string;
}

interface About {
  title: string;
  texts: string[];
}

interface Certs {
  title: string;
  items: string[];
}

export interface CvLanguage {
  title: string;
  columns: number;
  hidden: boolean;
  items: CvLanguageItem[]
}

export interface CvLanguageItem {
  id: string;
  hidden: boolean;
  language: string
  fluency: string;
  level: number;

}

export interface language {
  nav: Nav;
  hero: Hero;
  about: About;
  projects: Project;
  certs: Certs;
}

export interface MultiLanguageContent {
  es: language;
  en: language;
}

export interface Skills {
  category: string;
  items: Item[]
}

export interface Item {
  name: string;
  level: string;
  keywords: string[];
}

export interface CVItem {
  id: string;
  hidden: boolean;
  icon: string;
  name: string;
  proficiency: string;
  level: number;
  keywords: string[];
}

export interface CertificationItem {
  id: string;
  hidden: boolean;
  options: {
    showLinkInTitle: boolean;
  };
  title: string;
  issuer: string;
  date: string;
  website: {
    url: string;
    label: string;
  };
  description: string;
}

export interface CVProjectItem {
  id: string;
  hidden: boolean;
  options: {
    showLinkInTitle: boolean;
  };
  name: string;
  period: string;
  website: {
    url: string;
    label: string;
  };
  description: string;
}

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  type: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  featured: boolean;
  images: string[];
  demo?: string;
}
