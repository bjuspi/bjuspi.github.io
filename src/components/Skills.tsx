const skills = [
  "React", "TypeScript", "Node.js", "Next.js", 
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Python",
  "Docker", "AWS", "Git", "REST APIs"
];

export const Skills = () => {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-light text-muted-foreground mb-16">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
          {skills.map((skill) => (
            <span key={skill} className="text-sm font-light text-foreground/80">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
