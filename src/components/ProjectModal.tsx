"use client";

/*
====================================================
MODAL PROFESIONAL PROYECTOS
- Cierra con ESC
- Cierra haciendo click fuera
- Bloquea scroll del body
- Animación elegante corporativa
====================================================
*/

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
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
  // 🔒 Bloquear scroll cuando modal está abierto
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

  // ⌨️ Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // 👈 click fuera
        >
          <motion.div
            className="bg-[#0F1720] max-w-5xl w-full rounded-xl p-8 relative overflow-auto max-h-[90vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()} // 👈 evita cerrar si click dentro
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              {project.title}
            </h2>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((img, index) => (
                <div key={index} className="relative h-64 w-full">
                  <Image
                    src={img}
                    alt="Proyecto"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}