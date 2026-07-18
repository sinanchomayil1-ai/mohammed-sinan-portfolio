import React from 'react';
import { motion } from 'motion/react';
import { personalInfo, stats } from '../data';
import { MapPin, Mail, Phone, Calendar, Award, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100/10 dark:bg-blue-900/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-sky-100/10 dark:bg-sky-900/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Candidate Profile
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Graphic Grid (High End visual mock profile badge) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-400 p-[3px] shadow-xl shadow-blue-500/10 dark:shadow-blue-900/20 group"
            >
              {/* Inner glass overlay card representing Mohammed Sinan */}
              <div className="w-full h-full rounded-[21px] bg-slate-50/90 dark:bg-slate-950/80 dark:backdrop-blur-md flex flex-col items-center justify-between p-6 relative overflow-hidden">
                {/* Embedded decorative circular nodes */}
                <div className="absolute -top-12 -left-12 w-28 h-28 bg-blue-500/10 rounded-full blur-md" />
                <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-sky-500/10 rounded-full blur-md" />

                <div className="flex flex-col items-center space-y-4 text-center mt-4">
                  {/* Avatar / Profile Image container */}
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-black text-4xl shadow-md border-4 border-white dark:border-slate-900 overflow-hidden">
                    {personalInfo.profilePicture ? (
                      <img
                        src={personalInfo.profilePicture}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      "MS"
                    )}
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 z-10" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 mt-1 uppercase tracking-wider">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                {/* Quick Info badget rows */}
                <div className="w-full space-y-2.5 mt-4 z-10">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-100 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 shadow-xs backdrop-blur-xs">
                    <Calendar size={14} className="text-blue-500" />
                    <span>Age: <strong>{personalInfo.age} Years Old</strong></span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-100 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 shadow-xs backdrop-blur-xs">
                    <MapPin size={14} className="text-blue-500" />
                    <span>Based in: <strong>{personalInfo.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-100 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 shadow-xs backdrop-blur-xs">
                    <Award size={14} className="text-blue-500" />
                    <span>Focus: <strong>Data & Analytics Excellence</strong></span>
                  </div>
                </div>

                {/* Micro branding footer */}
                <div className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-4">
                  techno dot analytics intern
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Text / Stats Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <Sparkles className="text-blue-600 dark:text-sky-400 w-5 h-5" />
                Who I Am
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {personalInfo.bio}
              </p>
            </motion.div>

            {/* Live Count Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/10 backdrop-blur-xs p-4 rounded-2xl text-center shadow-xs hover:border-blue-500/30 dark:hover:border-sky-400/30 transition-all duration-300 group"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono block tracking-tight group-hover:scale-105 transition-transform">
                    <span className="text-blue-700 dark:text-sky-400">{stat.value}</span>{stat.suffix}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold block mt-1 uppercase tracking-wide">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact badge rows */}
            <div className="border-t border-slate-150 dark:border-slate-800/80 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/10 backdrop-blur-xs text-slate-600 dark:text-slate-300 hover:border-blue-500/30 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-700 dark:text-sky-400">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Me</span>
                  <span className="text-xs font-semibold truncate font-mono">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100 dark:border-white/10 backdrop-blur-xs text-slate-600 dark:text-slate-300 hover:border-blue-500/30 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center text-blue-700 dark:text-sky-400">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call Me</span>
                  <span className="text-xs font-semibold font-mono">{personalInfo.phone}</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
