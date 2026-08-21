import Image from 'next/image';
import CtaButton from './CtaButton';

export default function PreFooterCta({ heading }: { heading: string }) {
  return (
    <section className="relative bg-navy-900 text-white py-20 sm:py-28 overflow-hidden">
      <Image
        src="/images/cta-atmosphere.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/90 to-navy-900/95" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-10 leading-relaxed tracking-wide">
          {heading}
        </h2>
        <div className="flex justify-center">
          <CtaButton href="/contact">
            無料学習診断レポート付き体験授業を申し込む
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
