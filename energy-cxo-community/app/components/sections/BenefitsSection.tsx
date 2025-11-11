"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { BookOpen, Users2, Mail, Handshake, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "経営者向けセミナー・勉強会",
      description: "年間2〜4回の実践的なセミナーに参加できます",
      details: [
        "FIP制度、AI活用、M&A戦略など経営に直結するテーマ",
        "業界トップ企業の事例共有",
        "質疑応答・ディスカッションの時間を十分に確保",
        "過去の資料アーカイブにアクセス可能",
      ],
    },
    {
      icon: Users2,
      title: "経営者ネットワーク",
      description: "業界トップクラスの経営者と直接つながれます",
      details: [
        "50社以上の参加企業とのネットワーク",
        "少人数での食事会・懇親会",
        "会員限定LINEグループでの交流",
        "1on1マッチング支援",
      ],
    },
    {
      icon: Mail,
      title: "会員限定情報配信",
      description: "週1回、厳選された業界情報をお届けします",
      details: [
        "週刊ニュースレターで最新動向をキャッチアップ",
        "マーケットレポート・分析資料",
        "規制・制度変更の速報",
        "イベント・セミナー情報の先行案内",
      ],
    },
    {
      icon: Handshake,
      title: "ビジネスマッチング",
      description: "協業・提携の機会を創出します",
      details: [
        "M&A・事業提携の相談",
        "共同プロジェクトの組成支援",
        "人材紹介・採用支援",
        "技術・サービスの相互紹介",
      ],
    },
    {
      icon: Lightbulb,
      title: "経営課題の相談",
      description: "クローズドな環境で率直に相談できます",
      details: [
        "同じ課題を持つ経営者との情報交換",
        "実践的なアドバイスの獲得",
        "失敗事例・成功事例の共有",
        "専門家への相談機会",
      ],
    },
    {
      icon: TrendingUp,
      title: "事業成長支援",
      description: "具体的なビジネス機会が生まれています",
      details: [
        "新規事業開発のヒント",
        "市場トレンドの先取り",
        "投資家・金融機関の紹介",
        "ベストプラクティスの学習",
      ],
    },
  ];

  const uniqueValues = [
    {
      title: "クローズドな環境",
      description:
        "厳格な審査を経たCxOのみが参加するため、本音で語り合える信頼関係を構築できます。",
    },
    {
      title: "実践的な内容",
      description:
        "教科書的な知識ではなく、実際のビジネスに即座に活かせる具体的なノウハウを得られます。",
    },
    {
      title: "継続的な学び",
      description:
        "単発のイベントではなく、継続的に学び、つながり続けられるコミュニティです。",
    },
    {
      title: "年会費無料",
      description:
        "年会費無料。懇親会等の実費のみで、これだけの価値を得られるのは本コミュニティだけです。",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            会員になると得られること
          </h2>
          <p className="text-lg text-muted-foreground">
            ビジネスを加速させる6つの特典
          </p>
        </motion.div>

        {/* 特典リスト（詳細版） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#1a7fb8]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 gradient-blue-modern rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 pl-2">
                {benefit.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1a7fb8] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* エナジーCxOならではの価値 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              エナジーCxOならではの価値
            </h3>
            <p className="text-muted-foreground">
              他では得られない特別な体験
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {uniqueValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 text-center bg-gradient-to-br from-[#1a7fb8]/5 to-[#4db8e8]/10 rounded-xl border border-[#1a7fb8]/20 hover:border-[#1a7fb8]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#1a7fb8] to-[#4db8e8] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold mb-3 mt-4 bg-gradient-to-r from-[#1a7fb8] to-[#4db8e8] bg-clip-text text-transparent">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
