import { useEffect, useState } from "react";

function SpaceBackground({ children }) {
  const [stars, setStars] = useState([]);

//   Generating stars
  useEffect(() => {
    const starCount = 150;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100, // Random pos from [0 to 100%]
        y: Math.random() * 100,
        size: Math.random() * 0.15 + 0.05, // Random size between 0.05-0.2rem
        opacity: Math.random() * 0.8 + 0.2, // Random opacity between 0.2-1.0
        blinkSpeed: Math.random() * 3 + 1, // Random animation duration between 1-4s
      });
    }
    setStars(newStars);
  }, []);

  

  return (
    <div className="min-h-screen bg-black text-gray-300 p-4 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-indigo-950 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${star.x}%`,
                     top: `${star.y}%`,
                     width: `${star.size}rem`,
                     height: `${star.size}rem`,
                     opacity: star.opacity,
                     animation: `twinkle ${star.blinkSpeed}s ease-in-out infinite alternate`                   
        
        }}
          ></div>
        ))}
        
        {/* Rendering children  */}
        {children}
      </div>
    </div>
  );
}

export default SpaceBackground;
