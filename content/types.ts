export type TitlePart = { t: string; script?: boolean };
export type Title = TitlePart[];

export type Photo = { src: string; alt: string };

export type NavItem = { label: string; href: string };

export type Card = {
  title: string;
  text?: string;
  image: Photo;
  linkLabel?: string;
  linkHref?: string;
};

export type SiteContent = {
  theme: 'maya' | 'original';
  /** Wrapper class that selects the CSS variable palette. */
  themeClass: string;
  brand: { name: string; tagline: string };
  nav: NavItem[];
  contactLabel: string;
  contactHref: string;

  hero: {
    eyebrow: string;
    title: Title;
    sub: string;
    cta: { label: string; href: string };
    image: Photo;
    sideImage: Photo;
  };

  intro: {
    title: Title;
    lead: string;
    paragraphs: string[];
    image: Photo;
  };

  whoWeHelp: {
    title: Title;
    cards: Card[];
  };

  statement: { title: Title };

  expertise: { title: Title; left: string[]; right: string[] };

  about: {
    eyebrow: string;
    title: Title;
    paragraphs: string[];
    cta: { label: string; href: string };
    image: Photo;
  };

  approach: {
    eyebrow: string;
    title: Title;
    text: string;
    cta: { label: string; href: string };
    cards: Card[];
  };

  services: {
    eyebrow: string;
    title: Title;
    cards: Card[];
  };

  /** Part 3 of the brief — only exists on the redesigned site. */
  office?: {
    eyebrow: string;
    title: Title;
    paragraphs: string[];
    details: string[];
    cta: { label: string; href: string; external?: boolean };
    /** [hero, secondary, accent] — at least two are used. */
    images: Photo[];
  };

  callToAction: {
    eyebrow: string;
    title: Title;
    text: string;
    cta: { label: string; href: string };
    leftImage: Photo;
    rightImage: Photo;
  };

  footer: {
    blurb: string;
    columns: { heading: string; items: { label: string; href: string }[] }[];
    contact: { heading: string; lines: string[] };
    legal: { label: string; href: string }[];
    note: string;
  };

  /** Page-level SEO (the clone keeps the template's title). */
  seo: { title: string; description: string };
};
