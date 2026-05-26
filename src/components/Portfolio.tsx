/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Link, Maximize2, X, BarChart3, Clock, Flame, Globe, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imgType: 'phone' | 'sheet' | 'laptop' | 'video' | 'marketing';
  metrics: string;
  client: string;
  duration: string;
  growthStory: string;
  statsBreakdown: { label: string; value: string }[];
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filterTabs = ['All', 'Social Media', 'Brand Identity', 'Web Development', 'Video Ads', 'Marketing Content'];

  const projects: ProjectItem[] = [
    {
      id: 'social-campaign',
      title: 'Social Media Campaign',
      category: 'Social Media',
      imgType: 'phone',
      metrics: '400k+ Active Engagement',
      client: 'TrendX Retail',
      duration: '3 Months',
      growthStory: 'Overhauled organic socials and rolled out hyper-engaging horizontal carousels. Implemented user-driven feedback loops that raised conversion margins organically.',
      statsBreakdown: [
        { label: 'Follower Growth', value: '+184%' },
        { label: 'Engagement Rate', value: '8.4%' },
        { label: 'Leads Appended', value: '4.2k' }
      ]
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      category: 'Brand Identity',
      imgType: 'sheet',
      metrics: 'Unified Brand Scaling',
      client: 'Apex Fintech',
      duration: '1.5 Months',
      growthStory: 'Engineered a highly aesthetic bold visual language centered around orange tones to separate Apex from monochromatic financial rivals. Built complete manuals.',
      statsBreakdown: [
        { label: 'Brand Recognition', value: '+68%' },
        { label: 'Asset Library', value: '140+ Files' },
        { label: 'Client Retention', value: '94%' }
      ]
    },
    {
      id: 'web-dev-proj',
      title: 'Website Development',
      category: 'Web Development',
      imgType: 'laptop',
      metrics: '1.4s Page Load speed',
      client: 'SaaSFlow Solutions',
      duration: '2.5 Months',
      growthStory: 'Designed and deployed a highly performant static application with beautiful tailwind animations, dynamic pricing panels, and custom analytics hooks.',
      statsBreakdown: [
        { label: 'Bounce Rate Decline', value: '-35%' },
        { label: 'Conversion Lift', value: '+4.8%' },
        { label: 'SEO Authority Score', value: '78 / 100' }
      ]
    },
    {
      id: 'video-ads',
      title: 'Promotional Video Ads',
      category: 'Video Ads',
      imgType: 'video',
      metrics: '6.8M Verified Impressions',
      client: 'Voltic Energy',
      duration: '4 Weeks',
      growthStory: 'Crafted dynamic vertical storytelling videos focusing on high-energy hooks and concise value displays. Optimized video CTR through deep audience analysis.',
      statsBreakdown: [
        { label: 'Video CTR', value: '11.4%' },
        { label: 'Completed Views', value: '2.4M' },
        { label: 'Target CPC', value: '$0.12' }
      ]
    },
    {
      id: 'marketing-content',
      title: 'Marketing Content',
      category: 'Marketing Content',
      imgType: 'marketing',
      metrics: '5.2x Lead Funnel ROI',
      client: 'Globex Logistics',
      duration: '2 Months',
      growthStory: 'Drafted professional industry e-books, slide decks, and whitepapers targeting cold B2B traffic. Significantly boosted email open rates.',
      statsBreakdown: [
        { label: 'Prospect Click Rate', value: '22%' },
        { label: 'Form Fill Rate', value: '8.2%' },
        { label: 'Revenue Generated', value: '$120k' }
      ]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // High-fidelity CSS Mockup Renderers representing the original images extremely professionally
  const renderMockup = (type: string) => {
    switch (type) {
      case 'phone':
        return (
          <div className="w-full h-64 bg-slate-900 rounded-3xl p-4 flex gap-3 justify-center items-center relative overflow-hidden">
            {/* Ambient Background lights */}
            <div className="absolute w-32 h-32 bg-[#FF5B00]/25 rounded-full blur-2xl top-0 left-0" />
            
            {/* Phone Frame 1 */}
            <div className="w-[100px] h-[180px] bg-slate-950 rounded-2xl border-4 border-slate-800 p-1.5 flex flex-col justify-between shadow-lg relative transform -rotate-6">
              <div className="w-8 h-2.5 bg-slate-800 rounded-full mx-auto" />
              <div className="space-y-1.5 mt-2">
                <div className="w-full h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-[7px] font-bold text-orange-400">
                  Analytics
                </div>
                <div className="w-full h-12 bg-zinc-900 rounded-lg p-1 space-y-1">
                  <div className="w-6 h-1 bg-gray-500 rounded" />
                  <div className="w-8 h-1 bg-gray-600 rounded" />
                  <div className="w-full h-6 bg-gradient-to-t from-orange-500/10 to-transparent border-t border-orange-500/40 mt-1" />
                </div>
              </div>
              <div className="w-4 h-1 bg-slate-800 rounded mx-auto" />
            </div>

            {/* Phone Frame 2 */}
            <div className="w-[110px] h-[190px] bg-slate-950 rounded-2xl border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative z-10">
              <div className="w-10 h-3 bg-slate-800 rounded-full mx-auto" />
              <div className="space-y-2 mt-3">
                <div className="w-full h-16 bg-neutral-900 rounded-xl p-1.5 border border-zinc-800 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div className="w-8 h-1.5 bg-gray-500 rounded" />
                    <div className="w-3 h-3 bg-[#FF5B00] rounded-full" />
                  </div>
                  {/* Dynamic mini-bars representation */}
                  <div className="flex items-end gap-1 h-8 pt-2">
                    <div className="w-1.5 h-3 bg-gray-700 rounded-sm" />
                    <div className="w-1.5 h-4 bg-gray-600 rounded-sm" />
                    <div className="w-1.5 h-6 bg-orange-400 rounded-sm" />
                    <div className="w-1.5 h-7 bg-[#FF5B00] rounded-sm" />
                  </div>
                </div>
                <div className="text-[6px] font-bold text-gray-400 text-center">
                  +184% Daily Reach
                </div>
              </div>
              <div className="w-4 h-1 bg-slate-800 rounded mx-auto" />
            </div>
          </div>
        );

      case 'sheet':
        return (
          <div className="w-full h-64 bg-slate-100/90 rounded-3xl p-6 flex justify-center items-center bg-grid border border-slate-200/50 relative overflow-hidden group-hover:scale-[1.02] duration-300">
            {/* Stacked Branding Assets mockup */}
            <div className="w-[140px] h-[180px] bg-white rounded-lg p-4 shadow-xl border border-slate-200 flex flex-col justify-between relative transform -rotate-3 hover:rotate-0 duration-300">
              <div className="space-y-2">
                {/* Brand stylized header representation */}
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 bg-[#FF5B00] rounded-md flex items-center justify-center text-[10px] text-white font-black font-display">K</div>
                  <div className="w-12 h-2.5 bg-slate-800 rounded" />
                </div>
                <div className="w-full h-0.5 bg-slate-200 mt-2" />
                <div className="text-[7.5px] font-extrabold text-gray-500 font-display">
                  Corporate Brand Colors
                </div>
                <div className="flex gap-1.5">
                  <div className="w-4 h-4 bg-[#FF5B00] rounded-sm" />
                  <div className="w-4 h-4 bg-slate-800 rounded-sm" />
                  <div className="w-4 h-4 bg-slate-200 rounded-sm" />
                </div>
              </div>
              <div className="bg-[#FF5B00]/10 text-[#FF5B00] px-2 py-1 rounded text-[7px] font-extrabold tracking-wider text-center">
                BRAND BOOK
              </div>
            </div>
          </div>
        );

      case 'laptop':
        return (
          <div className="w-full h-64 bg-slate-100 rounded-3xl p-6 flex justify-center items-center border border-slate-200/50 relative overflow-hidden">
            {/* Elegant Laptop Frame */}
            <div className="w-[200px] sm:w-[240px] h-[130px] sm:h-[150px] bg-slate-900 rounded-xl border-4 border-slate-800 p-1 shadow-2xl relative flex flex-col justify-between">
              <div className="w-full h-full bg-slate-950 rounded-lg overflow-hidden flex flex-col justify-between relative text-white">
                <div className="bg-zinc-900 px-2 py-1 flex justify-between items-center text-[6px]">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    <span className="w-1 h-1 bg-yellow-500 rounded-full" />
                    <span className="w-1 h-1 bg-green-500 rounded-full" />
                  </div>
                  <div className="w-20 h-2.5 bg-black rounded text-[5px] text-gray-500 flex items-center justify-center">
                    https://klyvonix.com
                  </div>
                </div>

                {/* Simulated landing page */}
                <div className="px-2 py-3 space-y-2 text-left">
                  <div className="w-12 h-1 bg-[#FF5B00] rounded" />
                  <div className="w-24 h-2 bg-white rounded" />
                  <div className="w-16 h-1 bg-zinc-700 rounded" />
                  <div className="w-12 h-4 bg-[#FF5B00] text-[6px] font-bold rounded flex items-center justify-center">
                    Get Started
                  </div>
                </div>

                <div className="p-1.5 bg-zinc-900 border-t border-zinc-800 flex justify-between items-center text-[5px] text-gray-500">
                  <span>99% Score</span>
                  <span>React Engine</span>
                </div>
              </div>
            </div>
            {/* Laptop Keyboard bottom base layer */}
            <div className="absolute bottom-6 w-[230px] sm:w-[2700px] h-3 bg-slate-300 rounded-b-lg border-t border-slate-400 shadow-xl" />
          </div>
        );

      case 'video':
        return (
          <div className="w-full h-64 bg-slate-950 rounded-3xl flex justify-center items-center relative overflow-hidden group">
            {/* Video preview background style */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70 scale-105 group-hover:scale-110 duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80')" }} />
            <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-[1px]" />
            
            {/* Dynamic Play button glowing */}
            <div className="w-16 h-16 bg-[#FF5B00] text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 transform group-hover:scale-110 duration-300 z-10">
              <Play className="h-6 w-6 stroke-[3px] fill-current" />
            </div>

            <div className="absolute bottom-4 left-4 z-10 text-left">
              <div className="text-[10px] font-bold text-orange-400 font-mono tracking-wider uppercase">Video Ads</div>
              <div className="text-xs font-bold text-white">Compelling Hook Loop</div>
            </div>
          </div>
        );

      case 'marketing':
        return (
          <div className="w-full h-64 bg-slate-900 rounded-3xl p-6 flex justify-center items-center relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-orange-600/30 rounded-full blur-3xl" />
            {/* Stacked PPT slides mockup representation */}
            <div className="w-[180px] h-[130px] bg-[#1a1a1a] border border-orange-500/20 rounded-xl p-4 shadow-2xl text-left space-y-3 relative transform rotate-1">
              <div className="flex justify-between items-center">
                <span className="text-[7px] text-orange-400 font-mono font-bold">Q4 FUNNEL STRATEGY</span>
                <span className="text-[6px] text-gray-500">Slide 4 / 12</span>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold text-white">Conversion Optimization Leads</h4>
                <div className="w-full h-1 bg-[#FF5B00] rounded-sm" />
                <div className="w-2/3 h-1 bg-neutral-700 rounded-sm" />
              </div>

              {/* Grid block representation */}
              <div className="grid grid-cols-3 gap-1.5 pt-2">
                <div className="p-1 bg-zinc-800 rounded">
                  <div className="text-[8px] text-[#FF5B00] font-black">5.2x</div>
                  <div className="text-[5px] text-neutral-400">ROI</div>
                </div>
                <div className="p-1 bg-zinc-800 rounded">
                  <div className="text-[8px] text-white font-black">94.8%</div>
                  <div className="text-[5px] text-neutral-400">Match</div>
                </div>
                <div className="p-1 bg-[#FF5B00] rounded text-white font-bold flex items-center justify-center text-[7px]">
                  Next Slide
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-5 h-[1.5px] bg-[#FF5B00]"></span>
              <span className="text-xs font-bold tracking-widest text-[#FF5B00] uppercase font-display">
                Recent Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight">
              Our Latest Work
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 self-center">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                id={`filter-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all focus:outline-none cursor-pointer ${
                  filter === tab 
                    ? 'bg-white text-[#FF5B00] shadow-sm' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {/* Visual device canvas */}
                <div className="relative overflow-hidden">
                  {renderMockup(project.imgType)}

                  {/* Actions overlay panel */}
                  <div className="absolute inset-0 bg-[#FF5B00]/10 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center gap-3">
                    <div className="p-3 bg-white text-[#FF5B00] rounded-full shadow-lg hover:scale-110 duration-200">
                      <Maximize2 className="h-5 w-5 stroke-[2.5px]" />
                    </div>
                  </div>
                </div>

                {/* Information cards details */}
                <div className="p-6 space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#FF5B00] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider font-display">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium font-mono">{project.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF5B00] duration-200 font-display">
                    {project.title}
                  </h3>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-gray-700">
                    <span className="flex items-center gap-1 text-green-600">
                      <BarChart3 className="h-3.5 w-3.5" />
                      {project.metrics}
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-700 duration-200">Study case &rarr;</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Lightbox Overlay Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-neutral-900/70 backdrop-blur-sm"
            />

            {/* Modal Card frame */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl z-10 overflow-hidden max-h-[90vh] flex flex-col justify-between"
            >
              {/* Close Button element */}
              <button
                id="close-portfolio-modal"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2.5 text-slate-400 hover:text-slate-800 bg-white/90 hover:bg-slate-100 rounded-full transition-colors z-20 shadow cursor-pointer border border-slate-200"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-y-auto">
                {/* Visual mockup block at top */}
                <div className="relative border-b border-slate-100 bg-slate-950">
                  {renderMockup(activeProject.imgType)}
                </div>

                {/* Content specifications */}
                <div className="p-6 sm:p-8 space-y-6 text-left">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-1.5 bg-orange-50 text-[#FF5B00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider font-display">
                      <Target className="h-4.5 w-4.5" />
                      {activeProject.category} Case Study
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        {activeProject.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="h-3.5 w-3.5 text-gray-400" />
                        {activeProject.client}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900 leading-tight">
                    {activeProject.title}
                  </h3>

                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B00] flex items-center gap-1.5">
                      <Flame className="h-4 w-4" />
                      Campaign Overview & Results
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                      {activeProject.growthStory}
                    </p>
                  </div>

                  {/* Impact/Metrics Breakdown dynamic boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                    {activeProject.statsBreakdown.map((b, bIdx) => (
                      <div key={bIdx} className="p-4 bg-orange-50/50 rounded-2xl border border-orange-100 flex flex-col justify-between">
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                          {b.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#FF5B00] mt-1.5">
                          {b.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 p-4 rounded-xl border border-slate-100 text-[11px] text-gray-500 leading-relaxed bg-slate-50 flex items-start gap-2.5">
                    <span className="text-base">💡</span>
                    <span>Note: Specific corporate metrics and budget scales were authorized for transparent release by our partner {activeProject.client}. Every campaign delivers comprehensive analytical dashboard readouts.</span>
                  </div>

                </div>
              </div>

              {/* Bottom actionable header */}
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
                <button
                  id="modal-portfolio-dismiss"
                  onClick={() => setActiveProject(null)}
                  className="text-gray-500 font-bold text-sm cursor-pointer hover:text-gray-900 transition-colors"
                >
                  Dismiss Showcase
                </button>
                <button
                  id="modal-portfolio-consult"
                  onClick={() => {
                    setActiveProject(null);
                    const contactEl = document.getElementById('contact');
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#FF5B00] hover:bg-[#E04F00] text-white px-5 py-3 rounded-xl font-bold text-xs tracking-wide cursor-pointer transition-all duration-150"
                >
                  Request Similar Campaign
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
