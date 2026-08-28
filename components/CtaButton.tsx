import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'onDark';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  fullWidthOnMobile?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-900 hover:bg-[#004840] text-white shadow-md',
  secondary: 'bg-[#005048] hover:bg-[#004038] text-white shadow-md',
  onDark:
    'bg-white text-brand-900 border-2 border-accent-500 hover:bg-accent-500 hover:text-white hover:border-accent-500 shadow-md',
};

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function CtaButton({
  href,
  children,
  variant = 'primary',
  fullWidthOnMobile = true,
}: Props) {
  const className = [
    'inline-flex items-center justify-center rounded-xl font-bold',
    'min-h-[52px] px-6 py-3.5 sm:px-8 sm:py-4',
    'text-base sm:text-lg',
    'text-center leading-relaxed tracking-wide',
    'transition-colors duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500',
    fullWidthOnMobile ? 'w-full sm:w-auto max-w-full' : '',
    variantClasses[variant],
  ].join(' ');

  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** サイト共通：/contact への主要CTA（問い合わせ→面談の入口） */
export function ContactCtaLabel() {
  return (
    <span>
      お問い合わせ・
      <br className="sm:hidden" />
      ご相談はこちら
    </span>
  );
}

/** @deprecated 体験即申込みに見えるため ContactCtaLabel を使用 */
export function TrialCtaLabel() {
  return <ContactCtaLabel />;
}
