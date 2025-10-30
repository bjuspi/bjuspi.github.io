import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS</p>
      </footer>
    </main>
  );
};

export default Index;
