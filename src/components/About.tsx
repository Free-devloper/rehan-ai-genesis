import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Brain, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Full Stack Development",
      description: "React, Node.js, Python, FastAPI - Building complete solutions from frontend to backend"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI/ML Engineering",
      description: "LangChain, OpenAI, Whisper, LayoutLM - Creating intelligent, production-ready AI systems"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Vector Databases",
      description: "FAISS, ChromaDB, Meilisearch - Building powerful RAG pipelines and knowledge systems"
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Production Ready",
      description: "Docker, CI/CD, Cloud deployment - Shipping scalable GenAI applications to real users"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about building LLM-native products that solve real-world problems through 
              intelligent automation and cutting-edge AI technology.
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Full Stack AI Developer with 5+ Years of Experience
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I specialize in building intelligent, production-ready AI systems that transform 
                  how businesses handle document processing, voice automation, and knowledge management.
                </p>
                <p>
                  My expertise spans the entire AI development lifecycle - from designing RAG pipelines 
                  with LangChain and LangGraph to deploying scalable GenAI applications using modern 
                  cloud infrastructure.
                </p>
                <p>
                  With a deep understanding of both traditional software engineering and cutting-edge 
                  AI technologies, I bridge the gap between research and production, creating 
                  LLM-native solutions that actually work in the real world.
                </p>
              </div>

              {/* Key achievements */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Production GenAI Apps</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years in AI/ML</div>
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 shadow-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special focus areas */}
          <div className="bg-gradient-secondary rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Specialized in GenAI Applications</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Passionate about building LLM-native products, especially for <strong>document parsing</strong>, 
              <strong> speech-to-text</strong>, and <strong>knowledge automation</strong>. 
              I combine deep technical expertise with startup-ready execution to deliver AI solutions 
              that create real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;