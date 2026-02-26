"use client";

/*
====================================================
SECCIÓN EXPERIENCIA – CAPACIDAD TÉCNICA REAL
- Enfoque licitable
- Datos estructurados
- Imagen corporativa sobria
====================================================
*/

import { motion } from "framer-motion";

export default function Institutional() {
  return (
    <section id="experiencia" className="py-32 bg-[#0E1F33] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Encabezado */}
        <div className="mb-20">
          <span className="text-yellow-500 uppercase tracking-[4px] text-sm">
            Experiencia y Capacidad Operativa
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Ejecución Técnica con Enfoque en Cumplimiento y Seguridad
          </h2>

          <div className="w-24 h-[3px] bg-yellow-500 mt-8"></div>

          <p className="text-gray-300 mt-10 max-w-3xl leading-relaxed">
            Nuestra trayectoria en obras de movimiento de tierra y ejecución
            operativa nos permite abordar proyectos de mediana y gran escala
            bajo estándares técnicos exigentes.
          </p>
        </div>

        {/* Bloques técnicos */}
        <div className="grid md:grid-cols-3 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
              Experiencia Operativa
            </h3>

            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>• Más de 150 proyectos ejecutados</li>
              <li>• Obras habitacionales e industriales</li>
              <li>• Coordinación en terreno con equipos técnicos</li>
              <li>• Planificación y control de avance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
              Capacidad Técnica
            </h3>

            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>• Flota moderna y mantenida</li>
              <li>• Operadores certificados</li>
              <li>• Supervisión técnica en obra</li>
              <li>• Gestión de maquinaria y logística</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-500">
              Cumplimiento y Seguridad
            </h3>

            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>• Protocolos de seguridad en terreno</li>
              <li>• Cumplimiento normativo vigente</li>
              <li>• Control de riesgos operativos</li>
              <li>• Supervisión y coordinación técnica continua</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}