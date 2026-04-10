import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, GraduationCap } from "lucide-react";

const publications = [
  {
    title: "Navigation and Localization for Stair-Climbing Robot in Narrow Space",
    type: "Final Year Project (FYP)",
    authors: "Juspi, Bryant",
    supervisor: "Prof. Chen I-Ming",
    institution: "Nanyang Technological University",
    school: "School of Mechanical and Aerospace Engineering",
    researchCentre: "Robotics Research Centre",
    year: "2022",
    abstract:
      "Researched and designed an indoor navigation SLAM system enabling robots to localize and navigate around stairs. Studied suitable object detection models balancing inference speed and accuracy for integration with the SLAM system.",
    subjects: ["Mechatronics", "Computer Vision", "SLAM"],
    citation:
      "Juspi, B. (2022). Navigation and localization for stair-climbing robot in narrow space. Final Year Project (FYP), Nanyang Technological University, Singapore.",
    url: "https://hdl.handle.net/10356/158947",
    ntuUrl: "https://dr.ntu.edu.sg/entities/publication/5d347e75-5e33-4e5d-83a9-4c27751b4d7a",
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research work published through NTU's Robotics Research Centre
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub) => (
            <Card key={pub.title} className="border-border hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    {pub.type}
                  </Badge>
                  <Badge variant="secondary">{pub.year}</Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{pub.title}</CardTitle>
                <CardDescription className="space-y-1">
                  <p>{pub.institution} &middot; {pub.school}</p>
                  <p>Supervisor: {pub.supervisor} &middot; {pub.researchCentre}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{pub.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary" className="bg-secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground italic">{pub.citation}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href={pub.ntuUrl} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="h-4 w-4 mr-2" />
                      NTU Repository
                    </a>
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Handle.net
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
