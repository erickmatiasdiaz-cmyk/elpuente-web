"use client";

/*
====================================================
HERO PREMIUM CONSTRUCTORA GRANDE
====================================================
*/

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center text-white">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <div className="w-20 h-1 bg-yellow-500 mb-6" />

        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
          Movimiento de Tierra y Arriendo de Maquinaria
        </h2>

        <p className="text-lg text-gray-200 max-w-2xl mb-10">
          Soluciones profesionales en terreno para proyectos de construcción en la Región Metropolitana.
        </p>

        <div className="flex gap-6">
          <a
            href="#contacto"
            className="bg-yellow-500 text-black px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Solicitar Cotización
          </a>

          <a
            href="#servicios"
            className="border border-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition"
          >
            Ver Servicios
          </a>
        </div>
      </motion.div>
    </section>
  );
}