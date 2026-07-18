import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, BarChart3, Database, FileSpreadsheet, Play, Check, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Mini interactive dashboard state
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [dashboardMetric, setDashboardMetric] = useState<string>('Sales'); // Sales vs Profit
  const [queryStatus, setQueryStatus] = useState<string>('Idle');
  const [queryProgress, setQueryProgress] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'chart' | 'sql' | 'python'>('chart');

  // Interactive dashboard data
  const rawData = [
    { region: 'North', category: 'Enterprise', sales: 480000, profit: 96000, margin: 20 },
    { region: 'North', category: 'SMB', sales: 300000, profit: 45000, margin: 15 },
    { region: 'South', category: 'Enterprise', sales: 380000, profit: 76000, margin: 20 },
    { region: 'South', category: 'SMB', sales: 240000, profit: 24000, margin: 10 },
    { region: 'East', category: 'Enterprise', sales: 310000, profit: 62000, margin: 20 },
    { region: 'East', category: 'SMB', sales: 230000, profit: 34500, margin: 15 },
    { region: 'West', category: 'Enterprise', sales: 280000, profit: 56000, margin: 20 },
    { region: 'West', category: 'SMB', sales: 180000, profit: 18000, margin: 10 },
  ];

  // SQL code simulations
  const sqlSimulations = [
    {
      id: 1,
      query: 'SELECT region, SUM(sales) AS total_sales \nFROM raw_data \nGROUP BY region;',
      results: [
        { region: 'North', total_sales: '$780,000' },
        { region: 'South', total_sales: '$620,000' },
        { region: 'East', total_sales: '$540,000' },
        { region: 'West', total_sales: '$460,000' }
      ]
    },
    {
      id: 2,
      query: 'SELECT category, AVG(margin) AS avg_margin_pct \nFROM raw_data \nGROUP BY category;',
      results: [
        { category: 'Enterprise', avg_margin_pct: '20.0%' },
        { category: 'SMB', avg_margin_pct: '12.5%' }
      ]
    }
  ];
  const [activeSqlQuery, setActiveSqlQuery] = useState<number>(0);

  // Python code simulations
  const pythonSimulations = [
    {
      id: 1,
      title: 'Analyze Margins',
      code: `import pandas as pd\ndf = pd.DataFrame(raw_data)\n# Group by category and compute summary statistics\nsummary = df.groupby('category').agg({\n    'sales': 'sum',\n    'profit': 'sum'\n})\nsummary['margin_pct'] = (summary['profit'] / summary['sales']) * 100\nprint(summary)`,
      output: `            sales  profit  margin_pct\ncategory                             \nEnterprise1450000  290000        20.0\nSMB        950000  121500        12.8`
    }
  ];

  // Filtering calculations
  const filteredData = rawData.filter(d => activeRegion === 'All' || d.region === activeRegion);
  const totalSales = filteredData.reduce((sum, d) => sum + d.sales, 0);
  const totalProfit = filteredData.reduce((sum, d) => sum + d.profit, 0);
  const avgMargin = Math.round((totalProfit / totalSales) * 100);

  // SQL Runner Animation
  const runSqlQuery = () => {
    setQueryStatus('Executing');
    setQueryProgress(0);
    const interval = setInterval(() => {
      setQueryProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setQueryStatus('Completed');
          setTimeout(() => setQueryStatus('Idle'), 4000);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  // Automated rotate visual tabs just for some subtle background movement if idle
  useEffect(() => {
    const timer = setInterval(() => {
      // Rotate active region to make the dashboard live
      const regions = ['All', 'North', 'South', 'East', 'West'];
      setActiveRegion(prev => {
        const idx = regions.indexOf(prev);
        return regions[(idx + 1) % regions.length];
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 bg-transparent overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2"></span>
              AVAILABLE FOR INTERNSHIPS
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-slate-950 dark:text-white leading-tight font-display"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Mohammed Sinan</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
              >
                {personalInfo.tagline}
              </motion.p>
            </div>

            {/* Mini visual tools tag list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 items-center"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mr-2">Stack:</span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700">
                <Database className="w-3.5 h-3.5 text-sky-500" /> SQL
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700">
                <BarChart3 className="w-3.5 h-3.5 text-amber-500" /> Power BI
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700">
                <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg> Python
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500" /> Excel
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/25 dark:shadow-blue-900/30 hover:scale-[1.02] cursor-pointer"
              >
                <Download size={18} />
                Download Resume
              </button>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-[1.02]"
              >
                <Mail size={18} className="text-slate-400" />
                Contact Me
                <ArrowRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Interactive Dashboard Illustration Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
              className="w-full rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-850/90 backdrop-blur-sm"
            >
              {/* Header tab structure representing professional analytics suite */}
              <div className="bg-slate-100/80 dark:bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs text-slate-400 font-mono ml-2">Interactive BI Playground</span>
                </div>
                <div className="flex bg-slate-200/60 dark:bg-slate-800/60 rounded-lg p-0.5">
                  <button
                    onClick={() => setActiveTab('chart')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeTab === 'chart'
                        ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-sky-300 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab('sql')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeTab === 'sql'
                        ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-sky-300 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    SQL Query
                  </button>
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                      activeTab === 'python'
                        ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-sky-300 shadow-sm'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Python Pandas
                  </button>
                </div>
              </div>

              {/* Dynamic Content Frame */}
              <div className="p-5 bg-white/50 dark:bg-slate-950/40 min-h-[360px] flex flex-col justify-between">
                
                {/* TAB 1: CHART/DASHBOARD VIEWER */}
                {activeTab === 'chart' && (
                  <div className="space-y-4">
                    {/* Filter and toggle controls */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1">
                        {['All', 'North', 'South', 'East', 'West'].map(reg => (
                          <button
                            key={reg}
                            onClick={() => setActiveRegion(reg)}
                            className={`px-2.5 py-1 text-[11px] font-medium rounded-md border transition-all ${
                              activeRegion === reg
                                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            {reg}
                          </button>
                        ))}
                      </div>

                      <div className="flex bg-slate-100 dark:bg-slate-900 rounded-md p-0.5 border border-slate-200 dark:border-slate-800">
                        {['Sales', 'Profit'].map(m => (
                          <button
                            key={m}
                            onClick={() => setDashboardMetric(m)}
                            className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                              dashboardMetric === m
                                ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-xs'
                                : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dashboard Metrics Rows */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-center shadow-xs">
                        <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Gross Sales</span>
                        <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono block">
                          ${(totalSales / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-center shadow-xs">
                        <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Net Profit</span>
                        <span className="text-base sm:text-lg font-bold text-blue-600 dark:text-sky-400 font-mono block">
                          ${(totalProfit / 1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-center shadow-xs">
                        <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Operating Margin</span>
                        <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono block">
                          {avgMargin}%
                        </span>
                      </div>
                    </div>

                    {/* SVG Analytics Bar Chart Visual representation */}
                    <div className="relative pt-2">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-3">
                        Regional Breakdown (filtered: {activeRegion})
                      </span>
                      <div className="space-y-2.5">
                        {rawData
                          .filter(d => activeRegion === 'All' || d.region === activeRegion)
                          .map((item, index) => {
                            const maxVal = 500000;
                            const currentVal = dashboardMetric === 'Sales' ? item.sales : item.profit;
                            const percentage = Math.min((currentVal / maxVal) * 100, 100);
                            return (
                              <div key={index} className="space-y-1">
                                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 font-medium">
                                  <span>{item.region} — {item.category}</span>
                                  <span className="font-mono text-slate-800 dark:text-slate-200">
                                    ${(currentVal / 1000).toFixed(0)}K
                                  </span>
                                </div>
                                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden flex">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    className={`h-full rounded-full ${
                                      dashboardMetric === 'Sales'
                                        ? 'bg-gradient-to-r from-blue-600 to-sky-400'
                                        : 'bg-gradient-to-r from-blue-700 to-indigo-500'
                                    }`}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: SQL INTERACTIVE PLAYGROUND */}
                {activeTab === 'sql' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">Terminal: PostgreSQL v16</span>
                      <button
                        onClick={runSqlQuery}
                        disabled={queryStatus === 'Executing'}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/40 text-white text-xs font-bold shadow-sm cursor-pointer"
                      >
                        <Play size={12} fill="currentColor" />
                        Execute
                      </button>
                    </div>

                    <div className="flex gap-2">
                      {sqlSimulations.map((sim, index) => (
                        <button
                          key={sim.id}
                          onClick={() => {
                            setActiveSqlQuery(index);
                            setQueryStatus('Idle');
                          }}
                          className={`px-3 py-1 text-[10px] font-bold rounded-md font-mono ${
                            activeSqlQuery === index
                              ? 'bg-slate-200 dark:bg-slate-800 text-blue-700 dark:text-sky-300'
                              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                          }`}
                        >
                          Query #{index + 1}
                        </button>
                      ))}
                    </div>

                    {/* Query Code Field */}
                    <div className="bg-slate-900 text-slate-100 rounded-xl p-3.5 font-mono text-[11px] leading-relaxed border border-slate-800 shadow-inner">
                      <pre className="text-sky-300">{sqlSimulations[activeSqlQuery].query}</pre>
                    </div>

                    {/* Query Response Frame */}
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-3 min-h-[110px] font-mono text-xs flex flex-col justify-center">
                      {queryStatus === 'Idle' && (
                        <div className="text-center text-slate-400">
                          Click <span className="font-bold text-blue-600 dark:text-sky-400">Execute</span> above to run database operation on mock schemas.
                        </div>
                      )}

                      {queryStatus === 'Executing' && (
                        <div className="space-y-2 text-center">
                          <span className="text-blue-500 animate-pulse font-semibold">Fetching records... {queryProgress}%</span>
                          <div className="w-1/2 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${queryProgress}%` }}
                              className="h-full bg-blue-600"
                            />
                          </div>
                        </div>
                      )}

                      {queryStatus === 'Completed' && (
                        <div className="overflow-x-auto">
                          <div className="text-[10px] text-emerald-500 font-bold mb-1.5 flex items-center gap-1">
                            <Check size={12} /> Execution successful (0.02s)
                          </div>
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 uppercase font-bold">
                                {Object.keys(sqlSimulations[activeSqlQuery].results[0]).map(key => (
                                  <th key={key} className="pb-1 px-2">{key}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="text-[11px] text-slate-700 dark:text-slate-300">
                              {sqlSimulations[activeSqlQuery].results.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-slate-100 dark:border-slate-800/40 hover:bg-slate-100/30">
                                  {Object.values(row).map((val: any, vIdx) => (
                                    <td key={vIdx} className="py-1 px-2 font-semibold">{val}</td>
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

                {/* TAB 3: PYTHON ANALYSIS PREVIEW */}
                {activeTab === 'python' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">Python Interpreter (Pandas core)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-mono">kernel: live-3.11</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Pandas Automation Script</span>
                      <div className="bg-slate-900 text-slate-100 rounded-xl p-3 font-mono text-[11px] leading-relaxed border border-slate-800 shadow-inner overflow-x-auto">
                        <pre className="text-yellow-200">{pythonSimulations[0].code}</pre>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Stdout terminal response</span>
                      <div className="bg-slate-950 text-slate-300 rounded-xl p-3 font-mono text-[10px] border border-slate-900 shadow-inner whitespace-pre-wrap leading-relaxed">
                        <div className="text-[9px] text-slate-500 uppercase font-mono tracking-wider mb-1">=== Run Terminal Output ===</div>
                        {pythonSimulations[0].output}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Interactive status ticker */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400 font-semibold font-mono">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Dev Engine Active</span>
                  </div>
                  <span>Mohammed Sinan C — Portfolio BI v1.0</span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
