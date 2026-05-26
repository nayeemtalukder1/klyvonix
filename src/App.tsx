/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import MarketingCalculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#FF5B00] selection:text-white bg-slate-50 relative">
      {/* Sticky navigation and brand indicators */}
      <Header />

      {/* Structured Single-Screen Section components */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <MarketingCalculator />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      {/* Visual footer content lists */}
      <Footer />
    </div>
  );
}
