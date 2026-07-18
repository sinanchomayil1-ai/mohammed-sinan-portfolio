import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, ChevronUp } from 'lucide-react';
import { education, internship } from '../data';

export const EducationInternship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'internship' | 'education'>('both');

  return (
    <section
      id="experience"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      {/* Structural decoration node */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Chronicle
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            Education & Internship
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />

          {/* Selector Switcher */}
          <div className="inline-flex bg-white dark:bg-slate-900 rounded-xl p-1 shadow-sm border border-slate-200/50 dark:border-slate-800/50 mt-10">
            {(['both', 'internship', 'education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all capitalize cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {tab === 'both' ? 'Show All' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* COLUMN 1: INTERNSHIP JOURNEY */}
          <AnimatePresence mode="popLayout">
            {(activeTab === 'both' || activeTab === 'internship') && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Professional Experience</h3>
                </div>

                {/* Internship Card */}
                <div className="bg-white/90 dark:bg-slate-900/40 rounded-3xl border border-slate-200/60 dark:border-white/10 p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300 backdrop-blur-xs">
                  {/* Decorative glowing gradient top strip */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400" />
                  
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest block mb-1">
                        Active Internship
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {internship.role}
                      </h4>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                        {internship.company}
                      </p>
                    </div>

                    <div className="space-y-1 text-right text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar size={13} className="text-slate-400" />
                        <span className="font-mono">{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin size={13} className="text-slate-400" />
                        <span>{internship.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 mt-6">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono tracking-widest block">
                      Core Operations
                    </span>
                    <ul className="space-y-2.5">
                      {internship.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Skills Badges */}
                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono tracking-widest block mb-3">
                      Practiced Technical Domains
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/30 hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:text-blue-600 dark:hover:text-sky-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* COLUMN 2: ACADEMIC CREDENTIALS */}
          <AnimatePresence mode="popLayout">
            {(activeTab === 'both' || activeTab === 'education') && (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Academic Background</h3>
                </div>

                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 dark:bg-slate-900/40 rounded-3xl border border-slate-200/60 dark:border-white/10 p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300 backdrop-blur-xs"
                  >
                    {/* Decorative glowing gradient top strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400" />

                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest block mb-1">
                          {edu.status}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                          {edu.degree}
                        </h4>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                          {edu.institution}
                        </p>
                        {edu.university && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium italic mt-0.5">
                            {edu.university}
                          </p>
                        )}
                      </div>

                      <div className="space-y-1 text-right text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <div className="flex items-center gap-1.5 justify-end">
                          <Calendar size={13} className="text-slate-400" />
                          <span className="font-mono">{edu.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono tracking-widest block">
                        Academic Focus
                      </span>
                      <ul className="space-y-2.5">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fun decorative fact representing computer science student */}
                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/20 -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-slate-200/10 flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-slate-800 text-sky-600 dark:text-sky-300 flex items-center justify-center shrink-0">
                        <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                        Combines algorithmic logic with visualization techniques to synthesize actionable dashboards, merging computer science and data analytics.
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
