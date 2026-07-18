import React from 'react';
import {
  Terminal,
  Database,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Lightbulb,
  TrendingUp,
  Eye,
  Brain,
  MessageSquare,
  Users,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  ChevronUp,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle2,
  Download,
  ArrowRight,
  Code,
  LayoutDashboard,
  Check,
  Send,
  ExternalLink,
  BookOpen
} from 'lucide-react';

const iconMap = {
  Terminal,
  Database,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Lightbulb,
  TrendingUp,
  Eye,
  Brain,
  MessageSquare,
  Users,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  ChevronUp,
  Menu,
  X,
  Sun,
  Moon,
  CheckCircle2,
  Download,
  ArrowRight,
  Code,
  LayoutDashboard,
  Check,
  Send,
  ExternalLink,
  BookOpen
};

export type IconName = keyof typeof iconMap;

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size }) => {
  const IconComponent = iconMap[name as IconName] || Sparkles;
  return <IconComponent className={className} size={size} />;
};
