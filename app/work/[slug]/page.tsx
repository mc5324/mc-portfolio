'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Project data
const projectsData: Record<string, {
  title: string;
  company: string;
  period: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  images?: string[];
  protected: boolean;
}> = {
'nucleus-platform': {
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

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/mchualogo.png" 
              alt="Home" 
              className="w-16 h-16 object-contain"
            />
          </Link>
          
          <Link 
            href="/#projects" 
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>
      </nav>

      {/* Project Header */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.protected && (
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full mb-4">
              🔒 Confidential Project
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <span className="font-semibold">{project.company}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            {project.description}
          </p>
        </motion.div>
      </section>

{/* Project Details */}
<section className="max-w-4xl mx-auto px-6 pb-20">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="space-y-12"
  >
    {/* Problem/Challenge */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Problem</h2>
      <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
    </div>

    {/* Solution */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Solution</h2>
      <p className="text-gray-700 leading-relaxed mb-6">{project.solution}</p>
      
      {slug === 'nucleus-platform' && (
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-lg">Platform Capabilities</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-600">Data Management →</span>
              <span className="text-gray-700">Centralized experiment data with full provenance and flexible search</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-600">Workflow Orchestration →</span>
              <span className="text-gray-700">Automated medium- to high-throughput workflows by integrating with lab instruments and robotics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-600">Compute & Pipelines →</span>
              <span className="text-gray-700">Orchestrated Nextflow pipelines and supported ad-hoc workflows with on-demand compute</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-600">Integrations →</span>
              <span className="text-gray-700">Connected with Benchling, Jira, sequencing tools, and automation systems</span>
            </li>
          </ul>
        </div>
      )}
    </div>

    {/* My Role */}
    {slug === 'nucleus-platform' && (
      <div>
        <h2 className="text-2xl font-bold mb-4">My Role</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I was responsible for guiding how the platform evolved to meet screening, production, and pipeline needs:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• Collected requirements from operations, scientific, automation engineering, and computational biology groups</li>
          <li>• Defined workflows, data models, and module requirements</li>
          <li>• Prioritized features to balance usability, compliance, and infrastructure scaling</li>
          <li>• Worked closely with engineers to deliver backend, frontend, and integration updates</li>
          <li>• Translated day-to-day lab and analysis pain points into product improvements</li>
          <li>• Conducted feature testing (preliminary UAT), user demos, and training</li>
          <li>• Provided user support on reported errors</li>
        </ul>
      </div>
    )}

    {/* Impact */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Impact</h2>
      <ul className="space-y-3">
        {project.impact.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-600 mt-1">✓</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Technologies */}
    <div>
      <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
</section>
</main>
  )
}