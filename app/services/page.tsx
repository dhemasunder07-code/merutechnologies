import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Monitor, Megaphone, Search, Layers, Shield, Cpu, ChevronRight, Check } from 'lucide-react';

const deepServices = [
  {
    icon: Monitor,
    title: 'Website Development',
    subtitle: 'High-performance Next.js & React architectures',
    tech: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'TypeScript', 'Node.js', 'Vercel'],
    benefits: [
      'Stellar Page Loading: 100/100 Lighthouse performance optimization.',
      'Core Web Vitals Checked: Optimized for search crawler indexing out-of-the-box.',
      'Luxury Visuals: Integrated micro-animations (Framer Motion, Lenis scroll) for dynamic rendering.',
    ],
  },
  {
    icon: Megaphone,
    title: 'AI Digital Marketing',
    subtitle: 'Data-driven Performance & Search campaign management',
    tech: ['Google Ads', 'Meta Ads Manager', 'GA4 Analytics', 'AI Audience Modeling', 'Custom UTM tracking'],
    benefits: [
      'Hyper-Targeted Bidding: Optimizing bidding schedules through automated machine learning.',
      'High-Conversion Creatives: Ad creatives tested dynamically to select winners.',
      'Sustained ROI Scaled: Scaled client averages to 4.8x–5.2x ROAS bounds.',
    ],
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    subtitle: 'Long-term organic domain authority scaling',
    tech: ['Ahrefs/SEMrush tracking', 'Schema Structured Data', 'Google Search Console', 'Link building'],
    benefits: [
      'Technical Audits: Comprehensive database, crawl budget, and redirection cleanup.',
      'High-Intent Keyword Mapping: Prioritizing commercial terms driving direct purchasing decisions.',
      'Domain Authority Growth: Scaled backlink generation matching strict safety standards.',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background-custom pt-32 pb-24 relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.03)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 flex flex-col gap-4">
            <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
              OUR CAPABILITIES DEEP DIVE
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tight">
              Bespoke Digital Engineering & Performance Marketing
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mt-2">
              We employ elite technologies and custom artificial intelligence pipelines to construct applications and campaigns that convert visitors into revenue.
            </p>
          </div>

          {/* Core Services Deep Dive Section */}
          <div className="flex flex-col gap-16 mb-24">
            {deepServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="glass-panel p-8.5 md:p-12 rounded-2xl border-primary/10 bg-card/25 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative overflow-hidden"
                >
                  {/* Subtle index watermark */}
                  <span className="font-heading font-black text-white/3 text-9xl absolute right-8 top-[-20px] pointer-events-none">
                    {idx + 1}
                  </span>

                  {/* Left block - Summary */}
                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">{svc.title}</h2>
                      <span className="font-sans text-xs text-primary font-medium mt-1 inline-block">
                        {svc.subtitle}
                      </span>
                    </div>
                    
                    {/* Tech list tag cloud */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-border-custom/50">
                      {svc.tech.map((t) => (
                        <span key={t} className="bg-white/5 border border-border-custom text-text-secondary font-mono text-[10px] px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right block - Detailed Benefits */}
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <h4 className="font-heading font-bold text-white text-base">Key Growth Outcomes</h4>
                    <div className="flex flex-col gap-4">
                      {svc.benefits.map((b) => {
                        const [title, desc] = b.split(':');
                        return (
                          <div key={title} className="flex gap-4 items-start bg-background-custom/40 border border-border-custom p-4 rounded-xl">
                            <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mt-0.5 flex-shrink-0">
                              <Check className="h-3 w-3" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="font-heading font-bold text-white text-sm">{title}</span>
                              <span className="font-sans text-xs text-text-secondary leading-relaxed">{desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="text-center bg-card/30 border border-border-custom p-10 md:p-16 rounded-2xl flex flex-col items-center gap-6 max-w-4xl mx-auto shadow-2xl">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
              Ready to construct a high-converting digital platform?
            </h3>
            <p className="font-sans text-sm text-text-secondary max-w-lg leading-relaxed">
              We offer free 30-minute growth review calls where we audit your site speeds, organic rankings, and ad targets.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="bg-primary hover:bg-secondary text-background-custom font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(217,255,0,0.15)]"
              >
                Schedule Growth Review
              </Link>
              <Link
                href="/#pricing"
                className="text-white hover:text-primary font-bold text-sm transition-colors flex items-center gap-1.5"
              >
                Explore Pricing Details
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
