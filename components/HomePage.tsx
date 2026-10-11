import type { SiteContent } from '@/content/types';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import WhoWeHelp from '@/components/sections/WhoWeHelp';
import Statement from '@/components/sections/Statement';
import Expertise from '@/components/sections/Expertise';
import About from '@/components/sections/About';
import Approach from '@/components/sections/Approach';
import Services from '@/components/sections/Services';
import Office from '@/components/sections/Office';
import CallToAction from '@/components/sections/CallToAction';

/**
 * The homepage renders identically for both themes — only the content object
 * and the wrapper class (which selects the CSS variables) change.
 * Section order matches the source template; `office` is the one addition.
 */
export default function HomePage({ content }: { content: SiteContent }) {
  return (
    <div className={`${content.themeClass} min-h-screen`}>
      <SiteHeader content={content} />

      <main>
        <Hero hero={content.hero} />
        <Intro intro={content.intro} />
        <WhoWeHelp content={content.whoWeHelp} />
        <Statement content={content.statement} />
        <Expertise content={content.expertise} />
        <About content={content.about} />
        <Approach content={content.approach} />
        <Services content={content.services} />
        {content.office && <Office content={content.office} />}
        <CallToAction content={content.callToAction} />
      </main>

      <SiteFooter content={content} />
    </div>
  );
}
