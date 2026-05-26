/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Elegant SVG representation of the Klyvonix Logo
export function KlyvonixLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-display font-extrabold tracking-wider text-xl ${className}`}>
      <svg viewBox="0 0 100 100" className="h-9 w-9 overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* The beautiful modern "K" symbol in orange and silver/charcoal */}
        <defs>
          <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="100%" stopColor="#FF3D00" />
          </linearGradient>
          <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="dark-silver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Back vertical stem of the K (Silver & Dark Combo) */}
        <path 
          d="M20 15 H40 M40 15 V85 M40 85 H20 M20 85 V15" 
          fill="url(#dark-silver)" 
          stroke="url(#silver-grad)" 
          strokeWidth="1.5"
          filter="url(#shadow)"
        />
        
        {/* Sleek metallic top-right leg */}
        <path 
          d="M38 48 L68 15 H88 L55 48 Z" 
          fill="url(#silver-grad)" 
          stroke="url(#dark-silver)" 
          strokeWidth="1"
        />

        {/* Floating Vivid Orange curved swoosh representing dynamic marketing growth */}
        <path 
          d="M25 65 C40 55, 60 50, 92 85 C75 80, 50 65, 38 48 C28 58, 26 62, 25 65 Z" 
          fill="url(#orange-grad)"
          filter="url(#shadow)"
        />
      </svg>
      <span className="text-[#1A1A1A] font-extrabold font-display">
        KLY<span className="text-[#FF5B00]">VONIX</span>
      </span>
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            id="hdr-logo-btn"
            onClick={() => handleNavClick('home')} 
            className="focus:outline-none cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Klyvonix Home"
          >
            <KlyvonixLogo />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer relative py-1 focus:outline-none ${
                  activeSection === item.id 
                    ? 'text-[#FF5B00]' 
                    : 'text-gray-600 hover:text-[#FF5B00]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5B00]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call To Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              id="hdr-get-started"
              onClick={() => handleNavClick('contact')}
              className="bg-[#FF5B00] hover:bg-[#E04F00] text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide flex items-center gap-1.5 shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Get Started
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="hdr-scroll-cta-mob"
              onClick={() => handleNavClick('contact')}
              className="bg-[#FF5B00] hover:bg-[#E04F00] text-white px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1 transition-all cursor-pointer"
            >
              Get Started
            </button>
            <button
              id="hdr-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Expand Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mob-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-semibold text-base transition-colors duration-150 cursor-pointer block ${
                    activeSection === item.id 
                      ? 'bg-orange-50 text-[#FF5B00]' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
