import React, { useState, useEffect } from 'react';
import { ChevronUp, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 transition-colors border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand/Role */}
          <div>
            <span className="text-slate-900 dark:text-white font-bold font-display text-lg tracking-tight block">
              {personalInfo.name}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-500 font-mono mt-1 block">
              Data Analyst | Computer Science Student
            </span>
          </div>

          {/* Quick social nodes links */}
          <div className="flex gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/80 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-400 shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/80 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-400 shadow-xs"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-slate-800/80 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all text-slate-600 dark:text-slate-400 shadow-xs"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
          </div>

          {/* Copyright info */}
          <div>
            <p className="text-xs text-slate-500">
              © 2026 {personalInfo.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING BACK-TO-TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white shadow-xl shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 transition-all cursor-pointer border border-blue-600/30"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} strokeWidth={2.5} />
        </button>
      )}
    </footer>
  );
};
