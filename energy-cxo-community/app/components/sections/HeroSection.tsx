"use client";

import { motion } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* 画像背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              key={`kenburns-${index}-${currentImageIndex === index ? Date.now() : index}`}
              className={`w-full h-full ${index === currentImageIndex ? "kenburns-animation" : ""}`}
            >
              <Image
                src={image}
                alt={`背景画像 ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        ))}
        {/* オーバーレイ - グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-purple-900/85 z-10" />
      </div>

      {/* 装飾的なグロー効果 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          {/* メインコピー */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            エネルギー業界のCxOが
            <br />
            学び、つながり、新たな価値を創出する場
          </h1>

          {/* サブコピー */}
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto">
            エナジーCxOは、急激な市場変化に対応し、業界の未来を共に創る場です。
          </p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
            >
              <Link href="/join">入会案内を見る</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <Link href="/concept">もっと詳しく</Link>
            </Button>
          </motion.div>

          {/* 参加費無料バッジ - グラスモーフィズム */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block"
          >
            <div className="glass-morphism-dark rounded-full px-6 py-2 shadow-lg">
              <span className="text-sm font-semibold">✨ 参加費無料</span>
            </div>
          </motion.div>

          {/* 統計情報 - グラスモーフィズム */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="glass-morphism-dark rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-blue-100">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 画像インジケーター */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center gap-2 pt-8"
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`画像 ${index + 1} に切り替え`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
