import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-12 animate-in fade-in duration-1000">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight">
            Your Name
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Full-Stack Developer
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <button
          onClick={scrollToProjects}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
        >
          View Work ↓
        </button>
      </div>
    </section>
  );
};
