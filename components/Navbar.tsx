'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 glass-nav'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/meru-icon.png"
                alt="Meru Technologies Logo"
                width={36}
                height={36}
                className="object-contain h-9 w-auto"
                priority
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
              Meru Technologies
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact?consultation=true"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-background-custom font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300 shadow-[0_0_15px_rgba(217,255,0,0.15)] hover:shadow-[0_0_25px_rgba(217,255,0,0.3)] hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-background-custom/95 backdrop-blur-xl border-b border-border-custom lg:hidden overflow-y-auto max-h-[calc(100vh-73px)]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-lg font-semibold text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-6 border-t border-border-custom">
                <Link
                  href="/contact?consultation=true"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-background-custom font-semibold w-full py-3.5 rounded-full text-center transition-all shadow-[0_0_15px_rgba(217,255,0,0.1)]"
                >
                  Get Free Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
