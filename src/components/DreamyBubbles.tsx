import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

const DreamyBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles: Bubble[] = [];
    const colors = [
      "radial-gradient(circle, rgba(255, 105, 180, 0.4), rgba(255, 105, 180, 0.1))",
      "radial-gradient(circle, rgba(218, 112, 214, 0.4), rgba(218, 112, 214, 0.1))",
      "radial-gradient(circle, rgba(255, 182, 193, 0.4), rgba(255, 182, 193, 0.1))",
      "radial-gradient(circle, rgba(221, 160, 221, 0.4), rgba(221, 160, 221, 0.1))",
    ];

    for (let i = 0; i < 12; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 120 + 60,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 15,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full blur-2xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-100px",
            background: bubble.color,
            animation: `dreamy-bubble-float ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default DreamyBubbles;
