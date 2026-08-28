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
  printFaqs,
  printFlyerWorries,
  printFlow,
  printHero,
  printReasons,
  printReportPreview,
  printResults,
  printSteps,
} from '@/data/printMaterials';

export default async function FlyerDocument() {
  const siteQrUrl = `${SITE_URL}/contact`;
  const lineQrUrl = LINE_URL;

  return (
    <div data-print-document className="print-document">
      <PrintToolbar
        title="チラシ（A4両面）"
        subtitle="興味喚起→問い合わせ／通常版"
      />

      <div className="print-sheets">
        {/* ===== 表面：短時間で「何の塾か／何が違うか／自分ごと」 ===== */}
        <A4Sheet>
          <PrintCampaignSlot />
          <div className="fy">
            <div className="fy-stack">
            <header className="fy-top">
              <div className="fy-top-copy">
                <p className="place">
                  {printContact.area}
                  <span>{printContact.tagline}</span>
                </p>
                <h1>
                  {printHero.catchLines[0]}
                  <br />
                  {printHero.catchLines[1]}
                </h1>
                <p className="sub">
                  苦手には「できない原因」を、得意には「伸ばす手順」を。
                  <br />
                  子どもが自分で解けるようになるための、個別指導塾です。
                </p>
              </div>
              <div
                className="fy-top-photo"
                style={{ backgroundImage: "url('/images/policy-tutoring.jpg')" }}
              />
            </header>

            <div className="fy-mid">
              <section className="fy-worry">
                <h2>こんなお悩みありませんか？</h2>
                <ul>
                  {printFlyerWorries.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </section>
              <div
                className="fy-mid-photo"
                style={{ backgroundImage: "url('/images/study-room.jpg')" }}
              >
                <span>自習スペース完備</span>
              </div>
            </div>

            <section className="fy-core">
              <p className="soft">
                {printCoreMessage.lines[0]}
                <em> {printCoreMessage.lines[1]}</em>
              </p>
              <p className="goal">{printCoreMessage.lines[2]}</p>
            </section>

            <section className="fy-steps">
              <h2>成績向上の3STEP</h2>
              <ol>
                {printSteps.map((step, i) => (
                  <li key={step.label}>
                    <span className="n">{i + 1}</span>
                    <strong>{step.title}</strong>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="fy-reasons">
              <h2>選ばれる理由</h2>
              <ul>
                {printReasons.map((r) => (
                  <li key={r.title}>
                    <strong>{r.title}</strong>
                    <span>{r.body}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="fy-proof">
              <section className="fy-results">
                <h2>直近の成績改善事例</h2>
                {printResults.map((r) => (
                  <div key={`${r.grade}-${r.from}`} className="row">
                    <span className="g">{r.grade}</span>
                    <span className="s">
                      {r.from}→{r.to}
                    </span>
                    <span className="d">{r.diff}</span>
                  </div>
                ))}
              </section>
              <aside className="fy-cta">
                <p className="label">まずはご相談ください</p>
                <p>
                  お問い合わせのあと、面談で学習状況を確認します。体験授業は必要な場合にご案内します。
                </p>
                <p className="more">料金・流れ・FAQは裏面へ</p>
              </aside>
            </div>

            <footer className="fy-foot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-horizontal.svg" alt="" />
              <p>
                {printContact.address} ／ Tel {printContact.phone}
              </p>
            </footer>
            </div>
          </div>
        </A4Sheet>

        {/* ===== 裏面：検討用情報 ===== */}
        <A4Sheet pageBreakAfter={false}>
          <div className="fyb">
            <div className="fyb-stack">
            <div className="fyb-top">
              <section className="fyb-flow">
                <h2>入塾までの流れ</h2>
                <ol>
                  {printFlow.map((step) => (
                    <li key={step.n} className={step.n === '2' ? 'key' : undefined}>
                      <span className="n">{step.n}</span>
                      <div>
                        <strong>{step.title}</strong>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
              <aside className="fyb-qr">
                <p>まずはお問い合わせ</p>
                <PrintQr url={siteQrUrl} label="サイトから相談" hint="お問い合わせページ" size={120} />
              </aside>
            </div>

            <p className="fyb-banner">
              面談で学習状況を確認したうえで、必要に応じて80分の体験授業と学習診断レポートをご案内します
            </p>

            <div className="fyb-diag">
              <section>
                <h3>つまずきの原因をここまで見ます</h3>
                <ul>
                  <li>
                    <strong>学習方法</strong>途中式を省く、見ながら写す 等
                  </li>
                  <li>
                    <strong>心理的要因</strong>間違いを恐れる、速さ優先 等
                  </li>
                  <li>
                    <strong>前学年の穴</strong>割合・be動詞と一般動詞 等
                  </li>
                </ul>
                <p className="accent">毎回の授業後、指導報告をお送りします</p>
              </section>
              <section className="fyb-report">
                <h3>{printReportPreview.label}</h3>
                <p className="meta">
                  {printReportPreview.grade}｜{printReportPreview.topic}
                </p>
                <p>
                  <b>【つまずき】</b>
                  {printReportPreview.stuck}
                </p>
                <p>
                  <b>【今回の指導】</b>
                  {printReportPreview.guidance}
                </p>
                <p>
                  <b>【次回】</b>
                  {printReportPreview.next}
                </p>
              </section>
            </div>

            <p className="fyb-quote">
              勉強は「やり方」が変わると結果が変わります。
              <br />
              答えを教えるのではなく、なぜできないのかを一緒に見つけます。
            </p>

            <section className="fyb-faq">
              <h2>よくあるご質問</h2>
              <div className="fyb-faq-grid">
                {printFaqs.map((faq) => (
                  <div key={faq.q}>
                    <h3>Q. {faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="fyb-price">
              <h2>個別指導（1コマ80分×約月4回）の総支払額</h2>
              <p className="note">
                月額受講費に施設費（2,200円/月）が含まれた、毎月の
                <strong>「総支払額」</strong>
                です（{priceNotes.tax}）
              </p>
              <div className="fyb-price-row">
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
            </section>

            <footer className="fyb-contact">
              <p className="band">少しでも気になったら、お気軽にご連絡ください</p>
              <div className="body">
                <PrintQr url={siteQrUrl} label="お問い合わせ" hint="公式サイト" size={96} />
                <PrintQr url={lineQrUrl} label="LINEで相談" hint="公式LINE" size={96} />
                <div className="info">
                  <h3>学習塾ミネルバ</h3>
                  <p>
                    {printContact.postal} {printContact.address}
                  </p>
                  <p className="phone">Tel {printContact.phone}</p>
                  <p>開校：{printContact.openHours}</p>
                  <p>受付：{printContact.inquiryHours}</p>
                </div>
              </div>
            </footer>
            </div>
          </div>
        </A4Sheet>
      </div>
    </div>
  );
}
