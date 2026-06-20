'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <Link href="/" className="text-white font-bold text-xl sm:text-2xl hover:text-gold-400 transition-colors">
            学習塾ミネルバ<span className="text-gold-500">個別指導×自立学習</span>
            <span className="block text-xs text-gray-400 mt-1">木更津市の個別指導塾</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-gold-400 transition-colors">
              ホーム
            </Link>
            <Link href="/policy" className="text-white hover:text-gold-400 transition-colors">
              指導方針
            </Link>
            <Link href="/grades" className="text-white hover:text-gold-400 transition-colors">
              学年別のご案内
            </Link>
            <Link href="/price" className="text-white hover:text-gold-400 transition-colors">
              受講料・よくあるご質問
            </Link>
            <Link 
              href="/contact" 
              className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-2 rounded-md transition-colors"
            >
              無料学習診断レポート付き体験授業を申し込む
            </Link>
          </nav>

          {/* モバイルハンバーガーボタン */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-gold-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                ホーム
              </Link>
              <Link
                href="/policy"
                className="text-white hover:text-gold-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                指導方針
              </Link>
              <Link
                href="/grades"
                className="text-white hover:text-gold-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                学年別のご案内
              </Link>
              <Link
                href="/price"
                className="text-white hover:text-gold-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                受講料・よくあるご質問
              </Link>
              <Link
                href="/contact"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-3 rounded-md transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                無料学習診断レポート付き体験授業を申し込む
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
