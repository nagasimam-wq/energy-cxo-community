"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const stats = [
    { value: "50+", label: "参加企業" },
    { value: "年4回", label: "セミナー" },
    { value: "100%", label: "満足度" },
  ];

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
        {/* オーバーレイ - より濃く */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary/70 z-10" />
        {/* 追加のダークオーバーレイで文字を目立たせる */}
        <div className="absolute inset-0 bg-black/20 z-[11]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-30">
        <div className="text-center max-w-4xl mx-auto space-y-10">
          {/* メインコピー - フェードイン */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-lg">
              エネルギー業界のCxOが
              <br />
              学び、つながり、新たな価値を創出する場
            </h1>
          </motion.div>

          {/* サブコピー */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            エナジーCxOは、急激な市場変化に対応し、
            <br className="hidden md:block" />
            業界の未来を共に創る場です。
          </motion.p>


          {/* 統計情報 - グラスモーフィズム */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="grid grid-cols-3 gap-6 md:gap-10 max-w-3xl mx-auto pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                <div className="glass-morphism-dark rounded-3xl p-6 md:p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base md:text-lg text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
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
