"use client";

/*
====================================================
COUNTER PREMIUM CORPORATIVO
Animación suave incremental al entrar en viewport
====================================================
*/

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function Counter({ end, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Detectar cuando entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Animación del contador
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [visible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-yellow-500">
      {count}
      {suffix}
    </div>
  );
}