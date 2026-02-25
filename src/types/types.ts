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

interface Item {
  name: string;
  desc: string;
  tech: string[];
  link: string;
}

interface Projects {
  title: string;
  items: Item[];
}

interface Certs {
  title: string;
  items: string[];
}

export interface language {
  nav: Nav;
  hero: Hero;
  about: About;
  projects: Projects;
  certs: Certs;
}

export interface MultiLanguageContent {
  es: language;
  en: language;
}
