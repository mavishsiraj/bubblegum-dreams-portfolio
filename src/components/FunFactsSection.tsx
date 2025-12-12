import { useEffect, useRef, useState } from "react";
import { Coffee, Code, Headphones, Gamepad2, BookOpen, Sparkles } from "lucide-react";

const funFacts = [
  {
    icon: Coffee,
    text: "Fueled by chai and deadlines ☕",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Code,
    text: "500+ DSA problems solved 💪",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Headphones,
    text: "Lo-fi beats coding companion 🎵",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Gamepad2,
    text: "Weekend game dev explorer 🎮",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: BookOpen,
    text: "Always learning something new 📚",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Sparkles,
    text: "Dreams in React components ✨",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const FunFactsSection = () => {
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
    <section id="funfacts" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 animate-sparkle" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Fun Facts</h2>
          <p className="font-body text-muted-foreground">
            A little peek into my world 🌟
          </p>
        </div>

        {/* Fun facts grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className={`group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="glass rounded-2xl p-6 text-center h-full hover:scale-105 transition-all duration-300 cursor-default">
                {/* Animated icon */}
                <div className={`w-14 h-14 rounded-2xl ${fact.bgColor} mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce-soft`}>
                  <fact.icon className={`w-7 h-7 ${fact.color} group-hover:animate-wiggle`} />
                </div>

                {/* Text */}
                <p className="font-body text-sm md:text-base text-foreground">
                  {fact.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
