export const Contact = () => {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-light text-muted-foreground mb-16">Get in Touch</h2>

        <div className="space-y-8">
          <a
            href="mailto:your.email@example.com"
            className="block text-2xl md:text-3xl font-light hover:text-primary transition-colors"
          >
            your.email@example.com
          </a>
          
          <div className="flex gap-8 text-sm font-light">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
