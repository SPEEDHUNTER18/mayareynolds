import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      /* Every colour is a CSS variable, so the same markup renders either
         theme — switch the wrapper class and the whole palette follows. */
      colors: {
        bg: 'var(--c-bg)',
        cream: 'var(--c-cream)',
        sand: 'var(--c-sand)',
        card: 'var(--c-card)',
        ink: 'var(--c-ink)',
        muted: 'var(--c-muted)',
        primary: 'var(--c-primary)',
        'primary-soft': 'var(--c-primary-soft)',
        accent: 'var(--c-accent)',
        'accent-soft': 'var(--c-accent-soft)',
        line: 'var(--c-line)',
        onprimary: 'var(--c-on-primary)',
        'onprimary-muted': 'var(--c-on-primary-muted)',
        shade: 'var(--c-shade)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      maxWidth: {
        shell: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
