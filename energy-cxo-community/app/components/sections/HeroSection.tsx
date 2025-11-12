"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // 参考画像URL（高品質な無料画像を使用）
  const images = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80", // 太陽光パネル
    "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1920&q=80", // ビジネスミーティング
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80", // エネルギー施設
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    // オープニングを2.5秒表示した後、メインコンテンツへ
    const openingTimer = setTimeout(() => {
      setShowOpening(false);
    }, 2500);

    return () => clearTimeout(openingTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6秒ごとに切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* オープニングアニメーション */}
      <AnimatePresence>
        {showOpening && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-start justify-center pt-32 md:pt-40"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <Image
                src="/cxo_logo.png"
                alt="エナジーCxO ロゴ"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 画像背景 - スムーズなクロスフェード */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          {images.map((image, index) => (
            index === currentImageIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={`背景画像 ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        {/* オーバーレイ - 新しいカラーパレット */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/60 to-primary/50 z-10" />
      </div>

      {/* 控えめなグロー効果 */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-30">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          {/* メインメッセージ - シンプルで知的に */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              変革期のエネルギー業界に<br className="hidden md:block" />必要な対話
            </h1>
          </motion.div>

          {/* サブコピー - 簡潔に */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto font-light leading-relaxed"
          >
            業界を超えた知見の共有と、未来を形作る実践的な議論の場
          </motion.p>

          {/* CTAボタン - 1つだけ、柔らかい文言 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="flex justify-center items-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-white/95 text-primary hover:bg-white hover:shadow-xl transition-all text-lg px-10 py-6 font-medium rounded-md"
            >
              <Link href="/concept">コミュニティについて知る</Link>
            </Button>
          </motion.div>

          {/* 画像インジケーター - 控えめに */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="flex justify-center gap-2 pt-16"
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/30 hover:bg-white/50 w-6"
                }`}
                aria-label={`画像 ${index + 1} に切り替え`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
