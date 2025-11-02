"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Building2, MapPin, Calendar, DollarSign, User, Briefcase } from "lucide-react";

export default function CompanyPage() {
  const companyInfo = [
    {
      icon: Building2,
      label: "会社名",
      value: "株式会社グッドフェローズ",
    },
    {
      icon: MapPin,
      label: "所在地",
      value: "〒141-0031\n東京都品川区西五反田7-13-5 DK五反田ビル8F",
    },
    {
      icon: Calendar,
      label: "設立",
      value: "2009年3月6日",
    },
    {
      icon: DollarSign,
      label: "資本金",
      value: "1,000万円",
    },
    {
      icon: User,
      label: "代表者",
      value: "代表取締役 長尾 泰広",
    },
  ];

  const businesses = [
    {
      title: "エネルギーメディア事業",
      description:
        "太陽光発電・蓄電池の比較サイト「タイナビ」シリーズを運営。累計利用者数100万人以上。",
    },
    {
      title: "発電事業",
      description:
        "自社保有の太陽光発電所を運営。実践的な知見をコミュニティに還元。",
    },
    {
      title: "AI研修事業",
      description:
        "企業向けAI研修プログラムを提供。エネルギー業界のDX推進を支援。",
    },
    {
      title: "コンサルティング事業",
      description:
        "エネルギー事業の立ち上げから運営まで、トータルでサポート。",
    },
  ];

  const history = [
    { year: "2009年", event: "株式会社グッドフェローズ設立" },
    { year: "2010年", event: "太陽光発電の比較サイト「タイナビ」リリース" },
    { year: "2015年", event: "蓄電池比較サイト「タイナビ蓄電池」リリース" },
    { year: "2018年", event: "自社太陽光発電所の運営開始" },
    { year: "2020年", event: "AI研修事業を開始" },
    { year: "2023年", event: "エナジーCxOコミュニティ設立" },
    { year: "2024年", event: "会員数50社突破" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">会社概要</h1>
            <p className="text-xl text-blue-50">
              株式会社グッドフェローズについて
            </p>
          </motion.div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">会社情報</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                {companyInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-6 flex items-start gap-4 ${
                      index !== companyInfo.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      <div className="text-lg whitespace-pre-line">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 事業内容 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">事業内容</h2>
            <p className="text-lg text-muted-foreground">
              エネルギー業界の発展に貢献する多様な事業
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {businesses.map((business, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold">{business.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {business.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">沿革</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* タイムライン線 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 pb-8"
                >
                  {/* タイムラインドット */}
                  <div className="absolute left-6 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-background"></div>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="font-bold text-blue-600 mb-1">
                        {item.year}
                      </div>
                      <div className="text-lg">{item.event}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ミッション */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  私たちのミッション
                </h2>
                <p className="text-xl leading-relaxed mb-8">
                  エネルギー業界の発展を通じて、
                  <br className="hidden md:block" />
                  持続可能な社会の実現に貢献する
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  私たちは、エネルギー業界に特化した各種サービスと、
                  <br className="hidden md:block" />
                  業界リーダーをつなぐコミュニティの運営を通じて、
                  <br className="hidden md:block" />
                  業界全体の発展と、持続可能な社会の実現を目指します。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
