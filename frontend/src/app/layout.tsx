import type { Viewport } from "next";
import "./globals.scss";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171717",
};

export const metadata = {
  title: "KnHow",
  description: "ノウハウ共有ツール",
  openGraph: {
    title: "KnHow / カンホー",
    description: "ノウハウ共有ツール",
    type: "website",
    // url: "https://yourdomain.com",
    // image: "https://yourdomain.com/og-image.jpg",
  },
  keywords: [
    "ノウハウ",
    "スキル",
    "SNS",
    "コミュニケーション",
    "know-how",
    "skills",
    "プログラミング",
    "programing",
  ],
  robots: "index, follow",
  icons: {
    // icon: "/favicon.ico",
    // apple: "/apple-icon.png",
  },
  //   manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
