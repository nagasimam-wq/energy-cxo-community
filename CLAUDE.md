# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

エネルギー業界のCxO（経営幹部）限定のクローズドコミュニティサイト

## 技術スタック

- **フレームワーク**: Next.js (App Router)
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui
- **アニメーション**: framer-motion

## 開発方針

### コンポーネント設計
- セクションごとにコンポーネントを分けて実装する
- 再利用可能なコンポーネントを作成する
- shadcn/uiのコンポーネントを活用する

### コード品質
- 高品質なコードを維持する
- TypeScriptの型安全性を活用する
- レスポンシブデザインを実装する
- アクセシビリティを考慮する

### アニメーション
- framer-motionを使用してスムーズなページ遷移とインタラクションを実装する
- パフォーマンスを意識したアニメーション設計

## コミュニケーション

- 日本語でやりとりを行う
- コメントやドキュメントも日本語で記述する

## プロジェクト構造

```
/app                 # Next.js App Router
  /components        # 再利用可能なコンポーネント
    /ui              # shadcn/uiコンポーネント
    /sections        # セクション別コンポーネント
  /lib               # ユーティリティ関数
```

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start

# Linting
npm run lint
```

## shadcn/uiコンポーネントの追加

```bash
npx shadcn-ui@latest add [component-name]
```
