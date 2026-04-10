"use client";

/*
====================================================
CAPACIDAD OPERATIVA PREMIUM – EL PUENTE
- Contadores animados
- Pilares técnicos con iconos
- Diseño industrial elegante
====================================================
*/

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Componente contador animado
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extraer número del target (ej: "150+" -> 150, "RM" -> 0)
  const numericValue = parseInt(target.replace(/\D/g, ""), 10);
  const isNonNumeric = isNaN(numericValue);

  useEffect(() => {
    if (isNonNumeric) return;

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
  }, [numericValue, isNonNumeric]);

  if (isNonNumeric) {
    return (
      <div ref={ref} className="text-6xl md:text-7xl font-extrabold text-yellow-500">
        {target}
      </div>
    );
  }

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-extrabold text-yellow-500">
      {count}{suffix}
    </div>
  );
}

const pillars = [
  {
    title: "Planificación Técnica",
    description:
      "Evaluación previa de terreno, coordinación logística, programación de equipos y control de avance mediante supervisión técnica continua.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "Gestión Operativa",
    description:
      "Flota mantenida y operadores certificados que aseguran eficiencia, continuidad de obra y cumplimiento estricto de plazos establecidos.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Seguridad y Cumplimiento",
    description:
      "Protocolos de seguridad en terreno, control de riesgos operativos y cumplimiento normativo vigente en cada proyecto ejecutado.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const stats = [
  { number: "10+", label: "Años de Experiencia", suffix: "+" },
  { number: "150+", label: "Proyectos Ejecutados", suffix: "+" },
  { number: "20+", label: "Equipos Disponibles", suffix: "+" },
  { number: "RM", label: "Cobertura Regional", suffix: "" },
];

export default function Institutional() {
  return (
    <section id="experiencia" className="relative bg-[#0B1623] text-white overflow-hidden">
      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* BLOQUE SUPERIOR – TÍTULO */}
      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 uppercase tracking-[4px] text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Nuestra Trayectoria
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Respaldo Técnico y
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Ejecución en Terreno
          </span>
        </motion.h2>

        <motion.div
          className="w-28 h-[4px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 mx-auto mt-10 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 112 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.p
          className="text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ejecutamos proyectos bajo estándares técnicos exigentes,
          combinando planificación estratégica, control operativo
          y supervisión permanente en obra.
        </motion.p>
      </div>

      {/* BLOQUE NÚMEROS – CONTADORES ANIMADOS */}
      <div className="relative bg-black py-28 border-y border-gray-800">
        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-yellow-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative py-8">
                <AnimatedCounter target={item.number} suffix={item.suffix} />

                <div className="mt-6 text-sm uppercase tracking-widest text-gray-400 group-hover:text-yellow-500 transition-colors">
                  {item.label}
                </div>

                {/* Línea separadora */}
                <div className="w-12 h-[2px] bg-yellow-500/30 mx-auto mt-6 group-hover:w-20 group-hover:bg-yellow-500 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BLOQUE TÉCNICO – PILARES */}
      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-black/50 border border-gray-800 p-10 hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Icono */}
              <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center text-yellow-500 mb-8 group-hover:bg-yellow-500 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                {pillar.icon}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-yellow-500 transition-colors">
                {pillar.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {pillar.description}
              </p>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 group-hover:w-full transition-all duration-700" />

              {/* Número de pilar */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-800/50 group-hover:text-yellow-500/20 transition-colors">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
