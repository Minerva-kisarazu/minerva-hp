'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="text-primary font-serif font-bold text-xl sm:text-2xl hover:text-accent transition-all duration-500 tracking-wide">
            学習塾ミネルバ<span className="text-accent">個別指導×自立学習</span>
            <span className="block text-xs text-slate-600 mt-1 font-light opacity-80">木更津市の個別指導塾</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-accent font-medium transition-all duration-500 tracking-wide">
              ホーム
            </Link>
            <Link href="/policy" className="text-slate-700 hover:text-accent font-medium transition-all duration-500 tracking-wide">
              指導方針
            </Link>
            <Link href="/grades" className="text-slate-700 hover:text-accent font-medium transition-all duration-500 tracking-wide">
              学年別のご案内
            </Link>
            <Link href="/price" className="text-slate-700 hover:text-accent font-medium transition-all duration-500 tracking-wide">
              受講料・よくあるご質問
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-500 border border-slate-200 shadow-sm tracking-wide text-sm"
            >
              無料体験を申し込む
            </Link>
          </nav>

          {/* モバイルハンバーガーボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 p-2 focus:outline-none transition-all duration-500"
            aria-label="メニューを開く"
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
          <nav className="md:hidden py-6 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-3 px-4">
              <Link
                href="/"
                className="text-primary hover:text-accent font-medium py-3 transition-all duration-500 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/policy"
                className="text-primary hover:text-accent font-medium py-3 transition-all duration-500 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                指導方針
              </Link>
              <Link
                href="/grades"
                className="text-primary hover:text-accent font-medium py-3 transition-all duration-500 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                学年別のご案内
              </Link>
              <Link
                href="/price"
                className="text-primary hover:text-accent font-medium py-3 transition-all duration-500 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                受講料・よくあるご質問
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white font-semibold px-6 py-4 rounded-full transition-all duration-500 tracking-wide text-center text-sm mt-2 shadow-md border border-slate-200"
                onClick={() => setIsOpen(false)}
              >
                無料体験を申し込む
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
