"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Award,
  Handshake,
  CreditCard,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function JoinPage() {
  const benefits = [
    "年間2〜4回の経営者向けセミナー・勉強会への参加",
    "業界トップクラスの経営者との人脈構築",
    "少人数での懇親会・食事会",
    "会員限定LINEグループでの情報交換",
    "週1回の業界ニュースレター配信",
    "過去のセミナー資料へのアクセス",
    "協業・マッチング支援",
    "業界の最新情報・マーケットレポート",
  ];

  const requirements = [
    {
      icon: Award,
      title: "役職",
      description: "CxOまたは事業責任者クラス",
    },
    {
      icon: Handshake,
      title: "推薦",
      description: "既存会員または当社社員の推薦",
    },
    {
      icon: CreditCard,
      title: "会費",
      description: "無料（懇親会は実費負担）",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "お問い合わせ",
      description:
        "お問い合わせフォーム、LINE、またはお電話にてご連絡ください。コミュニティの詳細をご説明いたします。",
    },
    {
      step: "2",
      title: "面談",
      description:
        "運営メンバーとの面談を実施させていただきます。オンラインまたは対面で30分〜1時間程度です。",
    },
    {
      step: "3",
      title: "審査",
      description:
        "推薦者の確認と入会審査を行います。通常1週間程度でご連絡させていただきます。",
    },
    {
      step: "4",
      title: "入会",
      description:
        "審査通過後、会員限定LINEグループへご招待し、次回イベントのご案内をお送りします。",
    },
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "公式LINE",
      description: "最も手軽な方法です",
      action: "LINEで問い合わせ",
      href: "#",
    },
    {
      icon: Mail,
      title: "お問い合わせフォーム",
      description: "詳しい内容を記載できます",
      action: "フォームから問い合わせ",
      href: "/contact",
    },
    {
      icon: Phone,
      title: "お電話",
      description: "03-6420-0515（平日10:00-18:00）",
      action: "電話で問い合わせ",
      href: "tel:0364200515",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">入会案内</h1>
            <p className="text-xl text-blue-50 mb-6">
              エネルギー業界の未来を共に創りませんか
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-8 py-3 inline-block">
                <span className="text-lg font-bold">
                  年会費無料・参加企業50社以上
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 会員特典 */}
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
              会員になると得られること
            </h2>
            <p className="text-lg text-muted-foreground">
              ビジネスを加速させる8つの特典
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-lg">{benefit}</span>
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <requirement.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {requirement.title}
                    </h3>
                    <p className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              入会までの流れ
            </h2>
            <p className="text-lg text-muted-foreground">
              お問い合わせから入会まで約1〜2週間
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((item, index) => (
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
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ方法 */}
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
              お問い合わせ方法
            </h2>
            <p className="text-lg text-muted-foreground">
              ご都合の良い方法でお気軽にご連絡ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {method.description}
                    </p>
                    <Button asChild className="w-full" size="lg">
                      <Link href={method.href}>{method.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              まずはお気軽にお問い合わせください
            </h2>
            <p className="text-lg text-blue-50 mb-8">
              コミュニティの詳細や、参加企業の事例など
              <br className="hidden md:block" />
              詳しくご説明させていただきます
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-6"
            >
              <Link href="/contact" className="flex items-center gap-2">
                今すぐお問い合わせ
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
