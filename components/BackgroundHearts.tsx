import React, { useMemo } from 'react';

const BackgroundHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 10}s`,
      scale: 0.5 + Math.random() * 1,
      color: Math.random() > 0.5 ? 'text-pink-300' : 'text-red-300'
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`heart-bg absolute ${heart.color}`}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: `${heart.scale}rem`,
          }}
        >
          Wait, it's all love? 
          {/* Using a simple SVG heart inline for better control than emoji */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6 opacity-30"
            style={{ transform: `scale(${heart.scale * 2})` }}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default BackgroundHearts;