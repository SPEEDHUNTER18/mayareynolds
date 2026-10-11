import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Mulish, Sacramento } from 'next/font/google';
import './globals.css';

/* Font substitutions for the original template's licensed typefaces:
   Beaufort Pro -> Cormorant Garamond · Muli -> Mulish (its Google Fonts name)
   PrintedMoments -> Sacramento                                                    */
const display = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Mulish({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const script = Sacramento({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drmayareynolds.com'),
  title: {
    default: 'Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    template: '%s | Dr. Maya Reynolds, PsyD',
  },
  description:
    'Dr. Maya Reynolds, PsyD offers warm, evidence-based therapy for anxiety, panic, trauma and burnout in Santa Monica, CA — in person and by secure telehealth across California.',
  keywords: [
    'therapist Santa Monica',
    'anxiety therapy Santa Monica',
    'trauma therapy Santa Monica',
    'EMDR therapist Los Angeles',
    'burnout therapy California',
    'online therapy California',
    'psychologist Santa Monica CA',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Maya Reynolds, PsyD',
    title: 'Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description:
      'Warm, evidence-based therapy for adults navigating anxiety, panic, trauma and burnout — in person in Santa Monica or online across California.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2a3d33',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
