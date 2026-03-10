import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Globe, Trophy, ShoppingBag, Play, X } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A beautiful, animated portfolio website showcasing my skills, projects, and achievements with modern design and smooth animations.",
    tech: ["HTML/CSS/JS", "AWS S3", "Render", "Netlify"],
    icon: Globe,
    gradient: "from-primary to-secondary",
    github: "https://github.com/mavishsiraj",
    videoId: "",
  },
  {
    title: "Project 2",
    description: "Coming soon — an exciting project currently in development. Stay tuned for updates!",
    tech: ["Coming Soon"],
    icon: ShoppingBag,
    gradient: "from-secondary to-accent",
    github: "https://github.com/mavishsiraj",
    videoId: "",
  },
  {
    title: "Google Girls Hackathon 2025",
    description: "Semi-finalist project for Google Girls Hackathon 2025. Built an innovative solution competing against top participants nationwide.",
    tech: ["Python", "ML", "Flask", "React"],
    icon: Trophy,
    gradient: "from-accent to-primary",
    github: "https://github.com/mavishsiraj",
    videoId: "",
  },
  {
    title: "Flipkart GRID 7.0",
    description: "Semi-finalist project for Flipkart GRID 7.0. Competed in one of India's largest tech challenges with a scalable solution.",
    tech: ["Spring Boot", "Docker", "AWS", "MySQL"],
    icon: Trophy,
    gradient: "from-primary via-accent to-secondary",
    github: "https://github.com/mavishsiraj",
    videoId: "",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = (title: string) => {
    setSelectedProject(title);
    setModalOpen(true);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">My Projects</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Here are some of my favorite projects that showcase my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl"
                style={{ boxShadow: "0 0 0 0 transparent" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 40px hsl(var(--primary) / 0.2)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 0 transparent"}
              >
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                {/* Video demo area */}
                <div
                  className="relative bg-foreground/5 h-40 flex items-center justify-center cursor-pointer group/video"
                  onClick={() => openModal(project.title)}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover/video:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                  <span className="absolute bottom-3 right-3 font-body text-xs text-muted-foreground/60">Coming Soon</span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-body font-semibold rounded-full w-fit mb-4">
                    Project Explainer
                  </span>

                  <h3 className="font-body font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in" onClick={() => setModalOpen(false)}>
          <div className="glass-dark rounded-3xl p-6 max-w-2xl w-full mx-4 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body font-bold text-lg text-foreground">{selectedProject}</h3>
              <button onClick={() => setModalOpen(false)} className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <X className="w-4 h-4 text-foreground" />
              </button>
            </div>
            <div className="aspect-video bg-foreground/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <Play className="w-12 h-12 text-muted-foreground/40 mx-auto mb-2" />
                <p className="font-body text-muted-foreground">Video demo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
