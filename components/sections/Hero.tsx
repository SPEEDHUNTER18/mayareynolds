import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function Hero({ hero }: { hero: SiteContent['hero'] }) {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 lg:grid-cols-[34%_1fr]">
        {/* Portrait */}
        <div className="photo aspect-[4/5] max-h-[600px] w-full lg:aspect-auto lg:max-h-none lg:min-h-[660px]">
          <img src={hero.image.src} alt={hero.image.alt} fetchPriority="high" />
        </div>

        <div className="relative flex flex-col justify-center px-6 pb-16 pt-12 sm:px-10 lg:py-24 lg:pl-20 lg:pr-32 xl:pl-28 xl:pr-36">
          <p className="eyebrow max-w-[26rem]">{hero.eyebrow}</p>

          <h1 className="display-1 mt-8 max-w-[20ch] lg:mt-24 lg:max-w-[30ch]">
            <Title parts={hero.title} />
          </h1>

          <p className="lede mt-7 max-w-[48ch]">{hero.sub}</p>

          <div className="mt-9">
            <a href={hero.cta.href} className="cta-link">
              {hero.cta.label}
            </a>
          </div>

          {/* Slim image running off the right edge, echoing the template */}
          <div className="absolute right-0 top-0 hidden h-full w-[50%] lg:block">
          </div>
        </div>
      </div>
    </section>
  );
}
