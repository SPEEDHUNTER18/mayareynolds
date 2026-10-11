import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function Intro({ intro }: { intro: SiteContent['intro'] }) {
  return (
    <section className="relative overflow-hidden bg-cream section-pad">
      <div className="shell">
        <h2 className="display-2 max-w-[19ch]">
          <Title parts={intro.title} />
        </h2>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:max-w-[66%] lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="eyebrow eyebrow-accent">{intro.lead}</p>
            <p className="mt-5 text-[16px] leading-[1.78] text-muted">{intro.paragraphs[0]}</p>
          </div>
          <div>
            <p className="text-[16px] leading-[1.78] text-muted">{intro.paragraphs[1]}</p>
          </div>
        </div>

        <div className="photo mt-12 aspect-[4/3] w-full lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:aspect-auto lg:h-[64%] lg:w-[30%] lg:-translate-y-1/2">
          <img src={intro.image.src} alt={intro.image.alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
