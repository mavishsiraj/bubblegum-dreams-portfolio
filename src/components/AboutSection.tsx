import { useEffect, useRef, useState } from "react";
import { Code2, Database, Globe, Sparkles, Cpu, Cloud } from "lucide-react";

const skills = [
  { name: "C++", icon: Code2, color: "text-primary" },
  { name: "React", icon: Globe, color: "text-secondary" },
  { name: "Node.js", icon: Cpu, color: "text-accent" },
  { name: "Spring Boot", icon: Database, color: "text-primary" },
  { name: "MongoDB", icon: Database, color: "text-secondary" },
  { name: "AWS", icon: Cloud, color: "text-accent" },
  { name: "Docker", icon: Cpu, color: "text-primary" },
  { name: "Python", icon: Code2, color: "text-secondary" },
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">About Me</h2>
        </div>

        {/* About content */}
        <div className={`glass rounded-3xl p-8 md:p-12 ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text content */}
            <div className="space-y-4">
              <p className="font-body text-lg text-foreground leading-relaxed">
                Hi there! I'm <span className="text-primary font-semibold">Taiba Siraj</span>, a passionate 
                Computer Science student at <span className="text-secondary font-semibold">Lovely Professional University</span>, 
                set to graduate in 2027.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                I love turning ideas into reality through code. From building e-commerce platforms to 
                creating AI-powered applications, I'm always excited to learn and explore new technologies.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me participating in hackathons, solving DSA problems, 
                or exploring the latest in tech!
              </p>
            </div>

            {/* Profile image placeholder with gradient border */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="font-display text-6xl gradient-text">TS</span>
                  </div>
                </div>
                {/* Floating decorations */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/40 animate-bounce-soft" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-secondary/40 animate-float" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`mt-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <h3 className="font-body font-semibold text-xl text-center mb-8 text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group glass px-6 py-3 rounded-full flex items-center gap-2 hover:scale-110 transition-transform duration-300 cursor-default"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <skill.icon className={`w-5 h-5 ${skill.color} group-hover:animate-wiggle`} />
                <span className="font-body font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
