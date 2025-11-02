"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function TargetSection() {
  const targets = [
    "再エネ・電力事業のCxO",
    "関連業界のCxO（金融、コンサル、メーカーなど）",
    "新規参入・多角化を検討する経営者",
  ];

  const requirements = [
    {
      title: "役職",
      description: "CxOまたは事業責任者クラス",
    },
    {
      title: "推薦",
      description: "既存会員または当社社員の推薦",
    },
    {
      title: "会費",
      description: "無料（懇親会は実費負担）",
    },
  ];

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
            こんな方が対象です
          </h2>
          <p className="text-lg text-muted-foreground">
            エネルギー業界をリードする経営者の皆様へ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* 対象者 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="neo-shadow hover:shadow-2xl transition-all duration-300 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">対象者</h3>
                <ul className="space-y-4">
                  {targets.map((target, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{target}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 入会条件 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="neo-shadow hover:shadow-2xl transition-all duration-300 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">入会条件</h3>
                <div className="space-y-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                        <h4 className="font-semibold text-lg">
                          {requirement.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground pl-4">
                        {requirement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
