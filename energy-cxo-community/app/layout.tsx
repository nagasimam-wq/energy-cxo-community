import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

export const metadata: Metadata = {
  title: "エナジーCxO - エネルギー業界のCxO限定コミュニティ",
  description: "エネルギー業界のCxOが学び、つながり、新たな価値を創出する場。参加費無料のクローズドコミュニティです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
