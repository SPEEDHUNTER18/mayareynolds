import Title from '@/components/Title';
import type { SiteContent } from '@/content/types';

export default function Expertise({ content }: { content: SiteContent['expertise'] }) {
  return (
    <section className="bg-bg section-pad">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,30%)_minmax(0,1fr)] lg:gap-16">
          <h2 className="display-3">
            <Title parts={content.title} />
          </h2>

          <div className="grid gap-x-14 sm:grid-cols-2">
            <ul>
              {content.left.map((item) => (
                <li key={item} className="rule-item">
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              {content.right.map((item) => (
                <li key={item} className="rule-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
