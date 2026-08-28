import Image from 'next/image';
import CtaButton, { ContactCtaLabel } from './CtaButton';

type Props = {
  heading: string;
  subtext?: string;
};

/** 通常ページ下部のメインCTA（文言はサイト全体で統一） */
export default function PreFooterCta({ heading, subtext }: Props) {
  return (
    <section className="relative bg-brand-900 text-white py-20 sm:py-28 overflow-hidden">
      <Image
        src="/images/cta-atmosphere.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-900/90 to-brand-900/95" />

      <div className="relative z-10 site-container-narrow text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-4 leading-relaxed tracking-wide">
          {heading}
        </h2>
        {subtext && (
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>
        )}
        {!subtext && <div className="mb-8" />}
        <div className="flex justify-center">
          <CtaButton href="/contact" variant="onDark">
            <ContactCtaLabel />
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
