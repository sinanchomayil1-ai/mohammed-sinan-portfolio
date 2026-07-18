import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, Database, Terminal, Cpu } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  const statuses = [
    'Importing pandas as pd...',
    'Establishing secure connection to PostgreSQL...',
    'Clearing null values and outliers...',
    'Calculating correlation coefficient matrices...',
    'Formulating DAX KPI metrics...',
    'Designing interactive chart coordinates...',
    'Rendering dashboard elements...'
  ];

  useEffect(() => {
    // Status text rotation
    const statusInterval = setInterval(() => {
      setStatusIdx(prev => (prev + 1) % statuses.length);
    }, 700);

    // Progress percentage incrementation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(statusInterval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        // Accelerate near the end
        const step = prev > 80 ? 4 : 2;
        return prev + step;
      });
    }, 35);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-900 text-white select-none">
      {/* Immersive technical network nodes backdrop details */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-md w-full px-8 text-center space-y-8 z-10">
        
        {/* Animated Icon Ring */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          {/* Pulsating outer orb */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.3, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-sky-400/10 border border-sky-400/30"
            animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Rotating inner tech icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Database className="absolute -top-1.5 w-5 h-5 text-blue-500" />
            <Terminal className="absolute -bottom-1.5 w-5 h-5 text-yellow-500" />
            <BarChart3 className="absolute -left-1.5 w-5 h-5 text-emerald-500" />
            <Cpu className="absolute -right-1.5 w-5 h-5 text-sky-400" />
          </motion.div>

          {/* Center initial logo */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-400 text-white font-extrabold text-xl flex items-center justify-center shadow-lg relative">
            M
          </div>
        </div>

        {/* Loading progress numbers */}
        <div className="space-y-3">
          <motion.div className="text-4xl font-black font-mono tracking-tight text-blue-400">
            {progress}%
          </motion.div>
          
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-800/80">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Floating live analytical status ticker */}
        <div className="min-h-[24px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIdx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-semibold text-slate-400 font-mono"
            >
              {statuses[statusIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Micro branding copyright */}
        <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest pt-8">
          mohammed sinan c — analytics workspace
        </div>

      </div>
    </div>
  );
};
