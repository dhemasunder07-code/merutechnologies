'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-background-custom border-t border-border-custom pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,255,0,0.03)_0%,transparent_70%)] blur-[50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-border-custom">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-16 w-auto overflow-hidden">
                <Image
                  src="/meru-icon.png"
                  alt="Meru Technologies Logo"
                  width={64}
                  height={64}
                  className="object-contain h-16 w-auto"
                />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Meru Technologies
              </span>
            </Link>
            <div className="-mt-3">
              <p className="font-heading text-xs font-bold text-primary tracking-wide">
                Hemasunder D
              </p>
              <p className="text-[10px] text-text-secondary/70 tracking-widest uppercase font-mono mt-0.5">
                Founder & CEO
              </p>
            </div>
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-xs">
              Empowering startups, businesses, and enterprises with premium AI-powered digital solutions, custom websites, branding, and automation.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-card border border-border-custom flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-card border border-border-custom flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-card border border-border-custom flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918464955103"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-card border border-border-custom flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  AI Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Branding & Logo Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Social Media Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-sans text-sm text-text-secondary hover:text-primary transition-colors">
                  Commercial Ads & Reels
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading text-white font-semibold text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Subscribe to receive the latest tech insights and growth strategy recommendations.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 relative">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-card border border-border-custom rounded-full px-4 py-2.5 text-sm text-white placeholder-text-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full transition-all"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-[34px] w-[34px] rounded-full bg-primary hover:bg-secondary text-background-custom flex items-center justify-center transition-all shadow-[0_0_10px_rgba(217,255,0,0.15)]"
                aria-label="Subscribe"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            <div className="flex flex-col gap-2 mt-2 font-sans text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>Kukatpally, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>growth@merutechnologies.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span>+91 8464955103</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-text-secondary">
          <span>&copy; {currentYear} Meru Technologies. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
