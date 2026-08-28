/**
 * ホーム掲載の成績改善事例。
 * 点数は開校後の定期テスト実績。原因・改善は improvementPatterns（数学）と
 * report.csv / reportSamples の該当学年・教科の指導記録から要約（推測で創作しない）。
 */
export type ScoreCase = {
  grade: string;
  subject: string;
  before: number;
  after: number;
  diff: number;
  cause: string;
  improvement: string;
};

export const scoreCases: ScoreCase[] = [
  {
    grade: '中学2年',
    subject: '数学',
    before: 15,
    after: 74,
    diff: 59,
    cause:
      '途中式を書かず頭の中で処理しており、ノートに残っていないため、どこで間違えたのか本人も後から確認できなかった。',
    improvement:
      '式を縦に揃えてノートに残し、自分がどこで間違えたのかを自分で確認できるようにした。自習室でも書き方が崩れていないか確認を続けた。',
  },
  {
    grade: '中学3年',
    subject: '数学',
    before: 33,
    after: 66,
    diff: 33,
    cause:
      '関数のイメージがついておらず、何をどの順番で求めているのかが分からなかった。代入後の式変形も不十分だった。',
    improvement:
      '関数とは何かを具体例から理解し直し、式変形で解く方法を再度確認した。何を計算しているのかを一つずつ自覚しながら解くようになった。',
  },
  {
    grade: '中学2年',
    subject: '数学',
    before: 72,
    after: 97,
    diff: 25,
    cause:
      '解き方や公式は覚えているが「なぜそうするのか」が分からず手順だけで解いており、計算ミスで取りこぼしが残っていた。',
    improvement:
      '間違えた問題を根本から理解し直し、解ける問題を落とさないよう、計算の手順と意味を確認する習慣をつけた。',
  },
];
