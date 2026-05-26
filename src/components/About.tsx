/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Smile, Trophy, TrendingUp, Handshake, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function About() {
  const [showStory, setShowStory] = useState(false);

  const stats = [
    {
      id: 'happy-clients',
      value: '100+',
      label: 'Happy Clients',
      description: 'Global and local businesses growing together',
      icon: Smile,
      color: 'bg-orange-50 text-orange-500 border-orange-100',
    },
    {
      id: 'projects-completed',
      value: '250+',
      label: 'Projects Completed',
      description: 'Campaigns, websites, and brand revamps delivered',
      icon: Trophy,
      color: 'bg-orange-50 text-orange-500 border-orange-100',
    },
    {
      id: 'average-growth',
      value: '350%',
      label: 'Average Growth',
      description: 'Sales and traffic lift observed for clients',
      icon: TrendingUp,
      color: 'bg-orange-50 text-orange-500 border-orange-100',
    },
    {
      id: 'years-experience',
      value: '5+',
      label: 'Years Experience',
      description: 'Of cutting-edge digital marketing mastery',
      icon: Handshake,
      color: 'bg-orange-50 text-orange-500 border-orange-100',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block - Story and Copywriting */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-10 h-[2px] bg-[#FF5B00]"></span>
              <span className="text-xs font-bold tracking-widest text-[#FF5B00] uppercase font-display">
                About Klyvonix
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-tight">
              We Build Brands <br />
              That Grow
            </h2>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg">
              <p className="leading-relaxed">
                Klyvonix is a modern digital marketing agency helping brands grow through creative strategy, powerful design, social media marketing, web development, and content creation.
              </p>
              <p className="leading-relaxed text-sm sm:text-base text-gray-500">
                We build strong online presence for businesses with innovative marketing solutions and professional teamwork. Our client-focused approach guarantees that every campaign is backed by metrics.
              </p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <button
                id="about-learn-more"
                onClick={() => setShowStory(true)}
                className="bg-[#FF5B00] hover:bg-[#E04F00] text-white px-7 py-3 rounded-lg font-bold text-sm tracking-wide shadow-md shadow-orange-500/10 hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Block - 2x2 Stats Grid with custom illustrations */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="p-8 bg-white border border-slate-100 hover:border-orange-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group cursor-default"
                  >
                    <div className="flex flex-col gap-4">
                      <div className={`p-4 rounded-xl w-14 h-14 flex items-center justify-center transition-colors group-hover:bg-[#FF5B00] group-hover:text-white ${stat.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-3xl font-display font-extrabold text-neutral-900 group-hover:text-[#FF5B00] transition-colors">
                          {stat.value}
                        </h3>
                        <p className="text-sm font-bold text-gray-800">
                          {stat.label}
                        </p>
                        <p className="text-xs text-gray-400 font-medium">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Story Detail Sliding Modal Popup */}
      <AnimatePresence>
        {showStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStory(false)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 max-w-2xl w-full shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                id="close-story-modal"
                onClick={() => setShowStory(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF5B00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-[#FF5B00] rounded-full"></span>
                  Our Agency Core Values
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">
                  Accelerating Brand Resonance Through Creative Grit
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Founded in Bangladesh with a vision to streamline complex online marketing streams, **Klyvonix** emerged as an agile collective of brand designers, software developers, and search engine specialists. We reject template strategies; instead, we analyze competitor frameworks, scrape consumer interest indicators, and design tailored layouts to drive audience action.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    'Data-Driven Growth Strategies',
                    'Transparent Performance Metrics',
                    'Empathetic Consumer Hook Design',
                    'Iterative Marketing Funnels',
                    'Elite Creative Brand Voice Styling',
                    'Continuous Lead Optimization'
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#FF5B00] shrink-0" />
                      {val}
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-lg font-display text-[#FF5B00] shadow-sm shrink-0 border border-slate-200">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Growth Guarantee</h4>
                    <p className="text-xs text-gray-500">We align our benchmarks with your revenue goals to ensure concrete marketing impact.</p>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    id="close-story-modal-btn"
                    onClick={() => setShowStory(false)}
                    className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm tracking-wide px-6 py-3 rounded-xl cursor-pointer transition-colors"
                  >
                    Got It, Thank You
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
