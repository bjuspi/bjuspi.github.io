import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Scala", "Python", "TypeScript", "SQL", "C", "C++", "Shell Scripting", "Terraform"],
  },
  {
    title: "Technologies & Frameworks",
    skills: ["AWS", "GCP", "Docker", "Spring", "Linux", "Akka", "Kubernetes", "CircleCI", "Airflow", "Kafka"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Cassandra", "MongoDB"],
  },
];

const certifications = [
  "Linux Foundation Certified IT Associate (LFCA)",
  "AWS Certified Cloud Practitioner",
  "Google IT Support Professional Certificate",
];

const awards = [
  {
    label: "2018 IPhO Bronze Medal — Rank 120 out of 412 contestants from 90 countries",
    href: "https://www.thejakartapost.com/youth/2018/08/03/indonesian-students-among-winners-at-international-physics-olympiad.html",
  },
  {
    label: "2018 APhO Silver Medal — Representative for the Asian Physics Olympiad in Hanoi, Vietnam",
    href: "https://www.yayasansimetri.or.id/indonesia-meraih-medali-perak-di-olimpiade-fisika-asia-di-hanoi-vietnam/",
  },
  {
    label: "2019 NTU Dean's List — Awarded to top 5% of the cohort",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-center mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="text-muted-foreground text-sm leading-relaxed">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Awards</h3>
            </div>
            <ul className="space-y-3">
              {awards.map((award) => (
                <li key={award.label} className="text-muted-foreground text-sm leading-relaxed">
                  {award.href ? (
                    <a href={award.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-4">
                      {award.label}
                    </a>
                  ) : (
                    award.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
