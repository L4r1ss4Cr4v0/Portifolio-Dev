import { motion } from 'framer-motion';
import { ParallaxTitle } from '../ui/ParallaxTitle';
import { DeviceFrame } from '../ui/DeviceFrame';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Cloud Platform',
    description: 'Enterprise-grade cloud infrastructure management platform with real-time monitoring and auto-scaling capabilities.',
    tech: ['React', 'TypeScript', 'AWS', 'GraphQL'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'AI Analytics',
    description: 'Machine learning-powered analytics dashboard for business intelligence and predictive insights.',
    tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'FinTech App',
    description: 'Secure financial services application with real-time transactions and blockchain integration.',
    tech: ['Node.js', 'React Native', 'PostgreSQL'],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>Projects</ParallaxTitle>
        
        <div className="mt-16 space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Device Frame */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <DeviceFrame type="tablet">
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <motion.div
                      className="text-4xl font-bold text-foreground/20"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {project.title}
                    </motion.div>
                  </div>
                </DeviceFrame>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-secondary transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Source
                    <Github className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}