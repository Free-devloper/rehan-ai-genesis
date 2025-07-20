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
  Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      gradient: "bg-gradient-primary",
      skills: ["Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: <Palette className="h-6 w-6" />,
      gradient: "bg-gradient-accent",
      skills: ["React", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      gradient: "bg-gradient-secondary",
      skills: ["FastAPI", "Node.js", "Django", "Express.js"]
    },
    {
      title: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      gradient: "bg-gradient-neural",
      skills: ["OpenAI", "Whisper", "Hugging Face", "LangChain", "LangGraph", "LayoutLM", "PyTorch"]
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      gradient: "bg-gradient-primary",
      skills: ["Docker", "GitHub Actions", "Supabase", "Meilisearch", "FAISS", "ChromaDB"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      gradient: "bg-gradient-accent",
      skills: ["PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Cloud",
      icon: <Cloud className="h-6 w-6" />,
      gradient: "bg-gradient-secondary",
      skills: ["AWS", "GCP", "Coolify", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern AI applications - from frontend experiences 
              to intelligent backend systems and production deployments.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 border-0 shadow-card overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
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
          <div className="bg-gradient-neural rounded-2xl p-8 text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">AI/ML Specialization</h3>
            </div>
            <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed mb-6">
              Deep expertise in modern AI frameworks and tools that power next-generation applications. 
              From building RAG pipelines with LangChain to deploying voice-enabled systems with Whisper, 
              I create intelligent solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["RAG Pipelines", "LLM Fine-tuning", "Vector Databases", "Document AI", "Voice Processing", "Agentic Workflows"].map((specialty, index) => (
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
    </section>
  );
};

export default Skills;