"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "入会について",
      questions: [
        {
          question: "入会に費用はかかりますか？",
          answer:
            "年会費は無料です。ただし、懇親会やイベントでの飲食費については実費をご負担いただきます。",
        },
        {
          question: "入会の条件を教えてください。",
          answer:
            "CxOまたは事業責任者クラスの方で、既存会員または株式会社グッドフェローズの社員による推薦が必要です。再エネ・電力事業、関連業界のCxO、または新規参入を検討される経営者の方が対象となります。",
        },
        {
          question: "入会の審査にはどのくらいの時間がかかりますか？",
          answer:
            "お問い合わせから面談、審査を経て、通常1〜2週間程度でご連絡させていただきます。",
        },
        {
          question: "推薦者がいない場合は入会できませんか？",
          answer:
            "まずはお問い合わせください。事業内容やご経歴を拝見し、適切な推薦者をご紹介できる場合があります。",
        },
      ],
    },
    {
      category: "活動内容について",
      questions: [
        {
          question: "セミナーはどのくらいの頻度で開催されますか？",
          answer:
            "年間2〜4回程度の開催を予定しています。テーマは会員の皆様のニーズに応じて決定します。",
        },
        {
          question: "セミナーの参加は必須ですか？",
          answer:
            "任意参加です。ご都合に合わせてご参加ください。参加できなかった方には、後日資料を共有いたします。",
        },
        {
          question: "オンラインでの参加は可能ですか？",
          answer:
            "はい、セミナーは原則としてオンライン・オフラインのハイブリッド形式で開催しています。",
        },
        {
          question: "会員限定の情報配信はどのような内容ですか？",
          answer:
            "週1回のニュースレターでは、エネルギー業界の最新動向、規制変更、市場レポート、イベント情報などを配信しています。",
        },
      ],
    },
    {
      category: "コミュニティについて",
      questions: [
        {
          question: "現在の会員数はどのくらいですか？",
          answer:
            "現在50社以上の企業様にご参加いただいています（2024年10月時点）。",
        },
        {
          question: "どのような企業が参加していますか？",
          answer:
            "太陽光発電事業者、蓄電池事業者、電力小売事業者、エネルギー関連のコンサルティング会社、金融機関、メーカーなど、多様な企業様にご参加いただいています。",
        },
        {
          question: "競合他社も参加していますか？",
          answer:
            "はい、同業他社の経営者も参加されています。むしろ競合との協業や業界全体の課題について率直に議論できることが、このコミュニティの価値の一つです。",
        },
        {
          question: "退会は自由にできますか？",
          answer:
            "はい、いつでも退会可能です。運営事務局までご連絡ください。",
        },
      ],
    },
    {
      category: "その他",
      questions: [
        {
          question: "守秘義務はありますか？",
          answer:
            "はい、コミュニティ内で共有される情報は原則として機密情報として扱い、外部への開示を禁止しています。",
        },
        {
          question: "社員を同伴してイベントに参加できますか？",
          answer:
            "CxO向けのクローズドなコミュニティのため、原則としてご本人様のみのご参加をお願いしています。ただし、特定のテーマのセミナーでは事業責任者の同伴が可能な場合もあります。",
        },
        {
          question: "まずは話を聞いてみたいのですが可能ですか？",
          answer:
            "はい、ぜひお気軽にお問い合わせください。コミュニティの詳細や活動内容について、オンラインまたは対面でご説明させていただきます。",
        },
      ],
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
              よくあるご質問
            </h1>
            <p className="text-xl text-blue-50">
              エナジーCxOに関するよくある質問
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-blue-600 rounded"></div>
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="border rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">Q. {item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                        A. {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  その他のご質問がある方へ
                </h3>
                <p className="text-muted-foreground mb-6">
                  上記以外のご質問や、詳しい説明をご希望の方は
                  <br className="hidden md:block" />
                  お気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8">
                    <Link href="/contact">お問い合わせ</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8"
                  >
                    <Link href="/join">入会案内を見る</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  お電話でのお問い合わせ：03-6420-0515（平日10:00-18:00）
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
