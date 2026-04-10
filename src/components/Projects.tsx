import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BookText } from "lucide-react";

const projects = [
  {
    title: "Stair-Climbing Robot Navigation",
    description: "Final year project developing a SLAM system for stair-climbing robots, enabling indoor localization and navigation in narrow spaces.",
    image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&h=600&fit=crop",
    tech: ["C++", "SLAM", "Object Detection", "CMake"],
    github: "https://github.com/bjuspi/FYP_A025",
    article: "https://hdl.handle.net/10356/158947",
  },
  {
    title: "GammaGo",
    description: "An interactive go game system that integrates image recognition with robot arm control using Gomoku as the game algorithm.",
    image: "https://user-images.githubusercontent.com/47680904/158308089-48b26049-3eb7-43ec-87d3-ab005eae93a7.jpg",
    tech: ["Python", "ROS", "Computer Vision", "MoveIt"],
    github: "https://github.com/bjuspi/GammaGo",
    article: "https://medium.com/@bryantj/gammago-part-1-vision-system-45611cb566f1",
  },
  {
    title: "Neural Network Equity Trading",
    description: "Machine learning pipeline for predicting equity market movements, with data acquisition, feature engineering, and model training.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    tech: ["Python", "Jupyter", "Machine Learning", "Data Science"],
    github: "https://github.com/bjuspi/nn_equity_trading",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.article && (
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a href={project.article} target="_blank" rel="noopener noreferrer">
                        <BookText className="h-4 w-4 mr-2" />
                        Article
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
