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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a7fb8]/5 to-[#4db8e8]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative space-y-4">
                <div className="w-14 h-14 gradient-modern rounded-2xl flex items-center justify-center shadow-lg">
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-6 rounded-xl border-l-4 border-[#1a7fb8] shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-5xl bg-gradient-to-r from-[#1a7fb8] to-[#4db8e8] bg-clip-text text-transparent leading-none">"</div>
                <p className="text-gray-700 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
