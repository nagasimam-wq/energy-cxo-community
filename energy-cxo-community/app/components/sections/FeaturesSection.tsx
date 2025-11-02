"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Users, Lightbulb, TrendingUp, Shield } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "経営者同士の交流",
      description:
        "業界トップクラスの経営者と直接つながり、信頼関係を構築できます。",
    },
    {
      icon: Lightbulb,
      title: "最新情報の共有",
      description:
        "市場動向、規制変更、技術革新など、ビジネスに直結する情報をいち早く入手できます。",
    },
    {
      icon: TrendingUp,
      title: "ビジネス機会の創出",
      description:
        "協業、M&A、新規事業など、具体的なビジネス機会が生まれています。",
    },
    {
      icon: Shield,
      title: "クローズドな環境",
      description:
        "厳格な審査により、信頼できるメンバーのみが参加するプライベートコミュニティです。",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
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
            エナジーCxOの特徴
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            業界をリードする経営者が集う、価値あるコミュニティ
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full neo-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 gradient-blue-modern rounded-2xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
