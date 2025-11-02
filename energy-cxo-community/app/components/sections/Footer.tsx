import Link from "next/link";

export default function Footer() {
  const siteMapLinks = [
    { name: "トップ", href: "/" },
    { name: "コンセプト", href: "/concept" },
    { name: "活動内容", href: "/activities" },
    { name: "対象者", href: "/eligibility" },
  ];

  const menuLinks = [
    { name: "特典", href: "/benefits" },
    { name: "イベント", href: "/events" },
    { name: "FAQ", href: "/faq" },
    { name: "入会案内", href: "/join" },
  ];

  const otherLinks = [
    { name: "会社概要", href: "/company" },
    { name: "プライバシーポリシー", href: "/privacy" },
    { name: "利用規約", href: "/terms" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ロゴと説明 */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              エナジーCxO
            </div>
            <p className="text-sm text-muted-foreground">
              エネルギー業界のCxOが学び、つながり、新たな価値を創出する場
            </p>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="font-semibold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              {siteMapLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* メニュー */}
          <div>
            <h3 className="font-semibold mb-4">メニュー</h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* その他 */}
          <div>
            <h3 className="font-semibold mb-4">その他</h3>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 エナジーCxO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
