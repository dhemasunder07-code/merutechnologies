'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 150, suffix: '+', label: 'Businesses Helped' },
  { value: 24, suffix: '/7', label: 'Support SLA' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState('0');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  // Update string value to prevent flashing
  useEffect(() => {
    return rounded.on('change', (v) => {
      setDisplayValue(v.toString());
    });
  }, [rounded]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-5xl md:text-6xl text-white">
      {displayValue}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-background-custom border-t border-border-custom/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-[-10%] left-[20%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.015)_0%,transparent_60%)] blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-center">
          {stats.map((st) => (
            <div key={st.label} className="flex flex-col gap-2.5">
              <Counter value={st.value} suffix={st.suffix} />
              <span className="font-sans text-xs md:text-sm text-text-secondary font-medium tracking-wide uppercase">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
