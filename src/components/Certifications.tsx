import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { certifications } from '../data';
import { LucideIcon } from './LucideIcon';
import { Award, Check, FileText, Globe, Calendar, X, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <section
      id="certifications"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      {/* Decorative gradient blur node */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Credentials
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            Certifications & Training
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            // Map badge icon strings to Lucide names
            const iconName = 
              cert.badgeType === 'medal' ? 'Award' :
              cert.badgeType === 'award' ? 'TrendingUp' :
              cert.badgeType === 'star' ? 'Sparkles' : 'BookOpen';

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/10 p-5 rounded-3xl flex flex-col justify-between hover:shadow-md hover:border-blue-500/30 dark:hover:border-sky-400/30 transition-all duration-300 relative overflow-hidden group backdrop-blur-xs"
              >
                {/* Visual subtle badge background element */}
                <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-blue-500/5 dark:bg-sky-500/5 rounded-full group-hover:scale-110 transition-transform" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center">
                      <LucideIcon name={iconName} size={18} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest bg-slate-200/30 dark:bg-slate-800/50 px-2.5 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display line-clamp-2">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/10 flex items-center justify-between text-xs text-slate-400 font-mono relative z-10">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-blue-600 dark:text-sky-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    View Card
                    <ExternalLink size={12} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CREDENTIALS VIEWER INTERACTIVE DIALOG MODAL */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
              />

              {/* Certificate badge layout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-xl shadow-2xl relative z-10 overflow-hidden"
              >
                {/* Glowing top panel */}
                <div className="h-2 bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-5 right-5 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                >
                  <X size={16} />
                </button>

                <div className="p-8 text-center space-y-6">
                  {/* Digital credential medallion decoration */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-700 to-sky-400 mx-auto flex items-center justify-center text-white shadow-xl shadow-blue-500/20 relative">
                    <Award size={36} />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-white dark:border-slate-900 text-white">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest bg-blue-100/50 dark:bg-blue-900/40 px-3 py-1 rounded-full">
                      Digital Internship Credentials
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display leading-snug">
                      {selectedCert.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Issued with Honors by {selectedCert.issuer}
                    </p>
                  </div>

                  {/* Metadata matrix */}
                  <div className="grid grid-cols-2 gap-4 border-y border-slate-100 dark:border-slate-800 py-4 max-w-xs mx-auto text-left font-mono">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Issue Date</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{selectedCert.date}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold uppercase block">Credential ID</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">MS-{selectedCert.date.replace(/\s+/g, '-').toUpperCase()}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal italic max-w-sm mx-auto">
                    "This verifies the successful completion of training operations, analytics visualization models, and relational queries aligned with business intelligence core modules."
                  </p>

                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200"
                    >
                      Close Window
                    </button>
                    <button
                      onClick={() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className={`px-5 py-2.5 rounded-xl text-white font-bold text-xs shadow-sm transition-all ${
                        copied ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {copied ? 'Link Copied!' : 'Share Credential'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
