"use client";

/*
====================================================
PROYECTOS – GALERÍA INDUSTRIAL AGRESIVA
- Fondo oscuro
- Imagen dominante
- Overlay técnico
- Sensación obra real
====================================================
*/

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Demolición Industrial – Santiago",
    description:
      "Demolición estructural en zona urbana con excavadoras de alto tonelaje y coordinación técnica especializada.",
    images: [
      "/images/hero.jpg",
      "/images/maquinaria1.jpg",
      "/images/maquinaria2.jpg",
    ],
  },
  {
    title: "Movimiento de Tierra – Desarrollo Urbano",
    description:
      "Preparación de terreno para proyecto habitacional de gran escala, incluyendo excavación masiva y nivelación técnica.",
    images: [
      "/images/maquinaria1.jpg",
      "/images/hero.jpg",
      "/images/maquinaria2.jpg",
    ],
  },
  {
    title: "Arriendo Maquinaria – Proyecto Corporativo",
    description:
      "Suministro de flota pesada para proyecto corporativo en ejecución en la Región Metropolitana.",
    images: [
      "/images/maquinaria2.jpg",
      "/images/maquinaria1.jpg",
      "/images/hero.jpg",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="proyectos" className="bg-[#0B1623] text-white py-32">

      {/* ENCABEZADO */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">

        <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
          Proyectos Ejecutados
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight">
          Experiencia Comprobada
          <br />
          en Obras de Alta Exigencia
        </h2>

        <div className="w-28 h-[4px] bg-yellow-500 mx-auto mt-10"></div>

        <p className="text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Proyectos ejecutados bajo estándares técnicos exigentes,
          cumpliendo planificación, seguridad y control operativo.
        </p>

      </div>

      {/* GALERÍA */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelected(project)}
            className="group cursor-pointer relative overflow-hidden border border-gray-800 hover:border-yellow-500 transition duration-500"
          >

            <div className="relative h-[420px] w-full">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition" />
            </div>

            {/* Overlay contenido */}
            <div className="absolute bottom-0 left-0 p-8">

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <div className="w-16 h-[3px] bg-yellow-500 mb-4"></div>

              <span className="text-sm uppercase tracking-widest text-gray-300">
                Ver Detalle del Proyecto
              </span>

            </div>

          </motion.div>
        ))}

      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />

    </section>
  );
}