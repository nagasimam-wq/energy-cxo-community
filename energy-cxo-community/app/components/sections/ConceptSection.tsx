"use client";

import { motion } from "framer-motion";

export default function ConceptSection() {
  const values = [
    {
      title: "学び",
      description:
        "最新の市場動向、技術トレンド、規制変更について、実践的な知見を共有し合います。",
    },
    {
      title: "つながり",
      description:
        "業界をリードする経営者同士の信頼関係を構築し、協業の可能性を探ります。",
    },
    {
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
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            エナジーCxOとは
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            エネルギー業界のCxOが学び、つながり、新たな価値を創出する実践型コミュニティ
          </p>
        </motion.div>

        {/* 理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-pattern rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
            <div className="relative p-8 md:p-12 text-white">
              <p className="text-lg leading-relaxed text-center mb-6">
                エナジーCxOは、太陽光・蓄電池・次世代エネルギー業界に携わるCxOが、
                共に学び、知見を共有し、業界発展に寄与するための実践型コミュニティです。
              </p>
              <p className="text-white/90 text-center leading-relaxed">
                急激な市場変化に対応し、業界の未来を共に創る場として、
                クローズドな環境で率直に議論し、具体的なビジネス機会を生み出しています。
              </p>
            </div>
          </div>
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
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              なぜ今、エナジーCxOが必要なのか
            </h3>
            <p className="text-foreground/70">
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
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    {reason.description}
                  </p>
                </div>
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
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <p className="text-center leading-relaxed font-medium text-foreground">
                これらの変化に対応するには、一社単独での情報収集では限界があります。
                業界のトップランナーが集い、率直に意見交換し、共に学ぶ場が必要です。
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3つの価値 */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
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
                <div className="h-full p-8 text-center bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 gradient-modern rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
