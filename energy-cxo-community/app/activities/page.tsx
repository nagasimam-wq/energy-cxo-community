"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { BookOpen, Users2, Mail, Calendar, MessageSquare, FileText } from "lucide-react";

export default function ActivitiesPage() {
  const mainActivities = [
    {
      icon: BookOpen,
      title: "勉強会・セミナー",
      frequency: "年間2〜4回開催",
      description:
        "経営に直結する実践テーマを深掘りします。業界の最前線で活躍する専門家を招き、具体的な事例とともに学びます。",
      topics: [
        "FIP制度の実践的運用戦略",
        "AI・IoTを活用した発電所運営",
        "M&A・事業承継の実務",
        "蓄電池市場の最新動向",
        "カーボンクレジット活用法",
        "電力自由化市場の展望",
      ],
    },
    {
      icon: Users2,
      title: "交流・マッチング",
      frequency: "定期的に開催",
      description:
        "少人数での深い交流から、具体的なビジネス機会が生まれています。",
      topics: [
        "少人数食事会（四半期ごと）",
        "現場視察イベント",
        "会員限定LINEグループ",
        "1on1マッチング支援",
        "協業プロジェクト紹介",
        "人材紹介・採用支援",
      ],
    },
    {
      icon: Mail,
      title: "会員限定情報配信",
      frequency: "週1回配信",
      description:
        "業界の最新動向を厳選してお届けします。多忙な経営者が効率的に情報を得られるよう工夫しています。",
      topics: [
        "週刊ニュースレター",
        "マーケットレポート",
        "規制・制度変更速報",
        "イベント・セミナー情報",
        "過去資料アーカイブ",
        "会員限定コンテンツ",
      ],
    },
  ];

  const eventExamples = [
    {
      title: "2024年度 第1回セミナー",
      theme: "FIP制度下での収益最大化戦略",
      detail: "実際の運用データを基にした具体的な戦略を共有",
    },
    {
      title: "2024年度 第2回セミナー",
      theme: "蓄電池市場の最新動向とビジネスチャンス",
      detail: "国内外の市場動向と参入戦略を議論",
    },
    {
      title: "会員視察ツアー",
      theme: "大規模太陽光発電所の見学",
      detail: "最新技術と運営ノウハウを現地で学ぶ",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">活動内容</h1>
            <p className="text-xl text-blue-50">
              3つの柱で業界の未来を創る
            </p>
          </motion.div>
        </div>
      </section>

      {/* メイン活動 */}
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
              主な活動内容
            </h2>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {mainActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <activity.icon className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-2xl font-bold">
                            {activity.title}
                          </h3>
                          <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-4 py-1 rounded-full mt-2 md:mt-0 inline-block">
                            {activity.frequency}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {activity.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {activity.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* イベント実績 */}
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
              過去の開催実績
            </h2>
            <p className="text-lg text-muted-foreground">
              実践的なテーマで活発な議論が行われています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {eventExamples.map((event, index) => (
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
                      <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <h3 className="font-semibold">{event.title}</h3>
                    </div>
                    <div className="pl-8 space-y-2">
                      <p className="font-medium text-blue-600">
                        {event.theme}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {event.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 参加のメリット */}
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
                <h2 className="text-3xl font-bold mb-8 text-center">
                  活動に参加するメリット
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        本音で語り合える場
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        クローズドな環境だからこそ、競合との協業や業界の課題について率直に議論できます。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        実践的な学び
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        教科書的な知識ではなく、実際のビジネスに即座に活かせる具体的なノウハウを得られます。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        継続的な情報提供
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        イベントだけでなく、日常的に業界の最新情報をキャッチアップできます。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
