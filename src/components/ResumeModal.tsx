import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { personalInfo, education, internship, skillCategories, certifications } from '../data';
import { X, Printer, Copy, Check, Download, ExternalLink, MapPin, Mail, Phone, Globe } from 'lucide-react';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = printAreaRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;
    
    if (printContent) {
      // Create a temporary print frame or just open print dialog
      window.print();
    }
  };

  const handleCopyText = () => {
    const skillsText = skillCategories.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n');
    const resumeText = `
${personalInfo.name.toUpperCase()}
${personalInfo.title}
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location} | LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.bio}

EXPERIENCE / INTERNSHIP
- Role: ${internship.role}
- Company: ${internship.company} (${internship.location})
- Period: ${internship.period}
Core Responsibilities:
${internship.highlights.map(h => `* ${h}`).join('\n')}

EDUCATION
${education.map(edu => `- ${edu.degree}\n  ${edu.institution} (${edu.period})\n  Status: ${edu.status}`).join('\n')}

CORE SKILLS
${skillsText}

CERTIFICATIONS
${certifications.map(c => `* ${c.name} (${c.issuer}, ${c.date})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark blur backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
      />

      {/* Main modal container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-4xl max-h-[90vh] shadow-2xl relative z-10 flex flex-col overflow-hidden"
      >
        {/* Top Control Actions Bar */}
        <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 font-mono">
              Resume Document Viewer
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Copy button */}
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  Copied Plaintext
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Copy Text
                </>
              )}
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <Printer size={13} />
              Print / Save PDF
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Typographic Document Frame */}
        <div className="p-6 overflow-y-auto bg-slate-100 dark:bg-slate-950 flex-1">
          
          {/* Printable resume card sheet */}
          <div
            ref={printAreaRef}
            className="w-full bg-white text-slate-900 p-8 sm:p-12 rounded-2xl border border-slate-200/60 shadow-sm space-y-8 max-w-3xl mx-auto text-left font-sans leading-relaxed text-sm select-text"
            style={{ color: '#0f172a' }} // Explicit charcoal color for reliable printing
          >
            {/* Header Sheet */}
            <div className="border-b-2 border-slate-900 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-extrabold tracking-tight font-display" style={{ color: '#1e3a8a' }}>
                  {personalInfo.name}
                </h1>
                <p className="text-base font-bold uppercase tracking-wider text-slate-500">
                  {personalInfo.title}
                </p>
              </div>

              {/* Contact matrix block */}
              <div className="space-y-1.5 text-xs font-medium text-slate-600" style={{ color: '#475569' }}>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-slate-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-slate-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-slate-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={13} className="text-slate-400" />
                  <span>linkedin.com/in/mohammed-sinanc</span>
                </div>
              </div>
            </div>

            {/* Profile Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Professional Profile
              </h3>
              <p className="text-slate-700 leading-relaxed font-normal">
                {personalInfo.bio}
              </p>
            </div>

            {/* Timeline: Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Professional Experience
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold text-slate-950 text-base">
                      {internship.role}
                    </h4>
                    <p className="text-slate-600 font-semibold text-xs mt-0.5">
                      {internship.company} — {internship.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 shrink-0">
                    {internship.period}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-2">
                  {internship.highlights.map((item, idx) => (
                    <li key={idx} className="leading-relaxed font-normal text-xs pl-1 -indent-4 list-none flex gap-2">
                      <span className="text-slate-400 shrink-0 select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education timeline */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Education
              </h3>

              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-slate-950 text-base">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-600 font-semibold text-xs mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-[11px] text-slate-400 font-medium italic">
                          {edu.university}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed font-normal text-xs pl-1 -indent-4 list-none flex gap-2">
                        <span className="text-slate-400 shrink-0 select-none">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skill breakdown columns */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Skills & Technical Expertise
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold">
                {skillCategories.map((cat) => (
                  <div key={cat.category} className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">
                      {cat.category}
                    </span>
                    <p className="text-slate-800 font-bold leading-relaxed">
                      {cat.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications row list */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                Professional Credentials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex justify-between items-center p-2.5 rounded-lg border border-slate-100 bg-slate-50">
                    <div>
                      <span className="font-bold text-slate-900 block">{cert.name}</span>
                      <span className="text-[10px] text-slate-400">{cert.issuer}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-500 font-bold shrink-0">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer sheet */}
            <div className="text-center pt-6 border-t border-slate-100 text-[10px] font-mono text-slate-400">
              Generated via Mohammed Sinan's Interactive Portfolio Workspace
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};
