export interface Skill {
  name: string;
  level: number; // 0 to 100
  iconName: string; // Lucide icon mapping
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'Power BI' | 'SQL' | 'Python' | 'Tableau';
  liveMockData?: any; // Data for the interactive play widget
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeType: 'medal' | 'certificate' | 'award' | 'star';
}

export interface EducationItem {
  degree: string;
  institution: string;
  university?: string;
  status: string;
  period: string;
  details: string[];
}

export interface InternshipItem {
  role: string;
  company: string;
  location: string;
  period: string;
  skills: string[];
  highlights: string[];
}
