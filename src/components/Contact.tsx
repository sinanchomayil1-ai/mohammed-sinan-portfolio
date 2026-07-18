import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data';
import { Phone, Mail, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    
    // Simulate API transmission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      {/* Decorative gradient blur background node */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Inquiries
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* COLUMN 1: CONTACT INFORMATION */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Let's discuss raw data & insights!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                I am actively seeking internship completions, business intelligence consulting assignments, or junior data analyst roles where I can apply database operations, visualizations, and clean pipelines.
              </p>
            </div>

            {/* Quick action grid list */}
            <div className="space-y-4">
              
              {/* Phone item */}
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/10 hover:border-blue-500/30 hover:bg-blue-50/10 dark:hover:bg-blue-950/10 transition-all duration-300 group backdrop-blur-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Phone Contact
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100 font-mono">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Email item */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/10 hover:border-blue-500/30 hover:bg-blue-50/10 dark:hover:bg-blue-950/10 transition-all duration-300 group backdrop-blur-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100 font-mono">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* LinkedIn item */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/40 border border-slate-200/40 dark:border-white/10 hover:border-blue-500/30 hover:bg-blue-50/10 dark:hover:bg-blue-950/10 transition-all duration-300 group backdrop-blur-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    LinkedIn Profile
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate block max-w-xs">
                    linkedin.com/in/mohammed-sinanc
                  </span>
                </div>
              </a>

            </div>

            {/* Quick Response Ticker */}
            <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 p-4 rounded-2xl text-xs text-blue-800 dark:text-blue-300 leading-relaxed font-medium">
              ⚡ Guaranteed response within 12-24 business hours. Let's arrange an interview or a video call over Zoom, Teams, or Google Meet!
            </div>
          </div>

          {/* COLUMN 2: SECURE CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm backdrop-blur-xs">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Message Received!</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. Mohammed Sinan C has received your diagnostic report and will coordinate a response.
                      </p>
                    </div>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-6 px-6 py-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Hiring Manager"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-blue-500/20"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. company@office.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider block">
                        Subject Line
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="e.g. Data Analytics Internship Opportunity"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-blue-500/20"
                      />
                    </div>

                    {/* Message body input */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider block">
                        Detailed Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write details about your project or opportunity..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-blue-500/20"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 disabled:bg-blue-800/40 text-white font-semibold transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/30 cursor-pointer hover:scale-[1.01]"
                      >
                        {formStatus === 'sending' ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Transmitting secure parameters...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
