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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/cxo_logo.png"
              alt="エナジーCxO"
              className="h-10 w-auto"
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-4">
              <Link href="/login">会員ログイン</Link>
            </Button>
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
