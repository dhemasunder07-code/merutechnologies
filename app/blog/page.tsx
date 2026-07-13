'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

const categories = ['All', 'Engineering', 'Marketing', 'AI Automation', 'Design'];

const articles = [
  {
    title: 'Why Next.js 15 is the Ultimate Choice for Enterprise SaaS',
    category: 'Engineering',
    date: 'July 10, 2026',
    author: 'Arjun Mehta',
    excerpt: 'An in-depth review of layout caching changes, Server Actions updates, and the React Compiler performance impacts on load speed.',
    readTime: '6 min read',
  },
  {
    title: 'Dynamic Google Search Ads: Scaling ROAS with Custom LLMs',
    category: 'Marketing',
    date: 'June 28, 2026',
    author: 'Sarah Jenkins',
    excerpt: 'How we build vector embedding search strategies and test ad copy variations in real-time to reduce customer acquisition costs (CAC).',
    readTime: '8 min read',
  },
  {
    title: 'The Blueprint of a Luxury Brand: Design Systems That Convert',
    category: 'Design',
    date: 'June 15, 2026',
    author: 'Elena Rostova',
    excerpt: 'Evaluating typography scale, color harmony, and micro-interaction timings to position tech products in the luxury enterprise tier.',
    readTime: '5 min read',
  },
  {
    title: 'Automating Customer Lead Routing Using Local AI Hubs',
    category: 'AI Automation',
    date: 'May 30, 2026',
    author: 'Arjun Mehta',
    excerpt: 'How we connect contact web forms to local database classifiers to assign incoming sales prospects in under 3 seconds.',
    readTime: '7 min read',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background-custom pt-32 pb-24 relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.03)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 flex flex-col gap-4">
            <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
              MERU TECHNOLOGIES INSIGHTS
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tight">
              Engineering Growth & AI Systems
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mt-2">
              Industry analyses, development guidelines, and growth marketing research written by our builders.
            </p>
          </div>

          {/* Search and Category Filter Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 pb-6 border-b border-border-custom/50">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-sans text-xs font-semibold px-4.5 py-2 rounded-full border transition-all ${
                    activeCategory === cat
                      ? 'bg-primary border-primary text-background-custom font-bold'
                      : 'bg-card border-border-custom text-text-secondary hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-4 top-[13px] h-4 w-4 text-text-secondary/60" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-card border border-border-custom rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-text-secondary/50 focus:outline-none focus:border-primary w-full transition-colors"
              />
            </div>
          </div>

          {/* Blog Cards Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((art) => (
                <article
                  key={art.title}
                  className="glass-panel p-8 rounded-2xl border-primary/10 flex flex-col justify-between hover:border-primary/20 bg-card/25 group"
                >
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center justify-between text-[11px] text-text-secondary/70 mb-4">
                      <span className="text-primary font-heading font-semibold uppercase tracking-wider">
                        {art.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>{art.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors leading-snug mb-3.5">
                      {art.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6">
                      {art.excerpt}
                    </p>
                  </div>

                  {/* Footer meta info */}
                  <div className="flex items-center justify-between mt-4 pt-5 border-t border-border-custom/50 text-[11px] text-text-secondary/60">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-primary/80" />
                        {art.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {art.date}
                      </span>
                    </div>

                    <span className="text-primary hover:text-secondary font-semibold flex items-center gap-1 transition-colors group-hover:translate-x-0.5 duration-300">
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card/20 border border-border-custom rounded-2xl max-w-xl mx-auto">
              <p className="font-sans text-text-secondary text-sm">
                No articles matching your search query or filter tags.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="text-primary font-bold text-xs mt-3 underline"
              >
                Reset filters
              </button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
