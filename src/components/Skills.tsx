import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data';
import { LucideIcon } from './LucideIcon';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = skillCategories.filter(
    c => activeCategory === 'All' || c.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      {/* Decorative gradient orb */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Technical Stack
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            Professional Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />

          {/* Quick Category Tab Selectors */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Display */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-6">
              {activeCategory === 'All' && (
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold text-slate-900 dark:text-white font-display border-l-4 border-blue-600 pl-3 uppercase tracking-wider text-sm"
                >
                  {cat.category}
                </motion.h3>
              )}

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.skills.map((skill, skillIdx) => {
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIdx * 0.05 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/10 shadow-xs hover:shadow-md hover:border-blue-500/30 dark:hover:border-sky-400/30 transition-all duration-300 backdrop-blur-xs"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        {/* Custom visual container for skill icon */}
                        <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs">
                          <LucideIcon name={skill.iconName} size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display truncate">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-bold uppercase font-mono tracking-widest">
                            Proficiency
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Visual Skill Level Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="w-full h-2 bg-slate-200/70 dark:bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono uppercase">
                          <span>Familiar</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
