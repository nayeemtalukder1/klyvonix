/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sparkles, Calculator, Check, ArrowUpRight, TrendingUp, Sparkle, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function MarketingCalculator() {
  const [budget, setBudget] = useState<number>(3500);
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'social-ads',
    'video-content'
  ]);
  const [industry, setIndustry] = useState<string>('ecommerce');

  const channelsList = [
    { id: 'social-ads', name: 'Social Ads', multiplier: 1.25, color: '#FF5B00' },
    { id: 'seo-content', name: 'SEO Optimization', multiplier: 1.45, color: '#10B981' },
    { id: 'web-revamp', name: 'Website Revamp & UX', multiplier: 1.35, color: '#3B82F6' },
    { id: 'video-content', name: 'Video Reels & Shorts', multiplier: 1.5, color: '#8B5CF6' }
  ];

  const industries = {
    ecommerce: { name: 'E-commerce & Retail', baseConversion: 2.9, avgLeadValue: 85 },
    saas: { name: 'B2B Software & SaaS', baseConversion: 1.8, avgLeadValue: 210 },
    local: { name: 'Local Services (Home, Health)', baseConversion: 4.5, avgLeadValue: 120 },
    realestate: { name: 'Real Estate & Properties', baseConversion: 0.9, avgLeadValue: 950 }
  };

  const handleChannelToggle = (id: string) => {
    if (selectedChannels.includes(id)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter(c => c !== id));
      }
    } else {
      setSelectedChannels([...selectedChannels, id]);
    }
  };

  // Dynamic calculations based on formula logic
  const metrics = useMemo(() => {
    const selectedInd = industries[industry as keyof typeof industries];
    
    // Multipliers sum up channel impacts
    const channelMultiplier = selectedChannels.reduce((acc, cId) => {
      const channelObj = channelsList.find(chan => chan.id === cId);
      return acc * (channelObj ? channelObj.multiplier : 1);
    }, 1);

    // Dynamic metrics estimates
    const monthlyImpressions = Math.round(budget * 28 * channelMultiplier);
    
    const conversionRate = Math.min(
      selectedInd.baseConversion * (1 + (selectedChannels.length * 0.12)), 
      6.5
    );

    const projectedLeads = Math.round((monthlyImpressions * (conversionRate / 100)) / 12);
    
    // Average Return Value
    const estRevenueValue = Math.round(projectedLeads * selectedInd.avgLeadValue * 0.75);
    
    // ROAS (Return on Ad Spend) calculation
    const roas = Number((estRevenueValue / budget).toFixed(1));
    const roiPercent = Math.round(((estRevenueValue - budget) / budget) * 100);

    // Multi-month projection data points for standard compound line chart SVG rendering
    const timelinePoints = Array.from({ length: 5 }, (_, idx) => {
      const monthMultiplier = [0.2, 1, 1.4, 1.9, 2.6][idx];
      const monthRevenue = Math.round(estRevenueValue * monthMultiplier);
      const monthCumulative = Math.round(monthRevenue);
      return {
        label: ['Start', 'Month 1', 'Month 3', 'Month 6', 'Month 12'][idx],
        value: monthCumulative
      };
    });

    return {
      impressions: monthlyImpressions,
      leads: projectedLeads,
      revenue: estRevenueValue,
      roas: Math.max(0.5, roas),
      roi: roiPercent,
      conversionRate: Number(conversionRate.toFixed(1)),
      timelinePoints
    };
  }, [budget, selectedChannels, industry]);

  // SVG Chart sizing helpers
  const svgWidth = 450;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  const chartPoints = useMemo(() => {
    const vals = metrics.timelinePoints.map(p => p.value);
    const maxVal = Math.max(...vals, 1000);
    const minVal = 0;

    return metrics.timelinePoints.map((p, idx) => {
      const x = paddingX + (idx / (metrics.timelinePoints.length - 1)) * (svgWidth - paddingX * 2);
      const y = svgHeight - paddingY - ((p.value - minVal) / (maxVal - minVal)) * (svgHeight - paddingY * 2);
      return { x, y, label: p.label, value: p.value };
    });
  }, [metrics]);

  const linePath = useMemo(() => {
    if (chartPoints.length === 0) return '';
    return chartPoints.reduce((acc, p, idx) => {
      return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
    }, '');
  }, [chartPoints]);

  const areaPath = useMemo(() => {
    if (chartPoints.length === 0) return '';
    const first = chartPoints[0];
    const last = chartPoints[chartPoints.length - 1];
    const groundY = svgHeight - paddingY;
    return `${linePath} L ${last.x} ${groundY} L ${first.x} ${groundY} Z`;
  }, [chartPoints, linePath]);

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white scroll-mt-10 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF5B00]/10 text-[#FF5B00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calculator className="h-4 w-4" />
            ROI & Brand Growth Planner
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
            Estimate Your Marketing Impact
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Adjust your metrics below to simulate a comprehensive Klyvonix campaign. Watch projected compounding results update in real-time.
          </p>
        </div>

        {/* Dynamic Calculator Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel - left 6-cols */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-8">
            
            {/* Slide 1 - Monthly Budget setting */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Monthly Marketing Budget
                </label>
                <div className="text-2xl font-display font-extrabold text-[#FF5B00] bg-white border border-orange-100 px-4 py-1.5 rounded-xl shadow-sm">
                  ${budget.toLocaleString()}
                </div>
              </div>
              
              <input 
                id="budget-range-slider"
                type="range"
                min="500"
                max="25000"
                step="250"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF5B00] focus:outline-none"
              />
              <div className="flex justify-between text-xs text-gray-400 font-bold font-mono">
                <span>$500 / mo</span>
                <span>$10,000 / mo</span>
                <span>$25,000 / mo</span>
              </div>
            </div>

            {/* Selector 2 - Marketplace Industry */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Target Business Industry
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(industries).map(([key, value]) => (
                  <button
                    key={key}
                    id={`industry-${key}`}
                    onClick={() => setIndustry(key)}
                    className={`text-left p-4 rounded-xl border font-semibold text-sm transition-all focus:outline-none cursor-pointer flex items-center justify-between ${
                      industry === key
                        ? 'bg-white border-[#FF5B00] text-[#FF5B00] shadow-sm ring-1 ring-[#FF5B00]/40'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-gray-700'
                    }`}
                  >
                    <span>{value.name}</span>
                    {industry === key && <Check className="h-4 w-4 stroke-[3px]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Multi-Select 3 - Multiplier Campaign Channels */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Campaign Channels (Multi-select)
                </label>
                <span className="text-xs text-slate-400 font-medium font-mono">
                  {selectedChannels.length} active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {channelsList.map((chan) => {
                  const isActive = selectedChannels.includes(chan.id);
                  return (
                    <button
                      key={chan.id}
                      id={`channel-${chan.id}`}
                      onClick={() => handleChannelToggle(chan.id)}
                      className={`p-3.5 rounded-xl border text-xs font-bold transition-all focus:outline-none cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? 'bg-orange-50/80 border-[#FF5B00] text-[#FF5B00]'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-gray-600'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#FF5B00]' : 'bg-slate-300'}`} />
                      <span>{chan.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Outputs & Projection Display - right 6-cols */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl relative overflow-hidden bg-grid-dark hover:shadow-orange-500/5 duration-300">
            
            {/* Inner Glowing lights background */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Quick Metrics Displays */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Projected Leads</p>
                <p className="text-2xl font-extrabold font-display text-white mt-1">
                  ~{metrics.leads.toLocaleString()}
                </p>
                <p className="text-[10px] text-green-400 font-medium font-mono mt-0.5">/ Month</p>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Est. Monthly Revenue</p>
                <p className="text-2xl font-extrabold font-display text-[#FF5B00] mt-1">
                  ${metrics.revenue.toLocaleString()}
                </p>
                <p className="text-[10px] text-green-400 font-medium font-mono mt-0.5">Projection</p>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-800 col-span-2 md:col-span-1">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Est. Campaign Return</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-extrabold font-display text-white">+{metrics.roi}%</span>
                </div>
                <p className="text-[10px] text-orange-400 font-bold font-mono mt-0.5">
                  {metrics.roas}x ROAS
                </p>
              </div>

            </div>

            {/* Real-time Custom SVG Area Line Chart render */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF5B00] flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4" />
                  12-Month Compounding Projection Curve
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold font-mono">
                  <span className="w-2.5 h-2.5 bg-[#FF5B00] rounded-full inline-block" />
                  Est. Rev Scale
                </div>
              </div>

              {/* Responsive SVG wrapper */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 flex items-center justify-center">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-full overflow-visible">
                  <defs>
                    <linearGradient id="chart-glow-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5B00" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#FF5B00" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline Grids */}
                  {[0.25, 0.5, 0.75, 1].map((scale, gIdx) => {
                    const lineY = paddingY + scale * (svgHeight - paddingY * 2);
                    return (
                      <line
                        key={gIdx}
                        x1={paddingX}
                        y1={lineY}
                        x2={svgWidth - paddingX}
                        y2={lineY}
                        stroke="#1E293B"
                        strokeWidth="1.2"
                        strokeDasharray="4 4"
                      />
                    );
                  })}

                  {/* The filled gradient area */}
                  <path d={areaPath} fill="url(#chart-glow-area)" />

                  {/* The main trending line */}
                  <path 
                    d={linePath} 
                    fill="none" 
                    stroke="#FF5B00" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />

                  {/* Draw Data Points circles */}
                  {chartPoints.map((pt, pIdx) => (
                    <g key={pIdx} className="group/pt">
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r="5.5" 
                        fill="#FF5B00" 
                        stroke="#0F172A" 
                        strokeWidth="2.2" 
                      />
                      <circle 
                        cx={pt.x} 
                        cy={pt.y} 
                        r="9" 
                        fill="#FF5B00" 
                        fillOpacity="0.25" 
                        className="animate-ping" 
                      />
                      
                      {/* Interactive inline tooltip labels for high fidelity values */}
                      <text
                        x={pt.x}
                        y={pt.y - 12}
                        fill="#FFFFFF"
                        fontSize="9.5"
                        fontWeight="800"
                        fontFamily="var(--font-mono)"
                        textAnchor="middle"
                        className="bg-slate-950 px-1 py-0.5 rounded shadow"
                      >
                        ${Math.round(pt.value).toLocaleString()}
                      </text>

                      {/* Timeline Labels on Bottom Axis */}
                      <text
                        x={pt.x}
                        y={svgHeight - 10}
                        fill="#94A3B8"
                        fontSize="9.5"
                        fontWeight="600"
                        fontFamily="var(--font-sans)"
                        textAnchor="middle"
                      >
                        {pt.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Conversion disclaimer metrics */}
              <div className="text-[11px] text-gray-500 leading-relaxed max-w-lg mx-auto bg-slate-800/40 p-3 rounded-xl border border-slate-800">
                *Estimates calculated using conversion baseline variables: <span className="text-white font-bold">{metrics.conversionRate}%</span> conversion reach for <span className="text-[#FF5B00] font-bold">{industries[industry as keyof typeof industries].name}</span>. Real campaigns vary with sales follow-ups and geographical focus filters.
              </div>

              <div className="pt-2 flex justify-center">
                <button
                  id="calc-consult-btn"
                  onClick={() => {
                    const contactEl = document.getElementById('contact');
                    if (contactEl) {
                      contactEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#FF5B00] hover:bg-[#E04F00] text-white font-bold text-sm tracking-wide px-6 py-3.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Schedule Free ROI Strategy call
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
