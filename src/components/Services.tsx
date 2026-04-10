"use client";

/*
====================================================
SERVICIOS PREMIUM – EL PUENTE
- Iconos industriales SVG
- Efecto hover premium con gradiente
- Badges de calidad
- Lista de features mejorada
====================================================
*/

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Movimiento de Tierra",
    description:
      "Excavaciones, nivelaciones y preparación de terreno para proyectos habitacionales, industriales y corporativos, ejecutados bajo planificación técnica y control operativo.",
    image: "/images/maquinaria1.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      "Excavación masiva",
      "Nivelación y compactación",
      "Coordinación técnica en obra",
      "Control de avance operativo",
    ],
    badge: "Servicio Principal",
  },
  {
    title: "Arriendo de Maquinaria",
    description:
      "Disponibilidad de flota moderna y operadores certificados para ejecución eficiente en proyectos de construcción en la Región Metropolitana.",
    image: "/images/maquinaria2.jpg",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: [
      "Excavadoras de alto tonelaje",
      "Operadores certificados",
      "Mantenimiento preventivo",
      "Gestión logística en terreno",
    ],
    badge: "Flota Disponible",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-[#0E1F33] text-white py-32 overflow-hidden">
      {/* Patrón de fondo sutil */}
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
      <div className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 uppercase tracking-[4px] text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Nuestros Servicios
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ejecución Operativa en
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Terreno y Maquinaria
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
          Soluciones técnicas especializadas para proyectos de mediana y gran escala
          en movimiento de tierra y arriendo de maquinaria pesada.
        </motion.p>
      </div>

      {/* BLOQUES DE SERVICIO */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative border border-gray-800 bg-black overflow-hidden hover:border-yellow-500/50 transition-all duration-500"
          >
            {/* Badge */}
            <div className="absolute top-6 right-6 z-20">
              <span className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-500 text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                {service.badge}
              </span>
            </div>

            {/* Imagen con overlay */}
            <div className="relative h-[350px] w-full overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradiente overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Icono industrial */}
              <div className="absolute top-6 left-6 z-20 w-14 h-14 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/40 rounded-lg flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
            </div>

            {/* Contenido */}
            <div className="p-12 relative">
              {/* Línea decorativa superior */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

              <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-yellow-500 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Lista de features */}
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-gray-400 text-sm uppercase tracking-wider group/item"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-yellow-500 group-hover/item:border-yellow-500 transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-yellow-500 group-hover/item:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="group-hover/item:text-white transition-colors">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Botón CTA inferior */}
              <motion.div
                className="mt-10 pt-8 border-t border-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-semibold uppercase tracking-wider text-sm group/btn"
                >
                  Solicitar servicio
                  <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Borde animado inferior */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-500 group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
