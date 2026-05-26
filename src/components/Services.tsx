/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Megaphone, 
  Share2, 
  Code, 
  Video, 
  Palette, 
  Search, 
  FileText, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Settings, 
  ArrowRight,
  CheckCircle,
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  deliverables: string[];
  pricingRange: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      subtitle: 'Build an Engaged Online Community',
      icon: Megaphone,
      description: 'Strengthen customer connectivity with custom calendars, visually rich carousels, responding guidelines, and regular social audits to boost organic viral multipliers.',
      deliverables: [
        'Monthly Content Calendar & Schedules',
        'Custom Graphics, Reels & Graphic Design templates',
        'Active Community Management & Response guidelines',
        'Viral Trend Tracking & Audits'
      ],
      pricingRange: '$800 - $2,200 / Month'
    },
    {
      id: 'fb-ig-ads',
      title: 'Facebook & Instagram Ads',
      subtitle: 'Hyper-Targeted Paid Acquisition',
      icon: Share2,
      description: 'Stop wasting budget on pixel-blind clicks. We build high-performing sales funnels, lookalike cohorts, custom re-targeting sets, and clean conversion track hooks.',
      deliverables: [
        'Advanced Pixel & API Tracking setup',
        'Multi-variate A/B Testing copies',
        'Detailed conversion-metric cohorts',
        'Weekly live analytical readouts & budget adjust'
      ],
      pricingRange: '$1,200 - $4,500 / Month'
    },
    {
      id: 'web-dev',
      title: 'Website Design & Development',
      subtitle: 'Sleek, Dynamic UI & Code Stacks',
      icon: Code,
      description: 'Your storefront is your core conversion asset. We craft lightweight, blazing-fast, mobile-friendly landing pages and robust full-stack portals optimized for conversions.',
      deliverables: [
        'Bespoke UX/UI Tailwind designs based on branding',
        'SEO-optimized, lightweight static & server apps',
        'Dynamic Headless CMS setup & setup guides',
        'Conversion Rate Optimization (CRO) assessments'
      ],
      pricingRange: '$2,500 - $8,000 / Build'
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      subtitle: 'Premium Visual Content that Hooks',
      icon: Video,
      description: 'The standard attention span is 3 seconds. We edit dynamic, fast-paced vertical clips, corporate promos, and immersive product videos that boost click rates.',
      deliverables: [
        'Dynamic TikToks, Reels & YouTube Shorts packages',
        'Custom motion graphic elements & overlay highlights',
        'Color grading, crisp SFX, and high-fidelity text overlays',
        'Corporate overview / Brand intro films'
      ],
      pricingRange: '$500 - $2,500 / Month'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      subtitle: 'Thumb-Stopping Brand Aesthetics',
      icon: Palette,
      description: 'Differentiate your enterprise from crowded platforms. We create stunning billboards, print banners, marketing handouts, and beautiful digital styling cards.',
      deliverables: [
        'Modern Digital Assets & Banner files',
        'Print-ready flyers, business cards & merch guidelines',
        'Ad Creative designs that match guidelines',
        'Editable Figma / Canvas source files'
      ],
      pricingRange: '$400 - $1,800 / Package'
    },
    {
      id: 'seo-opt',
      title: 'SEO Optimization',
      subtitle: 'Drive Compounding Organic Traffic',
      icon: Search,
      description: 'Rank for high-intent keywords that customers search when ready to buy. Complete technical audits, keyword expansion strategies, and secure backlink profiles.',
      deliverables: [
        'Exhaustive On-Page keyword schema adjustments',
        'Technical Lighthouse & Page-Speed setups',
        'Premium content plans & backlink campaigns',
        'Monthly search-engine queries reporting'
      ],
      pricingRange: '$900 - $3,000 / Month'
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      subtitle: 'Establish Domain Authority',
      icon: FileText,
      description: 'Deploy insightful blogs, comprehensive whitepapers, and digital guidebooks designed to captivate leads and nurture cold traffic into repeat brand patrons.',
      deliverables: [
        'High-Value Editorial calendars',
        'Thought-leadership articles & guest columns',
        'Downloadable eBooks, lead lead guides, & handouts',
        'Conversion-focused newsletters'
      ],
      pricingRange: '$600 - $2,000 / Month'
    },
    {
      id: 'branding-strategy',
      title: 'Branding Strategy',
      subtitle: 'Definitive Brand Identities',
      icon: ShieldCheck,
      description: 'More than a logo - we build comprehensive identity guidelines including brand colors, typographic definitions, verbal voice guides, and strategic positioning.',
      deliverables: [
        'Complete brand style manual & asset libraries',
        'Unified tone, mood & brand core narratives',
        'Sleek Vector logo files in multiple formats',
        'Positioning assessment against competitors'
      ],
      pricingRange: '$1,500 - $5,000 / Project'
    },
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      subtitle: 'Leverage Trusted Creators',
      icon: Users,
      description: 'Tap into ready-made audiences. We identify, negotiate, and coordinate high-performing campaigns with leading niche influencers suited for your product vertical.',
      deliverables: [
        'Vetted influencer matching & background checks',
        'Structured contract processing & asset briefs',
        'Promo tracking templates & custom affiliate keys',
        'Post-campaign reach & sales lift analysis'
      ],
      pricingRange: '$1,000 - $4,000 + Ad Spend'
    },
    {
      id: 'business-growth',
      title: 'Business Growth Solutions',
      subtitle: 'Unified Scale & Analytics Orchestration',
      icon: TrendingUp,
      description: 'For brands looking to leap ahead. We construct complete growth loops, optimize payment gateways, run analytical tag manager checks, and build scale frameworks.',
      deliverables: [
        'Comprehensive analytical telemetry audits',
        'Interactive dashboard integrations',
        'Sales pipeline optimization & automated automation checks',
        'Quarterly business growth plans'
      ],
      pricingRange: 'Custom Quote Only'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF5B00] uppercase font-display block">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-900 tracking-tight">
            What We Do
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            We deliver results across all major marketing pillars. Hover to explore, click any service to view specialized deliverables, custom pricing ranges, and scope details.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((srv, index) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(srv)}
                className="bg-white border border-slate-100 hover:border-orange-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-orange-500/5 duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div className="space-y-4">
                  {/* Styled Icon */}
                  <div className="p-3 bg-orange-50 text-[#FF5B00] rounded-xl w-12 h-12 flex items-center justify-center transition-all group-hover:bg-[#FF5B00] group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-display leading-snug group-hover:text-[#FF5B00] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Bottom link element */}
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#FF5B00]">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal Component for Service Deliverables */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                id="close-services-modal"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
                  {React.createElement(selectedService.icon, { className: 'h-4 w-4' })}
                  Klyvonix Service Scope
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-extrabold text-neutral-900">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF5B00] italic">
                    {selectedService.subtitle}
                  </p>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                    Included Deliverables
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {selectedService.deliverables.map((item, id) => (
                      <div key={id} className="flex items-start gap-2.5 text-sm text-gray-700 font-semibold bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <CheckCircle className="h-4 w-4 text-[#FF5B00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Estimated Pricing</p>
                    <p className="text-base font-extrabold text-[#FF5B00] font-display">{selectedService.pricingRange}</p>
                  </div>
                  <button
                    id="calc-redirect-btn"
                    onClick={() => {
                      setSelectedService(null);
                      const calculatorEl = document.getElementById('calculator');
                      if (calculatorEl) {
                        calculatorEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-[#FF5B00] hover:bg-[#E04F00] text-white font-bold text-xs tracking-wide px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Calculate ROI
                  </button>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    id="close-scope-btn"
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-700 text-sm font-semibold cursor-pointer"
                  >
                    Close Scope details
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
