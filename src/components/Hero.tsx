import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Zap, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const codeLines = [
  'from langchain.agents import AgentExecutor',
  'from langchain_openai import ChatOpenAI',
  '',
  'llm = ChatOpenAI(model="gpt-4o")',
  'agent = create_react_agent(llm, tools)',
  '',
  'async def run_pipeline(query: str):',
  '    result = await agent.ainvoke({',
  '        "input": query,',
  '        "context": retrieve_docs(query)',
  '    })',
  '    return result["output"]',
];

const Hero = () => {
  const [displayedLines, setDisplayedLines] = useState<number>(0);

  useEffect(() => {
    if (displayedLines < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [displayedLines]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const headingWords = ['Building', 'Intelligent', 'AI', 'Systems'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-20" />

      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Full Stack AI Engineer
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mb-4"
            >
              Hello, I'm <span className="text-foreground font-medium">Muhammad Rehan Ghafoor</span>
            </motion.p>

            {/* Main headline with word animation */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] mb-6"
              variants={fadeInUp}
            >
              {headingWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={`inline-block mr-4 ${i >= 2 ? 'text-gradient' : ''}`}
                  initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10"
            >
              LLM Developer & Full Stack Engineer — Crafting production-ready
              GenAI solutions from voice to vector
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="rounded-full px-8 font-medium group"
                onClick={() => scrollToSection('projects')}
              >
                <Zap className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-medium"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/RehanAIDeveloper.pdf';
                  link.download = 'Rehan AI Developer.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Code editor window */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
              {/* Editor title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  agent_pipeline.py
                </span>
              </div>
              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={i < displayedLines ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex"
                  >
                    <span className="w-8 text-right mr-4 text-muted-foreground/40 select-none text-xs leading-relaxed">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">
                      {line.includes('from') || line.includes('import') ? (
                        <>
                          <span className="text-primary">{line.split(' ')[0]}</span>{' '}
                          {line.slice(line.indexOf(' ') + 1)}
                        </>
                      ) : line.includes('async def') || line.includes('def ') ? (
                        <>
                          <span className="text-primary">
                            {line.includes('async') ? 'async def' : 'def'}
                          </span>{' '}
                          <span className="text-foreground">
                            {line.replace('async def ', '').replace('def ', '')}
                          </span>
                        </>
                      ) : line.includes('return') ? (
                        <>
                          <span className="text-primary">{'    return'}</span>{' '}
                          {line.replace('    return ', '')}
                        </>
                      ) : line.includes('await') ? (
                        <>
                          {'    result = '}
                          <span className="text-primary">await</span>{' '}
                          {line.replace('    result = await ', '')}
                        </>
                      ) : (
                        line
                      )}
                    </span>
                  </motion.div>
                ))}
                {displayedLines < codeLines.length && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary ml-12"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
