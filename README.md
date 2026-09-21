# kaito071831 プロフィールサイト

Kaito071831の個人プロフィールサイトです。Next.js(App Router)+ TypeScript + Tailwind CSS で構築した、オフホワイト背景×グラスモーフィズムの1ページ構成サイトです。

## Getting Started

依存パッケージをインストールしてから開発サーバーを起動します。

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと確認できます。`src/app/page.tsx` を編集すると自動的に反映されます。

## スクリプト

```bash
npm run dev     # 開発サーバー起動
npm run build   # 本番ビルド
npm run start   # 本番ビルドの起動
npm run lint    # ESLint
```

## プロジェクト構成

```
src/
  app/
    layout.tsx      # 全体レイアウト、フォント読み込み(Google Fonts)、メタデータ
    page.tsx         # ページ本体(セクションの組み立て)
    globals.css       # デザイントークン・全コンポーネントのスタイル
  components/
    ProfileCard.tsx   # 左側のプロフィールカード(写真・自己紹介・連絡先)
    SkillsPanel.tsx    # スキル/技術スタック
    CareerPanel.tsx     # 経歴
    AwardsPanel.tsx      # 受賞歴
    BackgroundDecor.tsx  # 背景装飾(グラデーションオーブ・グリッド・ノイズ)
    Footer.tsx            # フッター(ライブ時計)
    LiveClock.tsx          # JSTのライブ時計(クライアントコンポーネント)
  lib/
    profile-data.ts        # 掲載内容(プロフィール・スキル・経歴・受賞歴)のデータ
public/
  images/profile.jpg       # プロフィール写真
```

## 掲載内容を編集する

名前・経歴・スキル・受賞歴・連絡先など、サイトに表示される情報はすべて `src/lib/profile-data.ts` にまとまっています。内容を変更したい場合はこのファイルを編集してください。プロフィール写真を差し替える場合は `public/images/profile.jpg` を置き換え、必要に応じて `profile-data.ts` の `avatar` パスも更新してください。

## デザイン

配色・タイポグラフィ・グラスパネルなどのスタイルは `src/app/globals.css` にまとめています。フォントは Space Grotesk / Zen Kaku Gothic New / IBM Plex Mono を Google Fonts から読み込んでいます(`src/app/layout.tsx`)。

