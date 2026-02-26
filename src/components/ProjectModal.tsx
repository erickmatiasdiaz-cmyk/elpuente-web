"use client";

/*
====================================================
PROJECT MODAL – PREMIUM CON NAVEGACIÓN
- Imagen principal grande
- Flechas laterales
- Indicador técnico 01 / 03
- Miniaturas inferiores
- Animación corporativa
====================================================
*/

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  images: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index cuando cambia proyecto
  useEffect(() => {
    if (project) setCurrentIndex(0);
  }, [project]);

  // Bloquear scroll
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  // Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  if (!project) return null;

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const formattedIndex = String(currentIndex + 1).padStart(2, "0");
  const totalImages = String(project.images.length).padStart(2, "0");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-gradient-to-br from-[#0B1623] to-[#0E1F33] border border-gray-800 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-12"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Línea superior técnica */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-yellow-500" />

          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition text-xl"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-10">
            <span className="text-yellow-500 uppercase tracking-[5px] text-sm">
              Proyecto Ejecutado
            </span>

            <h2 className="text-4xl font-bold mt-4">
              {project.title}
            </h2>

            <div className="w-20 h-[3px] bg-yellow-500 mt-6" />

            <p className="text-gray-300 mt-6 max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Imagen principal */}
          <div className="relative h-[420px] w-full border border-gray-800 overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[currentIndex]}
                  alt="Proyecto"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Flecha izquierda */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-yellow-500 hover:text-black text-white px-4 py-2 transition"
            >
              ‹
            </button>

            {/* Flecha derecha */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-yellow-500 hover:text-black text-white px-4 py-2 transition"
            >
              ›
            </button>

            {/* Indicador */}
            <div className="absolute bottom-4 right-4 bg-black/70 px-4 py-2 text-sm tracking-widest">
              {formattedIndex} / {totalImages}
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex gap-4 mt-6">
            {project.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-20 w-32 cursor-pointer border ${
                  index === currentIndex
                    ? "border-yellow-500"
                    : "border-gray-800"
                }`}
              >
                <Image
                  src={img}
                  alt="Miniatura"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}