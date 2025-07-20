import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, MessageSquare, Mic, FileText, Calendar, Globe, Shield, Bot, Search, Brain, Cpu, Database, Video, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const projects = [
    {
      title: "AI Legal Document Chatbot",
      description: "Built a RAG-based chatbot that answers questions from legal and policy PDFs using OpenAI + FAISS + LangChain. Enables lawyers and legal professionals to quickly extract insights from complex documents with 95% accuracy.",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      technologies: ["OpenAI", "FAISS", "LangChain", "Python", "FastAPI", "PostgreSQL"],
      features: ["Document parsing", "Vector search", "Context-aware answers", "Multi-document queries", "Citation tracking"],
      gradient: "bg-gradient-primary",
      category: "Document AI"
    },
    {
      title: "Voice-Based Meeting Summarizer",
      description: "Designed a voice-to-insight pipeline using Whisper + GPT to transcribe, summarize, and extract action items from raw audio; integrated with Slack for seamless team collaboration and productivity tracking.",
      icon: <Mic className="h-8 w-8 text-accent" />,
      technologies: ["Whisper", "GPT-4", "Python", "Slack API", "Redis", "React"],
      features: ["Real-time transcription", "Smart summarization", "Action item extraction", "Slack integration", "Speaker identification"],
      gradient: "bg-gradient-accent",
      category: "Voice AI"
    },
    {
      title: "LangGraph Multi-Agent Assistant",
      description: "Created a task planner using LangGraph for autonomous agents that read documents, execute tasks, and schedule events. Demonstrates advanced agentic workflow capabilities with intelligent task routing.",
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      technologies: ["LangGraph", "LangChain", "OpenAI", "Python", "PostgreSQL", "Docker"],
      features: ["Multi-agent coordination", "Task planning", "Document analysis", "Event scheduling", "Workflow automation"],
      gradient: "bg-gradient-neural",
      category: "Agentic AI"
    },
    {
      title: "Invoice Parser with LayoutLM",
      description: "Built a document intelligence system that extracts structured data from invoices using LayoutLM, OCR, and a FastAPI backend. Handles complex layouts and multiple invoice formats with 98% accuracy.",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      technologies: ["LayoutLM", "PyTorch", "FastAPI", "OCR", "MongoDB", "Docker"],
      features: ["Layout understanding", "Data extraction", "Format recognition", "API integration", "Batch processing"],
      gradient: "bg-gradient-secondary",
      category: "Document AI"
    },
    {
      title: "Multilingual Policy Assistant",
      description: "Developed a RAG chatbot with translation layers for non-English users to interact with government policy documents in their native language, improving accessibility and understanding across 25+ languages.",
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      technologies: ["OpenAI", "Translation APIs", "React", "ChromaDB", "Next.js", "Vercel"],
      features: ["Multi-language support", "Policy document search", "Real-time translation", "User-friendly interface", "Accessibility features"],
      gradient: "bg-gradient-primary",
      category: "RAG Systems"
    },
    {
      title: "Enterprise Security Threat Analyzer",
      description: "Developed an AI-powered security system that analyzes network logs, identifies potential threats, and generates automated incident reports. Integrates with SIEM tools and provides real-time threat intelligence.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      technologies: ["TensorFlow", "Elastic Stack", "Python", "Kafka", "Redis", "Grafana"],
      features: ["Threat detection", "Log analysis", "Real-time monitoring", "Automated reports", "SIEM integration"],
      gradient: "bg-gradient-accent",
      category: "Security AI"
    },
    {
      title: "Intelligent Customer Support Bot",
      description: "Built a sophisticated customer support chatbot using RAG architecture that handles 80% of customer queries automatically. Features sentiment analysis, escalation logic, and CRM integration.",
      icon: <Bot className="h-8 w-8 text-indigo-500" />,
      technologies: ["LangChain", "Pinecone", "OpenAI", "React", "Node.js", "PostgreSQL"],
      features: ["Intent recognition", "Sentiment analysis", "Auto-escalation", "CRM integration", "Analytics dashboard"],
      gradient: "bg-gradient-neural",
      category: "Conversational AI"
    },
    {
      title: "Semantic Search Engine for E-commerce",
      description: "Created a next-generation product search engine using vector embeddings and semantic similarity. Improved search relevance by 40% and increased conversion rates through better product discovery.",
      icon: <Search className="h-8 w-8 text-orange-500" />,
      technologies: ["Sentence Transformers", "Elasticsearch", "FastAPI", "React", "AWS", "Docker"],
      features: ["Semantic search", "Vector embeddings", "Personalization", "A/B testing", "Analytics"],
      gradient: "bg-gradient-secondary",
      category: "Search AI"
    },
    {
      title: "AI-Powered Content Moderation System",
      description: "Developed a multi-modal content moderation platform that analyzes text, images, and videos for harmful content. Uses ensemble models and active learning to continuously improve accuracy.",
      icon: <Brain className="h-8 w-8 text-pink-500" />,
      technologies: ["PyTorch", "OpenCV", "Transformers", "FastAPI", "Redis", "PostgreSQL"],
      features: ["Multi-modal analysis", "Real-time processing", "Active learning", "Custom policies", "Appeal system"],
      gradient: "bg-gradient-primary",
      category: "Content AI"
    },
    {
      title: "Automated Code Review Assistant",
      description: "Built an intelligent code review system that analyzes pull requests, identifies potential issues, suggests improvements, and ensures code quality standards. Integrates with GitHub and GitLab.",
      icon: <Cpu className="h-8 w-8 text-cyan-500" />,
      technologies: ["CodeT5", "GitHub API", "Python", "FastAPI", "Docker", "PostgreSQL"],
      features: ["Code analysis", "Issue detection", "Improvement suggestions", "Quality metrics", "CI/CD integration"],
      gradient: "bg-gradient-accent",
      category: "Code AI"
    },
    {
      title: "Smart Data Pipeline Orchestrator",
      description: "Created an AI-driven data pipeline system that automatically optimizes ETL processes, predicts failures, and suggests performance improvements. Reduces data processing time by 60%.",
      icon: <Database className="h-8 w-8 text-teal-500" />,
      technologies: ["Apache Airflow", "MLflow", "Python", "Spark", "Kafka", "Kubernetes"],
      features: ["Auto-optimization", "Failure prediction", "Performance monitoring", "Cost optimization", "Scalable architecture"],
      gradient: "bg-gradient-neural",
      category: "Data AI"
    },
    {
      title: "Video Content Understanding Platform",
      description: "Developed a comprehensive video analysis system that extracts key moments, generates summaries, and creates searchable transcripts. Used by media companies for content indexing and discovery.",
      icon: <Video className="h-8 w-8 text-purple-600" />,
      technologies: ["OpenAI", "Whisper", "OpenCV", "FastAPI", "Redis", "AWS S3"],
      features: ["Scene detection", "Object recognition", "Auto-transcription", "Summary generation", "Content tagging"],
      gradient: "bg-gradient-secondary",
      category: "Video AI"
    },
    {
      title: "Personalized Learning Platform",
      description: "Built an adaptive learning system that personalizes educational content based on student performance and learning patterns. Uses reinforcement learning to optimize learning paths and outcomes.",
      icon: <BookOpen className="h-8 w-8 text-amber-500" />,
      technologies: ["TensorFlow", "React", "Node.js", "MongoDB", "Redis", "Docker"],
      features: ["Adaptive learning", "Performance tracking", "Content recommendation", "Progress analytics", "Gamification"],
      gradient: "bg-gradient-primary",
      category: "EdTech AI"
    },
    {
      title: "Financial Risk Assessment Engine",
      description: "Developed an AI-powered risk assessment system for financial institutions that analyzes transaction patterns, detects anomalies, and predicts credit risks with 92% accuracy.",
      icon: <Shield className="h-8 w-8 text-emerald-500" />,
      technologies: ["XGBoost", "Python", "Kafka", "PostgreSQL", "Docker", "Kubernetes"],
      features: ["Fraud detection", "Credit scoring", "Risk modeling", "Real-time analysis", "Compliance reporting"],
      gradient: "bg-gradient-accent",
      category: "FinTech AI"
    },
    {
      title: "Healthcare Diagnosis Assistant",
      description: "Created an AI diagnostic support system that analyzes medical images and patient data to assist healthcare professionals in making accurate diagnoses. Implemented with strict privacy and compliance standards.",
      icon: <Brain className="h-8 w-8 text-rose-500" />,
      technologies: ["PyTorch", "DICOM", "FastAPI", "PostgreSQL", "Docker", "HIPAA Compliance"],
      features: ["Medical imaging", "Data analysis", "Diagnosis support", "Privacy protection", "Clinical integration"],
      gradient: "bg-gradient-neural",
      category: "HealthTech AI"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              15 production-ready GenAI applications across diverse industries. 
              Each project demonstrates expertise in different aspects of AI development, from document processing to real-time analytics.
            </p>
          </div>

          {/* Projects grid */}
          <div ref={projectsRef} className={`grid gap-8 mb-16 transition-all duration-1000 ${projectsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 border-0 shadow-card overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:flex">
                  {/* Project icon/visual */}
                  <div className={`md:w-1/4 p-8 ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div className="mt-4 text-center">
                        <Badge variant="outline" className="border-white/30 text-white text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="md:w-3/4 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="outline" 
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 animate-pulse"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="opacity-70 hover:opacity-100 transition-opacity">
                          <Github className="h-4 w-4 mr-2" />
                          Private Repository
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="opacity-70 hover:opacity-100 transition-opacity"
                          onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Request Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced call to action */}
          <div ref={ctaRef} className={`text-center bg-gradient-neural rounded-2xl p-12 text-white relative overflow-hidden transition-all duration-1000 ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h3>
              <p className="text-gray-200 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                These 15 projects represent the breadth and depth of my AI engineering expertise. 
                Many are proprietary or under NDA, but demonstrate real-world impact across industries. 
                Let's discuss how I can bring this experience to your next breakthrough project.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-gray-300">Production Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <div className="text-sm text-gray-300">Industry Verticals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="glass" 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group hover-lift"
                >
                  <MessageSquare className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Discuss Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Rehan AI Developer.pdf';
                    link.download = 'Rehan AI Developer.pdf';
                    link.click();
                  }}
                  className="border-white/30 text-white hover:bg-white/20 hover-glow"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download Portfolio PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;