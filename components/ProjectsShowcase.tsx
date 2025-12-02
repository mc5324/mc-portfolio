'use client';

import { motion } from 'framer-motion';

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string[];
  tags: string[];
  protected?: boolean;
}

const projects: Project[] = [
  {
    title: 'Internal Scientific Data & Workflow Platform (LIMS)',
    company: 'ArsenalBio',
    description: 'Led product management for Nucleus, serving as both data lake and workflow orchestration system for CAR-T cell therapy development across wet lab and dry lab teams.',
    impact: [
      'Unified data from LIMS, Benchling, and computational tools',
      'Built plate-centric workflow modeling for experiment tracking',
      'Enabled cross-functional collaboration between scientists and engineers'
    ],
    tags: ['Product Management', 'Data Platform', 'LIMS', 'Stakeholder Management'],
    protected: false
  },
  {
    title: 'Research Request Cost and Timeline Calculator',
    company: 'ArsenalBio',
    description: 'Built internal tool to help scientists estimate project costs and timelines for research proposals, improving planning and resource allocation.',
    impact: [
      'Streamlined research planning process',
      'Improved budget forecasting accuracy',
      'Enabled data-driven decision making for project prioritization'
    ],
    tags: ['Product Management', 'Financial Planning', 'Internal Tools']
  },
  {
    title: 'Compute Platform Migration',
    company: 'ArsenalBio',
    description: 'Managed migration of computational infrastructure to support scalable analysis workflows for high-throughput screening data.',
    impact: [
      'Improved compute resource efficiency',
      'Reduced analysis bottlenecks',
      'Enabled larger-scale data processing'
    ],
    tags: ['Infrastructure', 'AWS', 'Data Engineering']
  },
  {
    title: 'Automated Support Bot (Atlassian Virtual Agent)',
    company: 'ArsenalBio',
    description: 'Developed AI-powered Slack support system to triage user questions and provide automated responses, reducing manual support workload.',
    impact: [
      'Reduced manual triage time by 40%',
      'Improved response time for scientists',
      'Built knowledge base for common issues'
    ],
    tags: ['AI/ML', 'Automation', 'User Support', 'Slack']
  },
  {
    title: 'Multi-Partner Workflow Enablement: Discovery → Model Development',
    company: 'ArsenalBio',
    description: 'Designed and implemented workflows to support partnerships with pharma companies, enabling seamless data handoffs from discovery to computational modeling.',
    impact: [
      'Standardized data packages for partner deliverables',
      'Reduced integration time by 60%',
      'Improved cross-organizational collaboration'
    ],
    tags: ['Workflow Design', 'Partnership Enablement', 'Data Integration'],
    protected: true
  },
  {
    title: 'Single Cell Printer & Automated iPSC Workflow Automation',
    company: 'Synthego',
    description: 'Led automation of clonal workflows using single cell printing technology and integrated with iPSC cell line development processes.',
    impact: [
      'Reduced manual touchpoints in cell engineering',
      'Improved data consistency and traceability',
      'Enabled higher throughput clonal selection'
    ],
    tags: ['Lab Automation', 'Process Engineering', 'Cell Engineering']
  },
  {
    title: 'Zapier Automation (Support)',
    company: 'ArsenalBio',
    description: 'Built Zapier workflows to automate support ticket routing and notifications, improving team response times.',
    impact: [
      'Automated ticket categorization',
      'Reduced manual routing overhead',
      'Improved support team efficiency'
    ],
    tags: ['Automation', 'Zapier', 'Support Operations']
  },
  {
    title: 'Mentoring and Supporting Intern Projects',
    company: 'ArsenalBio',
    description: 'Mentored summer interns on technical projects, including data pipeline development and automation tool creation.',
    impact: [
      'Delivered multiple intern-led tools to production',
      'Built mentorship framework for technical onboarding',
      'Contributed to team knowledge sharing culture'
    ],
    tags: ['Mentorship', 'Leadership', 'Team Development']
  }
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 bg-[#f5f3f0]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">My Work</h2>
        <p className="text-gray-700 mb-2 text-lg">
          Impact-driven projects at the intersection of biotech operations and software engineering
        </p>
        <p className="text-sm text-gray-500 mb-12 italic">
          **Certain projects are password-protected to respect confidentiality. Please reach out via LinkedIn or email to request access.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold mb-1 flex-1">
                    {project.title}
                    {project.protected && (
                      <span className="ml-2 text-xs text-gray-500">🔒</span>
                    )}
                  </h3>
                </div>
                <p className="text-sm text-gray-500">{project.company}</p>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">Impact:</p>
                <ul className="space-y-1">
                  {project.impact.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}