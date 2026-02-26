"use client";

/*
====================================================
FOOTER CORPORATIVO ANIMADO
- Entrada sutil
- Elegante
- Profesional
====================================================
*/

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-16">

          {/* Marca */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold tracking-wider mb-6">
              EL PUENTE
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Empresa especializada en movimiento de tierra y operación de
              maquinaria para proyectos de mediana y gran escala en la Región
              Metropolitana.
            </p>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-yellow-500 uppercase tracking-wider text-sm mb-6">
              Servicios
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Movimiento de Tierra</li>
              <li>Arriendo de Maquinaria</li>
              <li>Ejecución en Terreno</li>
              <li>Coordinación Operativa</li>
            </ul>
          </motion.div>

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-yellow-500 uppercase tracking-wider text-sm mb-6">
              Información
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Experiencia y Capacidad</li>
              <li>Proyectos Ejecutados</li>
              <li>Contacto Técnico</li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-yellow-500 uppercase tracking-wider text-sm mb-6">
              Contacto
            </h4>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Región Metropolitana</li>
              <li>+56 9 1234 5678</li>
              <li>contacto@elpuente.cl</li>
            </ul>
          </motion.div>

        </div>

      </div>

      {/* Línea técnica inferior */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-xs tracking-wider">
        © {new Date().getFullYear()} EL PUENTE. Todos los derechos reservados.
      </div>

    </footer>
  );
}