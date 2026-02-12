import { motion } from "framer-motion";
import { ParallaxTitle } from "../ui/ParallaxTitle";
import { GlassCard } from "../ui/GlassCard";
import { AVAILABILITY, EMAIL, LOCATION } from "@/lib/itens";
import { Calendar, Mail, MapPin, Send } from "lucide-react";
import { CustomButton } from "../ui/button/CustomButton";

const contactInfo = [
  { icon: Mail, label: "Email", value: EMAIL },
  { icon: MapPin, label: "Location", value: LOCATION },
  { icon: Calendar, label: "Availability", value: AVAILABILITY },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <ParallaxTitle>Contact</ParallaxTitle>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Let's work together
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I'm always interested in hearing about new opportunities,
                challenging projects, or just having a conversation about
                technology.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8" hover={false}>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-foreground/30 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <CustomButton variant="glass" label="DDD"></CustomButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
