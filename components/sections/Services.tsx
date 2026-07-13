'use client';

import React from 'react';
import { Laptop, Megaphone, Search, Layers, Share2, Video, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Laptop,
    title: 'Website Development',
    description: 'Bespoke high-performance digital experiences tailored to convert and scale.',
    items: ['Corporate Websites', 'Landing Pages', 'WordPress Solutions', 'Next.js & React App Development', 'E-commerce Platforms'],
  },
  {
    icon: Megaphone,
    title: 'AI Digital Marketing',
    description: 'Hyper-targeted ad campaigns driven by custom AI models and audience segmentation.',
    items: ['Google Search & Display Ads', 'Meta (FB & IG) Ads Manager', 'B2B Lead Generation', 'Performance Marketing Analytics'],
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Dominating organic search results to acquire long-term, high-intent traffic.',
    items: ['Technical SEO Auditing', 'Local SEO & Google Maps', 'Keyword Search Strategy', 'Authority Backlink Generation'],
  },
  {
    icon: Layers,
    title: 'Branding & Design',
    description: 'Crafting luxury visual identities that command authority and establish trust.',
    items: ['Logo Design & Styling Guides', 'Brand Guidelines & Profiles', 'Premium Office Stationery', 'Social Media Asset Kits'],
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Scale engagement and build an active community on major platforms.',
    items: ['Instagram & LinkedIn Growth', 'Content Strategy & Planners', 'Facebook Business Suite Management', 'Community Building'],
  },
  {
    icon: Video,
    title: 'Video & Motion Graphics',
    description: 'Stunning visual storytelling optimized for high-impact social and commercial ads.',
    items: ['Short-form Reels & TikToks', 'Premium Video Editing', 'Motion Graphic Animations', 'High-Conversion Commercial Ads'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#05070D] border-t border-border-custom/50 relative">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.025)_0%,transparent_70%)] blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
            OUR CAPABILITIES
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            World-Class Services for Digital Dominance
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed">
            We merge cutting-edge technology with creative excellence to deliver unmatched growth for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-2xl flex flex-col justify-between border-primary/10 hover:border-primary/40 relative group"
              >
                {/* Spotlight hover effect container */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                
                <div>
                  {/* Icon Header */}
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                {/* Subservice list */}
                <ul className="flex flex-col gap-2.5 mt-2 border-t border-border-custom/50 pt-6">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
