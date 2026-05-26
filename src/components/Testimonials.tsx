/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, MessageSquarePlus, UserCircle2, CheckSquare, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [showAddReview, setShowAddReview] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Form states
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Pre-seed mock reviews matching the original snapshot screenshot
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 'rev-01',
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      company: 'BrightWay Retail',
      rating: 5,
      text: 'Amazing marketing results and professional service. They took our static brand identity and brought it to life online.',
      date: 'May 12, 2026'
    },
    {
      id: 'rev-02',
      name: 'Kevin Martin',
      role: 'Operations Lead',
      company: 'Logix International',
      rating: 5,
      text: 'Creative team with excellent communication. We saw a 140% traffic surge on our web dashboards within 60 days of launching details.',
      date: 'April 20, 2026'
    },
    {
      id: 'rev-03',
      name: 'Ahmed Hassan',
      role: 'Business Owner',
      company: 'Hassan Group BD',
      rating: 5,
      text: 'Klyvonix helped grow our business online. The custom campaign structure delivered high qualified leads consistently.',
      date: 'March 15, 2026'
    }
  ]);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Submit dynamic client reviews
  const onSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || !text) return;

    const newTestimonial: Testimonial = {
      id: `rev-${Date.now()}`,
      name,
      role,
      company: company || undefined,
      rating,
      text,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setFormSuccess(true);
    
    // Clear form
    setName('');
    setRole('');
    setCompany('');
    setRating(5);
    setText('');

    setTimeout(() => {
      setFormSuccess(false);
      setShowAddReview(false);
      setActiveSlide(0); // View the newly added review first
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 scroll-mt-10 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-5 h-[1.5px] bg-[#FF5B00]"></span>
              <span className="text-xs font-bold tracking-widest text-[#FF5B00] uppercase font-display">
                Client Feedback
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
              What Our Clients Say
            </h2>
          </div>

          <button
            id="leave-review-btn"
            onClick={() => setShowAddReview(true)}
            className="self-center md:self-auto bg-white border-2 border-slate-200 hover:border-[#FF5B00] text-gray-800 hover:text-[#FF5B00] font-bold text-xs tracking-wide px-5 py-3 rounded-xl flex items-center gap-1.5 transition-all shadow-sm focus:outline-none cursor-pointer"
          >
            <MessageSquarePlus className="h-4.5 w-4.5" />
            Write A Review
          </button>
        </div>

        {/* Dynamic Reviews Grid (Slider format for rich layout) */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-100 p-8 sm:p-12 rounded-3xl shadow-lg relative flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="absolute top-6 right-8 text-6xl text-orange-200/40 font-serif font-black select-none pointer-events-none">
                “
              </div>

              {/* Avatar representation block */}
              <div className="w-20 h-20 rounded-full bg-orange-100 text-[#FF5B00] flex items-center justify-center text-3xl shrink-0 font-bold border-2 border-white shadow shadow-orange-500/10">
                {testimonials[activeSlide].name.charAt(0)}
              </div>

              <div className="space-y-4 text-center md:text-left flex-1">
                {/* Visual Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {Array.from({ length: testimonials[activeSlide].rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="h-5 w-5 fill-[#FF5B00] stroke-[#FF5B00]" />
                  ))}
                </div>

                {/* Main feedback text */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium italic">
                  "{testimonials[activeSlide].text}"
                </p>

                {/* Subtext info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pt-3 border-t border-slate-50">
                  <div>
                    <h4 className="text-base font-extrabold text-[#FF5B00] font-display">
                      {testimonials[activeSlide].name}
                    </h4>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      {testimonials[activeSlide].role} {testimonials[activeSlide].company ? `at ${testimonials[activeSlide].company}` : ''}
                    </p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold font-mono uppercase bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 self-center">
                    {testimonials[activeSlide].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Directions Actions */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              id="testimonial-prev-slide"
              onClick={handlePrevSlide}
              className="p-3 bg-white hover:bg-[#FF5B00] text-gray-500 hover:text-white border border-slate-200 rounded-full shadow-sm hover:shadow transition-all focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.5px]" />
            </button>
            <span className="text-xs font-mono font-bold text-gray-500">
              {activeSlide + 1} / {testimonials.length}
            </span>
            <button
              id="testimonial-next-slide"
              onClick={handleNextSlide}
              className="p-3 bg-white hover:bg-[#FF5B00] text-gray-500 hover:text-white border border-slate-200 rounded-full shadow-sm hover:shadow transition-all focus:outline-none cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.5px]" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal Slide Portal - Write a Custom Review */}
      <AnimatePresence>
        {showAddReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddReview(false)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl z-10"
            >
              <button
                id="close-testimonial-modal"
                onClick={() => setShowAddReview(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {formSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="text-5xl font-display">🌟</div>
                  <h3 className="text-xl font-display font-extrabold text-neutral-900">
                    Review Submitted Live!
                  </h3>
                  <p className="text-sm text-gray-500">
                    Thank you so much. Your feedback has been appended immediately to our testimonial list!
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmitReview} className="space-y-4 text-left">
                  <div className="inline-flex items-center gap-1.5 text-[#FF5B00] text-xs font-extrabold uppercase tracking-wide">
                    <UserCircle2 className="h-4.5 w-4.5" />
                    Share Your Klyvonix Experience
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-neutral-900 leading-none">
                    Write A Review
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase">Your Name</label>
                    <input
                      id="rev-form-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-xl outline-none text-sm transition-all font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase">Your Role</label>
                      <input
                        id="rev-form-role"
                        type="text"
                        required
                        placeholder="e.g. Director"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-xl outline-none text-sm transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase">Company</label>
                      <input
                        id="rev-form-company"
                        type="text"
                        placeholder="e.g. TechCorp"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-xl outline-none text-sm transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Star selection rating input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase block">Your Star Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          id={`star-btn-${star}`}
                          onClick={() => setRating(star)}
                          className="focus:outline-none cursor-pointer p-0.5 hover:scale-110 duration-150"
                        >
                          <Star 
                            className={`h-7 w-7 ${
                              star <= rating 
                                ? 'fill-[#FF5B00] stroke-[#FF5B00]' 
                                : 'stroke-slate-350 fill-none text-slate-300'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase">Review Feedback Text</label>
                    <textarea
                      id="rev-form-text"
                      required
                      rows={3}
                      placeholder="Share what Klyvonix was able to design or develop for your business..."
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-xl outline-none text-sm transition-all font-semibold resize-none"
                    />
                  </div>

                  <button
                    id="submit-review-form-btn"
                    type="submit"
                    className="w-full py-3 h-12 bg-[#FF5B00] hover:bg-[#E04F00] text-white font-bold text-sm tracking-wide rounded-xl shadow cursor-pointer transition-colors"
                  >
                    Post Review Live
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
