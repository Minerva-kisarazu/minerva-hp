import { LINE_URL } from '@/app/site-config';
import PrintQr from '@/components/print/PrintQr';
import PrintToolbar from '@/components/print/PrintToolbar';
import {
  PAMPHLET_SITE_URL,
  pamphletAssurance,
  pamphletBrand,
  pamphletCover,
  pamphletFaqs,
  pamphletFlow,
  pamphletGradesFull,
  pamphletInsideLeft,
  pamphletPrice,
  pamphletPromises,
  pamphletPromisesHeading,
  pamphletReportNote,
  pamphletReportSample,
  pamphletScoreCases,
  pamphletWebNote,
  pamphletWeekHeading,
  pamphletWeekRows,
  printContact,
} from '@/data/pamphletCopy';

const PRINT_SITE_URL = PAMPHLET_SITE_URL;
const PRINT_LINE_URL = LINE_URL || 'https://lin.ee/YJ3KMWg';

/**
 * パンフレット（A4×4ページ）
 * 画面・印刷とも読み順（1→2→3→4）。印刷/PDFはA4縦。
 */
export default async function PamphletDocument() {
  return (
    <div data-print-document className="print-document pamphlet-root">
      <PrintToolbar
        title="パンフレット（A4×4ページ）"
        subtitle="スマホ・PCでそのまま閲覧。印刷・PDFもA4縦の4ページ"
      />

      <div className="pamphlet-pages">
        <p className="pamphlet-pages-label print-no-print">
          全4ページ（スクロールしてご覧ください）
        </p>
        <article className="pamphlet-page" aria-label="1ページ目 表紙">
          <PanelCover />
        </article>
        <article className="pamphlet-page" aria-label="2ページ目 指導の考え方">
          <PanelInsideLeft />
        </article>
        <article className="pamphlet-page" aria-label="3ページ目 成績・約束">
          <PanelInsideRight />
        </article>
        <article className="pamphlet-page" aria-label="4ページ目 料金・FAQ">
          <PanelBack />
        </article>
      </div>
    </div>
  );
}

function PanelCover() {
  return (
    <div className="pp pp1">
      <header className="pp1-brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-horizontal.svg"
          alt={`${pamphletBrand.name} ${pamphletBrand.tagline}`}
          className="pp1-logo"
        />
      </header>

      <div
        className="pp1-hero"
        style={{ backgroundImage: `url('${pamphletCover.photo}')` }}
        role="img"
        aria-label="指導風景"
      />

      <h1 className="pp1-catch">
        {pamphletCover.catchLines[0]}
        <br />
        {pamphletCover.catchLines[1]}
      </h1>

      <p className="pp1-lead">
        {pamphletCover.leadLines.map((line) => (
          <span key={line} className="pp1-lead-line">
            {line}
          </span>
        ))}
      </p>

      <section className="pp1-worry">
        <h2>こんなお悩み、ありませんか</h2>
        <ul>
          {pamphletCover.worries.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </section>

      <aside className="pp1-diff">
        {pamphletCover.difference.map((line) => (
          <span key={line} className="pp1-diff-line">
            {line}
          </span>
        ))}
      </aside>

      <footer className="pp1-foot">
        <p>
          {printContact.postal} {printContact.address}
        </p>
        <p>{pamphletCover.footCatch}</p>
      </footer>
    </div>
  );
}

function PanelInsideLeft() {
  const { founder, steps, analysisHeading, analysisPoints } = pamphletInsideLeft;

  return (
    <div className="pp pp2">
      <p className="pp2-lead">
        {pamphletInsideLeft.leadLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <section className="pp2-core">
        <p>{pamphletInsideLeft.coreLines[0]}</p>
        <p>
          <em>{pamphletInsideLeft.coreLines[1]}</em>
        </p>
        <p className="goal">{pamphletInsideLeft.coreLines[2]}</p>
      </section>

      {steps.map((step) => (
        <div className="pp2-step" key={step.n}>
          <div
            className="pp2-step-photo"
            style={{ backgroundImage: `url('${step.image}')` }}
            role="img"
            aria-label={step.alt}
          />
          <div className="pp2-step-copy">
            <p className="label">
              <span className="n">{step.n}</span>
              STEP{step.n} {step.title}
            </p>
            <p className="body">{step.body}</p>
          </div>
        </div>
      ))}

      <section className="pp2-analysis">
        <h2>{analysisHeading}</h2>
        <ul>
          {analysisPoints.map((p) => (
            <li key={p.title}>
              <strong>■{p.title}</strong>
              <span>{p.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pp2-founder">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={founder.photo} alt="" className="pp2-founder-photo" />
        <div>
          <h2>{founder.name}</h2>
          <p className="meta">{founder.meta.join('　')}</p>
          {founder.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}

function PanelInsideRight() {
  const report = pamphletReportSample;
  return (
    <div className="pp pp3">
      <h1 className="pp3-title">実際の成績改善事例</h1>
      <p className="pp3-sub">開校後最初の定期テストでの変化（生徒名・学校名は非掲載）</p>

      <div className="pp3-cases">
        {pamphletScoreCases.map((c) => (
          <article key={`${c.grade}-${c.before}-${c.after}`}>
            <header>
              <p className="meta">
                {c.grade}｜{c.subject}
              </p>
              <p className="score">
                {c.before}点 → {c.after}点
                <span>（＋{c.diff}点）</span>
              </p>
            </header>
            <p>
              <b>【つまずき】</b>
              {c.cause}
            </p>
            <p>
              <b>【指導】</b>
              {c.improvement}
            </p>
          </article>
        ))}
      </div>

      <section className="pp3-report">
        <p className="pp3-report-note">{pamphletReportNote}</p>
        <article className="pp3-report-card">
          <header>
            <p className="brand">学習塾ミネルバ｜指導報告</p>
            <p className="grade">
              {report.grade}｜{report.subject}
            </p>
          </header>
          <div className="body">
            <p>
              <b>学習内容</b>
              {report.topic}
            </p>
            <p>
              <b>つまずき</b>
              {report.stuck}
            </p>
            <p>
              <b>今回の指導</b>
              {report.guidance}
            </p>
            <p>
              <b>次回</b>
              {report.next}
            </p>
          </div>
        </article>
      </section>

      <section className="pp3-promises">
        <h2>{pamphletPromisesHeading}</h2>
        <ol>
          {pamphletPromises.map((p) => (
            <li key={p.n}>
              <p className="title">
                <span className="n">{p.n}</span>
                {p.title}
              </p>
              <p className="body">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pp3-grades">
        <h2>対応学年</h2>
        <ul>
          {pamphletGradesFull.map((g) => (
            <li key={g.label}>
              <strong>{g.label}</strong>
              <span>{g.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="pp3-web">
        {pamphletWebNote}
        <span>{PRINT_SITE_URL}</span>
      </p>
    </div>
  );
}

async function PanelBack() {
  return (
    <div className="pp pp4">
      <h1 className="pp4-title">{pamphletPrice.heading}</h1>
      <p className="pp4-note">{pamphletPrice.note}</p>

      <table className="pp4-table">
        <thead>
          <tr>
            <th>学年</th>
            {pamphletPrice.courseCounts.map((c) => (
              <th key={c}>{c}</th>
            ))}
            <th>{pamphletPrice.extraLabel}</th>
          </tr>
        </thead>
        <tbody>
          {pamphletPrice.rows.map((row) => (
            <tr key={row.grade}>
              <th>{row.grade}</th>
              {row.fees.map((fee) => (
                <td key={fee}>{fee}</td>
              ))}
              <td>{row.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="pp4-extras">
        {pamphletPrice.extras.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      <section className="pp4-week">
        <h2>{pamphletWeekHeading}</h2>
        <table>
          <thead>
            <tr>
              <th>曜日</th>
              <th>時間</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            {pamphletWeekRows.flatMap((day) =>
              day.slots.map((slot, i) => (
                <tr key={`${day.day}-${slot.time}`}>
                  {i === 0 ? (
                    <th rowSpan={day.slots.length}>{day.day}</th>
                  ) : null}
                  <td>{slot.time}</td>
                  <td>{slot.body}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      <section className="pp4-faq">
        <h2>よくあるご質問</h2>
        <dl>
          {pamphletFaqs.map((f) => (
            <div key={f.q}>
              <dt>Q. {f.q}</dt>
              <dd>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="pp4-assurance">
        {pamphletAssurance[0]}
        <br />
        {pamphletAssurance[1]}
      </p>

      <section className="pp4-flow">
        <h2>お申し込みまでの流れ</h2>
        <ol>
          {pamphletFlow.map((s) => (
            <li key={s.n}>
              <span className="n">{s.n}</span>
              <strong>{s.title}</strong>
            </li>
          ))}
        </ol>
      </section>

      <div className="pp4-contact">
        <div className="qrs">
          <PrintQr url={PRINT_LINE_URL} label="LINEで気軽に相談する" hint="公式LINE" size={88} />
          <PrintQr url={PRINT_SITE_URL} label="もっと詳しく見る" hint="公式サイト" size={88} />
        </div>
        <div className="info">
          <p className="brand">{pamphletBrand.name}</p>
          <p>
            {printContact.postal} {printContact.address}
          </p>
          <p className="phone">電話：{printContact.phone}</p>
          <p>開校時間：{printContact.openHours}</p>
        </div>
      </div>
    </div>
  );
}
