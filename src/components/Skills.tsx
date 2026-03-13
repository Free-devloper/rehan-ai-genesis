import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Palette, 
  Server, 
  Brain, 
  Wrench, 
  Database,
  Cloud,
  Cpu,
  GitBranch,
  Network
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: specialRef, isVisible: specialVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Agentic AI & Frameworks",
      icon: <Network className="h-6 w-6" />,
      gradient: "bg-gradient-neural",
      skills: ["LangChain", "LangGraph", "Agent Development Kits (ADKs)", "Multi-agent Orchestration", "Autonomous Workflow Design", "Agent Memory Management", "LlamaIndex"]
    },
    {
      title: "Production ML & Deployment",
      icon: <Cloud className="h-6 w-6" />,
      gradient: "bg-gradient-primary",
      skills: ["AWS SageMaker", "AWS Lambda", "ECS / ECR", "Docker", "Kubernetes", "CI/CD Pipelines", "Model Deployment", "MLOps", "API Development", "Microservices"]
    },
    {
      title: "AI/ML Technologies",
      icon: <Brain className="h-6 w-6" />,
      gradient: "bg-gradient-accent",
      skills: ["Deep Learning", "Computer Vision", "NLP", "PyTorch", "TensorFlow / Keras", "NLTK", "Scikit-Learn", "OpenAI", "Whisper", "Hugging Face", "LayoutLM", "Model Optimization"]
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-6 w-6" />,
      gradient: "bg-gradient-secondary",
      skills: ["Python", "SQL", "MySQL", "ETL Pipelines", "Data Integrity Monitoring", "DBT", "Big Data Processing", "Feature Engineering", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Wrench className="h-6 w-6" />,
      gradient: "bg-gradient-neural",
      skills: ["Containerization", "CloudWatch", "Distributed Systems", "Event-Driven Architecture", "Production Debugging", "Scalability Optimization", "GitHub Actions", "FAISS", "ChromaDB"]
    },
    {
      title: "Frontend",
      icon: <Palette className="h-6 w-6" />,
      gradient: "bg-gradient-accent",
      skills: ["React", "Tailwind CSS", "Next.js", "TypeScript", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      gradient: "bg-gradient-primary",
      skills: ["FastAPI", "Node.js", "Django", "Express.js", "Supabase", "Meilisearch"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A production-grade toolkit spanning agentic AI orchestration, MLOps, data engineering, 
              and full-stack development — built for real-world deployment at scale.
            </p>
          </div>

          {/* Skills grid */}
          <div ref={skillsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${skillsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 border-0 shadow-card overflow-hidden"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                      {category.icon}
                    </div>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured technologies */}
          <div ref={specialRef} className={`bg-gradient-neural rounded-2xl p-8 text-center text-white relative overflow-hidden transition-all duration-1000 ${specialVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Cpu className="h-8 w-8 mr-3 animate-spin-slow" />
                <h3 className="text-2xl font-bold">Agentic AI Specialization</h3>
              </div>
              <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6">
                Deep expertise in multi-agent orchestration, autonomous workflow design, and production-grade 
                LLM deployment. From LangGraph agentic pipelines to MLOps on AWS SageMaker, I build intelligent 
                systems that operate autonomously at enterprise scale across fintech, health, and engineering domains.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Multi-Agent Systems", "RAG Pipelines", "LLM Fine-tuning", "Vector Databases", "Document AI", "Voice Processing", "Agentic Workflows", "MLOps at Scale"].map((specialty, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/20 transition-colors"
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
