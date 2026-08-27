import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'onDark';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  fullWidthOnMobile?: boolean;
};

const variantClasses: Record<Variant, string> = {
  // 明るい背景：深緑＋白文字
  primary: 'bg-brand-900 hover:bg-[#004840] text-white',
  secondary: 'bg-[#005048] hover:bg-[#004038] text-white',
  // 深緑セクション上：白地＋深緑文字＋ターコイズ枠（同色塗りだと埋もれるため）
  onDark:
    'bg-white text-brand-900 border-2 border-accent-500 hover:bg-accent-500 hover:text-white hover:border-accent-500',
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
    'inline-flex items-center justify-center rounded-lg font-bold shadow-md',
    'min-h-[48px] px-5 py-3.5 sm:px-8 sm:py-4',
    'text-sm sm:text-base lg:text-lg',
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

/** 主要CTAの共通文言（スマホでは自然な位置で改行） */
export function TrialCtaLabel() {
  return (
    <span>
      無料学習診断レポート付き
      <br className="sm:hidden" />
      体験授業を申し込む
    </span>
  );
}
