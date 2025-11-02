"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "お電話",
      detail: "03-6420-0515",
      description: "平日 10:00 - 18:00",
    },
    {
      icon: Mail,
      title: "メール",
      detail: "info@example.com",
      description: "24時間受付",
    },
    {
      icon: MessageCircle,
      title: "公式LINE",
      detail: "友だち追加はこちら",
      description: "最短でご返信します",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "所在地",
      detail: "〒141-0031\n東京都品川区西五反田7-13-5\nDK五反田ビル8F",
    },
    {
      icon: Clock,
      title: "営業時間",
      detail: "平日 10:00 - 18:00\n土日祝日は休業",
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
              お問い合わせ
            </h1>
            <p className="text-xl text-blue-50">
              お気軽にご連絡ください
            </p>
          </motion.div>
        </div>
      </section>

      {/* 連絡先情報 */}
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
              お問い合わせ方法
            </h2>
            <p className="text-lg text-muted-foreground">
              ご都合の良い方法でお問い合わせください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {info.detail}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                お問い合わせフォーム
              </h2>
              <p className="text-lg text-muted-foreground">
                以下のフォームからお問い合わせください
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">お名前 *</Label>
                        <Input id="name" placeholder="山田 太郎" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">会社名 *</Label>
                        <Input
                          id="company"
                          placeholder="株式会社◯◯"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="position">役職 *</Label>
                        <Input id="position" placeholder="代表取締役" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">メールアドレス *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="03-1234-5678"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">お問い合わせ種別 *</Label>
                      <select
                        id="type"
                        className="w-full px-3 py-2 border rounded-md"
                        required
                      >
                        <option value="">選択してください</option>
                        <option value="join">入会について</option>
                        <option value="event">イベントについて</option>
                        <option value="activity">活動内容について</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">お問い合わせ内容 *</Label>
                      <Textarea
                        id="message"
                        placeholder="お問い合わせ内容をご記入ください"
                        rows={6}
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full">
                        送信する
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground text-center">
                      ※ 通常2営業日以内にご返信いたします
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* オフィス情報 */}
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
              運営会社情報
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {officeInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
