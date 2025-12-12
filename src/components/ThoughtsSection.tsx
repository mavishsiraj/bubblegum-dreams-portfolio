import { useEffect, useState, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    text: "Programming isn't about what you know; it's about what you can figure out.",
    author: "Chris Pine",
  },
];

const ThoughtsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section 
      id="thoughts" 
      ref={sectionRef} 
      className="py-20 px-4 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Quote className="w-8 h-8 text-primary mx-auto mb-4 rotate-180" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Thoughts</h2>
        </div>

        {/* Quote carousel */}
        <div className={`relative ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <div className="glass rounded-3xl p-8 md:p-12 min-h-[200px] flex flex-col items-center justify-center">
            {/* Quote */}
            <div 
              key={currentIndex}
              className="text-center animate-fade-in"
            >
              <p className="font-body text-xl md:text-2xl text-foreground italic mb-6 leading-relaxed">
                "{quotes[currentIndex].text}"
              </p>
              <p className="font-body font-semibold text-primary">
                — {quotes[currentIndex].author}
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;
