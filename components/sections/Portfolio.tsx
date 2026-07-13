'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Monitor, Layers, BarChart3, Search } from 'lucide-react';

const categories = ['All', 'Websites', 'Branding', 'Marketing', 'SEO'];

const portfolioItems = [
  {
    title: 'Apex SaaS platform',
    category: 'Websites',
    icon: Monitor,
    tech: 'Next.js 15, Three.js',
    detail: 'High-converting interactive dashboard and landing page for an enterprise financial analytics suite.',
    mockup: {
      type: 'browser',
      bgColor: 'from-purple-900/30 to-background-custom',
      inner: (
        <div className="flex flex-col h-full p-3 font-mono text-[9px] text-text-secondary">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="text-white">apex_dashboard.js</span>
            <span className="text-primary font-bold">LIVE</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-card/80 border border-border-custom p-2 rounded flex flex-col gap-1">
              <span>Conversion</span>
              <span className="text-white font-heading text-sm font-bold">4.2%</span>
            </div>
            <div className="bg-card/80 border border-border-custom p-2 rounded flex flex-col gap-1">
              <span>Bounce Rate</span>
              <span className="text-primary font-heading text-sm font-bold">24%</span>
            </div>
            <div className="bg-card/80 border border-border-custom p-2 rounded flex flex-col gap-1">
              <span>Load Time</span>
              <span className="text-white font-heading text-sm font-bold">0.6s</span>
            </div>
          </div>
          <div className="flex-1 mt-3 bg-card/40 border border-white/5 rounded p-2 flex items-center justify-center">
            <span className="text-center text-[10px] text-white/50 animate-pulse">Interactive Canvas Active</span>
          </div>
        </div>
      ),
    },
  },
  {
    title: 'Nova AI Branding',
    category: 'Branding',
    icon: Layers,
    tech: 'Corporate Identity Kit',
    detail: 'Luxury visual identity system, custom brand logo, typography scale, and media guidelines.',
    mockup: {
      type: 'brand',
      bgColor: 'from-primary/10 to-background-custom',
      inner: (
        <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
          {/* Logo mockup */}
          <div className="relative h-16 w-16 flex items-center justify-center">
            <div className="absolute inset-0 border border-primary/40 rounded-lg rotate-45 animate-spin-[20s]" />
            <div className="absolute inset-2 border border-secondary/30 rounded-lg -rotate-45" />
            <span className="font-heading font-extrabold text-white text-2xl z-10">N</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <h4 className="font-heading font-bold text-white text-sm">NOVA INTEL</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="h-3 w-3 rounded-full bg-secondary" />
              <span className="h-3 w-3 rounded-full bg-background-custom border border-border-custom" />
            </div>
          </div>
        </div>
      ),
    },
  },
  {
    title: 'Pulse Google Ads',
    category: 'Marketing',
    icon: BarChart3,
    tech: 'Search & Performance Max',
    detail: 'Scaled conversion rate by 148% using hyper-targeted intent-based Search campaigns.',
    mockup: {
      type: 'marketing',
      bgColor: 'from-lime-950/20 to-background-custom',
      inner: (
        <div className="flex flex-col h-full p-3 justify-between">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-white/60">Google Ads Performance</span>
            <span className="text-primary font-semibold">+185% CTR</span>
          </div>
          <div className="flex items-end gap-1.5 h-20 px-2 mt-2">
            <div className="bg-white/5 w-full h-[30%] rounded-t" />
            <div className="bg-white/5 w-full h-[50%] rounded-t" />
            <div className="bg-white/5 w-full h-[40%] rounded-t" />
            <div className="bg-primary/40 w-full h-[70%] rounded-t" />
            <div className="bg-primary w-full h-[95%] rounded-t shadow-[0_0_15px_rgba(217,255,0,0.3)]" />
          </div>
          <div className="flex justify-between items-center text-[10px] mt-2 pt-2 border-t border-white/5">
            <span className="text-white font-bold">ROAS: 5.2x</span>
            <span className="text-text-secondary">CPA: -32%</span>
          </div>
        </div>
      ),
    },
  },
  {
    title: 'Evolve Technical SEO',
    category: 'SEO',
    icon: Search,
    tech: 'Core Web Vitals & Content',
    detail: 'Ranked 45+ competitive keywords on Page 1, expanding organic leads by 210% in 90 days.',
    mockup: {
      type: 'seo',
      bgColor: 'from-blue-950/20 to-background-custom',
      inner: (
        <div className="flex flex-col h-full p-3 justify-between">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-white/60">Keyword Rank Tracker</span>
            <span className="text-green-400 font-bold">Top 3</span>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between items-center text-[9px] bg-card/60 p-1.5 rounded border border-white/5">
              <span>/services/ai-solutions</span>
              <span className="text-primary">#1</span>
            </div>
            <div className="flex justify-between items-center text-[9px] bg-card/60 p-1.5 rounded border border-white/5">
              <span>/blog/digital-marketing</span>
              <span className="text-primary">#2</span>
            </div>
            <div className="flex justify-between items-center text-[9px] bg-card/60 p-1.5 rounded border border-white/5">
              <span>/product/branding-strategy</span>
              <span className="text-white/70">#4 (+6)</span>
            </div>
          </div>
          <div className="text-[10px] text-center text-text-secondary mt-1">
            Core Web Vitals: <span className="text-primary font-bold">100/100</span>
          </div>
        </div>
      ),
    },
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background-custom border-t border-border-custom/50 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
              CLIENT CASE STUDY WORK
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              Sought-after Projects Built for Hypergrowth
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm font-semibold px-4.5 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary border-primary text-background-custom shadow-[0_0_15px_rgba(217,255,0,0.15)]'
                    : 'bg-card border-border-custom text-text-secondary hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.title}
                  className="glass-panel rounded-2xl overflow-hidden flex flex-col border-primary/10 hover:border-primary/30 group"
                >
                  {/* Mockup Preview Area */}
                  <div className={`h-64 w-full bg-gradient-to-b ${item.mockup.bgColor} border-b border-border-custom relative flex items-center justify-center p-6 overflow-hidden`}>
                    
                    {/* Mockup Frame (Standard layout browser or grid) */}
                    <div className="w-full max-w-sm bg-[#05070D] border border-border-custom rounded-lg shadow-2xl h-44 overflow-hidden relative transition-transform duration-500 group-hover:scale-102">
                      {/* Browser header dots if type is browser/app */}
                      {(item.mockup.type === 'browser' || item.mockup.type === 'marketing' || item.mockup.type === 'seo') && (
                        <div className="bg-card px-3 py-2 border-b border-border-custom flex items-center gap-1.5 flex-shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                      )}
                      {/* Content representation */}
                      <div className="h-full overflow-hidden">
                        {item.mockup.inner}
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Details Area */}
                  <div className="p-6.5 flex flex-col gap-3 relative z-10 bg-card/20">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
                        {item.category} • {item.tech}
                      </span>
                      <Icon className="h-4.5 w-4.5 text-text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors flex items-center gap-1">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-white/50 group-hover:text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
