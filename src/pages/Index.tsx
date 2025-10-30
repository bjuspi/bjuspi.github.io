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
      
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-light text-muted-foreground">
            © {new Date().getFullYear()} Your Name
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
