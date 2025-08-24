import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Zap, Brain, Code, Database, Cpu } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-neural opacity-20 animate-gradient"></div>
      
      {/* Floating particles with professional animations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code className="absolute top-1/4 left-1/4 h-8 w-8 text-primary/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Database className="absolute top-1/3 right-1/4 h-6 w-6 text-accent/20 animate-float" style={{ animationDelay: '1.2s' }} />
        <Cpu className="absolute bottom-1/3 left-1/3 h-10 w-10 text-primary/15 animate-float" style={{ animationDelay: '2s' }} />
        <Brain className="absolute top-1/2 right-1/3 h-7 w-7 text-accent/25 animate-float" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting with animation */}
          <div className={`flex items-center justify-center mb-6 transition-all duration-1000 ${mounted ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0 translate-y-8'}`}>
            <Sparkles className="h-6 w-6 text-accent mr-2 animate-pulse-glow" />
            <span className="text-accent font-medium">Hello, I'm Muhammad Rehan Ghafoor</span>
            <Sparkles className="h-6 w-6 text-accent ml-2 animate-pulse-glow" />
          </div>

          {/* Main title with staggered animation */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 ${mounted ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0 translate-y-8'}`}>
            <span className="block">Building Intelligent</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent animate-gradient">
              AI Systems
            </span>
          </h1>

          {/* Tagline with animation */}
          <p className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${mounted ? 'animate-fade-in-up animate-stagger-3' : 'opacity-0 translate-y-8'}`}>
            LLM Developer & Full Stack Engineer — Crafting production-ready GenAI solutions 
            from voice to vector
          </p>

          {/* Stats with counter animation */}
          <div className={`flex justify-center items-center space-x-8 mb-12 text-white transition-all duration-1000 ${mounted ? 'animate-fade-in-up animate-stagger-4' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center group hover-lift">
              <div className="text-3xl font-bold text-accent animate-counter">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-400"></div>
            <div className="text-center group hover-lift">
              <div className="text-3xl font-bold text-accent animate-counter">10+</div>
              <div className="text-sm text-gray-300">GenAI Apps Built</div>
            </div>
            <div className="w-px h-12 bg-gray-400"></div>
            <div className="text-center group hover-lift">
              <div className="flex items-center justify-center">
                <Brain className="h-8 w-8 text-accent animate-pulse-glow" />
              </div>
              <div className="text-sm text-gray-300">AI Specialist</div>
            </div>
          </div>

          {/* CTAs with enhanced animations */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${mounted ? 'animate-fade-in-up animate-stagger-5' : 'opacity-0 translate-y-8'}`}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group hover-lift"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore My Work
            </Button>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => window.open('https://chat.roytechworkforce.com/', '_blank')}
              className="group hover-glow"
            >
              <Brain className="mr-2 h-5 w-5 group-hover:pulse transition-all duration-300" />
              Try Live Chatbot
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="hover-glow"
            >
              Let's Connect
            </Button>
          </div>

          {/* Scroll indicator with bounce animation */}
          <div 
            className={`cursor-pointer text-white animate-bounce-slow transition-all duration-1000 ${mounted ? 'animate-fade-in animate-stagger-5' : 'opacity-0'}`}
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6 mx-auto hover-glow" />
            <p className="text-sm mt-2">Scroll to discover</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;