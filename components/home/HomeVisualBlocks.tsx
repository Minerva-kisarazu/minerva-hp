type PointCardProps = {
  point: string;
  title: string;
  body: string;
};

/** Polaris の Point1 形式：ラベル＋見出し＋本文 */
export function PointCard({ point, title, body }: PointCardProps) {
  return (
    <article className="relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">
      <div className="h-1 bg-gradient-to-r from-brand-900 via-brand-800 to-accent-500" aria-hidden="true" />
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <p className="text-sm font-bold text-accent-700 tracking-[0.18em] mb-4">{point}</p>
        <h3 className="font-serif text-lg sm:text-xl font-bold mb-4 text-slate-900 leading-snug">{title}</h3>
        <p className="text-base text-slate-700 leading-relaxed flex-1">{body}</p>
      </div>
    </article>
  );
}

/** 印刷物と同じ3アイコン（分析・指導・自習）— STEP1〜3と意味が対応 */
export function StepReasonIcon({ stepIndex, className = 'w-20 h-20 sm:w-24 sm:h-24' }: { stepIndex: 0 | 1 | 2; className?: string }) {
  const positions = ['0% center', '50% center', '100% center'] as const;
  return (
    <div
      className={`mx-auto rounded-full border-2 border-brand-900/15 bg-brand-50 shadow-sm ${className}`}
      style={{
        backgroundImage: 'url(/images/print-reason-icons.png)',
        backgroundSize: '300% auto',
        backgroundPosition: positions[stepIndex],
        backgroundRepeat: 'no-repeat',
      }}
      aria-hidden="true"
    />
  );
}

const IMPROVEMENT_FLOW = [
  { key: 'symptom', label: '表に出ている症状', tone: 'slate' as const },
  { key: 'cause', label: '実際の原因', tone: 'mid' as const },
  { key: 'action', label: 'ミネルバで行うこと', tone: 'brand' as const },
] as const;

type ImprovementFlowProps = {
  subject: string;
  symptom: string;
  cause: string;
  action: string;
};

/** 症状→原因→対応の流れを、読み手が追えるパイプラインとして表示 */
export function ImprovementFlowCard({ subject, symptom, cause, action }: ImprovementFlowProps) {
  const values = { symptom, cause, action };

  return (
    <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-5 sm:px-7 py-4 sm:py-5 bg-brand-900 text-white">
        <h3 className="font-serif text-lg sm:text-xl font-bold">{subject}</h3>
      </div>
      <div className="p-5 sm:p-7 space-y-0">
        {IMPROVEMENT_FLOW.map((step, index) => {
          const isBrand = step.tone === 'brand';
          const isMid = step.tone === 'mid';
          return (
            <div key={step.key}>
              {index > 0 ? (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <svg className="w-5 h-5 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M7 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : null}
              <div
                className={`rounded-xl px-4 py-4 sm:px-5 sm:py-5 ${
                  isBrand
                    ? 'bg-brand-50 border border-brand-900/15'
                    : isMid
                      ? 'bg-slate-100 border border-slate-200'
                      : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                      isBrand ? 'bg-brand-900 text-white' : 'bg-slate-300 text-slate-800'
                    }`}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <p
                    className={`text-xs sm:text-sm font-bold tracking-wide ${
                      isBrand ? 'text-brand-900' : isMid ? 'text-slate-700' : 'text-slate-500'
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
                <p className="text-base text-slate-700 leading-relaxed">{values[step.key]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

/** 苦手／得意 — 2つの受け止め方を視覚的に分ける（見出しの補足） */
export function TargetAudienceCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10">
      <div className="rounded-xl border-l-4 border-brand-900 bg-brand-50/80 border border-slate-200 px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-bold text-brand-900 tracking-wide mb-1.5">苦手な教科</p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          途中式を書かない・設問を読み飛ばすなど、失点に直結する理由を答案から特定します。
        </p>
      </div>
      <div className="rounded-xl border-l-4 border-accent-500 bg-accent-50/40 border border-slate-200 px-5 py-4 sm:px-6 sm:py-5">
        <p className="text-xs font-bold text-accent-700 tracking-wide mb-1.5">得意な教科</p>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          同じ勉強時間でも取りこぼしを減らし、記述や応用で加点する進め方を設計します。
        </p>
      </div>
    </div>
  );
}
