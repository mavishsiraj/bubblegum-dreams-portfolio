import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aspiring SDE | B.Tech CSE 2027";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/20 animate-float-delayed blur-xl" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-accent/20 animate-bounce-soft blur-lg" />
      
      {/* Sparkle decorations */}
      <Sparkles className="absolute top-1/4 right-1/4 text-primary/40 w-8 h-8 animate-sparkle" />
      <Sparkles className="absolute bottom-1/3 left-1/3 text-secondary/40 w-6 h-6 animate-sparkle" style={{ animationDelay: "0.5s" }} />
      
      {/* Main content */}
      <div className="text-center z-10">
        <div className="mb-4 animate-bounce-soft">
          <span className="text-lg md:text-xl font-body text-muted-foreground">Hello, I'm</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text mb-6 animate-scale-in">
          Taiba Siraj
        </h1>
        
        <div className="h-8 md:h-10 mb-8">
          <p className="text-xl md:text-2xl font-body text-foreground/80">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
          </p>
        </div>
        
        <p className="max-w-lg mx-auto text-muted-foreground font-body text-lg mb-12 animate-fade-in" style={{ animationDelay: "1s" }}>
          Passionate about building innovative solutions and solving complex problems through code ✨
        </p>
        
        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: "1.5s" }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/30"
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
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
