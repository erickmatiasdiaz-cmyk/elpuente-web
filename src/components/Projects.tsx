"use client";

/*
====================================================
PROYECTOS PREMIUM – GALERÍA INDUSTRIAL
- Filtros por categoría
- Overlay con ícono de expansión
- Animaciones sofisticadas
- Contador de proyectos
====================================================
*/

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import type { Project } from "./ProjectModal";

const projects: Project[] = [
  {
    title: "Demolición Industrial – Santiago",
    description:
      "Demolición estructural en zona urbana con excavadoras de alto tonelaje y coordinación técnica especializada.",
    images: [
      "/images/hero.jpg",
      "/images/maquinaria1.jpg",
      "/images/maquinaria2.jpg",
    ],
    category: "Demolición",
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
    category: "Movimiento de Tierra",
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
    category: "Arriendo",
  },
];

const categories = ["Todos", "Demolición", "Movimiento de Tierra", "Arriendo"];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="relative bg-[#0B1623] text-white py-32 overflow-hidden">
      {/* Patrón de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234, 179, 8, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234, 179, 8, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ENCABEZADO */}
      <div className="relative max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 uppercase tracking-[4px] text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Portafolio
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experiencia Comprobada
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            en Obras de Alta Exigencia
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
          Proyectos ejecutados bajo estándares técnicos exigentes,
          cumpliendo planificación, seguridad y control operativo.
        </motion.p>
      </div>

      {/* FILTROS */}
      <div className="relative max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Contador */}
        <motion.div
          className="text-center mt-6 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? "s" : ""} encontrado{filteredProjects.length !== 1 ? "s" : ""}
        </motion.div>
      </div>

      {/* GALERÍA */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer relative overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-500"
              >
                <div className="relative h-[420px] w-full">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay oscuro con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500" />

                  {/* Ícono de expansión */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="w-16 h-16 bg-yellow-500/20 backdrop-blur-sm border-2 border-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Categoría badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-sm text-yellow-500 text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-yellow-500/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenido inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-16 h-[3px] bg-yellow-500 mb-4 group-hover:w-24 transition-all duration-300" />

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-yellow-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <span>Ver detalle</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
