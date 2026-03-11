import { useEffect, useRef, useState } from "react";
import { Trophy, Zap, Shield, Target, Flame, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "Google Girls Hackathon 2025",
    subtitle: "Semi-Finalist",
    org: "Google",
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
    emoji: "\u{1F3C6}",
  },
  {
    title: "Flipkart GRID 7.0",
    subtitle: "Semi-Finalist",
    org: "Flipkart",
    icon: Zap,
    color: "from-primary to-secondary",
    emoji: "\u26A1",
  },
  {
    title: "LeetCode Knight",
    subtitle: "Rating 1901, Top 4.32% Globally",
    org: "LeetCode",
    icon: Shield,
    color: "from-secondary to-accent",
    emoji: "\u{1F6E1}\uFE0F",
  },
  {
    title: "4/4 Perfect Score",
    subtitle: "LeetCode Weekly Contest 486",
    org: "LeetCode",
    icon: Target,
    color: "from-accent to-primary",
    emoji: "\u{1F3AF}",
  },
  {
    title: "7 LeetCode Badges",
    subtitle: "Most Recent: Knight",
    org: "LeetCode",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    emoji: "🔥",
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, index]);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 animate-sparkle" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Achievements</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">Milestones and recognitions along my journey</p>
        </div>

        <div className="space-y-8 md:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
          {achievements.map((ach, index) => (
            <div
              key={ach.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-gradient-to-br ${ach.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-500">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${ach.color}`} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass rounded-3xl p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.3)]">
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ach.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${ach.color} flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <ach.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {ach.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-body font-semibold text-primary/90 text-sm px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        {ach.subtitle}
                      </span>
                    </div>
                    <p className="font-body text-muted-foreground text-sm tracking-wide uppercase font-medium">{ach.org}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
