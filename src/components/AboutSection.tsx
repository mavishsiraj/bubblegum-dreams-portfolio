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

            {/* Profile image */}
            <div className="flex justify-center relative z-10">
              <div className="relative hover:scale-105 transition-transform duration-500">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1.5 animate-pulse-glow shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img
                      src="/profile.jpg"
                      alt="Taiba Siraj"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating decorations */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/40 animate-bounce-soft mix-blend-screen" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-secondary/40 animate-float mix-blend-screen" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`mt-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <h3 className="font-body font-semibold text-xl text-center mb-8 text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative px-6 py-4 rounded-2xl flex items-center gap-3 cursor-default overflow-hidden bg-card/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.5)]"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative p-2 rounded-xl bg-background/50 group-hover:scale-110 transition-transform duration-500 shadow-inner z-10">
                  <skill.icon className={`w-6 h-6 ${skill.color} group-hover:animate-wiggle`} />
                  <div className={`absolute inset-0 rounded-xl bg-current opacity-20 blur-md -z-10 ${skill.color} group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                <span className="font-body font-semibold text-foreground tracking-wide relative z-10">{skill.name}</span>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-secondary to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
