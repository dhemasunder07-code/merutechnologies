'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, TrendingUp, Users, DollarSign, Award } from 'lucide-react';

const cases = [
  {
    company: 'Apex Logistics',
    industry: 'Supply Chain SaaS',
    growth: '+210%',
    metric: 'Traffic Growth',
    challenge: 'Struggling to acquire high-value organic B2B leads. Website loaded slowly and conversion rates hovered under 1.2%.',
    solution: 'Engineered a modern Next.js platform optimized for speed, restructured structural schema data, and ran targeted intent-driven search query ads.',
    results: [
      { label: 'Organic Traffic', before: '12K / mo', after: '38K / mo', icon: Users },
      { label: 'Conversion Rate', before: '1.2%', after: '3.8%', icon: Award },
      { label: 'CPA Cost', before: '$85.00', after: '$32.00', icon: DollarSign },
    ],
  },
  {
    company: 'Fintech Spark',
    industry: 'Neo-banking Enterprise',
    growth: '5.2x',
    metric: 'ROAS Scaled',
    challenge: 'Experiencing high ad burn on social platforms with poor retargeting hooks. Customer acquisition cost (CAC) was unsustainable.',
    solution: 'Designed high-impact custom motion creatives, built predictive audience models with AI, and optimized bidding workflows.',
    results: [
      { label: 'ROAS Metric', before: '1.8x', after: '5.2x', icon: TrendingUp },
      { label: 'Monthly Leads', before: '320', after: '1,450', icon: Users },
      { label: 'Customer CAC', before: '$120.00', after: '$45.00', icon: DollarSign },
    ],
  },
];

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCase = cases[activeIdx];

  return (
    <section id="case-studies" className="py-24 bg-[#05070D] border-t border-border-custom/50 relative">
      {/* Decorative Glow */}
      <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.02)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 flex flex-col gap-4">
          <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
            MEASURABLE SUCCESS
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Proven Performance Built on Data
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed">
            We don&apos;t just deliver assets; we deliver results. Explore how we transformed digital performance for leading businesses.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex items-center gap-4 mb-10 border-b border-border-custom pb-4">
          {cases.map((cs, idx) => (
            <button
              key={cs.company}
              onClick={() => setActiveIdx(idx)}
              className={`font-heading font-bold text-xl md:text-2xl pb-4 -mb-4 relative transition-colors ${
                activeIdx === idx ? 'text-white' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {cs.company}
              {activeIdx === idx && (
                <motion.div
                  layoutId="activeCaseTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Summary & Text details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
                {activeCase.industry}
              </span>
              <span className="font-sans text-xs text-text-secondary">
                Case Summary
              </span>
            </div>

            <h3 className="font-heading font-bold text-3xl text-white">
              Achieving <span className="text-primary">{activeCase.growth}</span> {activeCase.metric}
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h4 className="font-heading font-semibold text-white text-sm">Challenge</h4>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 mt-2">
                <h4 className="font-heading font-semibold text-white text-sm">Our Solution</h4>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary font-bold text-sm transition-colors group"
              >
                Replicate this growth for your business
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Side: Before/After Metric Dashboard */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 rounded-2xl border-primary/15 bg-card/45 flex flex-col gap-6.5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping inline-block mr-2" />
                <span className="text-[10px] text-text-secondary uppercase font-mono">Performance Audited</span>
              </div>

              <h4 className="font-heading font-bold text-lg text-white mb-2">Metrics Dashboard</h4>

              <div className="flex flex-col gap-5">
                {activeCase.results.map((res) => {
                  const Icon = res.icon;
                  return (
                    <div
                      key={res.label}
                      className="bg-background-custom border border-border-custom p-4.5 rounded-xl flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-card/85 border border-border-custom flex items-center justify-center text-primary">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <span className="font-heading font-bold text-sm text-white">{res.label}</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono">
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] uppercase text-text-secondary/50">Before</span>
                          <span className="text-white/40 line-through">{res.before}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-text-secondary/50" />
                        <div className="flex flex-col items-end">
                          <span className="text-[9px] uppercase text-primary">After</span>
                          <span className="text-primary font-bold text-sm">{res.after}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
