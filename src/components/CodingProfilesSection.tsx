import { useEffect, useRef, useState } from "react";
import { Code, ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    rating: "1769",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    url: "https://leetcode.com/u/mavishsiraj1/",
    icon: "LC",
  },
  {
    name: "GeeksForGeeks",
    rating: "1704",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    url: "https://www.geeksforgeeks.org/profile/mavishhaq?tab=activity",
    icon: "GFG",
  },
  {
    name: "GitHub",
    rating: "Active",
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-500/10",
    url: "https://github.com/mavishsiraj",
    icon: "GH",
  },
  {
    name: "CodeChef",
    rating: "Active",
    color: "from-amber-700 to-amber-900",
    bgColor: "bg-amber-700/10",
    url: "https://www.codechef.com/users/logic_craver12",
    icon: "CC",
  },
];

const CodingProfilesSection = () => {
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
    <section id="profiles" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Code className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Coding Profiles</h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Check out my competitive programming journey
          </p>
        </div>

        {/* Profiles grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, index) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="glass rounded-2xl p-6 w-44 text-center hover:scale-110 transition-all duration-300 hover:shadow-xl">
                {/* Icon circle */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${profile.color} mx-auto mb-4 flex items-center justify-center group-hover:animate-bounce-soft`}>
                  <span className="text-white font-bold text-lg">{profile.icon}</span>
                </div>

                {/* Name */}
                <h3 className="font-body font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {profile.name}
                </h3>

                {/* Rating */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${profile.bgColor}`}>
                  <span className="font-body font-semibold text-sm text-foreground">
                    {profile.rating}
                  </span>
                </div>

                {/* External link indicator */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 mx-auto text-muted-foreground" />
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
