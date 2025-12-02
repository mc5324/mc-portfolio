// src/app/page.tsx
'use client';

import { motion } from 'framer-motion';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ContactComponent from '@/components/ContactComponent';
import RotatingText from '@/components/RotatingText';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold"
          >
            MChua
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8"
          >
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left side - Text */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Hey, I'm Mary 👋🏻
        <br />
        <RotatingText words={['Product', 'Program', 'Project']} /> Manager
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-4">
        Bridging scientists and engineers to build internal tools that eliminate 
        operational friction and power scientific discovery.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        && I like playing volleyball 🏐
      </p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4"
      >
        <a 
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in touch
        </a>
        <a 
          href="#experience"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
        >
          View my work
        </a>
      </motion.div>
    </motion.div>

    {/* Right side - Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative max-w-md mx-auto md:mx-0 md:ml-auto"
    >
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/mc.jpeg"
          alt="Mary Chua"
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>
    </motion.div>

  </div>
</section>
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 bg-[#F5F3F0]"> 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I've spent 8+ years working at the intersection of biotech and technology, 
                helping scientists focus on their core work by building tools that automate 
                repetitive tasks and improve data workflows.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently transitioning from biotech-specific roles to broader B2B SaaS 
                opportunities, combining my deep domain expertise with full-stack development 
                skills from Purdue University's bootcamp.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Product Management', 'LIMS Systems', 'API Integration', 'JavaScript', 
                  'React', 'Node.js', 'Python', 'SQL', 'Workflow Automation'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
          <ExperienceTimeline />
          <ProjectsShowcase />
          <ContactComponent />
      {/* Footer */}
      <footer className="border-t border-gray-100 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
          <p className="text-gray-600">© 2024 Mary Chua</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}