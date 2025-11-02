"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

export default function ConceptPage() {
  const reasons = [
    {
      title: "FIP制度導入",
      description: "市場価格連動型の新制度への対応が急務",
    },
    {
      title: "電力自由化の加速",
      description: "競争激化と新規参入による市場変革",
    },
    {
      title: "技術革新",
      description: "AI、蓄電池、次世代エネルギー技術の急速な発展",
    },
    {
      title: "規制環境の変化",
      description: "カーボンニュートラル、RE100等の新たな要求",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "学び",
      description:
        "最新の市場動向、技術トレンド、規制変更について、実践的な知見を共有し合います。",
    },
    {
      icon: Users,
      title: "つながり",
      description:
        "業界をリードする経営者同士の信頼関係を構築し、協業の可能性を探ります。",
    },
    {
      icon: TrendingUp,
      title: "価値創出",
      description:
        "得た知見と人脈を活かし、新たなビジネス機会を創出し、業界の発展に寄与します。",
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
              コンセプト・理念
            </h1>
            <p className="text-xl text-blue-50">
              エネルギー業界の未来を共に創る
            </p>
          </motion.div>
        </div>
      </section>

      {/* 理念セクション */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  私たちの理念
                </h2>
                <p className="text-lg leading-relaxed text-center text-muted-foreground">
                  エナジーCxOは、太陽光・蓄電池・次世代エネルギー業界に携わるCxOが、
                  <br className="hidden md:block" />
                  共に学び、知見を共有し、業界発展に寄与するための実践型コミュニティです。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* なぜ今必要か */}
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
              なぜ今、エナジーCxOが必要なのか
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              エネルギー業界は、かつてない変革期を迎えています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
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
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  これらの変化に対応するには、一社単独での情報収集では限界があります。
                  <br className="hidden md:block" />
                  業界のトップランナーが集い、率直に意見交換し、共に学ぶ場が必要です。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3つの価値 */}
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
              エナジーCxOが提供する3つの価値
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
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
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* コミュニティの特徴 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  私たちが目指すコミュニティ
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  エナジーCxOは、単なる情報交換の場ではありません。
                  業界を牽引するリーダーたちが、互いに尊重し合い、
                  率直に意見を交わし、共に成長する場です。
                </p>
                <p className="text-lg leading-relaxed">
                  クローズドな環境だからこそ、本音で語り合い、
                  深い信頼関係を築き、業界全体の発展に貢献できると信じています。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
