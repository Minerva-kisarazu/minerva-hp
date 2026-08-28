import { priceCourseCounts, priceNotes, priceRows } from '@/data/printMaterials';

type Props = {
  compact?: boolean;
};

export default function PrintPriceTable({ compact = false }: Props) {
  return (
    <div className={compact ? 'print-price print-price--compact' : 'print-price'}>
      <div className="print-price-head">
        <h2>{priceNotes.heading}</h2>
        <p>{priceNotes.tax}</p>
      </div>
      <p className="print-price-note">
        月額受講費に施設費（2,200円/月）が含まれた、毎月の
        <strong className="print-price-total-word">「総支払額」</strong>
        です。1講座でも、自習室は授業日にかかわらず毎日ご利用いただけます。
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">学年</th>
            {priceCourseCounts.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
            <th scope="col">{priceNotes.extraLabel}</th>
          </tr>
        </thead>
        <tbody>
          {priceRows.map((row) => (
            <tr key={row.grade}>
              <th scope="row">{row.grade}</th>
              {row.fees.map((fee) => (
                <td key={fee}>{fee}</td>
              ))}
              <td>{row.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="print-price-extras">
        <li>{priceNotes.enrollment}</li>
        <li>{priceNotes.materials}</li>
        <li>{priceNotes.course}</li>
      </ul>
    </div>
  );
}
