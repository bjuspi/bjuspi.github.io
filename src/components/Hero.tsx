import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, BookText } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] opacity-5" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-in fade-in duration-1000">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Bryant Juspi
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Researcher. Problem Solver. Engineer.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto">
            I dig deep into hard problems, find what others miss, and build systems that hold up under pressure.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <a
            href="https://github.com/bjuspi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/bjuspi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://medium.com/@bryantj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
          >
            <BookText className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
