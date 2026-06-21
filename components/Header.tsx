'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // スタチク固定時の背景色（半透明）
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/policy', label: '指導方針' },
    { href: '/grades', label: '学年別のご案内' },
    { href: '/price', label: '受講料・よくあるご質問' },
    { href: '/contact', label: 'お問い合わせ' }
  ];

  // 固定ヘッダー（sticky top-0 + backdrop-blur-md）
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-baseline">
            <span className="text-slate-900 font-serif font-bold text-xl sm:text-2xl hover:text-slate-700 transition-colors">
              学習塾ミネルバ<span className="text-orange-600">個別指導×自立学習</span>
            </span>
            <span className="block text-xs text-slate-500 mt-1 font-medium tracking-wide hidden sm:block">
              木更津市の個別指導塾
            </span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, 4).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors py-2"
              >
                {label}
              </Link>
            ))}
            {/* 問い合わせボタン：高コントラストで目立つ */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm tracking-wide text-sm whitespace-nowrap"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルハンバーガーボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 p-2 focus:outline-none hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="メニューを開く"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* モバイルナビゲーションドロップダウン */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-slate-700 hover:text-slate-900 font-medium py-3 transition-colors tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              {/* 問い合わせボタン：高コントラストで目立つ */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-600 text-white font-semibold px-5 py-4 rounded-lg transition-all duration-300 shadow-md tracking-wide text-center text-sm mt-2"
                onClick={() => setIsOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
