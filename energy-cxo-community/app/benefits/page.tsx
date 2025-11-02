"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import {
  BookOpen,
  Users2,
  Mail,
  Lightbulb,
  TrendingUp,
  Calendar,
  FileText,
  Handshake,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function BenefitsPage() {
  const mainBenefits = [
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
      color: "blue",
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
      color: "green",
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
      color: "purple",
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
      color: "orange",
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
      color: "red",
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
      color: "indigo",
    },
  ];

  const uniqueValues = [
    {
      title: "クローズドな環境",
      description:
        "厳格な審査を経たCxOのみが参加するため、本音で語り合える信頼関係を構築できます。",
      icon: "🔒",
    },
    {
      title: "実践的な内容",
      description:
        "教科書的な知識ではなく、実際のビジネスに即座に活かせる具体的なノウハウを得られます。",
      icon: "💡",
    },
    {
      title: "継続的な学び",
      description:
        "単発のイベントではなく、継続的に学び、つながり続けられるコミュニティです。",
      icon: "🔄",
    },
    {
      title: "無料で参加",
      description:
        "年会費無料。懇親会等の実費のみで、これだけの価値を得られるのは本コミュニティだけです。",
      icon: "💰",
    },
  ];

  const testimonials = [
    {
      quote:
        "同業他社の経営者と率直に意見交換できる貴重な場です。競合だからこそ分かり合える課題も多く、協業の話も進んでいます。",
      author: "太陽光発電事業 代表取締役",
      company: "参加歴2年",
    },
    {
      quote:
        "セミナーで得た知見をすぐに事業に活かせました。特にFIP制度の運用について、実践的なアドバイスが非常に役立ちました。",
      author: "再エネ開発 CEO",
      company: "参加歴1年",
    },
    {
      quote:
        "ここでの出会いがきっかけで、新規事業の立ち上げに成功しました。人脈の価値は計り知れません。",
      author: "蓄電池事業 代表取締役",
      company: "参加歴3年",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ページヒーロー */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">会員特典</h1>
            <p className="text-xl text-blue-50 mb-6">
              ビジネスを加速させる6つの特典
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-3 inline-block">
                <span className="text-lg font-bold flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  年会費無料・充実のサポート
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* メイン特典 */}
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
              会員になると得られる6つの特典
            </h2>
            <p className="text-lg text-muted-foreground">
              経営に直結する実践的な価値を提供します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ユニークな価値 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              エナジーCxOならではの価値
            </h2>
            <p className="text-lg text-muted-foreground">
              他では得られない特別な体験
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {uniqueValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{value.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 会員の声 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              会員の声
            </h2>
            <p className="text-lg text-muted-foreground">
              実際に参加されている経営者の感想
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6">
                    <div className="text-4xl text-blue-600 mb-4">"</div>
                    <p className="text-muted-foreground italic leading-relaxed mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="pt-4 border-t">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              これらの特典を無料で利用できます
            </h2>
            <p className="text-lg text-blue-50 mb-8">
              入会をご検討の方は、まずはお気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
