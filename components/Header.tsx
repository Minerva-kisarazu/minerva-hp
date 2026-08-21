'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/policy', label: '指導方針' },
    { href: '/grades', label: '学年別のご案内' },
    { href: '/price', label: '受講料・よくあるご質問' },
    { href: '/contact', label: 'お問い合わせ' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16">
          <Link href="/" className="min-w-0 flex-1 lg:flex-none" onClick={() => setIsOpen(false)}>
            <span className="block font-serif font-bold text-slate-900 text-base sm:text-lg lg:text-xl truncate">
              学習塾ミネルバ
            </span>
            <span className="hidden sm:block text-xs text-orange-600 font-medium truncate">
              個別指導×自立学習｜木更津市の個別指導塾
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-shrink-0">
            {navItems.slice(0, 4).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors py-2 text-xs xl:text-sm whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-3 py-2 xl:px-4 xl:py-2.5 rounded-lg transition-colors duration-300 shadow-sm tracking-wide text-[11px] xl:text-xs whitespace-nowrap"
            >
              無料学習診断レポート付き体験授業を申し込む
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden flex-shrink-0 inline-flex items-center justify-center w-11 h-11 text-slate-800 hover:bg-slate-100 rounded-lg"
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isOpen}
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
              {isOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="lg:hidden absolute left-0 right-0 top-16 bg-white border-b border-slate-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col px-4 py-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-900 font-medium py-4 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 mb-2 inline-flex items-center justify-center bg-orange-600 text-white font-semibold px-5 py-4 rounded-lg text-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              無料学習診断レポート付き体験授業を申し込む
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
