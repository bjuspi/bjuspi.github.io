import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Payment integration, inventory management, and admin dashboard",
    year: "2024",
    link: "https://demo.example.com",
  },
  {
    title: "Task Management App",
    description: "Real-time collaboration tool with team chat and analytics",
    year: "2024",
    link: "https://demo.example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive forecasts with maps and location-based alerts",
    year: "2023",
    link: "https://demo.example.com",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-light text-muted-foreground mb-16">Selected Work</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start justify-between gap-8 py-6 border-b border-border/50 hover:border-foreground/20 transition-colors">
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-light group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-light">{project.year}</span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
