"use client";

import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "経営者向けセミナー・勉強会",
      description:
        "年間2〜4回の実践的なセミナーに参加できます。FIP制度、AI活用、M&A戦略など経営に直結するテーマを扱い、業界トップ企業の事例共有や質疑応答・ディスカッションの時間を十分に確保しています。過去の資料アーカイブにもアクセス可能です。",
    },
    {
      title: "経営者ネットワーク",
      description:
        "業界トップクラスの経営者と直接つながれます。50社以上の参加企業とのネットワーク、少人数での食事会・懇親会、会員限定LINEグループでの交流、1on1マッチング支援など、深い関係性を築ける環境が整っています。",
    },
    {
      title: "会員限定情報配信",
      description:
        "週1回、厳選された業界情報をお届けします。週刊ニュースレターで最新動向をキャッチアップし、マーケットレポート・分析資料、規制・制度変更の速報、イベント・セミナー情報の先行案内を受け取ることができます。",
    },
    {
      title: "ビジネスマッチング",
      description:
        "協業・提携の機会を創出します。M&A・事業提携の相談、共同プロジェクトの組成支援、人材紹介・採用支援、技術・サービスの相互紹介など、具体的なビジネス機会につながるサポートを提供しています。",
    },
    {
      title: "経営課題の相談",
      description:
        "クローズドな環境で率直に相談できます。同じ課題を持つ経営者との情報交換、実践的なアドバイスの獲得、失敗事例・成功事例の共有、専門家への相談機会など、経営判断に役立つ知見を得られます。",
    },
    {
      title: "事業成長支援",
      description:
        "具体的なビジネス機会が生まれています。新規事業開発のヒント、市場トレンドの先取り、投資家・金融機関の紹介、ベストプラクティスの学習など、事業成長を加速させるリソースにアクセスできます。",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            会員になると得られること
          </h2>
          <p className="text-lg leading-relaxed text-foreground/70">
            ビジネスを加速させる6つの価値
          </p>
        </motion.div>

        {/* 特典リスト - 段落中心 */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pb-10 mb-10 border-b border-gray-200 last:border-b-0"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed pl-11">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* エナジーCxOならではの価値 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t-2 border-gray-200"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-12 text-foreground">
            エナジーCxOならではの価値
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                クローズドな環境
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                厳格な審査を経たCxOのみが参加するため、本音で語り合える信頼関係を構築できます。
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                実践的な内容
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                教科書的な知識ではなく、実際のビジネスに即座に活かせる具体的なノウハウを得られます。
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                継続的な学び
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                単発のイベントではなく、継続的に学び、つながり続けられるコミュニティです。
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                年会費無料
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                年会費無料。懇親会等の実費のみで、これだけの価値を得られるのは本コミュニティだけです。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
