type Props = {
  children: React.ReactNode;
  /** 最後のページ以外は改ページ */
  pageBreakAfter?: boolean;
  className?: string;
  tone?: 'white' | 'brand' | 'muted';
};

export default function A4Sheet({
  children,
  pageBreakAfter = true,
  className = '',
  tone = 'white',
}: Props) {
  return (
    <article
      className={[
        'print-a4',
        `print-a4--${tone}`,
        pageBreakAfter ? 'print-a4--break' : 'print-a4--last',
        className,
      ].join(' ')}
    >
      {children}
    </article>
  );
}
