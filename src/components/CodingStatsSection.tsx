import { useEffect, useRef, useState, useMemo } from "react";
import { Sparkles, Shield, Target, Flame, Trophy, Star } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Rating chart data
const ratingData = [
  { contest: "1", rating: 1500 },
  { contest: "3", rating: 1550 },
  { contest: "5", rating: 1620 },
  { contest: "8", rating: 1580 },
  { contest: "10", rating: 1650 },
  { contest: "12", rating: 1700 },
  { contest: "15", rating: 1680 },
  { contest: "17", rating: 1750 },
  { contest: "19", rating: 1800 },
  { contest: "21", rating: 1780 },
  { contest: "23", rating: 1850 },
  { contest: "25", rating: 1901 },
];

// CountUp hook
const useCountUp = (end: number, duration: number, start: boolean) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, end, duration]);
  return value;
};

// Circular progress ring
const ProgressRing = ({ solved, total, color, label, start }: { solved: number; total: number; color: string; label: string; start: boolean }) => {
  const pct = (solved / total) * 100;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);
  const count = useCountUp(solved, 1500, start);

  useEffect(() => {
    if (start) {
      setTimeout(() => setOffset(circumference - (pct / 100) * circumference), 100);
    }
  }, [start, pct, circumference]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r={radius} fill="none" stroke="hsl(var(--muted) / 0.3)" strokeWidth="6" />
          <circle
            cx="48" cy="48" r={radius} fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-body font-bold text-lg text-foreground">{count}</span>
          <span className="font-body text-xs text-muted-foreground">/{total}</span>
        </div>
      </div>
      <span className="font-body font-semibold text-sm" style={{ color }}>{label}</span>
    </div>
  );
};

// Generate heatmap data
const generateHeatmap = () => {
  const cells: number[] = [];
  for (let i = 0; i < 364; i++) {
    const rand = Math.random();
    if (rand < 0.3) cells.push(0);
    else if (rand < 0.55) cells.push(1);
    else if (rand < 0.75) cells.push(2);
    else if (rand < 0.9) cells.push(3);
    else cells.push(4);
  }
  return cells;
};

const CodingStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const heatmap = useMemo(generateHeatmap, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contestRating = useCountUp(1901, 2000, isVisible);
  const globalRank = useCountUp(35450, 2000, isVisible);
  const totalGlobal = useCountUp(847437, 2000, isVisible);
  const contests = useCountUp(25, 1500, isVisible);
  const submissions = useCountUp(1400, 1800, isVisible);
  const acceptance = useCountUp(63, 1500, isVisible);
  const badges = useCountUp(7, 1000, isVisible);
  const activeDays = useCountUp(194, 1500, isVisible);
  const maxStreak = useCountUp(64, 1200, isVisible);

  const heatmapColor = (level: number) => {
    const colors = [
      "hsl(var(--muted) / 0.2)",
      "hsl(var(--primary) / 0.25)",
      "hsl(var(--primary) / 0.45)",
      "hsl(var(--primary) / 0.7)",
      "hsl(var(--primary) / 1)",
    ];
    return colors[level];
  };

  return (
    <section id="coding-stats" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl gradient-text mb-4">Coding Stats</h2>
          <p className="font-body text-muted-foreground">LeetCode Knight — Top 4.32% Globally</p>
        </div>

        {/* Main stats grid */}
        <div className={`glass-dark rounded-3xl p-6 md:p-10 text-foreground ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          {/* Top stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Contest Rating", value: contestRating, suffix: "", icon: Trophy, extra: "Knight" },
              { label: "Global Ranking", value: `${globalRank.toLocaleString()} / ${totalGlobal.toLocaleString()}`, icon: Star },
              { label: "Contests Attended", value: contests, icon: Target },
              { label: "Top Percentile", value: "4.32%", icon: Flame },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-body text-2xl md:text-3xl font-bold text-foreground">
                  {typeof stat.value === "number" ? stat.value : stat.value}
                </p>
                {stat.extra && <span className="font-body text-xs text-primary font-semibold">{stat.extra}</span>}
                <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Difficulty rings */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
            <ProgressRing solved={187} total={930} color="#22c55e" label="Easy" start={isVisible} />
            <ProgressRing solved={321} total={2022} color="#eab308" label="Medium" start={isVisible} />
            <ProgressRing solved={43} total={913} color="#ef4444" label="Hard" start={isVisible} />
          </div>

          {/* Secondary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Acceptance Rate", value: `${acceptance}.48%` },
              { label: "Total Submissions", value: `${submissions}+` },
              { label: "Badges Earned", value: badges },
              { label: "Active Days", value: activeDays },
            ].map((s, i) => (
              <div key={i} className="text-center p-3 rounded-xl bg-primary/5">
                <p className="font-body font-bold text-xl text-foreground">{s.value}</p>
                <p className="font-body text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Max streak */}
          <div className="text-center mb-8">
            <span className="font-body text-sm text-muted-foreground">Max Streak: </span>
            <span className="font-body font-bold text-primary text-lg">{maxStreak} days</span>
          </div>

          {/* Heatmap */}
          <div className="mb-10">
            <h3 className="font-body font-semibold text-sm text-muted-foreground mb-4 text-center">578 submissions in the past year</h3>
            <div className="overflow-x-auto">
              <div className="grid grid-flow-col gap-[2px] mx-auto" style={{ gridTemplateRows: "repeat(7, 1fr)", width: "fit-content" }}>
                {heatmap.map((level, i) => (
                  <div
                    key={i}
                    className="w-[10px] h-[10px] md:w-3 md:h-3 rounded-sm"
                    style={{
                      background: heatmapColor(level),
                      animation: level >= 4 ? "cell-pulse 2s ease-in-out infinite" : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Rating chart */}
          <div>
            <h3 className="font-body font-semibold text-sm text-muted-foreground mb-4 text-center">Rating Progress</h3>
            <div className="h-48 md:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ratingData}>
                  <XAxis dataKey="contest" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
                  <YAxis domain={[1400, 2000]} stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(280, 30%, 12%)",
                      border: "1px solid hsl(var(--primary) / 0.3)",
                      borderRadius: "12px",
                      color: "hsl(var(--foreground))",
                      fontFamily: "'Plus Jakarta Sans'",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="rating"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 4 }}
                    activeDot={{ r: 6, fill: "hsl(var(--accent))" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingStatsSection;
