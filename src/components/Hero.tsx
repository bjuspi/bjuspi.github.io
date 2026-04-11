import { Github, Linkedin, Mail, BookText } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="shrink-0">
            <img
              src="https://avatars.githubusercontent.com/u/47484592"
              alt="Bryant Juspi"
              className="w-40 h-40 rounded-full object-cover border-2 border-primary/20"
            />
          </div>

          <div className="text-center md:text-left space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bryant Juspi
            </h1>
            <p className="text-lg text-muted-foreground">
              <span className="font-medium text-foreground">Senior Software Engineer.</span>{" "}
              Endowus — Trading & Cash Management
            </p>
            <p className="text-base text-muted-foreground">
              <span className="font-medium text-foreground">B.Eng Mechanical Engineering.</span>{" "}
              Nanyang Technological University
            </p>

            <div className="flex gap-3 justify-center md:justify-start pt-2">
              <a
                href="mailto:bjuspi@outlook.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                [bjuspi@outlook.com]
              </a>
              <a
                href="https://github.com/bjuspi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                [github]
              </a>
              <a
                href="https://linkedin.com/in/bjuspi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                [linkedin]
              </a>
              <a
                href="https://medium.com/@bryantj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                [medium]
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a software engineer specializing in high-performance distributed architectures and trading systems. I dig deep into hard problems, find what others miss, and build systems that hold up under pressure.
          </p>
          <p>
            My background spans robotics, computer vision, and financial systems — from building{" "}
            <a href="#publications" className="text-primary hover:underline">SLAM navigation systems</a> and{" "}
            <a href="#projects" className="text-primary hover:underline">game-playing robot arms</a> at NTU's Robotics Research Centre, to designing transaction processing platforms that handle millions in AUM at{" "}
            <a href="#experience" className="text-primary hover:underline">Endowus</a>.
          </p>
          <p>
            I'm also a huge proponent of open-source code — I believe the best way to push technology forward is by building in the open and sharing knowledge freely. Outside of work, I'm a huge fan of martial arts.
          </p>
        </div>
      </div>
    </section>
  );
};
