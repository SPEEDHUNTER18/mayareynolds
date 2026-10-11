import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function Services({ content }: { content: SiteContent['services'] }) {
  return (
    <section id="services" className="bg-bg section-pad">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,27%)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow eyebrow-accent">{content.eyebrow}</p>
            <h2 className="display-3 mt-5">
              <Title parts={content.title} />
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.cards.map((card, index) => {
              const fillRow =
                content.cards.length % 2 === 1 && index === content.cards.length - 1;
              return (
                <a
                  key={card.title}
                  href={card.linkHref}
                  className={`photo photo-shade group flex aspect-[5/4] flex-col justify-end p-6 ${
                    fillRow ? 'sm:col-span-2 sm:aspect-[16/7]' : ''
                  }`}
                >
                  <img src={card.image.src} alt={card.image.alt} loading="lazy" />
                  <div className="relative z-10">
                    <h3 className="font-display text-[22px] font-light leading-tight text-white md:text-[25px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 max-w-[62ch] text-[14px] leading-[1.6] text-white/85">
                      {card.text}
                    </p>
                    {card.linkLabel && (
                      <span className="mt-4 inline-block border-b border-white/60 pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors group-hover:border-accent-soft group-hover:text-accent-soft">
                        {card.linkLabel}
                      </span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
