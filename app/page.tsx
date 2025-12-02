'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import ContactComponent from '@/components/ContactComponent';
import RotatingText from '@/components/RotatingText';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/mchualogo.png"
                alt="Home"
                className="w-16 h-16 object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex gap-6 flex-shrink-0"
          >
            <a href="#about" className="hover:text-blue-600 transition-colors text-lg whitespace-nowrap">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors text-lg whitespace-nowrap">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors text-lg whitespace-nowrap">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors text-lg whitespace-nowrap">Contact</a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-6 py-4 space-y-3">
              <a 
                href="#about" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
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
                href="#projects"
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
                Currently brainstorming projects to build  (digital or physical) 🔨
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Product/Program Management', ' Lab Automation', 'Python, SQL, R', 'JavaScript', 
                  'Jira, Confluence, Smartsheet', 'Figma, Basalmiq, Lucidchart', 'Zapier', 'n8n', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm"
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
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Tech Stack */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 mb-3">Built with</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">React</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">Next.js</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">Framer Motion</span>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
            <p className="text-gray-600 text-sm">© 2024 Mary Chua</p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/maryjechua" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/mc5324" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}