import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyMeru from '@/components/sections/WhyMeru';
import Process from '@/components/sections/Process';
import Portfolio from '@/components/sections/Portfolio';
import CaseStudies from '@/components/sections/CaseStudies';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyMeru />
        <Process />
        <Portfolio />
        <CaseStudies />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
