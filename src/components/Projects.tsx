"use client";

/*
====================================================
PROYECTOS CON MODAL INTERACTIVO
====================================================
*/

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Demolición Industrial – Santiago",
    description:
      "Proyecto de demolición estructural en zona urbana, utilizando excavadoras de alto tonelaje y coordinación técnica especializada.",
    images: [
      "/images/hero.jpg",
      "/images/maquinaria1.jpg",
      "/images/maquinaria2.jpg",
    ],
  },
  {
    title: "Movimiento de Tierra – Desarrollo Urbano",
    description:
      "Preparación de terreno para proyecto habitacional, incluyendo nivelación y excavación masiva.",
    images: [
      "/images/maquinaria1.jpg",
      "/images/hero.jpg",
      "/images/maquinaria2.jpg",
    ],
  },
  {
    title: "Arriendo Maquinaria – Proyecto Corporativo",
    description:
      "Arriendo de equipos pesados para obra corporativa de gran escala en la Región Metropolitana.",
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
    <section id="proyectos" className="bg-gray-100 py-24">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Proyectos Ejecutados
          </h2>
          <p className="text-gray-600">
            Experiencia en obras y trabajos de movimiento de tierra en la Región Metropolitana.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelected(project)}
            className="cursor-pointer group relative overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              width={500}
              height={350}
              className="object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white font-semibold tracking-wide">
                Ver Proyecto
              </span>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}