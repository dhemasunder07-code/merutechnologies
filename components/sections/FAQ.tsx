'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What is an AI-first digital strategy?',
    a: 'An AI-first digital strategy means we integrate AI tools and machine learning models directly into our core deliverables. For websites, we use AI to analyze customer journeys and automate personalization. For digital marketing, we leverage advanced bidding models and natural language generation for rapid ad asset creation and dynamic target optimization.',
  },
  {
    q: 'How long does a typical corporate website take to build?',
    a: 'A premium, custom website built with Next.js 15 and TypeScript usually takes between 4 to 8 weeks, depending on complexity. This includes discovery audit, interactive visual layout prototype iterations, custom WebGL/Three.js development, responsive testing, and speed checks to guarantee a 100/100 Lighthouse performance score.',
  },
  {
    q: 'Can we switch between Monthly and Yearly plans?',
    a: 'Yes, absolutely! You can upgrade, downgrade, or switch between billing frequencies at the start of any billing period. When switching to a yearly plan, the 20% discount is applied immediately to your next statement cycle.',
  },
  {
    q: 'Do you offer custom integrations for existing CRM and database architectures?',
    a: 'Yes, we specialize in technical integrations. Under our Enterprise plans, we regularly connect Next.js platforms to enterprise hubs like Salesforce, HubSpot, custom SQL/NoSQL databases, and custom authentication systems.',
  },
  {
    q: 'What technologies do you use for development?',
    a: 'We build websites using Next.js 15, React 19, TypeScript, and Tailwind CSS. For interactive components, visual effects, and fluid scroll, we utilize libraries like GSAP, Framer Motion, and Lenis. This ensures optimal rendering speed, safety, and compatibility.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-custom/50 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 font-heading font-bold text-base md:text-lg text-white hover:text-primary transition-colors group"
      >
        <span>{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-text-secondary group-hover:text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-text-secondary leading-relaxed pt-3 pb-2.5 max-w-4xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-[#05070D] border-t border-border-custom/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute right-[-10%] top-[40%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.015)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col gap-4">
          <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            Common Inquiries
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
