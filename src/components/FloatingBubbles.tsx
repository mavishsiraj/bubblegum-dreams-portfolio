import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  color: "pink" | "purple" | "lavender";
}

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 100 + 30,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: Math.random() * 4 + 6,
          color: (["pink", "purple", "lavender"] as const)[Math.floor(Math.random() * 3)],
        });
      }
      setBubbles(newBubbles);
    };
    generateBubbles();
  }, []);

  const getColorClass = (color: Bubble["color"]) => {
    switch (color) {
      case "pink":
        return "bg-bubble-pink";
      case "purple":
        return "bg-bubble-purple";
      case "lavender":
        return "bg-bubble-lavender";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full opacity-20 blur-sm ${getColorClass(bubble.color)}`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-100px",
            animation: `float ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
