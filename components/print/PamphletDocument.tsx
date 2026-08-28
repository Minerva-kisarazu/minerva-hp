import { LINE_URL, SITE_URL } from '@/app/site-config';
import A4Sheet from '@/components/print/A4Sheet';
import PrintCampaignSlot from '@/components/print/PrintCampaignSlot';
import PrintQr from '@/components/print/PrintQr';
import PrintToolbar from '@/components/print/PrintToolbar';
import {
  priceCourseCounts,
  priceNotes,
  priceRows,
  printContact,
  printCoreMessage,
  printDiagnosis,
  printFlow,
  printFounder,
  printGrades,
  printHero,
  printMechanism,
  printPamphletFaqs,
  printPatterns,
  printReportSamples,
  printResults,
  printSteps,
  printStudyRules,
  printWeekModel,
  printWorries,
} from '@/data/printMaterials';

const pamphletWorries = printWorries.slice(0, 4);

export default async function PamphletDocument() {
  const siteQrUrl = `${SITE_URL}/contact`;
  const lineQrUrl = LINE_URL;

  return (
    <div data-print-document className="print-document">
      <PrintToolbar
        title="パンフレット（A4・4ページ）"
        subtitle="面談時などに渡す説明資料／通常版"
      />

      <div className="print-sheets">
        {/* ===== 1 表紙：数秒で「普通の個別とは違う」 ===== */}
        <A4Sheet>
          <PrintCampaignSlot />
          <div className="pm1">
            <div
              className="pm1-photo"
              style={{ backgroundImage: "url('/images/hero-lesson.jpg')" }}
            />
            <div className="pm1-panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="pm1-logo" src="/images/logo-horizontal.svg" alt="学習塾ミネルバ" />
              <p className="pm1-place">{printContact.area}</p>
              <h1>
                {printHero.catchLines[0]}
                <br />
                {printHero.catchLines[1]}
              </h1>
              <div className="pm1-core">
                <p className="soft">
                  {printCoreMessage.lines[0]}
                  <em> {printCoreMessage.lines[1]}</em>
                </p>
                <p className="goal">{printCoreMessage.lines[2]}</p>
              </div>
              <p className="pm1-lead">{printHero.lead}</p>
              <p className="pm1-facts">
                {printHero.coverFacts.map((f, i) => (
                  <span key={f.primary}>
                    {i > 0 ? <i aria-hidden="true">｜</i> : null}
                    <b>{f.primary}</b>
                    {f.secondary}
                  </span>
                ))}
              </p>
            </div>
            <div className="pm1-bar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/founder.jpg" alt="" />
              <div className="pm1-founder">
                <p className="name">{printFounder.name}</p>
                <p className="line">{printFounder.line}</p>
              </div>
              <div className="pm1-tel">
                <span>Tel</span>
                <strong>{printContact.phone}</strong>
                <small>{printContact.address}</small>
              </div>
            </div>
          </div>
        </A4Sheet>

        {/* ===== 2 悩み → 考え方 → 3STEP → 事例 ===== */}
        <A4Sheet>
          <div className="pm">
            <div className="pm-stack">
            <header className="pm-head">
              <p className="pm-kicker">02</p>
              <h1>
                「聞けば分かる」を、
                <em>自分でできる</em>
                に。
              </h1>
            </header>

            <div className="pm2-open">
              <section className="pm2-worry">
                <h2>こんなお悩み、ありませんか</h2>
                <ul>
                  {pamphletWorries.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </section>
              <aside className="pm2-aside">
                <div
                  className="pm2-aside-photo"
                  style={{ backgroundImage: "url('/images/analysis-pen.jpg')" }}
                />
                <p>
                  原因は「やる気」や「能力」だけではありません。いちばん多いのは、
                  <strong>聞けば分かるのに、自分ではできない</strong>
                  という状態です。
                </p>
              </aside>
            </div>

            <section className="pm2-core">
              <p className="soft">
                {printCoreMessage.lines[0]}
                <em> {printCoreMessage.lines[1]}</em>
              </p>
              <p className="goal">{printCoreMessage.lines[2]}</p>
              <p className="hint">
                見るのは、解き方の癖・考えることを止める点・「分かる」と「できる」の境目です。
              </p>
            </section>

            <section className="pm2-steps">
              <h2>成績向上の3STEP</h2>
              <ol>
                {printSteps.map((step, i) => (
                  <li key={step.label}>
                    <span className="n">{i + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="pm2-patterns">
              <h2>教科別のよくあるつまずき</h2>
              <div className="pm2-pat-row">
                {printPatterns.map((p) => (
                  <div key={p.subject}>
                    <h3>{p.subject}</h3>
                    <p className="sym">{p.symptom}</p>
                    <p className="act">{p.action}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="pm2-results">
              <div className="pm2-results-head">
                <h2>直近の成績改善事例</h2>
                <p>開校後最初の定期テストでの変化（生徒名・学校名は非掲載）</p>
              </div>
              <div className="pm2-res-row">
                {printResults.map((r) => (
                  <div key={`${r.grade}-${r.from}`}>
                    <p className="g">{r.grade}</p>
                    <p className="s">
                      {r.from}
                      <span>→</span>
                      {r.to}
                    </p>
                    <p className="d">{r.diff}</p>
                  </div>
                ))}
              </div>
            </section>
            </div>
          </div>
        </A4Sheet>

        {/* ===== 3 仕組み・報告・学年 ===== */}
        <A4Sheet>
          <div className="pm">
            <div className="pm-stack">
            <header className="pm-head">
              <p className="pm-kicker">03</p>
              <h1>
                授業で分かったことを、
                <em>自分で使える</em>
                ところまで。
              </h1>
            </header>

            <div className="pm3-mech">
              <article>
                <h3>{printMechanism.tutoringTitle}</h3>
                <ul>
                  {printMechanism.tutoringPoints.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p>{printMechanism.tutoringExtra}</p>
              </article>
              <article>
                <h3>{printMechanism.studyTitle}</h3>
                <p className="flow">{printMechanism.studyFlow.join(' → ')}</p>
                <p>{printMechanism.studyEmphasis}</p>
                <p>{printMechanism.studyNote}</p>
              </article>
              <article className="pm3-report-col">
                <h3>{printMechanism.reportTitle}</h3>
                <p className="tags">{printMechanism.reportItems.join(' ／ ')}</p>
                <p>{printMechanism.reportBody}</p>
                <p>
                  {printMechanism.reportEmphases.map((e) => `「${e}」`).join('')}
                  まで記録します。
                </p>
              </article>
              <div
                className="pm3-mech-photo"
                style={{ backgroundImage: "url('/images/study-room.jpg')" }}
              />
            </div>

            <section className="pm3-week">
              <h2>週のイメージ（中学生・英数2講座の例）</h2>
              <ul>
                {printWeekModel.map((w) => (
                  <li key={w.day}>
                    <strong>{w.day}</strong>
                    <span>{w.body}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pm3-grades">
              <h2>学年別のご案内</h2>
              <div className="pm3-grade-row">
                {printGrades.map((g) => (
                  <div key={g.label}>
                    <span className="badge">{g.label}</span>
                    <h3>{g.title}</h3>
                    <p className="body">{g.body}</p>
                    <ul>
                      {g.items.slice(0, 4).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <div className="pm3-bottom">
              <section className="pm3-rules">
                <h2>学習の約束（抜粋）</h2>
                <ol>
                  {printStudyRules.map((r) => (
                    <li key={r.title}>
                      <strong>{r.title}</strong>
                      <span>{r.body}</span>
                    </li>
                  ))}
                </ol>
              </section>
              <section className="pm3-samples">
                <h2>指導報告の実例（趣旨）</h2>
                {printReportSamples.map((r) => (
                  <article key={r.grade}>
                    <p className="meta">
                      {r.grade}｜{r.topic}
                    </p>
                    <p>
                      <b>つまずき</b>
                      {r.stuck}
                    </p>
                    <p>
                      <b>指導</b>
                      {r.guidance}
                    </p>
                  </article>
                ))}
              </section>
            </div>
            </div>
          </div>
        </A4Sheet>

        {/* ===== 4 料金・流れ・連絡 ===== */}
        <A4Sheet pageBreakAfter={false}>
          <div className="pm">
            <div className="pm-stack">
            <header className="pm-head">
              <p className="pm-kicker">04</p>
              <h1>{priceNotes.heading}</h1>
            </header>

            <p className="pm4-note">
              月額受講費に施設費（2,200円/月）が含まれた、毎月の
              <strong>「総支払額」</strong>
              です。1講座でも自習室は毎日利用可。{priceNotes.tax}
            </p>

            <div className="pm4-price">
              <table>
                <thead>
                  <tr>
                    <th>学年</th>
                    {priceCourseCounts.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                    <th>{priceNotes.extraLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row) => (
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
              <aside>
                <h3>その他費用</h3>
                <p>{priceNotes.enrollment}</p>
                <p>{priceNotes.materials}</p>
                <p>{priceNotes.course}</p>
              </aside>
            </div>

            <section className="pm4-faq">
              <h2>よくあるご質問</h2>
              <dl>
                {printPamphletFaqs.map((f) => (
                  <div key={f.q}>
                    <dt>Q. {f.q}</dt>
                    <dd>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="pm4-flow">
              <div className="pm4-flow-head">
                <h2>入塾までの流れ</h2>
                <p>まずは面談でご相談ください。体験は必要な場合のみ。無理な勧誘は行いません。</p>
              </div>
              <ol>
                {printFlow.map((step) => (
                  <li key={step.n} className={step.n === '2' ? 'key' : undefined}>
                    <span className="n">{step.n}</span>
                    <strong>{step.title}</strong>
                    <span>{step.body}</span>
                  </li>
                ))}
              </ol>
              <p className="pm4-diag">
                体験後の学習診断レポートで明確にすること：
                {printDiagnosis.map((d, i) => (
                  <span key={d}>
                    {i > 0 ? ' ／ ' : ' '}
                    {d}
                  </span>
                ))}
              </p>
            </section>

            <div className="pm4-contact">
              <div className="info">
                <h3>まずはお問い合わせ・ご相談ください</h3>
                <p className="brand">学習塾ミネルバ</p>
                <p>
                  {printContact.postal} {printContact.address}
                </p>
                <p className="phone">Tel {printContact.phone}</p>
                <p>開校：{printContact.openHours}</p>
                <p>受付：{printContact.inquiryHours}</p>
              </div>
              <div className="qrs">
                <PrintQr url={siteQrUrl} label="まずはお問い合わせ" hint="公式サイト" size={104} />
                <PrintQr url={lineQrUrl} label="LINEで相談する" hint="公式LINE" size={104} />
              </div>
            </div>
            </div>
          </div>
        </A4Sheet>
      </div>
    </div>
  );
}
