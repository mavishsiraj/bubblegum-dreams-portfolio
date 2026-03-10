import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const SparkleParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const arr: Particle[] = [];
    for (let i = 0; i < 25; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    setParticles(arr);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsl(var(--primary) / ${p.opacity}), transparent)`,
            animation: `sparkle-rise ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: `0 0 ${p.size * 2}px hsl(var(--primary) / ${p.opacity * 0.5})`,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleParticles;
