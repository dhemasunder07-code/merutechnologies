'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-background-custom relative overflow-hidden border-t border-border-custom/50">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.04)_0%,transparent_60%)] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-card border border-border-custom px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-primary"
        >
          <Sparkles className="h-3 w-3" />
          <span>TRANSFORM YOUR BUSINESS TODAY</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
        >
          Ready to Build Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Digital Future?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl"
        >
          Let&apos;s create something extraordinary together. Book a strategy review session or start your custom development project today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-background-custom font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-[0_0_20px_rgba(217,255,0,0.15)] hover:shadow-[0_0_30px_rgba(217,255,0,0.3)] hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact?consultation=true"
            className="inline-flex items-center justify-center gap-2 bg-card border border-border-custom hover:border-primary text-white hover:text-primary font-bold px-8 py-4 rounded-full text-base transition-all duration-300"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
