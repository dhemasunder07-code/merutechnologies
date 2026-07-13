'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, Fintech Spark',
    text: 'Meru Technologies completely revamped our acquisition funnel. Their AI marketing frameworks scaled our campaign ROAS to 5.2x in less than two months. Absolutely outstanding execution.',,
    rating: 5,
  },
  {
    name: 'Marcus Brody',
    role: 'VP Marketing, Apex Logistics',
    text: 'The web design they shipped looks premium and modern. Page speeds went from sluggish to instant, and our technical SEO search impressions have tripled since the launch.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder, Cloudly Systems',
    text: 'Most agencies promise leads and deliver excuses. Meru Technologies delivers numbers. Their transparent milestones and high-performance stack made them a dream to collaborate with.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#05070D] border-t border-border-custom/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute right-[-5%] top-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.015)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Trusted by Forward-Thinking Brands
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed">
            Read what industry leaders say about collaborating with Meru Technologies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-primary/10 flex flex-col justify-between hover:border-primary/20 bg-card/30"
            >
              <div className="flex flex-col gap-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                {/* Feedback text */}
                <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="mt-8 pt-6 border-t border-border-custom/50 flex flex-col gap-0.5">
                <span className="font-heading font-bold text-white text-base">{t.name}</span>
                <span className="font-sans text-xs text-text-secondary">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
