import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Your Name",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername",
  },
];

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.label}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary cursor-pointer"
              >
                <CardContent className="p-6">
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      <p className="font-medium">{method.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
            asChild
          >
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Me a Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
