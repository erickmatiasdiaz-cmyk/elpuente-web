"use client";

/*
====================================================
SERVICIOS – CONSTRUCTORA GRANDE AGRESIVA
- Diseño industrial
- Alto contraste
- Bloques sólidos
- Jerarquía fuerte
====================================================
*/

import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <section id="servicios" className="bg-[#0E1F33] text-white py-32">

      {/* ENCABEZADO */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">

        <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
          Servicios
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight">
          Ejecución Operativa en
          <br />
          Terreno y Maquinaria
        </h2>

        <div className="w-28 h-[4px] bg-yellow-500 mx-auto mt-10"></div>

        <p className="text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Soluciones técnicas especializadas para proyectos de mediana y gran escala
          en movimiento de tierra y arriendo de maquinaria pesada.
        </p>

      </div>


      {/* BLOQUES DE SERVICIO */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* MOVIMIENTO DE TIERRA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group border border-gray-800 bg-black hover:border-yellow-500 transition duration-500"
        >

          <div className="relative h-[350px] w-full overflow-hidden">
            <Image
              src="/images/maquinaria1.jpg"
              alt="Movimiento de Tierra"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="p-12">

            <h3 className="text-3xl font-bold mb-8 text-yellow-500">
              Movimiento de Tierra
            </h3>

            <p className="text-gray-300 leading-relaxed mb-10">
              Excavaciones, nivelaciones y preparación de terreno
              para proyectos habitacionales, industriales y corporativos,
              ejecutados bajo planificación técnica y control operativo.
            </p>

            <ul className="space-y-4 text-gray-400 text-sm uppercase tracking-wider">
              <li>• Excavación masiva</li>
              <li>• Nivelación y compactación</li>
              <li>• Coordinación técnica en obra</li>
              <li>• Control de avance operativo</li>
            </ul>

          </div>
        </motion.div>


        {/* ARRIENDO DE MAQUINARIA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group border border-gray-800 bg-black hover:border-yellow-500 transition duration-500"
        >

          <div className="relative h-[350px] w-full overflow-hidden">
            <Image
              src="/images/maquinaria2.jpg"
              alt="Arriendo de Maquinaria"
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="p-12">

            <h3 className="text-3xl font-bold mb-8 text-yellow-500">
              Arriendo de Maquinaria
            </h3>

            <p className="text-gray-300 leading-relaxed mb-10">
              Disponibilidad de flota moderna y operadores certificados
              para ejecución eficiente en proyectos de construcción
              en la Región Metropolitana.
            </p>

            <ul className="space-y-4 text-gray-400 text-sm uppercase tracking-wider">
              <li>• Excavadoras de alto tonelaje</li>
              <li>• Operadores certificados</li>
              <li>• Mantenimiento preventivo</li>
              <li>• Gestión logística en terreno</li>
            </ul>

          </div>
        </motion.div>

      </div>

    </section>
  );
}