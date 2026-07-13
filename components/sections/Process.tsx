'use client';

import React from 'react';
import { Compass, Target, PenTool, Code, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    icon: Compass,
    title: 'Discover',
    desc: 'Audit existing tech, marketing assets, competitors, and target audience alignment.',
  },
  {
    num: '02',
    icon: Target,
    title: 'Strategy',
    desc: 'Formulate campaign channels, SEO keywords, wireframes, and database specifications.',
  },
  {
    num: '03',
    icon: PenTool,
    title: 'Design',
    desc: 'Produce bespoke premium visual identities and interactive high-fidelity UI layout designs.',
  },
  {
    num: '04',
    icon: Code,
    title: 'Develop',
    desc: 'Build apps using clean, optimized Next.js/Tailwind stacks with strict typescript audits.',
  },
  {
    num: '05',
    icon: Rocket,
    title: 'Launch',
    desc: 'Rigorous speed audits, automated testing checkpoints, server deploys, and tracking pixels.',
  },
  {
    num: '06',
    icon: TrendingUp,
    title: 'Scale',
    desc: 'Continuous campaign optimization, AI analytics feedback loops, and feature upgrades.',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#05070D] border-t border-border-custom/50 relative overflow-hidden">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-[30%] left-[-15%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.015)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
            OUR SCALE WORKFLOW
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Engaging Execution from Idea to Exponential Scale
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed">
            Our systematic phase timeline guarantees predictability, rapid delivery, and measurable performance growth.
          </p>
        </div>

        {/* Timeline Horizontal Line connector (Desktop only) */}
        <div className="hidden lg:block absolute left-6 right-6 top-[282px] h-[1px] bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5 z-0" />

        {/* Timeline Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4"
              >
                {/* Number node with Line interaction */}
                <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-card border border-border-custom hover:border-primary/40 text-primary font-heading font-bold text-lg mb-2 shadow-[0_0_15px_rgba(217,255,0,0.05)] transition-all group duration-300">
                  {step.num}
                  {/* Glowing Node hover indicator */}
                  <span className="absolute inset-[-4px] rounded-full border border-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content block */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-white font-heading font-bold text-lg">
                    <Icon className="h-4.5 w-4.5 text-primary" />
                    <h4>{step.title}</h4>
                  </div>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed px-4 lg:px-0">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
