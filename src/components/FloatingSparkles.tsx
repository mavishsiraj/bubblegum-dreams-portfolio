import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingSparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < 15; i++) {
      newSparkles.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 16 + 8,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
      });
    }
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-primary"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            fontSize: `${sparkle.size}px`,
            animation: `sparkle-twinkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
};

export default FloatingSparkles;
