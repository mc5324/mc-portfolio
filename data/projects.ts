export interface Project {
  slug: string;
  title: string;
  company: string;
  period: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  protected: boolean;
}

export const projectsData: Record<string, Project> = {
  'nucleus-platform': {
    slug: 'nucleus-platform',
    title: 'Internal Scientific Data & Workflow Platform (LIMS)',
    company: 'ArsenalBio',
    period: 'Mar 2023 - Nov 2024',
    description: 'Powering high-throughput discovery through integrated data, lab automation, and bioinformatics pipelines. This platform, internally known as Nucleus, was ArsenalBio\'s custom-built Scientific Research Data Management Platform serving as the backbone for high-throughput R&D.',
    challenge: 'The existing platform supported some scientific data and workflows, but as discovery work scaled, new needs emerged. Screening assays required more grouping, calculation logic, and propagation of specific metadata. Production workflows needed centralized data tracking and instrument integration. CompBio had to scale pipeline development, requiring more robust pipeline workflow engines (Airflow and Nextflow). Compliance and collaboration introduced the need for multi-organization data management.',
    solution: 'Working with engineering and scientific teams, I helped shape and deliver new features across multiple areas: Pipeline features for Nextflow and Airflow orchestration, wet lab workflow development for complex production and R&D workflows, wet lab modules development (building blocks of workflows), infrastructure & compute improvements, dashboard enhancements, and homepage search functionality. The platform integrated with Benchling, Jira, sequencing tools, and automation systems.',
    impact: [
      'Automation Operations able to invoke lab automation workflows from wet lab modules',
      'Implemented screen-level data package and plate lineage tracking',
      'Analysis turnaround dropped from hours to seconds for key modules (Cytotox, Cytokine, Flow Cytometry)',
      'CompBio and ML teams gained access to traceable datasets with auto-triggered pipeline integration',
      'Compliance requirements supported with org-based partitioning for internal and partner projects',
      'Platform became backbone for R&D, supporting day-to-day workflows and future model development'
    ],
    technologies: ['Python', 'AWS', 'PostgreSQL', 'Benchling API', 'Nextflow', 'Airflow', 'React', 'REST APIs'],
    protected: true
  },
  'cost-calculator': {
    slug: 'cost-calculator',
    title: 'Research Request Cost and Timeline Calculator',
    company: 'ArsenalBio',
    period: '2023',
    description: 'Built an internal tool to help scientists estimate project costs and timelines for research proposals.',
    challenge: 'Scientists struggled to accurately estimate the cost and timeline for new research initiatives, leading to budget overruns and misaligned expectations with stakeholders.',
    solution: 'Developed a calculator tool that factored in resource allocation, equipment usage, and historical project data to provide accurate cost and timeline estimates for research proposals.',
    impact: [
      'Streamlined research planning process across all teams',
      'Improved budget forecasting accuracy by 40%',
      'Enabled data-driven decision making for project prioritization',
      'Reduced proposal preparation time by 50%'
    ],
    technologies: ['React', 'JavaScript', 'Internal APIs'],
    protected: false
  },
  'compute-migration': {
    slug: 'compute-migration',
    title: 'Compute Platform Migration',
    company: 'ArsenalBio',
    period: '2023',
    description: 'Managed migration of computational infrastructure to support scalable analysis workflows for high-throughput screening data.',
    challenge: 'Existing compute infrastructure couldn\'t handle the increasing volume of high-throughput screening data, creating bottlenecks in analysis pipelines.',
    solution: 'Led the migration to a more scalable cloud-based compute platform with improved resource management and job scheduling capabilities.',
    impact: [
      'Improved compute resource efficiency by 50%',
      'Reduced analysis bottlenecks and wait times',
      'Enabled larger-scale data processing for screening workflows',
      'Implemented better cost tracking and resource allocation'
    ],
    technologies: ['AWS', 'SageMaker', 'Slurm', 'Python'],
    protected: false
  },
  'support-bot': {
    slug: 'support-bot',
    title: 'Automated Support Bot (Atlassian Virtual Agent)',
    company: 'ArsenalBio',
    period: '2023-2024',
    description: 'Developed an AI-powered Slack support system to triage user questions and provide automated responses.',
    challenge: 'Support team was overwhelmed with repetitive questions, leading to slow response times and taking time away from complex issues.',
    solution: 'Built an AI-assisted Slack bot that automatically triaged incoming questions, provided instant answers to common queries, and routed complex issues to appropriate team members.',
    impact: [
      'Reduced manual triage time by 40%',
      'Improved response time for scientists from hours to minutes',
      'Built comprehensive knowledge base that reduced repeat questions',
      'Freed up support team to focus on complex technical issues'
    ],
    technologies: ['Slack API', 'Python', 'AI/ML', 'Atlassian'],
    protected: false
  },
  'partner-workflows': {
    slug: 'partner-workflows',
    title: 'Multi-Partner Workflow Enablement: Discovery → Model Development',
    company: 'ArsenalBio',
    period: '2023-2024',
    description: 'Designed and implemented workflows to support partnerships with pharma companies, enabling seamless data handoffs from discovery to computational modeling.',
    challenge: 'Partnerships with companies like Genentech required standardized data packages and workflows, but each group had different data formats and requirements.',
    solution: 'Created standardized data package formats and automated workflows that transformed internal data into partner-ready deliverables, with validation checks at each step.',
    impact: [
      'Standardized data packages for all partner deliverables',
      'Reduced integration time by 60% for partner handoffs',
      'Improved cross-organizational collaboration and trust',
      'Enabled faster iteration cycles with partners'
    ],
    technologies: ['Python', 'Data Pipeline', 'API Integration', 'AWS S3'],
    protected: true
  },
  'single-cell-automation': {
    slug: 'single-cell-automation',
    title: 'Single Cell Printer & Automated iPSC Workflow Automation',
    company: 'Synthego',
    period: '2020',
    description: 'Led automation of clonal workflows using single cell printing technology integrated with iPSC cell line development.',
    challenge: 'Manual clonal selection was a bottleneck in cell engineering workflows, with high error rates and poor traceability.',
    solution: 'Implemented automated single cell printing technology with integrated tracking and iPSC workflow automation.',
    impact: [
      'Reduced manual touchpoints in cell engineering by 70%',
      'Improved data consistency and traceability across workflows',
      'Enabled higher throughput clonal selection',
      'Reduced contamination and error rates'
    ],
    technologies: ['Lab Automation', 'Cellario', 'Hamilton', 'Python'],
    protected: false
  },
  'zapier-automation': {
    slug: 'zapier-automation',
    title: 'Zapier Automation (Support)',
    company: 'ArsenalBio',
    period: '2023',
    description: 'Built Zapier workflows to automate support ticket routing and notifications.',
    challenge: 'Manual ticket routing was slow and inconsistent, leading to delays and missed escalations.',
    solution: 'Created automated Zapier workflows that categorized incoming tickets and routed them to appropriate team members based on issue type and priority.',
    impact: [
      'Automated ticket categorization with 90% accuracy',
      'Reduced manual routing overhead',
      'Improved support team efficiency by 30%',
      'Faster escalation for critical issues'
    ],
    technologies: ['Zapier', 'Slack', 'Jira', 'Automation'],
    protected: false
  },
  'intern-mentorship': {
    slug: 'intern-mentorship',
    title: 'Mentoring and Supporting Intern Projects',
    company: 'ArsenalBio',
    period: '2023-2024',
    description: 'Mentored summer interns on technical projects, including data pipeline development and automation tool creation.',
    challenge: 'Interns needed guidance to deliver production-ready tools while learning about biotech workflows and internal systems.',
    solution: 'Developed structured mentorship framework with weekly 1:1s, code reviews, and project milestones. Paired interns with real production needs.',
    impact: [
      'Delivered 4+ intern-led tools to production',
      'Built mentorship framework adopted by other teams',
      'Contributed to team knowledge sharing culture',
      'Several interns returned for full-time roles'
    ],
    technologies: ['Python', 'Mentorship', 'Code Review', 'Project Management'],
    protected: false
  }
};

// Helper to get all projects as an array
export const getAllProjects = (): Project[] => {
  return Object.values(projectsData);
};