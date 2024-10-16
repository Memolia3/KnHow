import Header from "./components/layouts/Header";

export const metadata = {
  title: "KnHow / カンホー",
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
  viewport: "width=device-width, initial-scale=1",
  icons: {
    // icon: "/favicon.ico",
    // apple: "/apple-icon.png",
  },
  themeColor: "#171717",
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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
