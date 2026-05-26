/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden bg-grid"
    >
      {/* Background radial gradients for ambient glowing lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Texts contents */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#FF5B00] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Digital Marketing Agency
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              Grow Your Brand <br />
              <span className="text-neutral-900 relative">
                With{' '}
                <span className="text-[#FF5B00] relative inline-block">
                  Klyvonix
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-orange-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Creative Digital Marketing, Branding & Growth Solutions For Modern Businesses. We deliver high-impact results that maximize your ROI.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-get-started"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto bg-[#FF5B00] hover:bg-[#E04F00] text-white px-8 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                Get Started
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <button
                id="hero-view-services"
                onClick={() => handleScrollTo('services')}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 border-2 border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 transition-all text-base cursor-pointer"
              >
                View Services
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-100 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900">100+</p>
                <p className="text-xs text-gray-500 font-medium">Verified Cleints</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900">350%</p>
                <p className="text-xs text-gray-500 font-medium">Avg Growth</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900">5+</p>
                <p className="text-xs text-gray-500 font-medium font-display">Years of Impact</p>
              </div>
            </div>

          </div>

          {/* Right Hero Visuals matching the legendary 3D "K" emblem cleanly rendered */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Backdrops */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] bg-neutral-100/60 rounded-full -z-10 bg-grid border border-neutral-200/40 animate-[spin_100s_linear_infinite]" />
            
            {/* Live Interactive Floating Stats/Widgets */}
            <motion.div 
              initial={{ x: -15, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute left-4 top-10 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <div className="p-2.5 bg-orange-100 text-[#FF5B00] rounded-xl">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Conversion Boost</p>
                <p className="text-sm font-bold font-display text-gray-800">+148% Leads</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute right-4 bottom-8 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 z-10"
            >
              <div className="p-2.5 bg-slate-100 text-slate-800 rounded-xl">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Ad Efficiency</p>
                <p className="text-sm font-bold font-display text-gray-800">5.8x Campaign ROI</p>
              </div>
            </motion.div>

            {/* Core stylized 3D K Vector Emblem */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square flex items-center justify-center hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
            >
              <svg 
                viewBox="0 0 500 500" 
                className="w-full h-full filter drop-shadow-[0_20px_40px_rgba(255,91,0,0.15)]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Metallic definitions and gradients matching K color tones in original image */}
                  <linearGradient id="metal-primary" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#E2E8F0" />
                    <stop offset="70%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#64748B" />
                  </linearGradient>

                  <linearGradient id="metal-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="50%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>

                  <linearGradient id="orange-emblem" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF9E00" />
                    <stop offset="40%" stopColor="#FF5B00" />
                    <stop offset="100%" stopColor="#CC2E00" />
                  </linearGradient>

                  <linearGradient id="accent-glow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF3D00" />
                    <stop offset="100%" stopColor="#FFBE3B" />
                  </linearGradient>

                  <filter id="emblem-shadow" x="-10%" y="-10%" width="125%" height="125%">
                    <feDropShadow dx="8" dy="16" stdDeviation="12" floodOpacity="0.3" />
                  </filter>
                  <filter id="glow-filter">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Back Outer subtle circular tech grid lines */}
                <circle cx="250" cy="250" r="180" stroke="#FF5B00" strokeWidth="1" strokeDasharray="6 8" strokeOpacity="0.25" />
                <circle cx="250" cy="250" r="210" stroke="#94A3B8" strokeWidth="1" strokeDasharray="12 15" strokeOpacity="0.2" />

                {/* Decorative glowing dots like the background in screenshot */}
                <circle cx="110" cy="110" r="4" fill="#FF5B00" filter="url(#glow-filter)" />
                <circle cx="430" cy="150" r="5" fill="#FF5B00" />
                <circle cx="100" cy="380" r="6" fill="#94A3B8" />
                <circle cx="240" cy="450" r="3" fill="#FF5B00" />

                {/* Vertical Stem of the main "K" - Double layered for 3D depth */}
                {/* 1. Behind Shadow structure */}
                <path d="M120 80 H220 L180 420 H80 Z" fill="#334155" opacity="0.15" />
                
                {/* 2. Main High-contrast Silver Vertical Spine */}
                <path 
                  d="M130 90 L200 90 V410 H130 Z" 
                  fill="url(#metal-primary)" 
                  stroke="#475569" 
                  strokeWidth="2.5" 
                  filter="url(#emblem-shadow)"
                />
                
                {/* 3. Metallic bevel top portion */}
                <path 
                  d="M130 90 L200 90 L200 130 L130 90 Z" 
                  fill="url(#metal-accent)" 
                />
                <path 
                  d="M130 410 L200 410 L200 370 L130 410 Z" 
                  fill="#475569" 
                />

                {/* Top Silver Slash of the K */}
                <path 
                  d="M190 240 L360 81 H440 L245 240 Z" 
                  fill="url(#metal-primary)" 
                  stroke="#475569" 
                  strokeWidth="2"
                  filter="url(#emblem-shadow)"
                />
                <path 
                  d="M360 81 H440 L410 115 H325 Z" 
                  fill="url(#metal-accent)"
                />

                {/* Glowing Interactive Front Curved Sharp Swoosh in Vivid Klyvonix Orange */}
                <path 
                  d="M110 330 C160 280, 260 250, 440 370 C360 330, 240 210, 190 190 C140 240, 120 280, 110 330 Z" 
                  fill="url(#orange-emblem)" 
                  stroke="url(#accent-glow)"
                  strokeWidth="1.5"
                  filter="url(#emblem-shadow)"
                />

                {/* Shiny highlight lines on orange swoosh */}
                <path 
                  d="M195 200 C240 220, 310 270, 390 330" 
                  stroke="#FFE0B2" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeOpacity="0.65" 
                />
              </svg>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
