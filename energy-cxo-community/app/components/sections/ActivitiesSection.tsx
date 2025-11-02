"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { BookOpen, Users2, Mail } from "lucide-react";

export default function ActivitiesSection() {
  const activities = [
    {
      icon: BookOpen,
      title: "勉強会・セミナー",
      description:
        "年間2〜4回開催。経営に直結する実践テーマを深掘りします。FIP戦略、AI活用、M&A戦略、蓄電池市場動向など。",
    },
    {
      icon: Users2,
      title: "交流・マッチング",
      description:
        "少人数食事会、視察イベント、会員限定LINEでの交流、協業支援・マッチングを実施。",
    },
    {
      icon: Mail,
      title: "会員限定情報配信",
      description:
        "週1ニュース配信、マーケットレポート、イベント情報、資料アーカイブなど。",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* 活動内容 */}
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
          <p className="text-lg text-muted-foreground">
            3つの柱で業界の未来を創る
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full neo-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 gradient-modern rounded-2xl flex items-center justify-center shadow-lg">
                    <activity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* お客様の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            実際に参加されている経営者のコメント
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-morphism neo-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-none">
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">"</div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-blue-200/30">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
