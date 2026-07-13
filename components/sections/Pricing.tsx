'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect for early-stage startups needing high-performance basic assets.',
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    features: [
      'Custom 5-Page Next.js Website',
      'Basic On-Page SEO Setup',
      'Google Analytics Integration',
      'Corporate Brand Assets (Logo/Colors)',
      'Direct Slack Communication Support',
      '1 Month Technical Support SLA',
    ],
    cta: 'Start Starter Plan',
    popular: false,
  },
  {
    name: 'Growth',
    desc: 'Designed for scaling companies seeking to establish organic search dominance.',
    monthlyPrice: 3499,
    yearlyPrice: 2799,
    features: [
      'Next.js Web App with CMS Integration',
      'Technical SEO Audits & Content Planning',
      'Google & Meta Campaign Management',
      'Full Interactive UI/UX Layout Design',
      'Automated Lead Capture Funnels',
      'Weekly Strategy Meetings',
      '3 Months Technical Support SLA',
    ],
    cta: 'Start Growth Plan',
    popular: true,
  },
  {
    name: 'Enterprise',
    desc: 'Custom solution for large organizations requiring dedicated tech ecosystems.',
    monthlyPrice: 7999,
    yearlyPrice: 6399,
    features: [
      'Custom Web & App Ecosystems',
      'Full AI Operations Automation Integration',
      'Omnichannel Campaign Management',
      'Advanced Marketing Models Analytics',
      'Dedicated Tech Project Manager',
      'Custom SLA & 24/7 Monitoring Support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-24 bg-background-custom border-t border-border-custom/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute left-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.015)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-4">
          <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
            TRANSPARENT PRICING
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Plans Formulated for Every Growth Phase
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed">
            Select a plan that aligns with your business goals. Get flat rates with zero hidden fees.
          </p>
        </div>

        {/* Monthly/Yearly Billing Toggle */}
        <div className="flex justify-center items-center gap-3.5 mb-16">
          <span className={`font-sans text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-text-secondary'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="w-14 h-8 bg-card border border-border-custom rounded-full p-1 relative transition-colors duration-300"
            aria-label="Toggle Billing Cycle"
          >
            <motion.div
              layout
              className="w-5.5 h-5.5 bg-primary rounded-full"
              animate={{ x: billingCycle === 'monthly' ? 0 : 22 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            />
          </button>
          <span className={`font-sans text-sm flex items-center gap-1.5 ${billingCycle === 'yearly' ? 'text-white' : 'text-text-secondary'}`}>
            Yearly
            <span className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <div
                key={plan.name}
                className={`glass-panel p-8.5 rounded-2xl flex flex-col justify-between relative ${
                  plan.popular ? 'border-primary/40 ring-1 ring-primary/20 bg-card/40' : 'border-primary/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-background-custom font-heading font-extrabold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">{plan.name}</h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="font-heading font-extrabold text-4xl text-white">${price}</span>
                    <span className="font-sans text-xs text-text-secondary">/ month</span>
                  </div>

                  {/* Features list */}
                  <ul className="flex flex-col gap-4 border-t border-border-custom/50 pt-8 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs text-text-secondary leading-normal">
                        <CheckCircle2 className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action button */}
                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-full text-center font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-primary hover:bg-secondary text-background-custom shadow-[0_0_20px_rgba(217,255,0,0.2)]'
                      : 'bg-card border border-border-custom text-white hover:border-primary/40'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
