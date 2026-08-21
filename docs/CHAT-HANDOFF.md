# チャット引き継ぎメモ（2026-08-21）

このファイルは、Cursor 上の作業チャット内容を会社PC／自宅PC間で引き継ぐための要約です。  
ローカルのチャット履歴は端末間で同期されないため、ここに要点を残しています。

---

## プロジェクト概要

- **サイト**: 学習塾ミネルバ公式サイト
- **技術**: Next.js（App Router）+ TypeScript + Tailwind CSS
- **仕様書**: `minerva-web-spec.txt`
- **開発ルール**: `clines-development-rules.txt`
- **リポジトリ**: `https://github.com/Minerva-kisarazu/minerva-hp`

### ページ構成（5ページ）

| パス | 内容 |
|------|------|
| `/` | ホーム |
| `/policy` | 指導方針 |
| `/grades` | 学年別のご案内 |
| `/price` | 受講料・よくあるご質問 |
| `/contact` | 無料体験・お問い合わせ |

---

## このチャットでやったこと（時系列）

### 1. サイトレビュー（コードはまだ直さない段階）

見た目・スマホ表示・文言・フォーム・仕様との差分をレビューし、直すべき順に指摘した。

**最優先だった指摘**

1. **フォームがどこにも送信していない**（成功画面だけ出るモック）
2. **スマホでCTAが `whitespace-nowrap` ではみ出す**（`/policy` `/grades` `/price`）
3. **`globals.css` の `a:hover` でCTAの文字色がゴールドになりコントラストが崩れる**

**その他の主な指摘**

- メタデータがルート1つだけ／下層に `<h1>` が無い
- 画像が素の `<img>`（`next/image` 未使用）
- 日本語フォント未読み込み
- 数字前後の半角スペース混入（仕様の「原文厳守」に抵触）
- 料金・週間スケジュールが表ではなくリスト／カード
- 学年別ページで h3 のキャッチが本文に埋没
- フッター地図URLが怪しい／住所のスペースずれ
- フォームのバリデーション・アクセシビリティ不足

### 2. 修正実施（送信先以外）

ユーザー指示: **「送信先はなくて良い。それ以外を順に直して」**

実施した主な変更:

- `globals.css` 整理（死んだCSS・不正 `line-height`・全 `a:hover` 除去）
- `next/font` で Noto Sans JP / Noto Serif JP を読み込み
- Header / Footer を `app/layout.tsx` に集約、固定ヘッダー余白を一元化
- 共通 `CtaButton` / `PreFooterCta` / `PageHeader` を追加
- 全ページサーバーコンポーネント化（フォームだけ `ContactForm` を client 化）
- 各ページ個別メタデータ・`<h1>`・`next/image`
- 文言の半角スペース除去・Q&Aの全角統一・原稿に近い形へ復元
- 料金テーブル化・週間スケジュール表組み
- フォームのバリデーション強化・`fieldset` / `aria-*` / エラー時フォーカス
- `app/icon.svg` / `sitemap.ts` / `robots.ts` / FAQ JSON-LD
- 未使用の `public/styles.css` 削除

**意図的に触っていないもの**

- フォームの実送信（送信先未定）
  - `components/ContactForm.tsx` に `TODO` コメントあり
  - 現状は待ち時間のあと成功画面を出すだけ。入力はどこにも届かない

**仕様どおり残している要確認**

- ホームの「指導方針・自習室の詳細はこちら」→ リンク先は仕様書どおり `/grades`
  - 文言と行き先が食い違う可能性あり（仕様書側の誤りかも）

### 3. スクリーンショットスクリプト

- ルートに `screenshot.js`（Puppeteer）を作成
- 対象: `/` `/policy` `/grades` `/price` `/contact`
- 初回は遅延読み込み画像が白抜け → スクロール＋画像読み込み待ちを追加して修正
- 使い方:

```bash
npm run dev   # 別ターミナル
node screenshot.js
```

- 保存先: `screenshots/01-home.png` 〜 `05-contact.png`
- フッターの Google マップ埋め込みはヘッドレスでは空になることがある

### 4. PC間の作業引き継ぎについて（チャット同期）

- **ローカルの Agent チャット履歴は端末間で同期されない**
- 同期されるもの: アカウントの User Rules、Cloud Agents の会話、git 上のコード／ルールファイル
- 方針: **コードは git、AIへの前提はリポジトリ内のメモ／Rules、会話継続は Cloud Agent かこの種の引き継ぎMD**

### 5. git の状態（このチャット時点）

- 作業ツリーはクリーン（未コミットなし）
- 関連コミット例:
  - `5714499` — レビュー修正一式（メッセージは `up`）
  - `05ff25a` — `screenshot.js` とスクショ画像など（メッセージは `up`）
- どちらも `origin/main` に反映済みとの確認あり

---

## 次にやる候補

1. **フォーム送信先の決定と実装**（Resend / Formspree / 公式LINE など）
2. ホームCTA「指導方針・自習室の詳細」のリンク先を `/policy` にするか仕様確認
3. 本番ドメイン決定後に `NEXT_PUBLIC_SITE_URL` を設定（`sitemap` / `robots` 用）
4. 必要なら `.cursor/rules` や `AGENTS.md` を追加して、別PCでも同じ前提でAgentが動くようにする
5. コミットメッセージが `up` ばかりなので、今後は内容が分かるメッセージにする

---

## 作業再開時のワンライナー（別PC用）

```
学習塾ミネルバ公式サイト。仕様は minerva-web-spec.txt。
レビュー指摘のうち送信以外は対応済み。フォームはモックのまま（ContactForm.tsx の TODO）。
続きは docs/CHAT-HANDOFF.md を読んでから。
```
