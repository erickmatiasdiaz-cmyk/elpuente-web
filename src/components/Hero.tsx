"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Partículas flotantes de fondo - se generan solo en el cliente para evitar errores de hidratación
function FloatingParticles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-yellow-500/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Contador animado para estadísticas
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, ""), 10);
  const hasStarted = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let start = 0;
          const duration = 2000;
          const increment = numericValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={ref} className="text-4xl font-extrabold text-white transition duration-300 group-hover:text-yellow-500">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { value: "10+", label: "Años de Experiencia", suffix: "+" },
    { value: "150+", label: "Proyectos Ejecutados", suffix: "+" },
    { value: "20+", label: "Equipos Disponibles", suffix: "+" },
    { value: "RM", label: "Cobertura Regional", highlight: true },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(120deg,#0B1623_0%,#111827_45%,#0A0A0A_100%)] text-white min-h-screen flex items-center"
    >
      {/* Efecto de gradiente radial con parallax */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 20% 20%,#EAB308_0%,transparent_35%),radial-gradient(circle_at_80%_70%,#1F2937_0%,transparent_40%)",
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
      />

      {/* Partículas flotantes */}
      <FloatingParticles />

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-16 items-center w-full">
        {/* Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          {/* Badge superior */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-yellow-500 uppercase tracking-[4px] text-xs font-semibold">
              Movimiento de Tierra y Maquinaria
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Soluciones Operativas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              para Obras Exigentes
            </span>
          </h1>

          <p className="text-gray-300 mt-10 max-w-2xl text-lg leading-relaxed">
            Ejecución en terreno con respaldo técnico, equipos disponibles y
            coordinación operativa para proyectos en toda la Región
            Metropolitana.
          </p>

          {/* Botones CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <motion.a
              href="#contacto"
              className="relative bg-yellow-500 text-black px-8 py-4 font-bold uppercase tracking-wide overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Cotización
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="#proyectos"
              className="border border-gray-600 px-8 py-4 font-bold uppercase tracking-wide hover:border-yellow-500 hover:text-yellow-500 transition group flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
              <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>
          </div>

          {/* Indicadores de confianza */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certificados
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Garantía
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Soporte 24/7
            </div>
          </motion.div>
        </motion.div>

        {/* Panel derecho - Estadísticas */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-2 bg-black/70 border border-gray-800 p-10 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Línea técnica animada superior */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500"
          />

          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 bg-yellow-500/20 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-yellow-500 uppercase tracking-[4px] text-sm font-semibold">
              Capacidad Operativa
            </h3>
          </div>

          <div className="space-y-10">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="group cursor-default"
              >
                <div
                  className={`text-4xl font-extrabold transition duration-300 group-hover:text-yellow-500 ${
                    item.highlight ? "text-yellow-500" : "text-white"
                  }`}
                >
                  {item.value}
                </div>

                <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">
                  {item.label}
                </div>

                <div className="h-[1px] bg-gradient-to-r from-gray-800 to-transparent mt-4 group-hover:from-yellow-500/50 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Decoración de esquina */}
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-yellow-500/20" />
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-yellow-500/20" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-yellow-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
