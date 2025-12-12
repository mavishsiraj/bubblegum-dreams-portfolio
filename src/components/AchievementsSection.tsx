import { useEffect, useRef, useState } from "react";
import { Trophy, Medal, Award, BookCheck, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "Google Girl Hackathon 2025",
    subtitle: "Semi-finalist",
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
    description: "Selected among top participants nationwide",
  },
  {
    title: "Flipkart GRID 7.0",
    subtitle: "Semi-finalist",
    icon: Medal,
    color: "from-primary to-secondary",
    description: "Competed in one of India's largest tech challenges",
  },
  {
    title: "Coding Ninjas Contest",
    subtitle: "Top 35%",
    icon: Award,
    color: "from-secondary to-accent",
    description: "Ranked in the top percentile among participants",
  },
  {
    title: "DSA Certification",
    subtitle: "Udemy",
    icon: BookCheck,
    color: "from-accent to-primary",
    description: "Comprehensive Data Structures & Algorithms course",
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section id="achievements" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Sparkles className="w-8 h-8 text-primary mx-auto mb-4 animate-sparkle" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Achievements</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Milestones and recognitions along my journey
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass rounded-2xl p-6 h-full flex items-start gap-4 hover:scale-[1.02] transition-all duration-300 cursor-default group">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-body font-bold text-lg text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="font-body font-semibold text-primary text-sm mb-2">
                    {achievement.subtitle}
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </div>

                {/* Confetti effect on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <Sparkles
                        key={i}
                        className="absolute text-primary/60 w-4 h-4 animate-sparkle"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
