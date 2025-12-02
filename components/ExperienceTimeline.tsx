'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'ArsenalBio',
    role: 'Technical Product Manager',
    period: 'Mar 2023 - Nov 2025',
    description: [
      'Internal tools for wet lab and dry lab initiatives in T cell therapy discovery'
    ]
  },
  {
    company: 'ArsenalBio',
    role: 'Senior Automation Engineer',
    period: 'Apr 2021 - Mar 2023',
    description: [
      'Lab automation and HT assay development for high-throughput T cell therapy screening in partnership programs (RSA and CSA CoCulture Assays)'
    ]
  },
  {
    company: 'Color Health',
    role: 'Automation Engineer',
    period: 'Nov 2020 - Apr 2021',
    description: [
      'COVID-19 sample processing w/ lab automation'
    ]
  },
  {
    company: 'Synthego',
    role: 'Research Associate > Process Engineer > Senior Production Process Engineer',
    period: 'Mar 2018 - Oct 2020',
    description: [
      'Cell engineering workflow development for CRISPR gene editing clonal selection (iPSC and immortal cell lines' 
    ]
  },
  {
    company: 'Hitachi Chemical Advanced Therapeutics Solution',
    role: 'Cell Therapy Specialist',
    period: 'Mar 2018 - Oct 2020',
    description: [
      'Cell therapy drug product manufacturing' 
    ]
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-gray-200 hover:border-blue-500 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7.5px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
              
              <div className="mb-2">
                <h3 className="text-1.5xl font-bold">{exp.role}</h3>
                <div className="flex items-center gap-3 text-gray-500 mt-1">
                  <span className="font-semibold">{exp.company}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>
              </div>
              
                  <div className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed">
                              {item}
                          </p>
                      ))}
                  </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}