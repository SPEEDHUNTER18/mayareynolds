import type { SiteContent } from './types';

/**
 * Single source of truth: Dr. Maya Reynolds' profile.
 * Every line of copy below is drawn from the profile document —
 * specialties, modalities, client focus, location and practice type.
 */
export const maya: SiteContent = {
  theme: 'maya',
  themeClass: 'theme-maya',
  brand: {
    name: 'Maya Reynolds',
    tagline: 'PSYD · SANTA MONICA, CA',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Services', href: '#services' },
    { label: 'Office', href: '#office' },
    { label: 'FAQs', href: '/faqs' },
  ],
  contactLabel: 'Contact',
  contactHref: '#contact',

  hero: {
    eyebrow: 'In-person & online therapy in Santa Monica, California',
    title: [
      { t: 'Anxiety & trauma therapy in Santa Monica to help you feel like ' },
      { t: 'yourself', script: true },
      { t: ' again.' },
    ],
    sub: 'Warm, evidence-based therapy for adults navigating anxiety, panic, trauma and burnout — in person from my Santa Monica office, or by secure telehealth anywhere in California.',
    cta: { label: 'Book an appointment', href: '#contact' },
    image: { src: '/images/maya-portrait.jpg', alt: 'Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica' },
    sideImage: { src: '/images/hero-side.jpg', alt: 'Sunlit seating area with an armchair by the window' },
  },

  intro: {
    title: [
      { t: 'You’re holding it together on the outside while quietly running on ' },
      { t: 'empty', script: true },
      { t: '.' },
    ],
    lead: 'Therapy for adults in Santa Monica who feel overwhelmed, anxious, or stuck.',
    paragraphs: [
      'Many of the people I work with are thoughtful, capable and self-aware — often the person everyone else relies on. Underneath, they are managing constant worry, tension in their body, broken sleep, or a quiet sense that something is about to go wrong.',
      'Others are still feeling the effects of earlier experiences that shape their relationships, confidence, or sense of safety. Whatever brought you here: what you are feeling is real, it makes sense, and with the right support it can change.',
    ],
    image: { src: '/images/intro.jpg', alt: 'A quiet, comfortable chair beside a sunlit window' },
  },

  whoWeHelp: {
    title: [{ t: 'Who I ' }, { t: 'help', script: true }],
    cards: [
      {
        title: 'Overworked professionals',
        text: 'Entrepreneurs, creatives and high-achieving adults who have been pushing through stress for years, and now feel disconnected from themselves.',
        image: { src: '/images/help-professionals.jpg', alt: 'A professional working quietly from a laptop at home' },
      },
      {
        title: 'Anxiety & panic',
        text: 'Adults living with constant worry, racing thoughts, sleepless nights, or panic that seems to arrive out of nowhere.',
        image: { src: '/images/help-anxiety.jpg', alt: 'A woman pausing with a warm cup by the window' },
      },
      {
        title: 'Carrying the past',
        text: 'Anyone still feeling the effects of earlier trauma — single-incident or long-standing — in their relationships, confidence or sense of safety.',
        image: { src: '/images/help-past.jpg', alt: 'A woman walking thoughtfully along the shoreline' },
      },
    ],
  },

  statement: {
    title: [
      { t: 'You deserve a place where your story is heard without judgment. Nothing you bring in here is too heavy to ' },
      { t: 'carry together', script: true },
      { t: '.' },
    ],
  },

  expertise: {
    title: [{ t: 'Areas of ' }, { t: 'expertise', script: true }],
    left: [
      'Anxiety',
      'Panic attacks',
      'Trauma & PTSD',
      'Burnout',
      'Perfectionism',
      'Relationships',
    ],
    right: [
      'Overthinking',
      'Sleep difficulties',
      'Body-based tension',
      'Emotional regulation',
      'High internal pressure',
      '…and more.',
    ],
  },

  about: {
    eyebrow: 'About Dr. Maya Reynolds, PsyD',
    title: [
      { t: 'Warm, collaborative and grounded — therapy built around ' },
      { t: 'you', script: true },
      { t: '.' },
    ],
    paragraphs: [
      'I am a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. My work focuses on anxiety, panic, trauma and burnout — for people who look functional on the outside while quietly struggling.',
      'Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques, so we can work with both the emotional and physiological sides of what you are experiencing.',
      'I believe therapy works best when clients feel respected, understood and actively involved. My goal is not just symptom relief, but helping you develop insight, resilience and a stronger relationship with yourself over time.',
    ],
    cta: { label: 'See my approach', href: '#approach' },
    image: { src: '/images/approach.jpg', alt: 'Two people in a warm, relaxed conversation on a couch' },
  },

  approach: {
    eyebrow: 'How I work',
    title: [
      { t: 'Where you’ve been doesn’t have to decide where you’re ' },
      { t: 'headed', script: true },
      { t: '.' },
    ],
    text: 'Different people need different tools. I draw from four evidence-based approaches and adapt them to your goals, your pace, and what your nervous system can hold — never a one-size-fits-all plan.',
    cta: { label: 'Explore services', href: '#services' },
    cards: [
      {
        title: 'Cognitive behavioral therapy',
        text: 'Notice the thought patterns keeping you stuck, and build more helpful ways of responding.',
        image: { src: '/images/mod-cbt.jpg', alt: 'An open notebook and pen ready for reflection' },
        linkLabel: 'Learn more',
        linkHref: '#services',
      },
      {
        title: 'EMDR',
        text: 'Process painful memories so they lose their hold — paced carefully, with safety first.',
        image: { src: '/images/mod-emdr.jpg', alt: 'A woman resting with her eyes closed in soft light' },
        linkLabel: 'Learn more',
        linkHref: '#services',
      },
      {
        title: 'Mindfulness practices',
        text: 'Grounding, breath and body tools that make calm something you can return to.',
        image: { src: '/images/mod-mindfulness.jpg', alt: 'A person sitting quietly above the coastline' },
        linkLabel: 'Learn more',
        linkHref: '#services',
      },
      {
        title: 'Body-oriented techniques',
        text: 'Work with the tension, bracing and exhaustion your body has been holding on to.',
        image: { src: '/images/mod-body.jpg', alt: 'Hands wrapped around a warm mug' },
        linkLabel: 'Learn more',
        linkHref: '#services',
      },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: [{ t: 'Ways I can ' }, { t: 'help', script: true }],
    cards: [
      {
        title: 'Anxiety & panic treatment',
        text: 'Practical, evidence-based tools to quiet the worry, interrupt the spiral, and understand what your anxiety is trying to tell you.',
        image: { src: '/images/svc-anxiety.jpg', alt: 'A woman looking out at calm water' },
        linkLabel: 'Learn more',
        linkHref: '#contact',
      },
      {
        title: 'Trauma therapy & EMDR',
        text: 'Carefully paced trauma work focused on safety and stabilization first — so you feel more regulated in daily life, not just during sessions.',
        image: { src: '/images/svc-trauma.jpg', alt: 'Sunlight streaming through tall trees' },
        linkLabel: 'Learn more',
        linkHref: '#contact',
      },
      {
        title: 'Burnout & stress recovery',
        text: 'For high-achieving adults and perfectionists running on empty — a space to slow down, reconnect, and build a more sustainable way of living and working.',
        image: { src: '/images/svc-burnout.jpg', alt: 'A woman resting in a quiet armchair' },
        linkLabel: 'Learn more',
        linkHref: '#contact',
      },
    ],
  },

  office: {
    eyebrow: 'The Santa Monica office',
    title: [{ t: 'A calm, private space to ' }, { t: 'exhale', script: true }, { t: '.' }],
    paragraphs: [
      'My office is a quiet, private space designed to feel calm and grounding — natural light, comfortable seating and an uncluttered room you can actually settle into. Clients often share that the space itself helps them feel more at ease the moment they arrive.',
      'Sessions are available in person at the office, or by secure telehealth from anywhere in California, so you can choose what fits your week.',
    ],
    details: [
      '123th Street 45 W, Santa Monica, CA 90401',
      'In-person & hybrid sessions available',
      'Natural light, quiet and completely private',
    ],
    cta: {
      label: 'Get directions',
      href: 'https://www.google.com/maps/search/?api=1&query=123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401',
      external: true,
    },
    images: [
      { src: '/images/office-2.jpg', alt: 'The Santa Monica therapy office with sofa, shelving and natural light' },
      { src: '/images/office-1.jpg', alt: 'Sunny treatment room with armchair, rug and tall windows' },
      { src: '/images/office-2.jpg', alt: 'Reading nook and shelving in the therapy office' },
    ],
  },

  callToAction: {
    eyebrow: 'Schedule an appointment',
    title: [{ t: 'Let’s find out if we’re the right ' }, { t: 'fit', script: true }, { t: '.' }],
    text: 'The first step is a simple conversation. Reach out to schedule an appointment and we will talk about what you are looking for, what has been getting in the way, and whether this practice feels right for you.',
    cta: { label: 'Book an appointment', href: '#contact' },
    leftImage: { src: '/images/cta-plant.jpg', alt: 'Potted plant beside a softly lit wall' },
    rightImage: { src: '/images/cta-coast.jpg', alt: 'Palm trees beside the sea at sunset' },
  },

  footer: {
    blurb:
      'I offer in-person therapy from my Santa Monica office, plus secure telehealth for adults located anywhere in California. Getting started is simple — send a message and we will find a time that works.',
    columns: [
      {
        heading: 'Navigate',
        items: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '#about' },
          { label: 'Approach', href: '#approach' },
          { label: 'Services', href: '#services' },
          { label: 'Office', href: '#office' },
          { label: 'FAQs', href: '/faqs' },
        ],
      },
      {
        heading: 'Services',
        items: [
          { label: 'Anxiety & panic', href: '#services' },
          { label: 'Trauma & EMDR', href: '#services' },
          { label: 'Burnout & stress', href: '#services' },
          { label: 'Mindfulness', href: '#approach' },
        ],
      },
    ],
    contact: {
      heading: 'Contact',
      lines: [
        '123th Street 45 W',
        'Santa Monica, CA 90401',
        'hello@drmayareynolds.com',
        '(310) 555-0142',
        'Serving Santa Monica, Los Angeles & all of California via telehealth',
      ],
    },
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Disclaimer', href: '#' },
    ],
    note: '© 2026 Dr. Maya Reynolds, PsyD · Santa Monica, CA',
  },

  seo: {
    title: 'Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description:
      'Dr. Maya Reynolds, PsyD offers warm, evidence-based therapy for anxiety, panic, trauma and burnout in Santa Monica, CA — in person and by secure telehealth across California.',
  },
};
