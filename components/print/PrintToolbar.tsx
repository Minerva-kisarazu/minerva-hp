'use client';

type Props = {
  title: string;
  subtitle?: string;
};

export default function PrintToolbar({ title, subtitle }: Props) {
  return (
    <div className="print-toolbar print-no-print">
      <div className="print-toolbar-inner">
        <div>
          <p className="print-toolbar-title">{title}</p>
          {subtitle ? <p className="print-toolbar-sub">{subtitle}</p> : null}
        </div>
        <div className="print-toolbar-actions">
          <button type="button" className="print-toolbar-btn" onClick={() => window.print()}>
            印刷・PDF保存
          </button>
          <a href="/print" className="print-toolbar-link">
            印刷物一覧へ
          </a>
        </div>
      </div>
      <p className="print-toolbar-hint">
        印刷ダイアログで「PDFに保存」または「Microsoft Print to PDF」を選ぶと配布用PDFになります。余白は「なし」推奨です。
      </p>
    </div>
  );
}
