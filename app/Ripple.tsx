"use client";
import React, { useState, useEffect } from "react";

export const GlobalRipple = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([]);

  useEffect(() => {
    const addRipple = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const y = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      
      const size = 100; 
      const id = Date.now();

      setRipples((prev) => [...prev, { x, y, size, id }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 800);
    };

    window.addEventListener("mousedown", addRipple);
    window.addEventListener("touchstart", addRipple);

    return () => {
      window.removeEventListener("mousedown", addRipple);
      window.removeEventListener("touchstart", addRipple);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <span
            key={ripple.id}
            className="absolute rounded-full animate-ripple"
            style={{
                top: ripple.y - ripple.size / 2,
                left: ripple.x - ripple.size / 2,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: "rgba(59, 130, 246, 0.3)", 
                pointerEvents: "none",
            }}
            />
      ))}
    </div>
  );
};