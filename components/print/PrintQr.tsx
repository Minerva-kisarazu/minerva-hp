import QRCode from 'qrcode';

type Props = {
  url: string;
  /** 主ラベル（例：まずはお問い合わせ） */
  label: string;
  /** 読み取り先の説明（例：サイトのお問い合わせへ） */
  hint?: string;
  size?: number;
};

export default async function PrintQr({ url, label, hint, size = 112 }: Props) {
  const dataUrl = await QRCode.toDataURL(url, {
    width: size * 2,
    margin: 2,
    errorCorrectionLevel: 'M',
    color: { dark: '#1a1a1a', light: '#ffffff' },
  });

  return (
    <figure className="print-qr">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={dataUrl} alt={`${label}のQRコード`} width={size} height={size} />
      <figcaption>
        <span className="print-qr-label">{label}</span>
        {hint ? <span className="print-qr-hint">{hint}</span> : null}
      </figcaption>
    </figure>
  );
}
