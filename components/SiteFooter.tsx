import Link from 'next/link';
import type { SiteContent } from '@/content/types';

export default function SiteFooter({ content }: { content: SiteContent }) {
  const { footer, brand } = content;

  return (
    <footer id="contact" className="bg-bg">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="block font-display text-[30px] font-light leading-none tracking-[-0.01em] text-primary md:text-[38px]">
                {brand.name}
              </span>
              <span className="mt-2.5 block font-body text-[10px] font-bold uppercase tracking-[0.36em] text-accent">
                {brand.tagline}
              </span>
            </Link>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.75] text-muted">{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="eyebrow">{col.heading}</h3>
              <ul className="mt-5 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="eyebrow">{footer.contact.heading}</h3>
            <ul className="mt-5 space-y-2.5 text-[15px] leading-[1.6] text-muted">
              {footer.contact.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-accent">
        <div className="shell flex flex-col gap-2 py-4 text-[13px] text-white sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-2">
            {footer.legal.map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">|</span>}
                <Link href={item.href} className="underline-offset-4 transition-opacity hover:underline">
                  {item.label}
                </Link>
              </span>
            ))}
          </p>
          <p className="text-white/85">{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
