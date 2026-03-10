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
    title: "64-Day Coding Streak",
    subtitle: "578 submissions in 1 year",
    org: "LeetCode",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    emoji: "\u{1F525}",
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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

        <div className="space-y-6">
          {achievements.map((ach, index) => (
            <div
              key={ach.title}
              className={`${isVisible ? (index % 2 === 0 ? "animate-slide-from-left" : "animate-slide-from-right") : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="glass rounded-2xl p-6 md:p-8 flex items-center gap-6 hover:scale-[1.02] transition-all duration-300 group"
                style={{ boxShadow: "0 0 0 transparent" }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 40px hsl(var(--primary) / 0.15)"}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 0 0 transparent"}
              >
                {/* Large icon */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${ach.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <ach.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-body font-bold text-lg md:text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {ach.emoji} {ach.title}
                  </h3>
                  <p className="font-body font-semibold text-primary text-sm mb-1">{ach.subtitle}</p>
                  <p className="font-body text-muted-foreground text-xs">{ach.org}</p>
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
