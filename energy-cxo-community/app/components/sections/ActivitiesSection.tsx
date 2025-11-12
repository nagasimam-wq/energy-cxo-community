"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ActivitiesSection() {
  const activities = [
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      category: "セミナー",
      title: "経営者向け勉強会・セミナー",
      description:
        "年間2〜4回開催。FIP戦略、AI活用、M&A戦略、蓄電池市場動向など、経営に直結する実践テーマを深掘りします。",
    },
    {
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&q=80",
      category: "ネットワーキング",
      title: "交流・マッチング",
      description:
        "少人数食事会、視察イベント、会員限定LINEでの交流を通じて、業界トップクラスの経営者との深い関係性を築きます。",
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
      category: "情報配信",
      title: "会員限定情報配信",
      description:
        "週1回のニュース配信、マーケットレポート、イベント情報、資料アーカイブなど、厳選された業界情報をお届けします。",
    },
  ];

  const testimonials = [
    {
      quote:
        "エナジーCxOでの出会いが、新規事業立ち上げのきっかけになりました。",
      author: "太陽光発電事業 代表取締役",
      company: "A社",
    },
    {
      quote:
        "同じ課題を抱える経営者同士で率直に議論できる貴重な場です。",
      author: "蓄電池事業 CEO",
      company: "B社",
    },
    {
      quote:
        "最新の市場動向をいち早く把握でき、経営判断のスピードが上がりました。",
      author: "再エネコンサルティング 代表",
      company: "C社",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* 活動内容 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            主な活動内容
          </h2>
          <p className="text-lg leading-relaxed text-foreground/70">
            3つの柱で業界の未来を創る
          </p>
        </motion.div>

        {/* 記事リスト風レイアウト */}
        <div className="space-y-8 mb-24">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 hover:border-primary/30 transition-colors duration-300">
                {/* 画像 */}
                <div className="relative w-full md:w-72 h-48 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* カテゴリバッジ */}
                  <div className="absolute top-3 left-3 bg-accent px-3 py-1 rounded-full text-white text-xs font-semibold">
                    {activity.category}
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 参加者の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t-2 border-gray-200"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-12 text-foreground">
            実際に参加されている経営者のコメント
          </h3>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary/30 pl-6 py-2"
              >
                <p className="text-foreground/80 italic leading-relaxed mb-3">
                  「{testimonial.quote}」
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-foreground">
                    {testimonial.author}
                  </span>
                  <span className="text-foreground/50">·</span>
                  <span className="text-foreground/60">{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
