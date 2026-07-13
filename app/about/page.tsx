import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Shield, Users, Trophy, Lightbulb } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Uncompromising Quality', desc: 'We deliver only world-class design systems and robust technology architectures.' },
  { icon: Lightbulb, title: 'AI-First Thinking', desc: 'We systematically identify operational automation opportunities to drive high-performance growth.' },
  { icon: Users, title: 'Direct Transparency', desc: 'Flat billing, clear milestone reports, and real-time slack collaboration channels.' },
  { icon: Trophy, title: 'Results-Oriented Focus', desc: 'Our indicators of success are conversions, revenue, and client ROI metrics.' },
];

const timeline = [
  { year: '2021', title: 'Agency Foundation', desc: 'Meru Technologies founded as a premium software and digital design studio.' },
  { year: '2023', title: 'AI Core Deployment', desc: 'Integrated predictive marketing analytics models into campaign workflows.' },
  { year: '2025', title: 'Global Reach', desc: 'Opened regional hubs and scaled service suites to enterprise SaaS and schools.' },
];

const team = [
  { name: 'Arjun Mehta', role: 'Founder & CEO', tag: 'Strategy' },
  { name: 'Elena Rostova', role: 'Head of Brand Design', tag: 'Creative' },
  { name: 'Sarah Jenkins', role: 'Lead AI Engineer', tag: 'Technology' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background-custom pt-32 pb-24 relative overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.04)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-20 flex flex-col gap-4">
            <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
              OUR MISSION & PURPOSE
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-white tracking-tight">
              Pioneering the AI-Driven Digital Frontier
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mt-2">
              We help ambitious startups, enterprises, and schools design high-performance websites and scale marketing channels through custom intelligence integrations.
            </p>
          </div>

          {/* Mission & Vision grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="glass-panel p-8.5 rounded-2xl border-primary/10 bg-card/25 flex flex-col gap-5">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Our Mission</h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                To eliminate marketing inefficiency and outdated software stack constraints. We equip companies with fast Next.js applications and campaign bidding infrastructure designed for measurable, exponential scale.
              </p>
            </div>

            <div className="glass-panel p-8.5 rounded-2xl border-primary/10 bg-card/25 flex flex-col gap-5">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">Our Vision</h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                To lead as the gold standard in premium digital design, AI automation execution, and growth marketing, enabling global enterprises and founders to grow with absolute operational clarity.
              </p>
            </div>
          </div>

          {/* Timeline Story */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
              <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
                OUR JOURNEY
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                How We Built the scale Engine
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line (Desktop only) */}
              <div className="hidden md:block absolute top-7 left-12 right-12 h-[1px] bg-border-custom z-0" />
              
              {timeline.map((item) => (
                <div key={item.year} className="flex flex-col gap-4 relative z-10">
                  <div className="h-14 w-14 rounded-full bg-card border border-border-custom flex items-center justify-center text-primary font-heading font-extrabold text-lg shadow-[0_0_15px_rgba(217,255,0,0.05)]">
                    {item.year}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mt-1">{item.title}</h4>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="max-w-3xl mb-16 flex flex-col gap-4">
              <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
                OUR CORE VALUES
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Principles Guiding Our Engineering & Execution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-card/40 border border-border-custom/50 p-6 rounded-2xl flex flex-col gap-4 hover:border-primary/20 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-white">{v.title}</h4>
                    <p className="font-sans text-xs text-text-secondary leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
              <span className="font-heading font-semibold text-primary text-xs uppercase tracking-wider">
                MEET THE EXPERTS
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
                Creative Directors & AI Engineers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((t) => (
                <div key={t.name} className="glass-panel p-6 rounded-2xl border-primary/10 flex flex-col gap-5 bg-card/20 group">
                  {/* Decorative Profile Silhouette Card */}
                  <div className="h-64 w-full bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border-custom flex items-center justify-center relative overflow-hidden group-hover:border-primary/20 transition-colors">
                    <span className="font-heading font-extrabold text-white/5 text-9xl absolute bottom-[-20px] right-[-20px] pointer-events-none">
                      {t.name[0]}
                    </span>
                    {/* Visual representative avatar placeholder */}
                    <div className="h-16 w-16 rounded-full bg-background-custom border border-border-custom flex items-center justify-center text-primary text-xl font-heading font-bold shadow-lg">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors">
                        {t.name}
                      </h4>
                      <span className="bg-white/5 text-[9px] uppercase tracking-wide text-text-secondary px-2.5 py-0.5 rounded-full">
                        {t.tag}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-text-secondary">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
