/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Mail, ChevronDown, CheckCircle, Linkedin, Twitter, Sparkle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatarColor: string;
  bio: string;
  skills: { name: string; percentage: number }[];
  socials: { linkedin: string; twitter: string };
  avatarSeed: string; // Emoji illustration descriptor
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const team: TeamMember[] = [
    {
      id: 'liam',
      name: 'Liam Carter',
      role: 'Marketing Specialist',
      specialty: 'Advanced Lead Funnels & Paid Acquisition',
      avatarColor: 'from-orange-500 to-amber-500',
      avatarSeed: '📊',
      bio: 'Liam manages complex programmatic and retargeting channels with over six years of conversion-metric tuning. He matches ad spend splits against solid ROI indicators.',
      skills: [
        { name: 'Ad Copy & Keyword Targets', percentage: 95 },
        { name: 'A/B Testing Strategies', percentage: 92 },
        { name: 'Conversion Analysis', percentage: 88 }
      ],
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      id: 'sophia',
      name: 'Sophia Brooks',
      role: 'UI/UX Designer',
      specialty: 'Sleek Aesthetic & Digital Design systems',
      avatarColor: 'from-pink-500 to-rose-500',
      avatarSeed: '🎨',
      bio: 'Sophia values spacious padding and elegant high-contrast display typography. She leads our brand identity projects and crafts Figma wireframes optimized for fast actions.',
      skills: [
        { name: 'Figma & Vector Design', percentage: 98 },
        { name: 'Digital Identity Mapping', percentage: 94 },
        { name: 'Responsive Interface Flow', percentage: 90 }
      ],
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      id: 'ethan',
      name: 'Ethan Miller',
      role: 'Senior Developer',
      specialty: 'Responsive Web Frameworks & APIs',
      avatarColor: 'from-blue-500 to-indigo-500',
      avatarSeed: '💻',
      bio: 'Ethan builds modular static apps and speedy backend connections using modern TypeScript. He works to deliver 99%+ PageSpeed benchmarks for marketing landing sites.',
      skills: [
        { name: 'React & TypeScript Engineering', percentage: 96 },
        { name: 'Tailwind CSS Development', percentage: 95 },
        { name: 'Lighthouse Page Optimization', percentage: 92 }
      ],
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      id: 'daniel',
      name: 'Daniel Ray',
      role: 'Video Editor',
      specialty: 'Dynamic Story Reels & Vertical Media',
      avatarColor: 'from-violet-500 to-purple-500',
      avatarSeed: '🎬',
      bio: 'Daniel edits horizontal corporate promos and high-energy vertical clips using Premiere and After Effects. He values instant 3-second visual hooks to capture views.',
      skills: [
        { name: 'Sound FX & Color Grading', percentage: 94 },
        { name: 'Motion Graphic Animations', percentage: 89 },
        { name: 'Platform Format Refactoring', percentage: 95 }
      ],
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      id: 'mason',
      name: 'Mason Parker',
      role: 'Content Creator',
      specialty: 'High-Value SEO Copywriting',
      avatarColor: 'from-emerald-500 to-teal-500',
      avatarSeed: '✍️',
      bio: 'Mason drafts domain-building blog posts, download deliverables, and whitepapers. His research-dense articles help Klyvonix clients rise on high-intent SERP positions.',
      skills: [
        { name: 'SEO Content Expansion', percentage: 93 },
        { name: 'Brand Narrative Design', percentage: 96 },
        { name: 'Email Campaign Structure', percentage: 90 }
      ],
      socials: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF5B00] uppercase font-display block">
            Meet Our Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
            Our Creative Team
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Different Skills. One Vision. Click any team expert to view their specialized skill set, biographical credentials, and technical specialties.
          </p>
        </div>

        {/* Five Team Members Row/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, idx) => {
            const isExpanded = selectedMember === member.id;
            return (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className={`bg-white border rounded-3xl p-5 text-center flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  isExpanded ? 'border-orange-300 ring-2 ring-orange-500/10' : 'border-slate-100 hover:border-slate-200'
                }`}
                onClick={() => setSelectedMember(isExpanded ? null : member.id)}
              >
                <div className="space-y-4 pb-4">
                  {/* Styled High-contrast Headshot Avatar block */}
                  <div className="relative mx-auto w-24 h-24 rounded-full flex items-center justify-center p-0.5 border-2 border-slate-100/80 bg-white group-hover:scale-105 duration-200">
                    <div className={`w-full h-full rounded-full bg-gradient-to-tr ${member.avatarColor} flex items-center justify-center text-4xl shadow-inner relative overflow-hidden`}>
                      <span className="relative z-10 select-none">{member.avatarSeed}</span>
                      {/* Abstract ambient overlay elements inside avatar */}
                      <span className="absolute w-12 h-12 bg-white/20 rounded-full top-0 left-0" />
                    </div>
                    {/* Ring indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-50 text-[#FF5B00] border border-orange-200 rounded-full flex items-center justify-center text-xs shadow-sm font-semibold">
                      ✓
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 font-display">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Micro Expand Arrow Toggle */}
                <div className="pt-2 border-t border-slate-100/80 flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span className="text-[10px] text-gray-400">Expand Skills</span>
                  <ChevronDown className={`h-4.5 w-4.5 text-[#FF5B00] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Unified Interactive Expand Draw for Selected Member */}
        <AnimatePresence mode="wait">
          {selectedMember && (() => {
            const member = team.find(m => m.id === selectedMember);
            if (!member) return null;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="mt-12 bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                
                {/* Visual Bio block - left 5-cols */}
                <div className="md:col-span-5 space-y-4">
                  <div className="flex items-center gap-2.5 bg-orange-50 border border-orange-100 text-[#FF5B00] px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider w-fit">
                    <Award className="h-4 w-4" />
                    Specialty: {member.role}
                  </div>
                  
                  <h3 className="text-2xl font-display font-extrabold text-neutral-900">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#FF5B00] font-semibold text-sm italic">
                    "{member.specialty}"
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social contact assets */}
                  <div className="flex gap-3 pt-2">
                    <a href={member.socials.linkedin} className="p-2.5 bg-white border border-slate-200 text-gray-600 hover:text-[#FF5B00] hover:border-[#FF5B00] rounded-xl transition-all shadow-sm">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={member.socials.twitter} className="p-2.5 bg-white border border-slate-200 text-gray-600 hover:text-[#FF5B00] hover:border-[#FF5B00] rounded-xl transition-all shadow-sm">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <button 
                      id={`contact-member-${member.id}`}
                      onClick={() => {
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-4 py-2 bg-white border border-slate-200 text-gray-700 hover:text-[#FF5B00] hover:border-[#FF5B00] font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Contact Liam/Sophia
                    </button>
                  </div>
                </div>

                {/* Progress bars specialty block - right 7-cols */}
                <div className="md:col-span-7 space-y-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B00] flex items-center gap-2">
                    <Sparkle className="h-4.5 w-4.5" />
                    Domain Competency Breakdown
                  </h4>
                  
                  <div className="space-y-4">
                    {member.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                          <span>{skill.name}</span>
                          <span className="text-[#FF5B00]">{skill.percentage}% Mastery</span>
                        </div>
                        {/* Progress Bar background with orange progress fills */}
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 0.6, delay: sIdx * 0.1 }}
                            className="h-full bg-gradient-to-r from-[#FF5B00] to-orange-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[10px] text-gray-400 leading-relaxed flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#FF5B00] shrink-0" />
                    Competency scores assessed by real campaign outcome milestones.
                  </div>
                </div>

              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
