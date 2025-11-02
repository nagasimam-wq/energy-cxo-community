"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: "2025年1月15日（水）",
      time: "18:00 - 20:00",
      title: "2025年 第1回セミナー",
      theme: "FIP制度完全移行に向けた実践戦略",
      location: "オンライン＋会場（東京・品川）",
      capacity: "50名",
      status: "募集中",
      description:
        "2025年度からのFIP制度完全移行を見据え、実際の運用データを基にした収益最大化戦略を議論します。",
      speakers: [
        "大手発電事業者 代表取締役",
        "エネルギーコンサルタント",
      ],
      topics: [
        "FIP移行後の市場動向分析",
        "実運用での収益最大化手法",
        "リスクヘッジ戦略",
        "質疑応答・ディスカッション",
      ],
    },
    {
      date: "2025年2月20日（木）",
      time: "15:00 - 17:00",
      title: "会員限定視察ツアー",
      theme: "最新蓄電池システム見学会",
      location: "千葉県某所",
      capacity: "20名",
      status: "募集中",
      description:
        "国内最大級の蓄電池システムを見学し、最新技術と運営ノウハウを学びます。",
      speakers: ["施設運営責任者", "技術担当者"],
      topics: [
        "蓄電池システムの実地見学",
        "運営ノウハウの共有",
        "投資対効果の分析",
        "懇親会（希望者のみ）",
      ],
    },
  ];

  const pastEvents = [
    {
      date: "2024年10月",
      title: "AI×エネルギー活用セミナー",
      theme: "発電所運営におけるAI活用の最前線",
      participants: "45名",
      highlights: [
        "AI予測による発電量最適化",
        "異常検知システムの導入事例",
        "コスト削減効果の実績共有",
      ],
    },
    {
      date: "2024年7月",
      title: "M&A戦略セミナー",
      theme: "エネルギー業界のM&A動向と実践",
      participants: "52名",
      highlights: [
        "最新のM&A事例分析",
        "デューデリジェンスのポイント",
        "PMI（統合後の経営）の成功事例",
      ],
    },
    {
      date: "2024年4月",
      title: "春の交流会",
      theme: "経営者懇親会＆ネットワーキング",
      participants: "38名",
      highlights: [
        "少人数テーブルでの深い議論",
        "協業マッチングセッション",
        "新規参加者の紹介",
      ],
    },
    {
      date: "2024年1月",
      title: "新春セミナー",
      theme: "2024年のエネルギー市場展望",
      participants: "60名",
      highlights: [
        "2024年の市場予測",
        "規制動向の解説",
        "事業戦略のディスカッション",
      ],
    },
  ];

  const eventTypes = [
    {
      icon: Calendar,
      title: "定期セミナー",
      frequency: "年2〜4回",
      description:
        "業界の最新動向や実践的なテーマについて、専門家を招いて深掘りします。",
    },
    {
      icon: Users,
      title: "交流会・懇親会",
      frequency: "四半期ごと",
      description:
        "少人数での食事会や懇親会を通じて、深い信頼関係を構築します。",
    },
    {
      icon: MapPin,
      title: "視察ツアー",
      frequency: "不定期",
      description:
        "先進的な発電所や施設を見学し、現場の生の声を聞くことができます。",
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
              イベント情報
            </h1>
            <p className="text-xl text-blue-50">
              学び、つながる機会を定期的に提供しています
            </p>
          </motion.div>
        </div>
      </section>

      {/* イベントの種類 */}
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
              イベントの種類
            </h2>
            <p className="text-lg text-muted-foreground">
              多様な形式で学びと交流の場を提供
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <div className="text-blue-600 font-semibold mb-3">
                      {type.frequency}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 今後のイベント */}
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
              今後のイベント
            </h2>
            <p className="text-lg text-muted-foreground">
              会員の方はこちらのイベントにご参加いただけます
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* 左側：日時・基本情報 */}
                      <div className="lg:w-1/3 space-y-4">
                        <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          {event.status}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">定員 {event.capacity}</span>
                          </div>
                        </div>
                      </div>

                      {/* 右側：詳細情報 */}
                      <div className="lg:w-2/3">
                        <h3 className="text-2xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-4">
                          {event.theme}
                        </p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">登壇者：</h4>
                          <div className="space-y-1">
                            {event.speakers.map((speaker, speakerIndex) => (
                              <div
                                key={speakerIndex}
                                className="flex items-center gap-2 text-sm"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                <span>{speaker}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-2">プログラム：</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {event.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button size="lg" className="w-full md:w-auto">
                          詳細を見る・申し込む
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 過去のイベント */}
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
              過去のイベント
            </h2>
            <p className="text-lg text-muted-foreground">
              これまでに開催したイベントの一部をご紹介
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.theme}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="w-4 h-4" />
                      <span>参加者：{event.participants}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">ハイライト：</h4>
                      <ul className="space-y-1">
                        {event.highlights.map((highlight, highlightIndex) => (
                          <li
                            key={highlightIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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
            <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              イベントに参加しませんか？
            </h2>
            <p className="text-lg text-blue-50 mb-8">
              会員の方はこれらのイベントに無料でご参加いただけます
              <br className="hidden md:block" />
              入会をご検討の方は、まずはお問い合わせください
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
