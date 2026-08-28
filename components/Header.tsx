'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'ホーム' },
  { href: '/policy', label: '指導方針' },
  { href: '/grades', label: '学年別のご案内' },
  { href: '/price', label: '受講料・よくあるご質問' },
  { href: '/contact', label: 'お問い合わせ' },
];

const CTA_LABEL = 'ご相談・お問い合わせ';
const CTA_LABEL_MOBILE = 'まずはお気軽にご相談ください';

const DESKTOP_NAV_BREAKPOINT = 1280;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_NAV_BREAKPOINT) setIsOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  if (pathname?.startsWith('/print')) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="site-container">
        <div className="flex items-center justify-between gap-3 h-16">
          <Link
            href="/"
            className="min-w-0 flex-shrink flex items-center py-1"
            aria-label="学習塾ミネルバ ホーム"
          >
            <Image
              src="/images/logo-horizontal.svg"
              alt="学習塾ミネルバ｜個別指導×自立学習"
              width={240}
              height={60}
              priority
              unoptimized
              className="h-10 sm:h-11 w-auto max-w-[min(100%,220px)] sm:max-w-[260px]"
            />
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden xl:flex items-center gap-5 flex-shrink-0">
            {navItems.slice(0, 4).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap py-2 border-b-2 transition-colors ${
                  pathname === href
                    ? 'text-brand-900 border-accent-500'
                    : 'text-slate-700 border-transparent hover:text-brand-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-900 hover:bg-[#004840] text-white font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm text-sm whitespace-nowrap min-h-[44px]"
            >
              {CTA_LABEL}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="xl:hidden flex-shrink-0 inline-flex items-center justify-center w-11 h-11 text-slate-800 hover:bg-slate-100 rounded-lg"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="メインナビゲーション"
          className="xl:hidden absolute left-0 right-0 top-16 bg-white border-b border-slate-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="flex flex-col px-5 py-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`py-4 border-b border-slate-100 font-medium text-base leading-relaxed ${
                  pathname === href ? 'text-brand-900' : 'text-slate-900'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-5 mb-2 inline-flex items-center justify-center bg-brand-900 hover:bg-[#004840] text-white font-bold px-5 py-4 rounded-xl text-center text-base leading-relaxed min-h-[52px]"
            >
              {CTA_LABEL_MOBILE}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
