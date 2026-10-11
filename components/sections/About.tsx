import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function About({ content }: { content: SiteContent['about'] }) {
  return (
    <section id="about" className="relative overflow-hidden bg-sand section-pad">
      <div className="shell">
        <div className="lg:pr-[34%]">
          <p className="eyebrow eyebrow-accent">{content.eyebrow}</p>

          <h2 className="display-2 mt-6 max-w-[20ch]">
            <Title parts={content.title} />
          </h2>

          <div className="mt-8 max-w-[64ch] space-y-6">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-[16px] leading-[1.78] text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <a href={content.cta.href} className="cta-link mt-10">
            {content.cta.label}
          </a>
        </div>

        <div className="photo mt-12 aspect-[4/3] w-full lg:absolute lg:right-0 lg:top-12 lg:mt-0 lg:aspect-auto lg:bottom-14 lg:w-[27%]">
          <img src={content.image.src} alt={content.image.alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
