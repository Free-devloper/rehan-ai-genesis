import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, MapPin, Clock, Download, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Best for detailed project discussions",
      value: "rehanghafoor.official@gmail.com",
      action: "mailto:rehanghafoor.official@gmail.com",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Professional networking and updates",
      value: "linkedin.com/in/rehanroy",
      action: "https://www.linkedin.com/in/rehanroy",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Code samples and open source work",
      value: "github.com/free-devloper",
      action: "https://github.com/free-devloper",
      gradient: "bg-gradient-secondary"
    }
  ];

  const availability = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: "Location",
      value: "Available for remote work globally"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      label: "Availability",
      value: "Open to new opportunities"
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-primary" />,
      label: "Response Time",
      value: "Usually within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to build the future of AI together? I'm always excited to discuss 
              new projects, opportunities, and innovative ideas.
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 border-0 shadow-card cursor-pointer"
                onClick={() => window.open(method.action, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${method.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-primary">{method.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick info */}
          <div className="bg-muted/50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Quick Info</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {availability.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                  {item.icon}
                  <div>
                    <div className="text-sm font-medium text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center bg-gradient-neural rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Project?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Whether you need a full-stack AI application, want to integrate LLM capabilities 
              into your existing system, or are exploring the possibilities of GenAI, 
              I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('mailto:rehanghafoor.official@gmail.com?subject=AI Project Inquiry', '_blank')}
                className="group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Me an Email
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
                className="border-white/30 text-white hover:bg-white/20"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;