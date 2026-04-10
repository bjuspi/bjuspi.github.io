import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Endowus",
    roles: [
      {
        title: "Senior Software Engineer",
        team: "Trading & Cash Management",
        period: "Oct 2025 - Present",
        highlights: [
          "Architected Airflow platform scalability improvements with parallel DAG execution, reducing infrastructure costs by 50% while increasing throughput by 3x.",
          "Led technical architecture for Singapore CPF SA product launch, designing high-concurrency transaction processing system that onboarded S$20M+ AUM.",
          "Mentored junior engineers and guided cross-functional collaboration across trading, operations, and compliance teams.",
        ],
      },
      {
        title: "Software Engineer II",
        team: "Trading & Cash Management",
        period: "Apr 2024 - Oct 2025",
        highlights: [
          "Resolved critical Cassandra performance bottleneck, reducing quarterly access fee processing from 12 hours to 2 hours.",
          "Led cost optimization measures that drove down Cassandra billings by 300% through entity size reduction.",
          "Led Hong Kong trailer rebate distribution project which has given back more than HK$1M+ to date.",
          "Led Auto Funding Investment project increasing recurring investment funded success rate to nearly 90%.",
        ],
      },
      {
        title: "Software Engineer I",
        team: "Trading & Cash Management",
        period: "Jun 2022 - Apr 2024",
        highlights: [
          "Reduced Cassandra billing cost by 400% by applying pub/sub model and tuning event processor parallelism.",
          "Delivered cross-team workflow management platform using Apache Airflow, enabling 15+ teams to schedule 200+ daily workflows with 99.5% SLA compliance.",
          "Improved CI/CD pipeline by decommissioning Helm Charts in favor of GitOps pattern.",
          "Integrated repositories with SonarQube, Dependency-Track, and Jira for vulnerability detection, code coverage reporting, and quality gates.",
          "Developed key platform features: deposit, direct debit, withdrawal, multiple linked bank accounts, access fees, currency conversion, settlement, and asset transfer.",
        ],
      },
    ],
  },
  {
    company: "Hiverlab",
    roles: [
      {
        title: "Data Engineer",
        period: "Jan 2021 - May 2021",
        highlights: [
          "Built HTC Vive driver using SteamVR SDK to control robots in real time across 5G network.",
          "Led data infrastructure project with automated pipelines integrating third-party SaaS using Google Cloud Platform.",
          "Designed and developed AR app for robotic simulations using Unity AR Foundation.",
        ],
      },
    ],
  },
  {
    company: "Thales",
    roles: [
      {
        title: "System Design Engineer Intern",
        period: "May 2019 - Aug 2019",
        highlights: [
          "Developed Python scripts for log analysis using Pandas and NumPy for the Transport department.",
        ],
      },
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3+ years building trading systems and distributed platforms
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.company} className="border-border hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{exp.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {exp.roles.map((role) => (
                  <div key={role.period} className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                    <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-primary" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold">{role.title}</h3>
                        {role.team && (
                          <Badge variant="secondary" className="mt-1">{role.team}</Badge>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{role.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {role.highlights.map((highlight, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
