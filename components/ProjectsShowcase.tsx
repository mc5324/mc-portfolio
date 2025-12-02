'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';

export default function ProjectsShowcase() {
  const projects = getAllProjects();

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
            <Link 
              key={index}
              href={`/work/${project.slug}`}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer h-full"
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
                    {project.impact.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}