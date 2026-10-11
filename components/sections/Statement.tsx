import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function Statement({ content }: { content: SiteContent['statement'] }) {
  return (
    <section className="relative isolate flex min-h-[400px] items-center overflow-hidden py-20 lg:min-h-[520px]">
      <img
        src="/images/band.jpg"
        alt="Palm trees along the Santa Monica shoreline at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-shade" aria-hidden="true" />

      <div className="shell relative z-10">
        <h2 className="on-dark display-2 max-w-[24ch] text-onprimary">
          <Title parts={content.title} />
        </h2>
      </div>
    </section>
  );
}
