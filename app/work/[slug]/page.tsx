'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = projectsData[slug];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.company} • {project.period}</p>
        
        <div className="prose max-w-none mb-8">
          <h2>Description</h2>
          <p>{project.description}</p>
          
          <h2>Challenge</h2>
          <p>{project.challenge}</p>
          
          <h2>Solution</h2>
          <p>{project.solution}</p>
          
          <h2>Impact</h2>
          <ul className="list-disc pl-6">
            {project.impact.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
          
          <h2>Technologies</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          <Link href="/" className="text-blue-500 hover:underline">
            &larr; Back to projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}