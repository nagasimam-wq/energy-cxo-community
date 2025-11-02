# エナジーCxOコミュニティ

エネルギー業界のCxO（経営幹部）限定のクローズドコミュニティサイト

## 技術スタック

- **Next.js 15+** - App Router使用
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSS
- **shadcn/ui** - 高品質なUIコンポーネント
- **framer-motion** - スムーズなアニメーション

## 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
cd energy-cxo-community
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## スクリプト

```bash
npm run dev      # 開発サーバーを起動
npm run build    # 本番用ビルド
npm run start    # 本番サーバーを起動
npm run lint     # ESLintでコードをチェック
```

## プロジェクト構造

```
energy-cxo-community/
├── app/
│   ├── components/
│   │   ├── ui/           # shadcn/uiコンポーネント
│   │   └── sections/     # セクション別コンポーネント
│   ├── lib/              # ユーティリティ関数
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # トップページ
├── public/               # 静的ファイル
└── components.json       # shadcn/ui設定
```

## shadcn/uiコンポーネントの追加

新しいコンポーネントを追加する場合：

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## 開発ガイドライン

- セクションごとにコンポーネントを分けて実装する
- TypeScriptの型安全性を活用する
- Tailwind CSSでレスポンシブデザインを実装する
- framer-motionでスムーズなアニメーションを追加する
- 日本語でコメントとドキュメントを記述する
