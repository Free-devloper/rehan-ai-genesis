import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Zap, Brain } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
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
      <div className="absolute inset-0 bg-gradient-neural opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-accent mr-2 animate-pulse" />
            <span className="text-accent font-medium">Hello, I'm Muhammad Rehan Ghafoor</span>
            <Sparkles className="h-6 w-6 text-accent ml-2 animate-pulse" />
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="block">Building Intelligent</span>
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              AI Systems
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            LLM Developer & Full Stack Engineer — Crafting production-ready GenAI solutions 
            from voice to vector
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-12 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-400"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10+</div>
              <div className="text-sm text-gray-300">GenAI Apps Built</div>
            </div>
            <div className="w-px h-12 bg-gray-400"></div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Brain className="h-8 w-8 text-accent" />
              </div>
              <div className="text-sm text-gray-300">AI Specialist</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore My Work
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>

          {/* Scroll indicator */}
          <div 
            className="cursor-pointer text-white animate-bounce"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
            <p className="text-sm mt-2">Scroll to discover</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;