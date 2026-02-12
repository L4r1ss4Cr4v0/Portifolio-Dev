import { motion } from 'framer-motion';
import { ParallaxTitle } from '../ui/ParallaxTitle';
import { GlassCard } from '../ui/GlassCard';
import { Code2, Users, Rocket, Brain } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: '10+ Years',
    description: 'Building production-grade applications',
  },
  {
    icon: Users,
    title: 'Team Lead',
    description: 'Managing cross-functional engineering teams',
  },
  {
    icon: Rocket,
    title: '50+ Projects',
    description: 'Delivered across multiple domains',
  },
  {
    icon: Brain,
    title: 'AI & ML',
    description: 'Integration and system optimization',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>About</ParallaxTitle>
        
        <div className="grid lg:grid-cols-2 gap-16 mt-8">
          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
              Transforming ideas into{' '}
              <span className="text-muted-foreground">scalable solutions</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a Tech Lead with over a decade of experience, I specialize in 
                architecting robust systems and guiding engineering teams to deliver 
                exceptional software products.
              </p>
              <p>
                My expertise spans full-stack development, cloud infrastructure, 
                and emerging technologies. I'm passionate about clean code, 
                performance optimization, and creating intuitive user experiences.
              </p>
              <p>
                Currently focused on building AI-powered applications and 
                establishing best practices for modern software development.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <item.icon className="w-8 h-8 mb-4 text-foreground" />
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}