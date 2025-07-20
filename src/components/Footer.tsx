import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Muhammad Rehan Ghafoor
              </div>
              <p className="text-muted-foreground text-sm">
                Full Stack AI Engineer & LLM Developer
              </p>
            </div>

            {/* Quick links */}
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Skills
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a 
                  href="mailto:rehanghafoor.official@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/free-devloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rehanroy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center">
              © {currentYear} Muhammad Rehan Ghafoor. Built with
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;