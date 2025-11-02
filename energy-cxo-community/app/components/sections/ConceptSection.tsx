"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Target, Users, TrendingUp, AlertCircle } from "lucide-react";

export default function ConceptSection() {
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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            エナジーCxOとは
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            エネルギー業界のCxOが学び、つながり、新たな価値を創出する実践型コミュニティ
          </p>
        </motion.div>

        {/* 理念カード - グラスモーフィズム */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="glass-morphism neo-shadow border-none">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-center mb-6">
                エナジーCxOは、太陽光・蓄電池・次世代エネルギー業界に携わるCxOが、
                共に学び、知見を共有し、業界発展に寄与するための実践型コミュニティです。
              </p>
              <p className="text-muted-foreground text-center leading-relaxed">
                急激な市場変化に対応し、業界の未来を共に創る場として、
                クローズドな環境で率直に議論し、具体的なビジネス機会を生み出しています。
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* なぜ今必要か */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              なぜ今、エナジーCxOが必要なのか
            </h3>
            <p className="text-muted-foreground">
              エネルギー業界は、かつてない変革期を迎えています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full neo-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          {reason.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
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
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="glass-morphism neo-shadow border-none">
              <CardContent className="p-6">
                <p className="text-center leading-relaxed font-medium">
                  これらの変化に対応するには、一社単独での情報収集では限界があります。
                  業界のトップランナーが集い、率直に意見交換し、共に学ぶ場が必要です。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* 3つの価値 */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              エナジーCxOが提供する3つの価値
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full neo-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 gradient-blue-modern rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
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
      </div>
    </section>
  );
}
