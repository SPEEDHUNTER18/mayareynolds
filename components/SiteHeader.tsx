'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { SiteContent } from '@/content/types';

export default function SiteHeader({ content }: { content: SiteContent }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-50 bg-bg">
      <div className="shell-wide flex items-center justify-between gap-4 py-5 md:py-7">
        <Link href="/" className="shrink-0" onClick={close}>
          <span className="block font-display text-[24px] font-light leading-none tracking-[-0.01em] text-primary md:text-[30px]">
            {content.brand.name}
          </span>
          <span className="mt-2 block font-body text-[9px] font-bold uppercase tracking-[0.36em] text-accent md:text-[10px]">
            {content.brand.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {content.nav.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href={content.contactHref} className="pill-btn ml-2">
            {content.contactLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-primary transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`block h-px w-6 bg-primary transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block h-px w-6 bg-primary transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg lg:hidden">
          <nav className="shell flex flex-col gap-1 py-5">
            {content.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link border-b border-line py-3"
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
            <Link href={content.contactHref} className="pill-btn mt-4 self-start" onClick={close}>
              {content.contactLabel}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
