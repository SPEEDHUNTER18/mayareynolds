import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

/**
 * "Our Office" — the new section required by Part 3 of the brief.
 * It reuses the page's grid, type scale and spacing so it reads as though
 * it always belonged to the template.
 */
export default function Office({ content }: { content: NonNullable<SiteContent['office']> }) {
  const [wide, first, second] = content.images;

  return (
    <section id="office" className="bg-sand section-pad">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,42%)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="eyebrow eyebrow-accent">{content.eyebrow}</p>

            <h2 className="display-2 mt-6">
              <Title parts={content.title} />
            </h2>

            <div className="mt-7 max-w-[58ch] space-y-6">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-[16px] leading-[1.78] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-9 border-t border-line">
              {content.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-4 border-b border-line py-4 text-[15px] leading-[1.6]"
                >
                  <span aria-hidden="true" className="mt-[2px] text-accent">
                    ✦
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <a
              href={content.cta.href}
              className="cta-link mt-9"
              target={content.cta.external ? '_blank' : undefined}
              rel={content.cta.external ? 'noreferrer' : undefined}
            >
              {content.cta.label}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="photo col-span-2 aspect-[16/10] w-full">
              <img src={wide.src} alt={wide.alt} loading="lazy" />
            </div>
            <div className="photo aspect-[4/3] w-full">
              <img src={first.src} alt={first.alt} loading="lazy" />
            </div>
            <div className="photo aspect-[4/3] w-full">
              <img
                src={second.src}
                alt={second.alt}
                loading="lazy"
                className="!object-[72%_45%] !scale-[1.45]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
