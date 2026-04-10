import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Bryant Juspi. Built with React & Tailwind CSS</p>
      </footer>
    </main>
  );
};

export default Index;
