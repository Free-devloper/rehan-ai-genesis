import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, MessageSquare, Mic, FileText, Calendar, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Legal Document Chatbot",
      description: "Built a RAG-based chatbot that answers questions from legal and policy PDFs using OpenAI + FAISS + LangChain. Enables lawyers and legal professionals to quickly extract insights from complex documents.",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      technologies: ["OpenAI", "FAISS", "LangChain", "Python", "FastAPI"],
      features: ["Document parsing", "Vector search", "Context-aware answers", "Multi-document queries"],
      gradient: "bg-gradient-primary"
    },
    {
      title: "Voice-Based Meeting Summarizer",
      description: "Designed a voice-to-insight pipeline using Whisper + GPT to transcribe, summarize, and extract action items from raw audio; integrated with Slack for seamless team collaboration.",
      icon: <Mic className="h-8 w-8 text-accent" />,
      technologies: ["Whisper", "GPT-4", "Python", "Slack API", "Redis"],
      features: ["Real-time transcription", "Smart summarization", "Action item extraction", "Slack integration"],
      gradient: "bg-gradient-accent"
    },
    {
      title: "LangGraph Multi-Agent Assistant",
      description: "Created a task planner using LangGraph for autonomous agents that read documents, execute tasks, and schedule events. Demonstrates advanced agentic workflow capabilities.",
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      technologies: ["LangGraph", "LangChain", "OpenAI", "Python", "PostgreSQL"],
      features: ["Multi-agent coordination", "Task planning", "Document analysis", "Event scheduling"],
      gradient: "bg-gradient-neural"
    },
    {
      title: "Invoice Parser with LayoutLM",
      description: "Built a document intelligence system that extracts structured data from invoices using LayoutLM, OCR, and a FastAPI backend. Handles complex layouts and multiple invoice formats.",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      technologies: ["LayoutLM", "PyTorch", "FastAPI", "OCR", "MongoDB"],
      features: ["Layout understanding", "Data extraction", "Format recognition", "API integration"],
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Multilingual Policy Assistant",
      description: "Developed a RAG chatbot with translation layers for non-English users to interact with government policy documents in their native language, improving accessibility and understanding.",
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      technologies: ["OpenAI", "Translation APIs", "React", "ChromaDB", "Next.js"],
      features: ["Multi-language support", "Policy document search", "Real-time translation", "User-friendly interface"],
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Production-ready GenAI applications that solve real-world problems. 
              Each project demonstrates expertise in different aspects of AI development.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 border-0 shadow-card overflow-hidden"
              >
                <div className="md:flex">
                  {/* Project icon/visual */}
                  <div className={`md:w-1/4 p-8 ${project.gradient} flex items-center justify-center`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="md:w-3/4 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="opacity-60">
                          <Github className="h-4 w-4 mr-2" />
                          Private Repo
                        </Button>
                        <Button variant="outline" size="sm" className="opacity-60">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Contact for Demo
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center bg-gradient-secondary rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent just a portion of my work. Many are proprietary or under NDA. 
              I'd love to discuss how we can build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Let's Discuss Your Project
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Rehan AI Developer.pdf';
                  link.download = 'Rehan AI Developer.pdf';
                  link.click();
                }}
              >
                Download Full Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;