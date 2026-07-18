import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EducationInternship } from './components/EducationInternship';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { WhyHireMe } from './components/WhyHireMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true); // Default to Dark mode (navy theme)
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Synchronize dark/light theme state with document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased relative overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="app-loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col relative"
          >
            {/* Sleek Theme Background Decor */}
            <div className="fixed inset-0 pointer-events-none z-0">
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Header / Sticky Navigation bar */}
            <Header isDark={isDark} setIsDark={setIsDark} />

            {/* Hero Section */}
            <Hero onOpenResume={() => setIsResumeOpen(true)} />

            {/* About Section */}
            <About />

            {/* Education & Internship Section */}
            <EducationInternship />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Certifications Section */}
            <Certifications />

            {/* Why Hire Me Section */}
            <WhyHireMe />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />

            {/* Resume viewer Modal Overlay */}
            <AnimatePresence>
              {isResumeOpen && (
                <ResumeModal onClose={() => setIsResumeOpen(false)} />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
