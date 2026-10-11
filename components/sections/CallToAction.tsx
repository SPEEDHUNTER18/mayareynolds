import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function CallToAction({ content }: { content: SiteContent['callToAction'] }) {
  return (
    <section className="relative overflow-hidden bg-cream section-pad">
      <div className="photo absolute left-0 top-1/2 hidden h-[76%] w-[11%] max-w-[170px] -translate-y-1/2 lg:block">
        <img src={content.leftImage.src} alt={content.leftImage.alt} loading="lazy" />
      </div>
      <div className="photo absolute right-0 top-1/2 hidden h-[76%] w-[24%] max-w-[360px] -translate-y-1/2 lg:block">
        <img src={content.rightImage.src} alt={content.rightImage.alt} loading="lazy" />
      </div>

      <div className="shell relative z-10">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="eyebrow">{content.eyebrow}</p>

          <h2 className="display-2 mt-6">
            <Title parts={content.title} />
          </h2>

          <p className="mt-6 text-[16px] leading-[1.8] text-muted">{content.text}</p>

          <div className="mt-9 flex justify-center">
            <a href={content.cta.href} className="pill-btn pill-btn-solid">
              {content.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
