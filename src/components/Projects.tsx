import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportConfig } from '@/lib/animations';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  category: string;
  filterTag: string;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Bison Pay — FinTech Payment Platform',
    description: 'Engineered and launched bison-pay.com, a full-stack digital payments platform with an agentic fraud detection layer built on LangGraph. Handles real-time multi-currency transactions, autonomous fraud investigation via sub-agents, compliance reporting, and smart escalation — cutting false positives by 60%.',
    technologies: ['LangGraph', 'LangChain', 'AWS Lambda', 'Kafka', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'Stripe API'],
    features: ['End-to-end payment processing', 'Agentic fraud detection engine', 'Multi-currency transaction support', 'Autonomous compliance reporting', 'Real-time smart escalation'],
    category: 'FinTech · Live Product',
    filterTag: 'FinTech',
    link: 'https://bison-pay.com',
    featured: true,
  },
  {
    title: 'RealEstate AI — Agentic Property Discovery Platform',
    description: 'Built and launched an AI-powered real estate platform that combines live property search with multi-agent reasoning. Uses LangGraph-driven agents for buyer guidance, investment analysis, and neighborhood insights with shared conversation memory and streaming responses.',
    technologies: ['LangGraph', 'LangChain', 'Flask', 'SQLAlchemy', 'JavaScript', 'SQLite', 'Docker', 'Gunicorn', 'RentCast API', 'llama.cpp'],
    features: ['Live real estate listing retrieval', 'Multi-agent property guidance', 'Shared conversation memory', 'Streaming AI responses', 'Fallback LLM support with llama.cpp'],
    category: 'PropTech · AI Platform',
    filterTag: 'Agentic AI',
    link: 'https://realstate.roytechworkforce.com/',
    featured: true,
  },
  {
    title: 'Odoo MCP — AI-Native ERP Integration',
    description: 'Built a Model Context Protocol (MCP) server for Odoo ERP that exposes business data and workflows as structured tool calls consumable by any LLM agent. Enables AI assistants to autonomously query sales orders, invoices, inventory, and CRM records.',
    technologies: ['MCP Protocol', 'LangChain', 'LangGraph', 'Odoo 17', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    features: ['MCP tool server for Odoo modules', 'LLM-native ERP querying', 'Sales, CRM & inventory agents', 'Autonomous invoice generation', 'Zero-code module extension'],
    category: 'ERP · MCP · Agentic AI',
    filterTag: 'Agentic AI',
    featured: true,
  },
  {
    title: 'Clinical Decision Support Agent',
    description: 'Built a HIPAA-oriented clinical decision support platform with a React clinician app and FastAPI backend, powered by LangGraph workflows that retrieve patient records, route cases to specialist agents, and generate evidence-backed diagnostic reports with full audit trails.',
    technologies: ['LangGraph', 'FastAPI', 'React', 'PostgreSQL', 'OpenSearch', 'PubMed', 'Amazon Cognito', 'AWS ECS Fargate', 'Docker', 'Terraform'],
    features: ['Mock/FHIR-style patient data retrieval', 'PubMed + OpenSearch medical literature RAG', 'Query routing for specialist agent selection', 'Human-in-the-loop clinical review workflow', 'Evidence-backed diagnostic reports and reasoning traces', 'HIPAA-oriented audit logging and RBAC'],
    category: 'HealthTech · Agentic AI',
    filterTag: 'HealthTech',
    link: 'https://github.com/Free-devloper/Clinical-Decision-Support-Agent-CDSA-',
    featured: true,
  },
  {
    title: 'Infrastructure Asset Management Agent',
    description: 'Engineered an autonomous AI agent for a civil engineering firm that inspects IoT sensor feeds from bridges and roads, orchestrates maintenance scheduling sub-agents, predicts structural failure windows using ML models on SageMaker, and generates engineer-ready remediation reports.',
    technologies: ['LangGraph', 'AWS SageMaker', 'PyTorch', 'IoT Streams', 'Kubernetes', 'DBT', 'PostgreSQL'],
    features: ['IoT sensor stream ingestion', 'Predictive failure modeling', 'Autonomous maintenance scheduling', 'Structural risk scoring', 'Engineer report generation'],
    category: 'Civil Engineering · Agentic AI',
    filterTag: 'Agentic AI',
    featured: true,
  },
  {
    title: 'Agentic Portfolio Risk Orchestrator',
    description: 'Created a multi-agent financial risk platform using LangChain ADKs where specialized agents independently monitor equity, credit, and liquidity exposure, run Monte Carlo simulations, and collaboratively synthesize a unified risk dashboard — processing $2B+ in assets under management.',
    technologies: ['LangChain', 'ADKs', 'Multi-agent Orchestration', 'Python', 'Kafka', 'Redis', 'AWS CloudWatch'],
    features: ['Parallel risk agent coordination', 'Monte Carlo simulation engine', 'Liquidity & credit sub-agents', 'Unified dashboard synthesis', 'Event-driven alert pipeline'],
    category: 'FinTech · Multi-Agent',
    filterTag: 'FinTech',
    featured: true,
  },
  {
    title: 'Smart Hospital Operations Agent',
    description: 'Built an autonomous hospital workflow agent using LangGraph with persistent agent memory that manages bed allocation, staff scheduling, supply chain reordering, and patient flow optimization — integrating with EHR systems and reducing operational overhead by 35%.',
    technologies: ['LangGraph', 'Agent Memory Management', 'LlamaIndex', 'FastAPI', 'Docker', 'MySQL', 'DBT'],
    features: ['Persistent cross-session agent memory', 'EHR system integration', 'Autonomous bed & staff scheduling', 'Supply chain reorder agents', 'Patient flow optimization'],
    category: 'HealthTech · Autonomous Workflow',
    filterTag: 'HealthTech',
    featured: true,
  },
  {
    title: 'AI Legal Document Chatbot',
    description: 'Built a RAG-based chatbot that answers questions from legal and policy PDFs using OpenAI + FAISS + LangChain. Enables lawyers and legal professionals to quickly extract insights from complex documents with 95% accuracy.',
    technologies: ['OpenAI', 'FAISS', 'LangChain', 'Python', 'FastAPI', 'PostgreSQL'],
    features: ['Document parsing', 'Vector search', 'Context-aware answers', 'Multi-document queries', 'Citation tracking'],
    category: 'Document AI',
    filterTag: 'Document AI',
    featured: true,
  },
  {
    title: 'Voice-Based Meeting Summarizer',
    description: 'Designed a voice-to-insight pipeline using Whisper + GPT to transcribe, summarize, and extract action items from raw audio; integrated with Slack for seamless team collaboration and productivity tracking.',
    technologies: ['Whisper', 'GPT-4', 'Python', 'Slack API', 'Redis', 'React'],
    features: ['Real-time transcription', 'Smart summarization', 'Action item extraction', 'Slack integration', 'Speaker identification'],
    category: 'Voice AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'LangGraph Multi-Agent Assistant',
    description: 'Created a task planner using LangGraph for autonomous agents that read documents, execute tasks, and schedule events. Demonstrates advanced agentic workflow capabilities with intelligent task routing.',
    technologies: ['LangGraph', 'LangChain', 'OpenAI', 'Python', 'PostgreSQL', 'Docker'],
    features: ['Multi-agent coordination', 'Task planning', 'Document analysis', 'Event scheduling', 'Workflow automation'],
    category: 'Agentic AI',
    filterTag: 'Agentic AI',
  },
  {
    title: 'Invoice Parser with LayoutLM',
    description: 'Built a document intelligence system that extracts structured data from invoices using LayoutLM, OCR, and a FastAPI backend. Handles complex layouts and multiple invoice formats with 98% accuracy.',
    technologies: ['LayoutLM', 'PyTorch', 'FastAPI', 'OCR', 'MongoDB', 'Docker'],
    features: ['Layout understanding', 'Data extraction', 'Format recognition', 'API integration', 'Batch processing'],
    category: 'Document AI',
    filterTag: 'Document AI',
  },
  {
    title: 'Multilingual Policy Assistant',
    description: 'Developed a RAG chatbot with translation layers for non-English users to interact with government policy documents in their native language, improving accessibility and understanding across 25+ languages.',
    technologies: ['OpenAI', 'Translation APIs', 'React', 'ChromaDB', 'Next.js', 'Vercel'],
    features: ['Multi-language support', 'Policy document search', 'Real-time translation', 'User-friendly interface', 'Accessibility features'],
    category: 'RAG Systems',
    filterTag: 'AI/ML',
  },
  {
    title: 'Enterprise Security Threat Analyzer',
    description: 'Developed an AI-powered security system that analyzes network logs, identifies potential threats, and generates automated incident reports. Integrates with SIEM tools and provides real-time threat intelligence.',
    technologies: ['TensorFlow', 'Elastic Stack', 'Python', 'Kafka', 'Redis', 'Grafana'],
    features: ['Threat detection', 'Log analysis', 'Real-time monitoring', 'Automated reports', 'SIEM integration'],
    category: 'Security AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Intelligent Customer Support Bot',
    description: 'Built a sophisticated customer support chatbot using RAG architecture that handles 80% of customer queries automatically. Features sentiment analysis, escalation logic, and CRM integration.',
    technologies: ['LangChain', 'Pinecone', 'OpenAI', 'React', 'Node.js', 'PostgreSQL'],
    features: ['Intent recognition', 'Sentiment analysis', 'Auto-escalation', 'CRM integration', 'Analytics dashboard'],
    category: 'Conversational AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Semantic Search Engine for E-commerce',
    description: 'Created a next-generation product search engine using vector embeddings and semantic similarity. Improved search relevance by 40% and increased conversion rates through better product discovery.',
    technologies: ['Sentence Transformers', 'Elasticsearch', 'FastAPI', 'React', 'AWS', 'Docker'],
    features: ['Semantic search', 'Vector embeddings', 'Personalization', 'A/B testing', 'Analytics'],
    category: 'Search AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'AI-Powered Content Moderation System',
    description: 'Developed a multi-modal content moderation platform that analyzes text, images, and videos for harmful content. Uses ensemble models and active learning to continuously improve accuracy.',
    technologies: ['PyTorch', 'OpenCV', 'Transformers', 'FastAPI', 'Redis', 'PostgreSQL'],
    features: ['Multi-modal analysis', 'Real-time processing', 'Active learning', 'Custom policies', 'Appeal system'],
    category: 'Content AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Automated Code Review Assistant',
    description: 'Built an intelligent code review system that analyzes pull requests, identifies potential issues, suggests improvements, and ensures code quality standards. Integrates with GitHub and GitLab.',
    technologies: ['CodeT5', 'GitHub API', 'Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    features: ['Code analysis', 'Issue detection', 'Improvement suggestions', 'Quality metrics', 'CI/CD integration'],
    category: 'Code AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Smart Data Pipeline Orchestrator',
    description: 'Created an AI-driven data pipeline system that automatically optimizes ETL processes, predicts failures, and suggests performance improvements. Reduces data processing time by 60%.',
    technologies: ['Apache Airflow', 'MLflow', 'Python', 'Spark', 'Kafka', 'Kubernetes'],
    features: ['Auto-optimization', 'Failure prediction', 'Performance monitoring', 'Cost optimization', 'Scalable architecture'],
    category: 'Data AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Video Content Understanding Platform',
    description: 'Developed a comprehensive video analysis system that extracts key moments, generates summaries, and creates searchable transcripts. Used by media companies for content indexing and discovery.',
    technologies: ['OpenAI', 'Whisper', 'OpenCV', 'FastAPI', 'Redis', 'AWS S3'],
    features: ['Scene detection', 'Object recognition', 'Auto-transcription', 'Summary generation', 'Content tagging'],
    category: 'Video AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Personalized Learning Platform',
    description: 'Built an adaptive learning system that personalizes educational content based on student performance and learning patterns. Uses reinforcement learning to optimize learning paths and outcomes.',
    technologies: ['TensorFlow', 'React', 'Node.js', 'MongoDB', 'Redis', 'Docker'],
    features: ['Adaptive learning', 'Performance tracking', 'Content recommendation', 'Progress analytics', 'Gamification'],
    category: 'EdTech AI',
    filterTag: 'AI/ML',
  },
  {
    title: 'Financial Risk Assessment Engine',
    description: 'Developed an AI-powered risk assessment system for financial institutions that analyzes transaction patterns, detects anomalies, and predicts credit risks with 92% accuracy.',
    technologies: ['XGBoost', 'Python', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'],
    features: ['Fraud detection', 'Credit scoring', 'Risk modeling', 'Real-time analysis', 'Compliance reporting'],
    category: 'FinTech AI',
    filterTag: 'FinTech',
  },
  {
    title: 'Healthcare Diagnosis Assistant',
    description: 'Created an AI diagnostic support system that analyzes medical images and patient data to assist healthcare professionals in making accurate diagnoses. Implemented with strict privacy and compliance standards.',
    technologies: ['PyTorch', 'DICOM', 'FastAPI', 'PostgreSQL', 'Docker', 'HIPAA Compliance'],
    features: ['Medical imaging', 'Data analysis', 'Diagnosis support', 'Privacy protection', 'Clinical integration'],
    category: 'HealthTech AI',
    filterTag: 'HealthTech',
  },
];

const filterTags = ['All', 'FinTech', 'HealthTech', 'Agentic AI', 'Document AI', 'AI/ML'];

const INITIAL_SHOW = 8;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_SHOW);
  const hasMore = filteredProjects.length > INITIAL_SHOW;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="mb-12"
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
              Professional{' '}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {projects.length} production-ready GenAI & Agentic AI applications across FinTech,
              HealthTech, Civil Engineering, and more.
            </p>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-wrap gap-2 mb-12"
          >
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveFilter(tag); setShowAll(false); setExpandedCard(null); }}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeFilter === tag
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted'
                }`}
              >
                {activeFilter === tag && (
                  <motion.div
                    layoutId="projectFilter"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tag}</span>
              </button>
            ))}
          </motion.div>

          {/* Project cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 gap-5 mb-8"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const isExpanded = expandedCard === index;
                const techToShow = project.technologies.slice(0, 5);
                const featToShow = isExpanded ? project.features : project.features.slice(0, 3);

                return (
                  <motion.div
                    key={project.title}
                    layout
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    whileHover={{ y: -2 }}
                  >
                    <div className="p-6">
                      {/* Category + Featured badge */}
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs font-medium">
                          {project.category}
                        </Badge>
                        {project.featured && (
                          <span className="text-[10px] font-medium text-primary uppercase tracking-wider">Featured</span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-sm text-muted-foreground leading-relaxed mb-4 ${!isExpanded ? 'line-clamp-2' : ''}`}>
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {techToShow.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-muted text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && !isExpanded && (
                          <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-muted text-muted-foreground">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Expanded: features */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.technologies.length > 5 && (
                              <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.technologies.slice(5).map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-muted text-muted-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="space-y-1.5 mb-4">
                              {featToShow.map((f) => (
                                <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                                  {f}
                                </div>
                              ))}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                              {project.link ? (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-xs rounded-full"
                                  onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
                                >
                                  <ExternalLink className="h-3 w-3 mr-1.5" />
                                  Visit Site
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" className="text-xs rounded-full opacity-60" onClick={(e) => e.stopPropagation()}>
                                  <Github className="h-3 w-3 mr-1.5" />
                                  Private Repo
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs rounded-full"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                              >
                                <MessageSquare className="h-3 w-3 mr-1.5" />
                                Request Demo
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand hint */}
                      {!isExpanded && (
                        <p className="text-xs text-muted-foreground/60 mt-1">Click to expand</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Show more / less */}
          {hasMore && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-16"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    Show All {filteredProjects.length} Projects
                  </>
                )}
              </Button>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="rounded-xl border border-border bg-card/50 p-8 sm:p-12 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              These projects represent the breadth and depth of my Agentic AI & GenAI engineering expertise.
              Let's discuss how I can bring this experience to your next breakthrough project.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
