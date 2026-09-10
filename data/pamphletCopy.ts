/**
 * A4×4ページ パンフレット用コピー。
 * Web版の指定文言を転載。要約・言い換えしない。
 */
import { scoreCases } from '@/data/scoreCases';
import { reportSamples } from '@/data/reportSamples';
import {
  priceCourseCounts,
  priceNotes,
  priceRows,
  printContact,
} from '@/data/printMaterials';

/** 稼働中の公開URL（minerva-education.co.jp は未接続のため pages.dev） */
export const PAMPHLET_SITE_URL = 'https://minerva-hp.pages.dev';

export const pamphletBrand = {
  name: '学習塾ミネルバ',
  tagline: '個別指導 × 自立学習',
} as const;

/** 表1 */
export const pamphletCover = {
  catchLines: [
    '「なぜできないのか」を見抜く。',
    '「どうすればもっと伸びるのか」を設計する。',
  ],
  leadLines: [
    '木更津市金田東の個別指導塾「学習塾ミネルバ」',
    '授業で答えを教えるだけではなく、「なぜできないのか」を分析し、',
    '自分で学習を進められる力を育てます。',
  ],
  worries: [
    '「わかった」と言うのに、少し形が変わると解けなくなる',
    '途中式を書かず、頭の中で計算して、いつも同じところを間違える',
    '答えは出しているのに、聞かれていたのは別のことだった',
    '宿題は出しているが、丸付けとやり直しまではしていない',
    '塾に通っているのに、自分から勉強するようにならない',
  ],
  difference: [
    '授業で分からないところを教えるだけでなく、',
    '「自分で学べる状態」までつなげます。',
    '英数を中心に、必要に応じて他教科にも対応します。',
  ],
  footCatch: '個別指導1対2・80分　／　自習室あり　／　小学生〜大学受験',
  photo: '/images/hero-lesson.jpg',
} as const;

/** 表2 */
export const pamphletInsideLeft = {
  leadLines: [
    '原因は「やる気」ではなく、',
    '知っていることを自分で引き出す手順が',
    '身についていないことにあります。',
  ],
  /** Web指定文言（変更不可） */
  coreLines: [
    '答えを教える。',
    'ではなく、解き方を教える。',
    'そして、その解き方を自分で使えるようにする。',
  ],
  steps: [
    {
      n: '1',
      title: '見つける',
      body: '答案やノート、問題を解いている途中の様子から、どこでつまずいているのかを確認します。「計算が苦手」で終わらせず、どこで何が起きているのかを具体的にします。',
      image: '/images/home-step-find.jpg',
      alt: '答案とノートを見比べてつまずきを確認する様子',
    },
    {
      n: '2',
      title: '直す',
      body: 'つまずきの原因に合わせて、解き方や問題の読み方、ノートの使い方などを具体的に修正します。必要な知識はきちんと教えますが、ただ覚えさせるのではなく、「なぜそうするのか」を確認しながら、正しい考え方と解き方を身につけます。',
      image: '/images/hero-desk.jpg',
      alt: 'デスクライトの下に置かれた学習机',
    },
    {
      n: '3',
      title: '自分でできるようにする',
      body: '授業で教わったことを自習で実際に使い、自分の力で問題を解けるかを確認します。「解説を見れば分かる」ではなく、問題を自分で読み、考え、何も見ずに最後まで答案を書き、答えを確かめられるところまでつなげます。',
      image: '/images/study-back.jpg',
      alt: '自習室で一人で演習に取り組む生徒',
    },
  ],
  /** 3STEPのあと・塾長の前に置く（STEP途中に挟まない） */
  analysisHeading: '成果を偶然にしないための「客観的な分析」',
  analysisPoints: [
    {
      title: 'どう解いているかを分析',
      body: '途中式を書かずに暗算で処理していないか、図に数値を書き込まずに考え込んでいないか。無意識の癖を見つけ、得点に直結する動作へ修正します。',
    },
    {
      title: 'どこで考えることを止めているかを分析',
      body: '設問の指示を読まずに答え始めていないか、分からないとすぐ解答を見ていないか。集中力不足で片付けず、止まっているポイントを特定します。',
    },
    {
      title: '「分かる」と「できる」の境目を分析',
      body: '自信を持って説明できる範囲と、なんとなくの感覚で解いている範囲を切り分けます。この境目が見えると、やるべき課題がピンポイントで決まります。',
    },
    {
      title: 'どの学年まで戻る必要があるかを分析',
      body: '今の学年の内容を繰り返しても動かないときは、原因のある学年まで一度戻ります。遠回りに見えて、これが最短ルートです。',
    },
  ],
  /** /policy 塾長紹介と同一 */
  founder: {
    name: '塾長　橋本 陵平',
    meta: ['奈良県出身', '大阪星光学院中高卒', '早稲田大学政治経済学部卒'],
    paragraphs: [
      '学生時代から塾講師として指導し、校長・教務主任を歴任。15年間、数百名以上の生徒を指導してきました。',
      '結婚を機に木更津へ移住し、現在はミネルバを運営。一人ひとりの学習状況を見ながら指導しています。',
    ],
    photo: '/images/founder.jpg',
  },
} as const;

export const pamphletScoreCases = scoreCases;
export const pamphletReportSample = reportSamples[0];
export const pamphletReportNote = '毎回その日のうちに、ここまで報告します。';

/** 表3：学習の約束（パネル収まりのため3項目・連番） */
export const pamphletPromisesHeading = 'ミネルバが生徒と交わしている、学習の約束';
export const pamphletPromises = [
  {
    n: '01',
    title: '「解く・丸付け・やり直し」までが宿題です',
    body: '解いただけで提出されると、もともと解ける問題を解いただけになってしまいます。丸付け・やり直しまでを一組でお願いしています。',
  },
  {
    n: '02',
    title: '宿題は、やり方を覚えているうちに始めてください',
    body: '授業から日が空くと前提から忘れてしまいます。当日か翌日に少しずつ進める方が、負担が軽く定着します。',
  },
  {
    n: '03',
    title: '「できた」の基準をそろえます',
    body: '「問題文以外は何も見ずに、最初から最後まで自分で答案を書けた」状態を、その問題ができた状態と定義します。',
  },
] as const;

export const pamphletGradesFull = [
  {
    label: '小学生',
    body: '「なぜそうなるか」を考える習慣と、基本的な学び方を身につけます。',
  },
  {
    label: '中学生',
    body: '定期テストの優先順位を整理し、自分で学習を進められる状態を目指します。',
  },
  {
    label: '高校生等',
    body: '目標から優先事項を整理し、限られた時間の使い方を設計します。',
  },
] as const;

export const pamphletWebNote = '詳しい分析手法・指導報告はWebで公開しています';

/** 表4 */
export const pamphletPrice = {
  heading: '個別指導1対2・80分の料金（税込）',
  note: '月額受講費に施設費（2,200円/月）が含まれた、毎月の「総支払額」です。1講座でも自習室は毎日利用可。',
  rows: priceRows,
  courseCounts: priceCourseCounts,
  extraLabel: priceNotes.extraLabel,
  extras: [
    priceNotes.enrollment,
    '教材費：1教科につき2,000円程度（実費）',
  ],
} as const;

export const pamphletWeekHeading = '中学生の1週間の学習モデル（英数2講座受講の場合）';
export const pamphletWeekRows = [
  {
    day: '月曜日',
    slots: [
      { time: '18:50〜20:10', body: '英語授業（個別指導・作法の矯正）' },
      { time: '20:20〜20:50', body: '授業直後自習（単語暗記・長文の解き直し）' },
    ],
  },
  {
    day: '火曜日',
    slots: [{ time: '17:20〜19:30', body: '自習室利用（学校ワーク・宿題など）' }],
  },
  {
    day: '水曜日',
    slots: [
      { time: '18:50〜20:10', body: '数学授業（個別指導・プロセスの修正）' },
      { time: '20:20〜20:50', body: '授業直後自習（計算プロセスの演習）' },
    ],
  },
  {
    day: '木曜日',
    slots: [{ time: '17:20〜19:30', body: '自習室利用（指導報告で指示された個別課題）' }],
  },
] as const;

export const pamphletFaqs = [
  {
    q: '英数しかやっていないのですか？',
    a: '全教科に対応しています。理科を受講している生徒もいます。差がつきやすく自学が難しい英数を中心に授業を受けることが多いです。授業以外の科目も質問できますし、必要なら宿題として出すことも可能です。',
  },
  {
    q: '個別指導だから、料金が高いのではありませんか？',
    a: '授業だけでなく、毎回の指導報告・自習室の利用・質問対応まで含めた料金です。',
  },
  {
    q: '入塾するか決めていなくても、体験授業を受けられますか？',
    a: 'はい。無理な勧誘は一切いたしません。',
  },
] as const;

export const pamphletAssurance = [
  'まずは面談から。入塾を決める場ではありません。',
  '無理な勧誘は一切行いません。',
] as const;

export const pamphletFlow = [
  { n: '1', title: 'LINEまたはお電話でご連絡' },
  { n: '2', title: '面談で学習状況を確認' },
  { n: '3', title: '必要に応じて体験授業（80分）へ' },
] as const;

export { printContact };
