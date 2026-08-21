import Link from 'next/link';

type Variant = 'primary' | 'secondary';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  fullWidthOnMobile?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-orange-600 hover:bg-orange-700 text-white',
  secondary: 'bg-navy-900 hover:bg-navy-800 text-white',
};

export default function CtaButton({
  href,
  children,
  variant = 'primary',
  fullWidthOnMobile = true,
}: Props) {
  return (
    <Link
      href={href}
      className={[
        'inline-flex items-center justify-center rounded-lg font-bold shadow-md',
        'min-h-[48px] px-5 py-3.5 sm:px-8 sm:py-4',
        'text-sm sm:text-base lg:text-lg',
        'text-center leading-snug tracking-wide',
        'transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500',
        fullWidthOnMobile ? 'w-full sm:w-auto max-w-full' : '',
        variantClasses[variant],
      ].join(' ')}
    >
      {children}
    </Link>
  );
}
