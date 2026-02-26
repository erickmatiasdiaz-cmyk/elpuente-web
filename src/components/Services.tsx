"use client";

/*
====================================================
HERO CORPORATIVO – CAPACIDAD TÉCNICA REAL
- Sobrio
- Institucional
- Enfoque en ejecución y cumplimiento
====================================================
*/

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-[#0B1623] text-white">

      {/* Imagen fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/maquinaria1.jpg')" }}
      />

      {/* Overlay oscuro institucional */}
      <div className="absolute inset-0 bg-[#0B1623]/80" />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Ingeniería y Ejecución en Terreno
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
            Capacidad Técnica y Operativa
            <br />
            para Obras de Alta Exigencia
          </h1>

          <div className="w-24 h-[3px] bg-yellow-500 mt-8"></div>

          <p className="text-gray-300 mt-10 max-w-3xl leading-relaxed text-lg">
            Más de una década desarrollando proyectos de movimiento de tierra y
            ejecución operativa bajo estándares de cumplimiento, planificación
            técnica y seguridad en terreno en la Región Metropolitana.
          </p>

          <div className="mt-12 flex gap-6">

            <a
              href="#proyectos"
              className="border border-white px-8 py-3 hover:bg-white hover:text-[#0B1623] transition"
            >
              Ver Proyectos Ejecutados
            </a>

            <a
              href="#contacto"
              className="bg-yellow-500 text-black px-8 py-3 font-medium hover:bg-yellow-400 transition"
            >
              Contacto Técnico
            </a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}