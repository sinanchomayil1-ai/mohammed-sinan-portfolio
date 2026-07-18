import React from 'react';
import { motion } from 'motion/react';
import { whyHireMe } from '../data';
import { LucideIcon } from './LucideIcon';
import { Check } from 'lucide-react';

export const WhyHireMe: React.FC = () => {
  return (
    <section
      id="why-hire-me"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      {/* Decorative vector grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Capabilities
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            Why Hire Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyHireMe.map((feature, idx) => {
            // Match custom icon mapped names
            const iconName = 
              feature.title === 'Analytical Thinking' ? 'TrendingUp' :
              feature.title === 'Business Intelligence' ? 'Brain' :
              feature.title === 'Data Visualization' ? 'LayoutDashboard' : 'Sparkles';

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/90 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/10 p-6 sm:p-8 rounded-3xl hover:shadow-lg hover:border-blue-500/30 dark:hover:border-sky-400/30 transition-all duration-300 relative overflow-hidden group flex flex-col sm:flex-row gap-6 backdrop-blur-xs"
              >
                {/* Glowing hover visual background circle */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-sky-500/5 rounded-full blur-xl group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                {/* Left Side Icon badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <LucideIcon name={iconName} size={24} />
                </div>

                {/* Right Side Info column */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
