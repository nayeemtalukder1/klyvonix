/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Send, Check, Globe } from 'lucide-react';
import { KlyvonixLogo } from './Header';

export default function Footer() {
  const [fName, setFName] = useState('');
  const [fEmail, setFEmail] = useState('');
  const [fMessage, setFMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fName || !fEmail) return;

    setSuccess(true);
    setFName('');
    setFEmail('');
    setFMessage('');

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

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
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 relative overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-gray-100 pb-12">
          
          {/* Column 1 - Brand Identity & Slogan (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <KlyvonixLogo />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              We help businesses grow with creative marketing, branding, design & digital solutions. Our campaigns deliver long term conversions for growing corporations.
            </p>

            {/* Styled social icons circled in orange hover */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'Linkedin' },
                { icon: Youtube, href: '#', label: 'Youtube' }
              ].map((soc, idx) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.href}
                    aria-label={`Klyvonix ${soc.label}`}
                    className="w-10 h-10 rounded-full border border-slate-150/80 bg-white hover:bg-[#FF5B00] hover:text-white text-gray-500 flex items-center justify-center transition-all shadow-sm hover:border-[#FF5B00] hover:scale-105"
                  >
                    <IconComponent className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Links (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B00] font-display">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-sm font-semibold text-gray-500 hover:text-[#FF5B00] transition-colors cursor-pointer focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Corporate Contacts (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5B00] font-display">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm font-semibold text-gray-500">
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-[#FF5B00] shrink-0" />
                <a href="mailto:info@klyvonix.com" className="hover:text-[#FF5B00] transition-colors">
                  info@klyvonix.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4.5 w-4.5 text-[#FF5B00] shrink-0" />
                <a href="https://www.klyvonix.com" target="_blank" rel="noreferrer" className="hover:text-[#FF5B00] transition-colors">
                  www.klyvonix.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4.5 w-4.5 text-[#FF5B00] shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-[#FF5B00] shrink-0" />
                <a href="tel:+880123456789" className="hover:text-[#FF5B00] transition-colors">
                  +880 1234-567890
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Floating Contact Widget identical to screenshot (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            {success ? (
              <div className="bg-green-50/50 border border-green-200 rounded-2xl p-4 text-center space-y-2 text-green-700">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-600">
                  <Check className="h-4 w-4" />
                </div>
                <h5 className="text-xs font-bold uppercase">Dispatched!</h5>
                <p className="text-[10px] leading-relaxed text-green-600">Our team has queued your fast dispatch check.</p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-1.5 flex flex-col">
                <input
                  id="ftr-form-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  className="w-full h-9 px-3 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-lg outline-none text-xs transition-all font-semibold"
                />
                <input
                  id="ftr-form-email"
                  type="email"
                  required
                  placeholder="Your Email"
                  value={fEmail}
                  onChange={(e) => setFEmail(e.target.value)}
                  className="w-full h-9 px-3 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-lg outline-none text-xs transition-all font-semibold"
                />
                <input
                  id="ftr-form-msg"
                  type="text"
                  placeholder="Your Message (Optional)"
                  value={fMessage}
                  onChange={(e) => setFMessage(e.target.value)}
                  className="w-full h-9 px-3 bg-slate-50 border border-slate-200 focus:border-[#FF5B00] rounded-lg outline-none text-xs transition-all font-semibold"
                />
                <button
                  id="ftr-quick-submit"
                  type="submit"
                  className="w-full h-9 bg-[#FF5B00] hover:bg-[#E04F00] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Rights Reserved Copyright banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
          <span>© 2024 Klyvonix. All Rights Reserved.</span>
          <span className="flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-[#FF5B00]">
            🚀 Digital Marketing Agency Suite
          </span>
        </div>

      </div>
    </footer>
  );
}
