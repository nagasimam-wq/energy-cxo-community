"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ConceptSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* イントロ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            変革期のエネルギー業界に必要な対話
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              エナジーCxOは、太陽光・蓄電池・次世代エネルギー業界に携わる経営幹部のための実践型コミュニティです。
              急激な市場変化に対応し、業界の未来を共に創る場として、クローズドな環境で率直に議論し、具体的なビジネス機会を生み出しています。
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              一社単独での情報収集では限界がある時代に、業界のトップランナーが集い、
              知見を共有し、共に学ぶことで、変革の波を乗り越える力を育みます。
            </p>
          </div>
        </motion.div>

        {/* 市場環境の変化 - 左右レイアウト */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 pb-24 border-b border-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
                市場環境の変化
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">FIP制度導入</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    市場価格連動型の新制度への対応が急務となり、これまでのFIT制度とは異なる
                    戦略的な事業運営が求められています。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">電力自由化の加速</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    競争激化と新規参入による市場変革が進み、従来のビジネスモデルの見直しが
                    不可避となっています。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">技術革新</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    AI、蓄電池、次世代エネルギー技術の急速な発展により、新たな事業機会と
                    同時に技術的な課題が生まれています。
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="エネルギー業界の変革"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* コミュニティの価値 - 段落中心 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 pb-24 border-b border-border"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-foreground">
            コミュニティの価値
          </h3>

          {/* 学び */}
          <div className="mb-10 pb-10 border-b border-gray-200">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              学び
            </h4>
            <p className="text-foreground/70 leading-relaxed pl-4">
              最新の市場動向、技術トレンド、規制変更について、実践的な知見を共有し合います。
              年4回の定例セミナーでは、業界の最前線で活躍する経営者やエキスパートから
              直接学び、自社の戦略に活かすことができます。
            </p>
          </div>

          {/* つながり */}
          <div className="mb-10 pb-10 border-b border-gray-200">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              つながり
            </h4>
            <p className="text-foreground/70 leading-relaxed pl-4">
              業界をリードする経営者同士の信頼関係を構築し、協業の可能性を探ります。
              クローズドな環境だからこそ、率直な意見交換が可能になり、
              単なる情報交換を超えた深い関係性が生まれます。
            </p>
          </div>

          {/* 価値創出 */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              価値創出
            </h4>
            <p className="text-foreground/70 leading-relaxed pl-4">
              得た知見と人脈を活かし、新たなビジネス機会を創出し、業界の発展に寄与します。
              実際にコミュニティを通じて生まれた協業や新規事業の事例も数多くあります。
            </p>
          </div>
        </motion.div>

        {/* クローズドなコミュニティの意義 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-muted/30 rounded-lg p-8 md:p-12"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
            クローズドなコミュニティの意義
          </h3>
          <p className="text-foreground/70 leading-relaxed mb-4">
            エナジーCxOは、厳格な入会基準を設けたクローズドコミュニティです。
            これは、参加者全員が安心して本音で語り合える環境を作るための重要な要素です。
          </p>
          <p className="text-foreground/70 leading-relaxed">
            業界のCxO限定という同じ目線を持つメンバーだからこそ、
            表には出せない経営課題や戦略的な議論が可能になり、
            真に価値ある知見の交換が実現します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
