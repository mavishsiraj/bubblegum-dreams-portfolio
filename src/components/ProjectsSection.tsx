import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Globe, Trophy, ShoppingBag, Play, X } from "lucide-react";

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A beautiful, animated portfolio website showcasing my skills, projects, and achievements with modern design and smooth animations.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Vite"],
    icon: Globe,
    gradient: "from-primary to-secondary",
    github: "https://github.com/mavishsiraj",
    videoId: "/portfolio-demo.mp4",
    tree: {
      label: "Portfolio",
      children: [
        { label: "Frontend", children: [{ label: "React" }, { label: "TypeScript" }] },
        { label: "Styling", children: [{ label: "Tailwind" }, { label: "Animations" }] },
        { label: "Build", children: [{ label: "Vite" }] },
      ],
    } as TreeNode,
  },
  {
    title: "Perfume E-commerce Platform",
    description: "Architected a full-stack platform with JWT auth on AWS EC2, supporting 1K+ concurrent users; engineered catalogue, cart, and order tracking modules.",
    tech: ["Spring Boot", "Docker", "AWS EC2", "HTML/CSS/JS"],
    icon: ShoppingBag,
    gradient: "from-secondary to-accent",
    github: "https://github.com/mavishsiraj",
    videoId: "/perfume-demo.mp4",
    tree: {
      label: "E-commerce",
      children: [
        { label: "Backend", children: [{ label: "Spring Boot" }, { label: "JWT Auth" }] },
        { label: "Deploy", children: [{ label: "Docker" }, { label: "AWS EC2" }] },
        { label: "Frontend", children: [{ label: "HTML/CSS/JS" }] },
      ],
    } as TreeNode,
  },
  {
    title: "Budget Planner — AI Finance App",
    description: "Built a full-stack finance tracker integrating Groq LLM API for a context-aware AI chat assistant delivering real-time financial advice.",
    tech: ["Node.js", "MongoDB", "React", "Groq API"],
    icon: Trophy,
    gradient: "from-accent to-primary",
    github: "https://github.com/mavishsiraj",
    videoId: "",
    tree: {
      label: "Finance App",
      children: [
        { label: "Backend", children: [{ label: "Node.js" }, { label: "MongoDB" }] },
        { label: "AI", children: [{ label: "Groq LLM" }, { label: "Chat Bot" }] },
        { label: "Frontend", children: [{ label: "React" }] },
      ],
    } as TreeNode,
  },
  {
    title: "Ticket Genius — AI Support System",
    description: "Built an AI ticketing system processing 1K+ tickets/week with automated classification and agent assignment using Gemini API.",
    tech: ["Flask", "MySQL", "Gemini API", "Python"],
    icon: Globe,
    gradient: "from-primary via-accent to-secondary",
    github: "https://github.com/mavishsiraj",
    videoId: "",
    tree: {
      label: "AI Ticketing",
      children: [
        { label: "Backend", children: [{ label: "Flask" }, { label: "Python" }] },
        { label: "AI", children: [{ label: "Gemini API" }, { label: "Classifier" }] },
        { label: "Database", children: [{ label: "MySQL" }] },
      ],
    } as TreeNode,
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openModal = (title: string, videoId: string) => {
    setSelectedProject(title);
    setSelectedVideoId(videoId);
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
              <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:scale-[1.02] transition-all duration-500"
                style={{ boxShadow: "0 0 0 0 transparent" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 10px 50px hsl(var(--primary) / 0.4)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 0 transparent"}
              >
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

                {/* Video demo area with tree overlay */}
                <div
                  className="relative bg-foreground/10 h-56 flex items-center justify-center cursor-pointer group/video rounded-t-2xl overflow-hidden"
                  onClick={() => openModal(project.title, project.videoId)}
                >
                  {project.videoId ? (
                    <video
                      src={project.videoId}
                      className="absolute inset-0 w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/70 transition-colors duration-500" />

                  {/* Play button - fades out on hover */}
                  <div className="relative w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 shadow-lg group-hover/video:opacity-0 group-hover/video:scale-50"
                    style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.5)" }}
                  >
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>

                  {/* Tree structure overlay - appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-all duration-500 pointer-events-none px-4">
                    <div className="flex flex-col items-center gap-1 w-full max-w-xs">
                      {/* Root node */}
                      <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-body font-bold text-xs shadow-lg transform transition-all duration-500 group-hover/video:translate-y-0 translate-y-4 group-hover/video:scale-100 scale-75">
                        {project.tree.label}
                      </div>

                      {/* Vertical connector from root */}
                      <div className="w-[2px] h-3 bg-gradient-to-b from-primary/80 to-primary/30 group-hover/video:scale-y-100 scale-y-0 origin-top transition-transform duration-300 delay-100" />

                      {/* Horizontal line */}
                      <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover/video:scale-x-100 scale-x-0 transition-transform duration-300 delay-150" />

                      {/* Branch row */}
                      <div className="flex justify-around w-full gap-2">
                        {project.tree.children?.map((branch, bIdx) => (
                          <div key={bIdx} className="flex flex-col items-center gap-1 flex-1"
                            style={{ transitionDelay: `${200 + bIdx * 80}ms` }}
                          >
                            {/* Vertical line to branch */}
                            <div className="w-[2px] h-2 bg-primary/40 group-hover/video:scale-y-100 scale-y-0 origin-top transition-transform duration-200"
                              style={{ transitionDelay: `${200 + bIdx * 80}ms` }}
                            />

                            {/* Branch node */}
                            <div className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-body font-semibold text-[10px] shadow-md transform transition-all duration-300 group-hover/video:translate-y-0 translate-y-3 group-hover/video:opacity-100 opacity-0 whitespace-nowrap"
                              style={{ transitionDelay: `${250 + bIdx * 80}ms` }}
                            >
                              {branch.label}
                            </div>

                            {/* Vertical connector to leaves */}
                            <div className="w-[1px] h-2 bg-primary/30 group-hover/video:scale-y-100 scale-y-0 origin-top transition-transform duration-200"
                              style={{ transitionDelay: `${350 + bIdx * 80}ms` }}
                            />

                            {/* Leaf nodes */}
                            <div className="flex flex-col items-center gap-1">
                              {branch.children?.map((leaf, lIdx) => (
                                <div
                                  key={lIdx}
                                  className="px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground font-body text-[9px] font-medium transform transition-all duration-300 group-hover/video:translate-y-0 translate-y-3 group-hover/video:opacity-100 opacity-0 whitespace-nowrap"
                                  style={{ transitionDelay: `${400 + bIdx * 80 + lIdx * 60}ms` }}
                                >
                                  {leaf.label}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="absolute bottom-3 right-3 font-body text-xs text-white/60">{project.videoId ? "Watch Demo" : "Hover to explore"}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fade-in" onClick={() => setModalOpen(false)}>
          <div className="glass-dark rounded-3xl p-6 max-w-4xl w-full mx-4 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body font-bold text-lg text-foreground">{selectedProject}</h3>
              <button onClick={() => setModalOpen(false)} className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            <div className="aspect-video bg-foreground/5 rounded-2xl overflow-hidden">
              {selectedVideoId ? (
                <video
                  src={selectedVideoId}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="font-body text-muted-foreground">Demo video coming soon!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
