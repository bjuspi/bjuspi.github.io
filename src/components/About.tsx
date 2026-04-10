import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Lightbulb, Wrench, Compass } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Researcher",
    description:
      "I approach every problem by understanding it deeply first. I dig into the fundamentals before jumping to solutions — whether it's studying a system's failure modes, reading papers on distributed consensus, or profiling database queries to find the real bottleneck.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "I don't just fix symptoms — I trace problems to their root and build solutions that eliminate entire categories of issues. I look for the leverage point where a single well-placed change creates outsized impact.",
  },
  {
    icon: Wrench,
    title: "Engineer",
    description:
      "I care about systems that are reliable, not just clever. I build things that hold up under pressure — with clean interfaces, clear ownership, and the kind of operational discipline that lets teams move fast without breaking things.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What I Bring</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three things I've built my career around
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="group border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-fit">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-card border border-border text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Compass className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Areas I'm Drawn To</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Medical", "Robotics", "Computer Vision", "Trading"].map((interest) => (
              <Badge
                key={interest}
                variant="secondary"
                className="text-sm py-2 px-5 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-default"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
