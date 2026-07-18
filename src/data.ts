import { EducationItem, InternshipItem, SkillCategory, Project, Certification } from './types';
// @ts-ignore
import profilePic from './assets/images/167322.jpg';

export const personalInfo = {
  name: 'Mohammed Sinan C',
  title: 'Data Analyst & Computer Science Student',
  age: 21,
  tagline: 'Transforming raw data into meaningful insights through analytics, visualization, and business intelligence.',
  bio: 'I am Mohammed Sinan, a 21-year-old B.Sc. Computer Science student at Majlis Arts and Science College (Autonomous), affiliated with the University of Calicut. I am currently pursuing a Data Analytics Internship at Techno Dot Academy, KINFRA Kakkanchery, where I am developing practical skills in data analysis, visualization, and business intelligence. I am passionate about solving real-world problems using data and continuously improving my technical expertise.',
  email: 'mohammedsinan_c@outlook.com',
  phone: '+91 9539778302',
  location: 'Kerala, India',
  linkedin: 'https://www.linkedin.com/in/mohammed-sinanc',
  github: '#', // placeholder, but we can make it elegant
  resumeUrl: '#',
  profilePicture: profilePic,
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Majlis Arts and Science College (Autonomous)',
    university: 'Affiliated with the University of Calicut',
    status: 'Currently Pursuing (Final Year)',
    period: '2023 - 2026',
    details: [
      'Focusing on database systems, algorithm analysis, computer networks, and software engineering.',
      'Maintaining top academic standing and active participation in tech-club initiatives.',
      'Integrating academic computing principles with state-of-the-art analytical tools.'
    ]
  }
];

export const internship: InternshipItem = {
  role: 'Data Analytics Intern',
  company: 'Techno Dot Academy',
  location: 'KINFRA Kakkanchery',
  period: '2026 (Ongoing)',
  skills: [
    'Data Cleaning',
    'Data Visualization',
    'Dashboard Development',
    'Business Intelligence',
    'SQL Querying',
    'Python for Data Analysis',
    'Excel Reporting',
    'Tableau Visualization',
    'Power BI Dashboards'
  ],
  highlights: [
    'Developing and refining interactive dashboards to monitor business KPIs and performance metrics.',
    'Formulating complex SQL queries to extract, transform, and aggregate data from relational databases.',
    'Utilizing Python (Pandas, NumPy) to automate Excel report updates, reducing manual cleaning time.',
    'Translating complex datasets into logical, executive-level summaries for visual presentations.'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming & Databases',
    skills: [
      { name: 'Python', level: 85, iconName: 'Terminal' },
      { name: 'SQL', level: 90, iconName: 'Database' }
    ]
  },
  {
    category: 'Analytics & Visualization',
    skills: [
      { name: 'Power BI', level: 92, iconName: 'BarChart3' },
      { name: 'Tableau', level: 86, iconName: 'PieChart' },
      { name: 'Microsoft Excel', level: 88, iconName: 'FileSpreadsheet' }
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 95, iconName: 'Lightbulb' },
      { name: 'Analytical Thinking', level: 95, iconName: 'TrendingUp' },
      { name: 'Data Visualization', level: 93, iconName: 'Eye' },
      { name: 'Critical Thinking', level: 90, iconName: 'Brain' },
      { name: 'Communication', level: 88, iconName: 'MessageSquare' },
      { name: 'Teamwork', level: 92, iconName: 'Users' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Sales Dashboard',
    description: 'Interactive dashboard showing sales KPIs, profit trends, regional performance, and customer insights.',
    technologies: ['Power BI', 'Excel', 'DAX'],
    category: 'Power BI',
    liveMockData: {
      metrics: { totalSales: '$2.4M', totalProfit: '$420K', orders: '12.4K', growth: '+15.2%' },
      regions: [
        { name: 'North', sales: 780000, profit: 124000, color: '#3b82f6' },
        { name: 'South', sales: 620000, profit: 98000, color: '#60a5fa' },
        { name: 'East', sales: 540000, profit: 89000, color: '#93c5fd' },
        { name: 'West', sales: 460000, profit: 69000, color: '#bfdbfe' }
      ],
      trends: [
        { month: 'Jan', sales: 120000 },
        { month: 'Feb', sales: 150000 },
        { month: 'Mar', sales: 180000 },
        { month: 'Apr', sales: 160000 },
        { month: 'May', sales: 210000 },
        { month: 'Jun', sales: 240000 }
      ]
    }
  },
  {
    id: 'p2',
    title: 'SQL Customer Analytics',
    description: 'Performed advanced SQL queries to analyze customer transactions, retention rate, and generate business reports.',
    technologies: ['SQL', 'PostgreSQL', 'CTE', 'Window Functions'],
    category: 'SQL',
    liveMockData: {
      queries: [
        {
          name: 'Revenue by Product Category',
          sql: `SELECT \n  category, \n  SUM(price * quantity) AS total_revenue,\n  COUNT(DISTINCT order_id) AS total_orders\nFROM transactions\nGROUP BY category\nORDER BY total_revenue DESC;`,
          result: [
            { category: 'Electronics', total_revenue: '$45,210', total_orders: 310 },
            { category: 'Apparel', total_revenue: '$28,490', total_orders: 245 },
            { category: 'Office Supplies', total_revenue: '$12,340', total_orders: 189 },
            { category: 'Furniture', total_revenue: '$9,820', total_orders: 87 }
          ]
        },
        {
          name: 'High-Value Customer RFM Analysis',
          sql: `SELECT \n  customer_id,\n  COUNT(order_id) AS order_frequency,\n  SUM(price * quantity) AS total_spent,\n  NTILE(5) OVER (ORDER BY SUM(price * quantity) DESC) AS customer_tier\nFROM transactions\nGROUP BY customer_id\nHAVING SUM(price * quantity) > 1000;`,
          result: [
            { customer_id: 'C_1082', order_frequency: 18, total_spent: '$3,420', customer_tier: 1 },
            { customer_id: 'C_1194', order_frequency: 14, total_spent: '$2,890', customer_tier: 1 },
            { customer_id: 'C_1203', order_frequency: 11, total_spent: '$1,950', customer_tier: 2 },
            { customer_id: 'C_1430', order_frequency: 9, total_spent: '$1,240', customer_tier: 2 }
          ]
        }
      ]
    }
  },
  {
    id: 'p3',
    title: 'Python Data Analytics',
    description: 'Cleaned, analyzed, and visualized datasets using Python libraries to reveal correlation matrices and distribution trends.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    category: 'Python',
    liveMockData: {
      steps: [
        {
          title: '1. Handle Missing Values',
          code: `import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv("sales_raw.csv")\n# Clean missing numerical items with median\ndf['price'] = df['price'].fillna(df['price'].median())\n# Clean categoricals with mode\ndf['category'] = df['category'].fillna(df['category'].mode()[0])`,
          status: 'Success - Cleaned 142 null entries'
        },
        {
          title: '2. Detect Anomalies',
          code: `# Calculate Z-Score\nfrom scipy import stats\nz_scores = np.abs(stats.zscore(df['amount']))\n# Filter outliers (Z-Score > 3)\nclean_df = df[z_scores < 3]`,
          status: 'Filtered 18 transaction anomalies'
        },
        {
          title: '3. Correlation Analysis',
          code: `import seaborn as sns\nimport matplotlib.pyplot as plt\n\ncorr_matrix = clean_df[['price', 'quantity', 'discount', 'profit']].corr()\nsns.heatmap(corr_matrix, annot=True, cmap='Blues')\nplt.title('Performance Correlations')`,
          status: 'Generated Heatmap (Highest Correlation: discount vs. profit)'
        }
      ]
    }
  },
  {
    id: 'p4',
    title: 'Tableau Business Dashboard',
    description: 'Created interactive visualizations and business story dashboards utilizing Tableau mapping and customer cohorts.',
    technologies: ['Tableau', 'Cohort Analysis', 'LOD Expressions'],
    category: 'Tableau',
    liveMockData: {
      cohorts: [
        { cohort: 'Q1 Cohort', retention: 100, val: 'Base' },
        { cohort: 'Month 1', retention: 74, val: '74%' },
        { cohort: 'Month 2', retention: 62, val: '62%' },
        { cohort: 'Month 3', retention: 55, val: '55%' },
        { cohort: 'Month 4', retention: 49, val: '49%' }
      ],
      segments: [
        { segment: 'Consumer', share: 48, count: 5800, color: '#2563eb' },
        { segment: 'Corporate', share: 32, count: 3900, color: '#3b82f6' },
        { segment: 'Home Office', share: 20, count: 2400, color: '#60a5fa' }
      ]
    }
  }
];

export const certifications: Certification[] = [
  {
    name: 'Data Analytics Internship',
    issuer: 'Techno Dot Academy',
    date: 'July 2026',
    badgeType: 'medal'
  },
  {
    name: 'Power BI Professional Course Certificate',
    issuer: 'Techno Dot Academy',
    date: 'June 2026',
    badgeType: 'certificate'
  },
  {
    name: 'Advanced SQL for Data Science',
    issuer: 'Techno Dot Academy',
    date: 'May 2026',
    badgeType: 'award'
  },
  {
    name: 'Python for Data Analysis & Automation',
    issuer: 'Techno Dot Academy',
    date: 'April 2026',
    badgeType: 'star'
  },
  {
    name: 'Tableau Desktop Visual Analytics Specialist',
    issuer: 'Techno Dot Academy',
    date: 'March 2026',
    badgeType: 'certificate'
  },
  {
    name: 'Microsoft Excel Data Analyst Expert',
    issuer: 'Techno Dot Academy',
    date: 'February 2026',
    badgeType: 'star'
  }
];

export const whyHireMe = [
  {
    title: 'Analytical Thinking',
    description: 'Ability to dissect raw data, recognize complex multi-level patterns, and translate abstract metrics into logical, solvable structures.',
    icon: 'TrendingUp'
  },
  {
    title: 'Business Intelligence',
    description: 'Focus on strategic KPIs, aligning quantitative reports with target objectives to support key leadership decisions.',
    icon: 'BrainCircuit'
  },
  {
    title: 'Data Visualization',
    description: 'Expertise in turning dry, sprawling spreadsheets into engaging, color-synchronized dashboards that command attention.',
    icon: 'LayoutDashboard'
  },
  {
    title: 'Continuous Learning',
    description: 'As a 21-year-old Computer Science student, I have an insatiable curiosity and rapidly master the latest tools and SDKs.',
    icon: 'Sparkles'
  }
];

export const stats = [
  { id: 'stat1', value: 15, suffix: '+', label: 'Dashboards Developed' },
  { id: 'stat2', value: 120, suffix: '+', label: 'SQL Queries Engineered' },
  { id: 'stat3', value: 10000, suffix: '+', label: 'Data Rows Analyzed' },
  { id: 'stat4', value: 100, suffix: '%', label: 'Dedication & Focus' }
];
