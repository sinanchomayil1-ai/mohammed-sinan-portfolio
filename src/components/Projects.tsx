import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Code, Eye, ExternalLink, BarChart3, Database, FileText, CheckCircle2, Play, Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  // SQL Query execution simulation inside project card
  const [activeQueryIndex, setActiveQueryIndex] = useState<number>(0);
  const [sqlStatus, setSqlStatus] = useState<'idle' | 'running' | 'success'>('idle');
  
  // Python step tracker inside project card
  const [activePythonStep, setActivePythonStep] = useState<number>(0);

  // Power BI Region state inside project card
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('All');

  // Tableau selected cohort month
  const [selectedCohortMonth, setSelectedCohortMonth] = useState<number>(4);

  const handleRunSqlQuery = () => {
    setSqlStatus('running');
    setTimeout(() => {
      setSqlStatus('success');
    }, 400);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-transparent transition-colors relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-500/5 dark:bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-blue-600 dark:text-sky-400 uppercase tracking-widest font-mono mb-2"
          >
            Portfolio
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white font-display"
          >
            Featured Analytics Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm max-w-xl mx-auto">
            Click on any project to open its <strong className="text-blue-600 dark:text-sky-400">Interactive Analytics Simulator</strong> and interact with real metrics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isSelected = selectedProject === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white dark:bg-slate-900/40 dark:backdrop-blur-xs rounded-3xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-500 ring-2 ring-blue-500/15 dark:ring-sky-400/10'
                    : 'border-slate-200/60 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-sky-400/30'
                }`}
              >
                {/* Visual Header / Banner representation */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 flex flex-col justify-between text-white overflow-hidden">
                  {/* Subtle vector grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:14px_14px]" />
                  <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl" />

                  {/* Icon of Tech Stack Category */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-blue-500/20 px-2.5 py-1 rounded-md border border-white/10">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white backdrop-blur-xs">
                      {project.category === 'SQL' ? (
                        <Database size={16} />
                      ) : project.category === 'Python' ? (
                        <Terminal size={16} />
                      ) : (
                        <BarChart3 size={16} />
                      )}
                    </div>
                  </div>

                  {/* Project Title overlay */}
                  <div className="z-10">
                    <h3 className="text-xl font-bold font-display leading-tight">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Dashboard Launcher Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      Ready to Simulate
                    </span>
                    <button
                      onClick={() => {
                        setSelectedProject(isSelected ? null : project.id);
                        setSqlStatus('idle');
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-blue-700 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-blue-100 dark:border-blue-900/20 transition-all cursor-pointer"
                    >
                      {isSelected ? 'Collapse Terminal' : 'Open Simulator'}
                      <Code size={14} />
                    </button>
                  </div>
                </div>

                {/* EXPANDABLE INTERACTIVE ANALYTICS COMPONENT PANEL */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 overflow-hidden"
                    >
                      <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-blue-600 dark:text-sky-400 uppercase font-bold font-mono tracking-wider block mb-4">
                          === interactive simulation sandbox ===
                        </span>

                        {/* CASE 1: POWER BI SALES DASHBOARD SIMULATION */}
                        {project.category === 'Power BI' && project.liveMockData && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Sales Breakdown Filter:</span>
                              <div className="flex gap-1">
                                {['All', 'North', 'South', 'East', 'West'].map(reg => (
                                  <button
                                    key={reg}
                                    onClick={() => setActiveRegionFilter(reg)}
                                    className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                                      activeRegionFilter === reg
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                                    }`}
                                  >
                                    {reg}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Aggregates inside Power BI card */}
                            <div className="grid grid-cols-2 gap-2 bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-center shadow-xs">
                              <div>
                                <span className="text-[9px] text-slate-400 uppercase font-mono tracking-wider">Gross Sales</span>
                                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 font-mono block">
                                  {activeRegionFilter === 'All' ? '$2.40M' : activeRegionFilter === 'North' ? '$780K' : activeRegionFilter === 'South' ? '$620K' : activeRegionFilter === 'East' ? '$540K' : '$460K'}
                                </span>
                              </div>
                              <div>
                                <span className="text-[9px] text-slate-400 uppercase font-mono tracking-wider">YOY Growth</span>
                                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono block">+15.2%</span>
                              </div>
                            </div>

                            {/* Bar Chart representing Regional distribution */}
                            <div className="space-y-2">
                              {project.liveMockData.regions
                                .filter((r: any) => activeRegionFilter === 'All' || r.name === activeRegionFilter)
                                .map((reg: any, rIdx: number) => {
                                  const pct = (reg.sales / 780000) * 100;
                                  return (
                                    <div key={rIdx} className="space-y-1">
                                      <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                                        <span>Region: <strong>{reg.name}</strong></span>
                                        <span className="font-mono text-slate-700 dark:text-slate-300">${(reg.sales / 1000).toFixed(0)}K Sales</span>
                                      </div>
                                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                          initial={{ width: 0 }}
                                          animate={{ width: `${pct}%` }}
                                          className="h-full bg-blue-600 rounded-full"
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        )}

                        {/* CASE 2: SQL QUERY EXECUTION SIMULATOR */}
                        {project.category === 'SQL' && project.liveMockData && (
                          <div className="space-y-4">
                            <div className="flex gap-2">
                              {project.liveMockData.queries.map((q: any, qIdx: number) => (
                                <button
                                  key={qIdx}
                                  onClick={() => {
                                    setActiveQueryIndex(qIdx);
                                    setSqlStatus('idle');
                                  }}
                                  className={`px-3 py-1 rounded text-[10px] font-bold font-mono transition-colors ${
                                    activeQueryIndex === qIdx
                                      ? 'bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-sky-300'
                                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                                  }`}
                                >
                                  Query #{qIdx + 1}
                                </button>
                              ))}
                            </div>

                            <div className="bg-slate-900 text-slate-200 rounded-xl p-3 font-mono text-[11px] border border-slate-800">
                              <pre className="text-yellow-200 overflow-x-auto whitespace-pre">{project.liveMockData.queries[activeQueryIndex].sql}</pre>
                            </div>

                            <div className="flex justify-between items-center">
                              <span className="text-[10px] text-slate-400 font-mono">Status: <strong className="uppercase">{sqlStatus}</strong></span>
                              <button
                                onClick={handleRunSqlQuery}
                                disabled={sqlStatus === 'running'}
                                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold disabled:bg-blue-800/40"
                              >
                                <Play size={10} fill="currentColor" /> Run SQL Query
                              </button>
                            </div>

                            {/* Query SQL Table Simulation */}
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 min-h-[100px] text-xs flex flex-col justify-center">
                              {sqlStatus === 'idle' && (
                                <span className="text-center text-slate-400 italic">Click "Run SQL Query" to evaluate tables on database.</span>
                              )}
                              
                              {sqlStatus === 'running' && (
                                <span className="text-center text-blue-600 dark:text-sky-400 animate-pulse font-semibold">Executing CTE aggregate join...</span>
                              )}

                              {sqlStatus === 'success' && (
                                <div className="overflow-x-auto">
                                  <table className="w-full text-left font-mono text-[10px]">
                                    <thead>
                                      <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase">
                                        {Object.keys(project.liveMockData.queries[activeQueryIndex].result[0]).map(key => (
                                          <th key={key} className="pb-1 px-1.5">{key}</th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="text-slate-600 dark:text-slate-300">
                                      {project.liveMockData.queries[activeQueryIndex].result.map((row: any, rIdx: number) => (
                                        <tr key={rIdx} className="border-b border-slate-100 dark:border-slate-800/40">
                                          {Object.values(row).map((val: any, vIdx) => (
                                            <td key={vIdx} className="py-1 px-1.5">{val}</td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* CASE 3: PYTHON DATA PIPELINE SIMULATOR */}
                        {project.category === 'Python' && project.liveMockData && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-1.5">
                              {project.liveMockData.steps.map((st: any, sIdx: number) => (
                                <button
                                  key={sIdx}
                                  onClick={() => setActivePythonStep(sIdx)}
                                  className={`p-2 rounded-lg text-left transition-colors border ${
                                    activePythonStep === sIdx
                                      ? 'bg-blue-50 border-blue-300 dark:bg-slate-800 dark:border-slate-700'
                                      : 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/50'
                                  }`}
                                >
                                  <div className="text-[10px] font-bold text-slate-400 font-mono">Step #{sIdx + 1}</div>
                                  <div className="text-[10px] font-extrabold text-slate-700 dark:text-slate-300 truncate mt-0.5">{st.title.split('. ')[1]}</div>
                                </button>
                              ))}
                            </div>

                            {/* Step Pandas Code */}
                            <div className="bg-slate-900 text-slate-100 rounded-xl p-3 font-mono text-[10px] border border-slate-800">
                              <pre className="text-emerald-300 overflow-x-auto whitespace-pre">{project.liveMockData.steps[activePythonStep].code}</pre>
                            </div>

                            {/* Run Status Ticker */}
                            <div className="bg-slate-950 text-slate-300 rounded-xl p-2.5 font-mono text-[10px] border border-slate-900">
                              <span className="text-slate-500 uppercase font-bold text-[9px] block mb-1">=== Step Status ===</span>
                              <span className="text-emerald-400 font-bold">{project.liveMockData.steps[activePythonStep].status}</span>
                            </div>
                          </div>
                        )}

                        {/* CASE 4: TABLEAU CUSTOM COHORT VISUALIZATION */}
                        {project.category === 'Tableau' && project.liveMockData && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Cohort Retention Months:</span>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4].map(mon => (
                                  <button
                                    key={mon}
                                    onClick={() => setSelectedCohortMonth(mon)}
                                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold transition-colors ${
                                      selectedCohortMonth === mon
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                                    }`}
                                  >
                                    Month {mon}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              {project.liveMockData.cohorts.slice(0, selectedCohortMonth + 1).map((cohort: any, cIdx: number) => {
                                return (
                                  <div key={cIdx} className="space-y-1">
                                    <div className="flex justify-between text-[11px] text-slate-500">
                                      <span>Cohort Segment: {cohort.cohort}</span>
                                      <span className="font-mono text-slate-800 dark:text-slate-200">Retention: {cohort.val}</span>
                                    </div>
                                    <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${cohort.retention}%` }}
                                        className="h-full bg-gradient-to-r from-blue-700 to-sky-400 rounded-full"
                                      />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
