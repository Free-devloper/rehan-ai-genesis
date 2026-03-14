import { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Network, Cloud, Brain, Database, Wrench, Palette, Server, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';

const skillCategories = [
  {
    id: 'agentic',
    title: 'Agentic AI',
    icon: <Network className="h-4 w-4" />,
    skills: ['LangChain', 'LangGraph', 'Agent Development Kits (ADKs)', 'Multi-agent Orchestration', 'Autonomous Workflow Design', 'Agent Memory Management', 'LlamaIndex'],
  },
  {
    id: 'ml',
    title: 'ML & Deployment',
    icon: <Cloud className="h-4 w-4" />,
    skills: ['AWS SageMaker', 'AWS Lambda', 'ECS / ECR', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Model Deployment', 'MLOps', 'API Development', 'Microservices'],
  },
  {
    id: 'aiml',
    title: 'AI/ML Tech',
    icon: <Brain className="h-4 w-4" />,
    skills: ['Deep Learning', 'Computer Vision', 'NLP', 'PyTorch', 'TensorFlow / Keras', 'NLTK', 'Scikit-Learn', 'OpenAI', 'Whisper', 'Hugging Face', 'LayoutLM', 'Model Optimization'],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    icon: <Database className="h-4 w-4" />,
    skills: ['Python', 'SQL', 'MySQL', 'ETL Pipelines', 'Data Integrity Monitoring', 'DBT', 'Big Data Processing', 'Feature Engineering', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Wrench className="h-4 w-4" />,
    skills: ['Containerization', 'CloudWatch', 'Distributed Systems', 'Event-Driven Architecture', 'Production Debugging', 'Scalability Optimization', 'GitHub Actions', 'FAISS', 'ChromaDB'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <Palette className="h-4 w-4" />,
    skills: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <Server className="h-4 w-4" />,
    skills: ['FastAPI', 'Node.js', 'Django', 'Express.js', 'Supabase', 'Meilisearch'],
  },
];

const specialties = [
  'Multi-Agent Systems', 'RAG Pipelines', 'LLM Fine-tuning', 'Vector Databases',
  'Document AI', 'Voice Processing', 'Agentic Workflows', 'MLOps at Scale',
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('agentic');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      const parent = el.parentElement;
      if (parent) {
        setIndicatorStyle({
          left: el.offsetLeft - parent.offsetLeft,
          width: el.offsetWidth,
        });
      }
    }
  }, [activeTab]);

  return (
    <section id="skills" className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-16"
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Technical Skills</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
              A production-grade{' '}
              <span className="text-gradient">toolkit</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Spanning agentic AI orchestration, MLOps, data engineering, and full-stack
              development — built for real-world deployment at scale.
            </p>
          </motion.div>

          {/* Tabbed categories */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-12"
          >
            <div className="relative">
              <div className="flex flex-wrap gap-1 relative" role="tablist">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.id}
                    ref={(el) => { tabRefs.current[cat.id] = el; }}
                    role="tab"
                    aria-selected={activeTab === cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      activeTab === cat.id
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {activeTab === cat.id && (
                      <motion.div
                        layoutId="skillTab"
                        className="absolute inset-0 bg-primary rounded-lg"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {cat.icon}
                      <span className="hidden sm:inline">{cat.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Active category skills */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-[160px] p-8 rounded-xl border border-border bg-card/50 mb-16"
            >
              <h3 className="text-lg font-heading font-semibold mb-5 text-foreground">{activeCategory.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {activeCategory.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-3.5 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Agentic AI Specialization spotlight */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-xl border-l-4 border-l-primary border border-border bg-card/50 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-heading font-bold">Agentic AI Specialization</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mb-6">
              Deep expertise in multi-agent orchestration, autonomous workflow design, and production-grade
              LLM deployment. From LangGraph agentic pipelines to MLOps on AWS SageMaker, I build intelligent
              systems that operate autonomously at enterprise scale across fintech, health, and engineering domains.
            </p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="text-muted-foreground border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
