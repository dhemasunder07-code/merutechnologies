'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150); // Offset by half the width of the glow (300px / 2 = 150px)
      cursorY.set(e.clientY - 150);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
      }}
    >
      <div className="h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.12)_0%,rgba(217,255,0,0.03)_50%,transparent_100%)] blur-[40px] mix-blend-screen" />
    </motion.div>
  );
}
