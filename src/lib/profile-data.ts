export const profile = {
  nameJa: "酒尾 快都",
  nameRomaji: "SAKAO KAITO",
  nickname: "とーくん",
  role: "ENGINEER & PR — TOKYO",
  bio: "アプリケーションのバックエンド開発とインフラの保守運用を担当。あわせて広報として、採用イベントやテックカンファレンスでのブランディングにも携わっています。",
  email: "k_sakao@kaito071831.com",
  x: { handle: "@kaito071831", url: "https://x.com/kaito071831" },
  github: { handle: "kaito071831", url: "https://github.com/kaito071831" },
  avatar: "/images/profile.jpg",
};

export const skills: { title: string; items: string[] }[] = [
  { title: "BACKEND", items: ["Java", "Ruby", "PHP", "Go", "TypeScript", "Python", "Kotlin"] },
  { title: "FRONTEND", items: ["Next.js"] },
  { title: "INFRA", items: ["AWS", "Terraform"] },
];

export const career: { period: string; role: string; org: string; note: string }[] = [
  {
    period: "2025.12 — NOW",
    role: "Product Engineer",
    org: "アクセンチュア株式会社",
    note: "バックエンド開発・インフラ運用。ゆめみのブランディング活動を兼任(象徴社長)。",
  },
  {
    period: "2023.04 — 2025.11",
    role: "サーバーサイドエンジニア / 広報",
    org: "株式会社ゆめみ",
    note: "バックエンド開発・インフラ運用。広報として採用イベント・テックカンファレンスでブランディングを担当(象徴社長)。",
  },
  {
    period: "2021.04 — 2023.03",
    role: "工学部 情報工学科",
    org: "金沢工業大学",
    note: "在学中、株式会社CirKitでシステム開発部リーダーとしてアプリケーション開発や採用・育成に従事。",
  },
  {
    period: "2016.04 — 2021.03",
    role: "グローバル情報学科",
    org: "国際高等専門学校",
    note: "旧・金沢工業高等専門学校。",
  },
];

export const awards: { year: string; title: string; org: string }[] = [
  { year: "2025", title: "Japan AWS Jr. Champion", org: "Amazon Web Services Japan" },
];
