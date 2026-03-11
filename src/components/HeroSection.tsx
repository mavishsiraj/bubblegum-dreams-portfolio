import { useEffect, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const roles = ["Aspiring SDE", "Problem Solver", "Hackathon Finalist", "LeetCode Knight"];

const stats = [
  { emoji: "\u{1F3C6}", label: "Knight Rank" },
  { emoji: "\u2B50", label: "Rating 1901" },
  { emoji: "\u{1F30D}", label: "Top 4.32%" },
  { emoji: "\u{1F525}", label: "578 Submissions" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter cycling effect
  const tick = useCallback(() => {
    const current = roles[roleIndex];
    if (!isDeleting) {
      setDisplayText(current.slice(0, displayText.length + 1));
      if (displayText.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      setDisplayText(current.slice(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Animated Creative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/50 z-10" />
        <img
          src="/profile.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-90 mix-blend-overlay animate-float-slow"
          style={{ transform: "scale(1.15)" }}
        />
      </div>

      {/* Gradient mesh blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-float" />
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float-slow" />

      <div className="text-center z-10 flex flex-col items-center">
        <div className="mb-3 animate-fade-in">
          <span className="text-lg md:text-xl font-body text-muted-foreground">Hello, I'm</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text mb-6 animate-scale-in">
          Taiba Siraj
        </h1>

        <div className="h-10 md:h-12 mb-8">
          <p className="text-xl md:text-2xl font-body font-semibold text-foreground/80">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
          </p>
        </div>

        <p className="max-w-lg mx-auto text-muted-foreground font-body text-lg mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          Passionate about building innovative solutions and solving complex problems through code
        </p>

        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            style={{ boxShadow: "0 0 25px hsl(var(--primary) / 0.4)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-full font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Marquee stats bar */}
      <div className="absolute bottom-24 left-0 right-0 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...stats, ...stats].map((s, i) => (
            <span key={i} className="mx-8 font-body text-sm md:text-base text-muted-foreground/70 font-medium">
              {s.emoji} {s.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft cursor-pointer z-10">
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
