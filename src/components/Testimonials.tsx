"use client";

/*
====================================================
TESTIMONIOS – EL PUENTE
- Cards con comillas decorativas
- Estrellas de rating
- Avatares con iniciales
- Carrusel automático opcional
====================================================
*/

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Gerente de Obras",
    company: "Constructora del Sur",
    text: "Excelente servicio y cumplimiento. El equipo de El Puente demostró profesionalismo en cada etapa del proyecto. La maquinaria estaba en óptimas condiciones y los operadores altamente calificados.",
    rating: 5,
  },
  {
    name: "Andrea Fuentes",
    role: "Directora de Proyectos",
    company: "Inmobiliaria Pacífico",
    text: "Hemos trabajado con El Puente en múltiples proyectos y siempre cumplen con los plazos establecidos. Su capacidad operativa y respaldo técnico los diferencia de la competencia.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Jefe de Terreno",
    company: "Obras Civiles Ltda.",
    text: "La coordinación logística fue impecable. Llegaron a tiempo, con los equipos necesarios y el personal capacitado. Sin duda los recomiendo para proyectos de alta exigencia.",
    rating: 5,
  },
];

const clients = [
  { name: "Constructora del Sur", initial: "CS" },
  { name: "Inmobiliaria Pacífico", initial: "IP" },
  { name: "Obras Civiles Ltda.", initial: "OC" },
  { name: "Grupo Inmobiliario RM", initial: "GI" },
  { name: "Desarrollos Urbanos", initial: "DU" },
  { name: "Proyectos Habitacionales", initial: "PH" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-500" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotación de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0E1F33] text-white py-32 overflow-hidden">
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

      {/* ENCABEZADO */}
      <div className="relative max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 uppercase tracking-[4px] text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Testimonios
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Lo Que Dicen
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Nuestros Clientes
          </span>
        </motion.h2>

        <motion.div
          className="w-28 h-[4px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 mx-auto mt-10 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 112 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      {/* TESTIMONIOS */}
      <div className="relative max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative bg-black/50 border p-10 transition-all duration-500 ${
                activeIndex === index
                  ? "border-yellow-500/50 shadow-xl shadow-yellow-500/10"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {/* Comillas decorativas */}
              <div className="absolute top-6 right-8 text-7xl font-serif text-yellow-500/20 leading-none">
                &ldquo;
              </div>

              {/* Estrellas */}
              <StarRating rating={testimonial.rating} />

              {/* Texto */}
              <p className="text-gray-300 mt-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="mt-8 pt-8 border-t border-gray-800 flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Indicador activo */}
              {activeIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500"
                  layoutId="activeTestimonial"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Indicadores de puntos */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-8 h-3 bg-yellow-500"
                  : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CLIENTES / EMPRESAS */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h3
          className="text-center text-gray-400 uppercase tracking-[4px] text-sm mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Empresas que Confían en Nosotros
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Logo placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300">
                <span className="text-2xl font-bold text-gray-500 group-hover:text-yellow-500 transition-colors">
                  {client.initial}
                </span>
              </div>
              <span className="text-xs text-gray-500 text-center group-hover:text-gray-300 transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
