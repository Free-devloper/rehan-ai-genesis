import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Brain, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from '@/lib/animations';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const highlights = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Full Stack Development',
    description: 'React, Node.js, Python, FastAPI — Building complete solutions from frontend to backend',
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'AI/ML Engineering',
    description: 'LangChain, OpenAI, Whisper, LayoutLM — Creating intelligent, production-ready AI systems',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Vector Databases',
    description: 'FAISS, ChromaDB, Meilisearch — Building powerful RAG pipelines and knowledge systems',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Production Ready',
    description: 'Docker, CI/CD, Cloud deployment — Shipping scalable GenAI applications to real users',
  },
];

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Production Projects' },
  { value: 10, suffix: '+', label: 'Industry Verticals' },
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-20"
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight">
              Passionate about building{' '}
              <span className="text-gradient">LLM-native products</span>
            </h2>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-3 gap-6 mb-20 py-8 border-y border-border"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Asymmetric editorial layout */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
            {/* Left pull-quote column */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl sm:text-3xl font-heading font-bold leading-snug">
                Full Stack AI Developer with{' '}
                <span className="text-gradient">5+ Years</span> of Experience
              </h3>
              <div className="w-12 h-1 bg-primary rounded-full mt-6" />
            </motion.div>

            {/* Right content column */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              <p>
                I specialize in building intelligent, production-ready AI systems that transform
                how businesses handle document processing, voice automation, and knowledge management.
              </p>
              <p>
                My expertise spans the entire AI development lifecycle — from designing RAG pipelines
                with LangChain and LangGraph to deploying scalable GenAI applications using modern
                cloud infrastructure.
              </p>
              <p>
                With a deep understanding of both traditional software engineering and cutting-edge
                AI technologies, I bridge the gap between research and production, creating
                LLM-native solutions that actually work in the real world.
              </p>
            </motion.div>
          </div>

          {/* Highlights 2x2 grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 gap-4 mb-16"
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeInUp}
                className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{h.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Specialization callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-xl border-l-4 border-l-primary border border-border bg-card/50 p-8"
          >
            <h3 className="text-xl font-heading font-bold mb-3">Specialized in GenAI Applications</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              Passionate about building LLM-native products, especially for{' '}
              <strong className="text-foreground">document parsing</strong>,{' '}
              <strong className="text-foreground">speech-to-text</strong>, and{' '}
              <strong className="text-foreground">knowledge automation</strong>.
              I combine deep technical expertise with startup-ready execution to deliver AI solutions
              that create real business value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
