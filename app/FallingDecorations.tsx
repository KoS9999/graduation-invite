"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";


type DecorItem = {
  src: string;
  size: number;
  speed: [number, number];
  rotateSpeed: number;
  weight: "main" | "small" | "confetti";
};

type Particle = {
  id: number;
  isLeft: boolean;
  item: DecorItem;
  startX: number;
  driftX: number;
  duration: number;
  delay: number;
};


const DECOR_ITEMS: DecorItem[] = [
  { src: "/decorations/cap.png", size: 60, speed: [12, 16], rotateSpeed: 20, weight: "main" },
  { src: "/decorations/balloon.png", size: 40, speed: [14, 18], rotateSpeed: 25, weight: "main" },
  { src: "/decorations/certificate.png", size: 60, speed: [11, 15], rotateSpeed: 18, weight: "main" },

  { src: "/decorations/star.png", size: 30, speed: [7, 10], rotateSpeed: 80, weight: "small" },
  { src: "/decorations/sparkle.png", size: 30, speed: [6, 9], rotateSpeed: 90, weight: "small" },

  { src: "/decorations/confetti1.png", size: 30, speed: [5, 8], rotateSpeed: 180, weight: "confetti" },
  { src: "/decorations/confetti2.png", size: 30, speed: [5, 7], rotateSpeed: 220, weight: "confetti" },
  { src: "/decorations/confetti3.png", size: 30, speed: [4, 7], rotateSpeed: 200, weight: "confetti" },
  { src: "/decorations/confetti4.png", size: 30, speed: [4, 6], rotateSpeed: 240, weight: "confetti" },
];


function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function pickItem(): DecorItem {
  const pool: DecorItem[] = [];

  DECOR_ITEMS.forEach(item => {
    const repeat =
      item.weight === "confetti" ? 10 :
      item.weight === "small" ? 6 : 6;

    for (let i = 0; i < repeat; i++) pool.push(item);
  });

  return pool[Math.floor(Math.random() * pool.length)];
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }).map((_, i) => {
    const item = pickItem();
    const isLeft = i % 2 === 0;
    const startX = isLeft ? random(20, 80) : random(-80, -20);

    return {
      id: i,
      isLeft,
      item,
      startX,
      driftX: isLeft
        ? startX + random(30, 70)
        : startX - random(30, 70),
      duration: random(item.speed[0], item.speed[1]),
      delay: random(0, 6),
    };
  });
}


function FallingLayer({
  count,
  scaleClass,
}: {
  count: number;
  scaleClass: string;
}) {
  const particles = useMemo(() => generateParticles(count), [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${scaleClass}`}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ y: -120, x: p.startX, opacity: 0 }}
          animate={{
            y: "110vh",
            x: [p.startX, p.driftX, p.startX],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-0 ${p.isLeft ? "left-0" : "right-0"}`}
        >
          {/* rotation layer*/}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 360 / p.item.rotateSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src={p.item.src}
              alt=""
              width={p.item.size}
              height={p.item.size}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}


export default function FallingDecorations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <FallingLayer count={44} scaleClass="scale-100" />
      </div>

      {/* MOBILE */}
      <div className="block sm:hidden absolute inset-0 z-0 opacity-80">
        <FallingLayer count={24} scaleClass="scale-75" />
      </div>
    </>
  );
}
