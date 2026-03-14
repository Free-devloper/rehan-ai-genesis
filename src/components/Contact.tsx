import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, Send, Copy, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '@/lib/animations';

const EMAIL = 'rehanghafoor.official@gmail.com';

const contactLinks = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}?subject=AI Project Inquiry`,
    external: false,
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rehanroy',
    href: 'https://www.linkedin.com/in/rehanroy',
    external: true,
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
    value: 'github.com/free-devloper',
    href: 'https://github.com/free-devloper',
    external: true,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left side */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-6">
                Let's build something{' '}
                <span className="text-gradient">extraordinary</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                Whether you need a full-stack AI application, want to integrate LLM capabilities
                into your existing system, or are exploring the possibilities of GenAI —
                I'm here to help bring your vision to life.
              </p>

              {/* Availability status */}
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm text-muted-foreground">
                  Available for new projects &middot; Remote globally &middot; Responds within 24h
                </span>
              </div>

              <Button
                size="lg"
                className="rounded-full px-8 font-medium group"
                onClick={() => window.open(`mailto:${EMAIL}?subject=AI Project Inquiry`, '_blank')}
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                Send Me an Email
              </Button>
            </motion.div>

            {/* Right side -- contact methods */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-col justify-center"
            >
              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    variants={fadeInRight}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">{link.label}</div>
                      <div className="text-foreground font-medium truncate">{link.value}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Copy email */}
              <motion.div variants={fadeInRight} className="mt-4">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-5 py-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-green-500">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
