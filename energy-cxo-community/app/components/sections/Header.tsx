"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "トップ", href: "/" },
    { name: "コンセプト", href: "/concept" },
    { name: "活動内容", href: "/activities" },
    { name: "特典", href: "/benefits" },
    { name: "イベント", href: "/events" },
    { name: "FAQ", href: "/faq" },
    { name: "入会案内", href: "/join" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <img
              src="/cxo_logo.png"
              alt="エナジーCxO"
              className="h-9 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors ml-4 underline decoration-primary/0 hover:decoration-primary/100 underline-offset-4"
            >
              会員ログイン
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full mt-4">
              <Link href="/login">会員ログイン</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
