import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function WhoWeHelp({ content }: { content: SiteContent['whoWeHelp'] }) {
  return (
    <section className="bg-bg section-pad">
      <div className="shell">
        <h2 className="display-2">
          <Title parts={content.title} />
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
          {content.cards.map((card) => (
            <article key={card.title}>
              <div className="photo aspect-[6/7] w-full">
                <img src={card.image.src} alt={card.image.alt} loading="lazy" />
              </div>
              <h3 className="display-3 mt-7 md:min-h-[2.15em]">{card.title}</h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
