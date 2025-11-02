"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { CheckCircle2, Users, Award, Handshake, CreditCard } from "lucide-react";
import Link from "next/link";

export default function EligibilityPage() {
  const targetAudience = [
    {
      title: "再エネ・電力事業のCxO",
      description:
        "太陽光、風力、蓄電池、電力小売等のエネルギー事業を経営されている方",
    },
    {
      title: "関連業界のCxO",
      description:
        "金融、コンサルティング、メーカー、ITなど、エネルギー業界と関わりの深い事業を経営されている方",
    },
    {
      title: "新規参入・多角化を検討する経営者",
      description:
        "エネルギー業界への新規参入や、既存事業の多角化を検討されている経営者の方",
    },
  ];

  const requirements = [
    {
      icon: Award,
      title: "役職",
      detail: "CxOまたは事業責任者クラス",
      description:
        "代表取締役、取締役、執行役員、または同等の意思決定権を持つポジションの方が対象です。",
    },
    {
      icon: Handshake,
      title: "推薦",
      detail: "既存会員または当社社員の推薦",
      description:
        "コミュニティの質を維持するため、既存会員または株式会社グッドフェローズの社員による推薦が必要です。",
    },
    {
      icon: CreditCard,
      title: "会費",
      detail: "無料（懇親会は実費負担）",
      description:
        "年会費は無料です。懇親会やイベントの飲食費については実費をご負担いただきます。",
    },
  ];

  const flow = [
    {
      step: "1",
      title: "お問い合わせ",
      description: "お問い合わせフォーム、LINE、またはお電話にてご連絡ください。",
    },
    {
      step: "2",
      title: "面談",
      description: "運営メンバーとの面談を実施させていただきます。",
    },
    {
      step: "3",
      title: "審査",
      description: "推薦者の確認と入会審査を行います（通常1週間程度）。",
    },
    {
      step: "4",
      title: "入会",
      description: "審査通過後、会員限定グループへご招待いたします。",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              対象者・入会条件
            </h1>
            <p className="text-xl text-blue-50">
              業界をリードする経営者の皆様へ
            </p>
          </motion.div>
        </div>
      </section>

      {/* 対象者 */}
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
              こんな方が対象です
            </h2>
            <p className="text-lg text-muted-foreground">
              エネルギー業界に携わる経営者の皆様
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold">
                        {audience.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-9">
                      {audience.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 入会条件 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">入会条件</h2>
            <p className="text-lg text-muted-foreground">
              質の高いコミュニティを維持するための条件
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <requirement.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {requirement.detail}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {requirement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 入会フロー */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">入会の流れ</h2>
            <p className="text-lg text-muted-foreground">
              お問い合わせから入会まで
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {flow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                {index < flow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-blue-300 transform rotate-45"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  まずはお気軽にお問い合わせください
                </h3>
                <p className="text-muted-foreground mb-6">
                  入会に関するご質問や、コミュニティについての詳細など、
                  <br className="hidden md:block" />
                  お気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8"
                  >
                    <Link href="/join">入会案内を見る</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
