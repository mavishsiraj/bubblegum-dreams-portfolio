import { useEffect, useRef, useState } from "react";
import { Code, ExternalLink, Trophy, Award, Flame, Star, Zap } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    rating: "1901",
    badge: "Knight",
    color: "from-amber-400 to-orange-500",
    glowColor: "rgba(245,158,11,0.4)",
    url: "https://leetcode.com/u/mavishsiraj1/",
    icon: Trophy,
    stats: ["551+ Problems", "Top 4.32%", "7 Badges"],
  },
  {
    name: "GeeksForGeeks",
    rating: "1704",
    badge: "Active",
    color: "from-green-400 to-emerald-600",
    glowColor: "rgba(16,185,129,0.4)",
    url: "https://www.geeksforgeeks.org/profile/mavishhaq?tab=activity",
    icon: Award,
    stats: ["200+ Problems", "Institute Rank"],
  },
  {
    name: "GitHub",
    rating: "Active",
    badge: "Contributor",
    color: "from-gray-500 to-gray-700",
    glowColor: "rgba(107,114,128,0.4)",
    url: "https://github.com/mavishsiraj",
    icon: Code,
    stats: ["Open Source", "Projects"],
  },
  {
    name: "CodeChef",
    rating: "Active",
    badge: "Competitive",
    color: "from-amber-600 to-amber-800",
    glowColor: "rgba(180,83,9,0.4)",
    url: "https://www.codechef.com/users/logic_craver12",
    icon: Star,
    stats: ["Contests", "Problem Solving"],
  },
  {
    name: "Codeforces",
    rating: "Active",
    badge: "Competitive",
    color: "from-blue-400 to-indigo-600",
    glowColor: "rgba(99,102,241,0.4)",
    url: "https://codeforces.com/profile/mavishsiraj1",
    icon: Zap,
    stats: ["Contests", "Competitive Programming"],
  },
];

const CodingProfilesSection = () => {
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
    <section id="profiles" ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Code className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Coding Profiles</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Where I sharpen my problem-solving skills
          </p>
        </div>

        {/* Profiles grid - creative bento layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {profiles.map((profile, index) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${isVisible ? "animate-scale-in" : "opacity-0"} ${
                index === 0 ? "md:col-span-1 lg:col-span-1 row-span-1" : ""
              }`}
              style={{ animationDelay: `${0.2 + index * 0.12}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative rounded-3xl p-6 h-full flex flex-col items-center text-center overflow-hidden bg-card/40 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-3"
                style={{
                  boxShadow: hoveredIndex === index ? `0 20px 50px -12px ${profile.glowColor}` : "0 0 0 transparent",
                  transition: "transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease",
                }}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Animated border glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl overflow-hidden">
                  <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent`} style={{ color: profile.glowColor }} />
                  <div className={`absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent`} style={{ color: profile.glowColor }} />
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <profile.icon className="w-8 h-8 text-white" />
                  {/* Glow behind icon */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-60 blur-xl -z-10 transition-opacity duration-500`} />
                </div>

                {/* Name */}
                <h3 className="font-body font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
                  {profile.name}
                </h3>

                {/* Rating pill */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${profile.color} mb-3`}>
                  <span className="font-body font-bold text-sm text-white">
                    {profile.rating}
                  </span>
                </div>

                {/* Badge */}
                <span className="font-body text-xs text-muted-foreground font-medium tracking-wider uppercase mb-3">
                  {profile.badge}
                </span>

                {/* Stats tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                  {profile.stats.map((stat) => (
                    <span key={stat} className="font-body text-[10px] px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground/70 border border-white/5">
                      {stat}
                    </span>
                  ))}
                </div>

                {/* External link indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
