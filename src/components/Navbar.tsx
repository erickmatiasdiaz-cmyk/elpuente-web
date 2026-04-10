"use client";

/*
====================================================
NAVBAR PREMIUM – EL PUENTE
- Glassmorphism avanzado
- Logo con hover animado
- Indicador de sección activa
- Mobile con animación mejorada
====================================================
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = ["inicio", "servicios", "proyectos", "experiencia", "contacto"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom > 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl shadow-yellow-500/5 border-b border-yellow-500/10"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      {/* Línea técnica amarilla con brillo */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-80" />

      {/* Contenedor principal con altura fija */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

        {/* LOGO */}
        <motion.a
          href="#inicio"
          className="flex items-center h-full -translate-y-[2px]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative h-14 w-[220px] sm:h-16 sm:w-[250px] md:h-20 md:w-[320px] group">
            <Image
              src="/images/elpuente-logo.png"
              alt="El Puente"
              fill
              priority
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 320px"
              className="object-contain object-left transition-all duration-300 group-hover:brightness-110"
            />
          </div>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link, index) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={index}
                href={link.href}
                className="relative text-sm uppercase tracking-wider font-medium transition-all duration-300 group"
                style={{
                  color: isActive ? "#EAB308" : "#D1D5DB",
                }}
              >
                {link.name}
                {/* Indicador de sección activa */}
                <motion.div
                  className="absolute -bottom-2 left-0 h-[2px] bg-yellow-500"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Línea hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-yellow-500/50 transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}

          <motion.a
            href="#contacto"
            className="bg-yellow-500 text-black px-6 py-2 font-semibold hover:bg-yellow-400 transition relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Cotizar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </nav>

        {/* Mobile Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl relative w-10 h-10 flex items-center justify-center"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-500/20 overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-yellow-500 hover:pl-2 transition-all duration-300 py-3 border-b border-gray-800/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 text-black px-6 py-3 font-semibold text-center mt-4 hover:bg-yellow-400 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Cotizar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
