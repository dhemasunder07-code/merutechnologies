'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Three.js or simple canvas animation for floating abstract particles & lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const numParticles = 40;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: i % 2 === 0 ? 'rgba(217,255,0,0.3)' : 'rgba(168,214,29,0.15)',
      });
    }

    const resizeHandler = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resizeHandler);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background network lines
      ctx.strokeStyle = 'rgba(217, 255, 0, 0.05)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-background-custom">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.06)_0%,transparent_60%)] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,214,29,0.04)_0%,transparent_60%)] blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(217,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Column - Headline & Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start bg-card border border-border-custom px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-primary"
          >
            <Sparkles className="h-3 w-3 animate-pulse" />
            <span>AI-POWERED GROWTH ENGINE</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white"
          >
            Grow Faster with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white drop-shadow-[0_0_20px_rgba(217,255,0,0.15)]">
              AI-Powered
            </span>{" "}
            Digital Solutions
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            We help startups, businesses, schools and enterprises grow using AI-driven Digital Marketing, High-Performance Websites, Premium Branding, and Business Automation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-background-custom font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-[0_0_25px_rgba(217,255,0,0.2)] hover:shadow-[0_0_35px_rgba(217,255,0,0.4)] hover:-translate-y-0.5"
            >
              Book Free Strategy Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-card border border-border-custom hover:border-primary text-white hover:text-primary font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,255,0,0.08)]"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats quick preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-border-custom/50 mt-4 max-w-lg"
          >
            <div>
              <div className="font-heading font-bold text-2xl text-white">200+</div>
              <div className="font-sans text-xs text-text-secondary">Projects Delivered</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-white">98%</div>
              <div className="font-sans text-xs text-text-secondary">Satisfaction</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl text-white">4.8x</div>
              <div className="font-sans text-xs text-text-secondary">Avg. Client ROAS</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - 3D Dashboard Preview */}
        <div className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center">
          
          {/* Animated network canvas in background of graphic */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60 z-0 pointer-events-none"
          />

          {/* Core Hub */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 glass-panel h-80 w-80 rounded-2xl flex flex-col items-center justify-center border-primary/20 shadow-[0_0_50px_rgba(217,255,0,0.05)]"
          >
            <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <h3 className="font-heading text-white font-bold text-xl">Meru AI Core</h3>
            <p className="font-sans text-xs text-text-secondary mt-1">Analyzing channels...</p>
            <div className="flex gap-1.5 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            </div>
          </motion.div>

          {/* Floating Glass Panel 1: Leads */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-8 right-0 z-20 glass-panel p-4 rounded-xl flex flex-col gap-1 border-primary/20 max-w-[170px]"
          >
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-4 w-4" />
              <span className="font-heading font-bold text-sm">Analytics</span>
            </div>
            <div className="text-white font-heading font-extrabold text-2xl mt-1">
              +142%
            </div>
            <div className="text-[10px] text-text-secondary">Lead Gen Growth</div>
            {/* Tiny SVG sparkline */}
            <svg className="w-full h-8 mt-2" viewBox="0 0 100 30">
              <path
                d="M0,25 Q15,5 30,20 T60,5 T90,2 T100,0"
                fill="none"
                stroke="#D9FF00"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          {/* Floating Glass Panel 2: ROAS */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 left-0 z-20 glass-panel p-4 rounded-xl flex flex-col gap-1 border-primary/20 min-w-[160px]"
          >
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-4 w-4" />
              <span className="font-heading font-bold text-sm">Campaigns</span>
            </div>
            <div className="text-white font-heading font-extrabold text-2xl mt-1">
              4.8x
            </div>
            <div className="text-[10px] text-text-secondary">Avg. Google Ads ROAS</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%] rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Floating Geometric Particle 1 */}
          <div className="absolute top-20 left-12 h-6 w-6 border-t-2 border-l-2 border-primary/30 rounded-tl-md animate-float" />
          {/* Floating Geometric Particle 2 */}
          <div className="absolute bottom-24 right-16 h-8 w-8 border-b-2 border-r-2 border-secondary/30 rounded-br-md animate-float-delayed" />
        </div>
      </div>
    </section>
  );
}
