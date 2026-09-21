import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "酒尾快都",
  description: "酒尾快都(SAKAO KAITO)のプロフィールサイト。バックエンドエンジニア・広報として活動しています。",
  openGraph: {
    title: "酒尾快都",
    description: "酒尾快都(SAKAO KAITO)のプロフィールサイト。バックエンドエンジニア・広報として活動しています。",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout, not pages/_document */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
