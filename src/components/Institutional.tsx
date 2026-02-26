"use client";

/*
====================================================
CAPACIDAD OPERATIVA – CONSTRUCTORA GRANDE AGRESIVA
- Números dominantes
- Contraste fuerte
- Jerarquía clara
- Sensación industrial
====================================================
*/

import { motion } from "framer-motion";

export default function Institutional() {
  return (
    <section id="experiencia" className="bg-[#0B1623] text-white">

      {/* BLOQUE SUPERIOR – TÍTULO */}
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">

        <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
          Capacidad Operativa
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight">
          Respaldo Técnico y
          <br />
          Ejecución en Terreno
        </h2>

        <div className="w-28 h-[4px] bg-yellow-500 mx-auto mt-10"></div>

        <p className="text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Ejecutamos proyectos bajo estándares técnicos exigentes,
          combinando planificación estratégica, control operativo
          y supervisión permanente en obra.
        </p>
      </div>


      {/* BLOQUE NÚMEROS – IMPACTO FUERTE */}
      <div className="bg-black py-28 border-y border-gray-800">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 text-center">

          {[
            { number: "10+", label: "Años de Experiencia" },
            { number: "150+", label: "Proyectos Ejecutados" },
            { number: "20+", label: "Equipos Disponibles" },
            { number: "RM", label: "Cobertura Regional" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl md:text-7xl font-extrabold text-yellow-500">
                {item.number}
              </div>

              <div className="mt-6 text-sm uppercase tracking-widest text-gray-400">
                {item.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>


      {/* BLOQUE TÉCNICO – RESPALDO */}
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-16">

        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-8">
            Planificación Técnica
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Evaluación previa de terreno, coordinación logística,
            programación de equipos y control de avance
            mediante supervisión técnica continua.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-8">
            Gestión Operativa
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Flota mantenida y operadores certificados que
            aseguran eficiencia, continuidad de obra
            y cumplimiento estricto de plazos establecidos.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-yellow-500 mb-8">
            Seguridad y Cumplimiento
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Protocolos de seguridad en terreno,
            control de riesgos operativos
            y cumplimiento normativo vigente
            en cada proyecto ejecutado.
          </p>
        </div>

      </div>

    </section>
  );
}