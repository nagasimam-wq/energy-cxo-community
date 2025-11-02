"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 gradient-modern text-white relative overflow-hidden">
      {/* 背景装飾 - 2025年スタイル */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            業界の未来を共に創りませんか？
          </h2>
          <p className="text-lg md:text-xl text-blue-50">
            エナジーCxOへの参加をお待ちしています。
            <br />
            まずはお気軽にお問い合わせください。
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 group shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all"
            >
              <Link href="/join" className="flex items-center gap-2">
                入会案内を見る
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 hover:scale-105 transition-all"
            >
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </motion.div>

          {/* 追加情報 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 space-y-2"
          >
            <p className="text-sm text-blue-100">
              お問い合わせ：03-6420-0515（平日10:00-18:00）
            </p>
            <p className="text-sm text-blue-100">
              または公式LINE・お問い合わせフォームよりご連絡ください
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
