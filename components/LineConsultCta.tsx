import { LINE_URL } from '@/app/site-config';

export const LINE_CONSULT_LABEL = 'LINEで気軽に相談する';

type Variant = 'hero' | 'band' | 'footer';

type Props = {
  variant: Variant;
  fullWidthOnMobile?: boolean;
};

function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

const baseButton =
  'inline-flex items-center justify-center gap-2.5 rounded-xl font-bold min-h-[48px] sm:min-h-[52px] px-5 sm:px-7 py-3 text-base sm:text-lg text-center leading-relaxed transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06C755]';

const variantClasses: Record<Variant, string> = {
  hero: `${baseButton} w-full sm:w-auto border-2 border-[#4ade80]/80 text-white bg-[#06C755]/10 hover:bg-[#06C755]/25 hover:border-[#4ade80]`,
  band: `${baseButton} w-full sm:w-auto bg-[#06C755] hover:bg-[#05b34c] text-white shadow-md`,
  footer: `${baseButton} w-full sm:w-auto bg-[#06C755] hover:bg-[#05b34c] text-white shadow-md border-2 border-[#06C755]`,
};

export default function LineConsultCta({ variant, fullWidthOnMobile = true }: Props) {
  const widthClass = fullWidthOnMobile ? 'w-full sm:w-auto max-w-full' : '';

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variantClasses[variant]} ${widthClass}`}
    >
      <LineIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
      <span>{LINE_CONSULT_LABEL}</span>
    </a>
  );
}

/** ページ中盤用：指導内容のあとに置くLINE相談バンド */
export function LineConsultBand() {
  return (
    <section className="bg-[#eefbf3] border-y border-[#06C755]/20 py-10 sm:py-12" aria-label="LINE相談">
      <div className="site-container-wide">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
          <div className="md:max-w-xl">
            <p className="text-xs sm:text-sm font-bold text-[#059669] tracking-wide mb-2">
              まず相談したい方へ
            </p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-relaxed mb-2">
              ちょっとしたご質問でも、お気軽にどうぞ。
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              面談のお申し込みの前に、学習の悩みや料金のことなど、LINEで気軽にご相談いただけます。
            </p>
          </div>
          <div className="flex flex-col items-stretch sm:items-start md:items-end gap-2 flex-shrink-0">
            <LineConsultCta variant="band" />
            <p className="text-xs text-slate-500 text-center sm:text-left md:text-right">
              公式LINEへ移動します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
