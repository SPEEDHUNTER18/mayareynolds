import HomePage from '@/components/HomePage';
import { maya } from '@/content/maya';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dr. Maya Reynolds, PsyD',
  description:
    'Licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, panic, trauma and burnout — in person and by secure telehealth across California.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123th Street 45 W',
    addressLocality: 'Santa Monica',
    addressRegion: 'CA',
    postalCode: '90401',
    addressCountry: 'US',
  },
  areaServed: 'California',
  serviceType: [
    'Anxiety therapy',
    'Trauma therapy',
    'EMDR',
    'Burnout counselling',
    'Online therapy',
  ],
  availableLanguage: 'en',
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage content={maya} />
    </>
  );
}
