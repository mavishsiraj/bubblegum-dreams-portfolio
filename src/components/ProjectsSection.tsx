import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ShoppingBag, Bus, Ticket } from "lucide-react";

const projects = [
  {
    title: "Perfume E-commerce App",
    description: "A full-featured e-commerce platform for perfumes with user authentication, product catalog, cart management, and secure payments.",
    tech: ["Spring Boot", "Docker", "AWS", "MySQL"],
    icon: ShoppingBag,
    gradient: "from-primary to-secondary",
    github: "https://github.com/taibasiraj",
    live: "#",
  },
  {
    title: "Bus Seat Booking System",
    description: "Real-time bus seat reservation system with interactive seat selection, route management, and booking confirmation.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: Bus,
    gradient: "from-secondary to-accent",
    github: "https://github.com/taibasiraj",
    live: "#",
  },
  {
    title: "Ticket Genius AI",
    description: "AI-powered ticket management system using Gemini API for intelligent categorization and automated responses.",
    tech: ["Flask", "Gemini API", "Python", "SQLite"],
    icon: Ticket,
    gradient: "from-accent to-primary",
    github: "https://github.com/taibasiraj",
    live: "#",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">My Projects</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Here are some of my favorite projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Card */}
              <div className="glass rounded-3xl p-6 h-full flex flex-col hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-body font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Decorative blur behind card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
