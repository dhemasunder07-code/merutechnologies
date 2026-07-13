'use client';

import React from 'react';
import { Cpu, Palette, DollarSign, Zap, BarChart, Headset, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Cpu,
    title: 'AI-First Strategy',
    description: 'We integrate advanced machine learning models to optimize campaigns and automate operations, keeping you steps ahead of competitors.',
  },
  {
    icon: Palette,
    title: 'Creative Excellence',
    description: 'Award-winning UI/UX layout and branding standards designed to wow your users and position your product in the premium segment.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or unexpected costs. Flat monthly rates or detailed project milestones so you always know what you are paying for.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Leveraging modern boilerplates and modular workflows to ship production-ready applications and campaigns in record time.',
  },
  {
    icon: BarChart,
    title: 'Business Growth Focus',
    description: 'We measure success in revenue, ROAS, conversions, and client retention—not just superficial vanity metrics like clicks and impressions.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'Direct communication channels with senior managers, weekly progress reports, and 24/7 technical monitoring of all deployed assets.',
  },
  {
    icon: HardDrive,
    title: 'Modern Technology Stack',
    description: 'Developing exclusively with ultra-fast runtimes (Next.js 15, Tailwind, React 19, Lenis) to ensure stellar performance and 100/100 Lighthouse audits.',
  },
];

export default function WhyMeru() {
  return (
    <section className="py-24 bg-background-custom relative overflow-hidden border-t border-border-custom/50">
      {/* Decorative side glow */}
      <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.02)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
              THE MERU TECHNOLOGIES ADVANTAGE
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              Why Leaders Choose Meru Technologies to Scale Their Digital Ecosystems
            </h2>
          </div>
          <div className="lg:col-span-4 text-left lg:text-right">
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-sm ml-auto">
              We operate at the intersection of performance marketing and software engineering, executing campaigns that consistently outperform industry averages.
            </p>
          </div>
        </div>

        {/* Features List Layout (Two or Three Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-card/50 border border-border-custom hover:border-primary/20 p-6 rounded-2xl flex flex-col gap-4 group transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-custom transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {feat.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
