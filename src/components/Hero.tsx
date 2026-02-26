"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(120deg,#0B1623_0%,#111827_45%,#0A0A0A_100%)] text-white"
    >
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,#EAB308_0%,transparent_35%),radial-gradient(circle_at_80%_70%,#1F2937_0%,transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-5 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
            Movimiento de Tierra y Maquinaria
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-8">
            Soluciones Operativas
            <br />
            para Obras Exigentes
          </h1>

          <p className="text-gray-300 mt-10 max-w-2xl text-lg leading-relaxed">
            Ejecución en terreno con respaldo técnico, equipos disponibles y
            coordinación operativa para proyectos en toda la Región
            Metropolitana.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="bg-yellow-500 text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-yellow-400 transition"
            >
              Solicitar Cotización
            </a>
            <a
              href="#proyectos"
              className="border border-gray-600 px-8 py-4 font-bold uppercase tracking-wide hover:border-yellow-500 hover:text-yellow-500 transition"
            >
              Ver Proyectos
            </a>
          </div>
        </motion.div>

        {/* PANEL DERECHO - CAPACIDAD OPERATIVA ANIMADA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-2 bg-black/70 border border-gray-800 p-10 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Linea tecnica animada superior */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 h-[3px] bg-yellow-500"
          />

          <h3 className="text-yellow-500 uppercase tracking-[4px] text-sm mb-10">
            Capacidad Operativa
          </h3>

          <div className="space-y-10">
            {[
              { value: "10+", label: "Anos de Experiencia" },
              { value: "20+", label: "Proyectos Ejecutados" },
              { value: "10+", label: "Equipos Disponibles" },
              { value: "RM", label: "Cobertura Regional", highlight: true },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="group cursor-default"
              >
                <div
                  className={`text-4xl font-extrabold ${
                    item.highlight ? "text-yellow-500" : "text-white"
                  } transition duration-300 group-hover:text-yellow-500`}
                >
                  {item.value}
                </div>

                <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">
                  {item.label}
                </div>

                <div className="h-[1px] bg-gray-800 mt-4 group-hover:bg-yellow-500 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
