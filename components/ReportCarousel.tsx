'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { ReportSample } from '@/data/reportSamples';

type Props = {
  reports: ReportSample[];
};

const PC_VISIBLE = 3;

function ReportCard({ report }: { report: ReportSample }) {
  return (
    <article className="h-full flex flex-col bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <header className="bg-brand-900 px-5 py-4 text-white">
        <p className="text-sm font-bold text-accent-400">学習塾ミネルバ｜指導報告</p>
        <p className="font-serif font-bold text-lg sm:text-xl mt-1 leading-snug">
          {report.grade}｜{report.subject}
        </p>
      </header>
      <div className="flex-1 p-5 sm:p-6 space-y-4 text-base leading-relaxed">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-brand-900 mb-1.5">学習内容</h4>
          <p className="text-[#333333]">{report.topic}</p>
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-brand-900 mb-1.5">つまずき</h4>
          <p className="text-[#333333]">{report.stuck}</p>
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-brand-900 mb-1.5">今回の指導</h4>
          <p className="text-[#333333]">{report.guidance}</p>
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-brand-900 mb-1.5">次回</h4>
          <p className="text-[#333333]">{report.next}</p>
        </div>
      </div>
    </article>
  );
}

export default function ReportCarousel({ reports }: Props) {
  const labelId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const maxIndex = isDesktop
    ? Math.max(0, reports.length - PC_VISIBLE)
    : Math.max(0, reports.length - 1);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), maxIndex));
    },
    [maxIndex]
  );

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  // スワイプ（タッチ）。ページ全体の横スクロールは発生させない
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let startX = 0;
    let startY = 0;
    let tracking = false;
    let locked: 'h' | 'v' | null = null;

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      tracking = true;
      locked = null;
    };

    const onMove = (e: TouchEvent) => {
      if (!tracking) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (locked === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        locked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v';
      }
      if (locked === 'h') {
        e.preventDefault();
      }
    };

    const onEnd = (e: TouchEvent) => {
      if (!tracking) return;
      tracking = false;
      if (locked !== 'h') return;
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      if (dx < -40) goTo(index + 1);
      else if (dx > 40) goTo(index - 1);
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: false });
    el.addEventListener('touchend', onEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
    };
  }, [goTo, index]);

  const translatePct = isDesktop
    ? (index * 100) / PC_VISIBLE
    : index * 100;

  const pageLabel = isDesktop
    ? `${index + 1}〜${Math.min(index + PC_VISIBLE, reports.length)} / ${reports.length}`
    : `${index + 1} / ${reports.length}`;

  return (
    <div className="relative" aria-labelledby={labelId}>
      <p id={labelId} className="sr-only">
        実際の指導報告書のカルーセル
      </p>

      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-sm sm:text-base text-slate-600 tabular-nums">{pageLabel}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="前の指導報告へ"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-900 text-brand-900 bg-white hover:bg-brand-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index >= maxIndex}
            aria-label="次の指導報告へ"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-900 text-brand-900 bg-white hover:bg-brand-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden touch-pan-y" ref={trackRef}>
        <ul
          className="flex transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `translateX(-${translatePct}%)`,
          }}
        >
          {reports.map((report) => (
            <li
              key={report.id}
              className="w-full md:w-1/3 flex-shrink-0 px-1.5 sm:px-2 box-border"
            >
              <ReportCard report={report} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="指導報告の位置">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`${i + 1}ページ目`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? 'w-6 bg-accent-500'
                : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
