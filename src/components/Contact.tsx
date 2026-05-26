/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Globe, MapPin, Phone, Send, CheckCircle, FileWarning } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState('');

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErr('Please fill out all fields.');
      return;
    }

    setErr('');
    setLoading(true);

    // Simulate reliable API post
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');

      // Auto clear toast
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white scroll-mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <p className="text-xs font-bold tracking-widest text-[#FF5B00] uppercase font-display block">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 tracking-tight leading-none">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Ready to grow your brand? Send us a quick query and our creative strategist will match dynamic marketing channels suited for your goals.
          </p>
        </div>

        {/* Dual layout Contact Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Action Contact Details & styled Map Overlay - left 5-cols */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Quick specifications Info block */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-extrabold text-neutral-900">
                Agency Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                
                <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-orange-100 duration-200">
                  <div className="p-3 bg-orange-50 text-[#FF5B00] rounded-xl shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Send Queries</p>
                    <a href="mailto:info@klyvonix.com" className="text-sm font-bold text-gray-800 hover:text-[#FF5B00] duration-150">
                      info@klyvonix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-orange-100 duration-200">
                  <div className="p-3 bg-orange-50 text-[#FF5B00] rounded-xl shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Our Domain</p>
                    <a href="https://www.klyvonix.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-800 hover:text-[#FF5B00] duration-150">
                      www.klyvonix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-orange-100 duration-200">
                  <div className="p-3 bg-orange-50 text-[#FF5B00] rounded-xl shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Agency Headquarter</p>
                    <p className="text-sm font-bold text-gray-800">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl shadow-sm hover:border-orange-100 duration-200">
                  <div className="p-3 bg-orange-50 text-[#FF5B00] rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Direct Business Call</p>
                    <a href="tel:+880123456789" className="text-sm font-bold text-gray-800 hover:text-[#FF5B00] duration-150">
                      +880 1234-567890
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Custom Styled Maps and Location Pin Preview Mockup */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl h-48 relative overflow-hidden flex items-center justify-center p-4 bg-grid-dark shadow-inner">
              <div className="absolute inset-0 bg-cover bg-center brightness-[0.35] contrast-125 opacity-45" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80')" }} />
              
              {/* Overlay location pin glowing details as shown in responsive interfaces */}
              <div className="relative text-center space-y-2 z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#FF5B00] hover:scale-110 duration-200 text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <MapPin className="h-6 w-6 stroke-[2.5px]" />
                </div>
                <div className="bg-slate-950/80 backdrop-blur border border-slate-850 px-3 py-1 rounded-xl shadow">
                  <span className="text-[10px] text-white font-extrabold tracking-wider uppercase font-mono">Dhaka, Bangladesh HQ</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Input Form - right 7-cols */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 sm:p-10 rounded-3xl flex flex-col justify-between">
            
            <form onSubmit={handleSendMessage} className="space-y-6 text-left w-full relative">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your Full Name</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    placeholder="e.g. Liam Parker"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 px-4 bg-white border border-slate-200 focus:border-[#FF5B00] hover:border-slate-300 rounded-xl outline-none text-sm transition-all text-gray-800 font-semibold shadow-sm focus:ring-1 focus:ring-[#FF5B00]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Your E-mail Address</label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    placeholder="e.g. business@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 bg-white border border-slate-200 focus:border-[#FF5B00] hover:border-slate-300 rounded-xl outline-none text-sm transition-all text-gray-800 font-semibold shadow-sm focus:ring-1 focus:ring-[#FF5B00]"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Project Scope details / Message</label>
                <textarea
                  id="contact-form-message"
                  required
                  rows={4}
                  placeholder="Tell us about your brand targets. Are you looking to revamp your website design, boost Facebook/Instagram ads, or deploy organic SEO strategies?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-4 bg-white border border-slate-200 focus:border-[#FF5B00] hover:border-slate-300 rounded-xl outline-none text-sm transition-all text-gray-800 font-semibold shadow-sm focus:ring-1 focus:ring-[#FF5B00] resize-none"
                />
              </div>

              {/* Error log label feedback */}
              {err && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-bold flex items-center gap-2">
                  <FileWarning className="h-4 w-4 shrink-0" />
                  {err}
                </div>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={loading}
                className="w-full py-4 h-14 bg-[#FF5B00] hover:bg-[#E04F00] text-white font-extrabold text-sm tracking-wider rounded-xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Details...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>

            {/* Float success dialog overlay */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-3 text-green-700"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-green-650 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-extrabold">Query Successfully Dispatched</h4>
                    <p className="text-xs font-medium text-green-600 mt-0.5">Thank you, {email}! Our senior branding strategist has logged your request and will schedule an initial ROI call inside 12 hours.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
