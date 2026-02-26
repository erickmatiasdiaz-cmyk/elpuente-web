"use client";

/*
====================================================
NAVBAR INDUSTRIAL DEFINITIVO – EL PUENTE
- Altura fija real
- Logo visible completo
- Línea técnica amarilla
- Scroll profesional
- Mobile sólido
====================================================
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-2xl"
          : "bg-black"
      }`}
    >
      {/* Línea técnica amarilla */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500" />

      {/* Contenedor principal con altura fija */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">

        {/* LOGO */}
        <a href="#" className="flex items-center h-full -translate-y-[2px]">
          <div className="relative h-14 w-[220px] sm:h-16 sm:w-[250px] md:h-20 md:w-[320px]">
            <Image
              src="/images/elpuente-logo.png"
              alt="El Puente"
              fill
              priority
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 320px"
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-yellow-500 transition relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="#contacto"
            className="bg-yellow-500 text-black px-6 py-2 font-semibold hover:bg-yellow-400 transition"
          >
            Cotizar
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-black px-6 pb-6 border-t border-gray-800"
          >
            <div className="flex flex-col gap-6 pt-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-yellow-500 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 text-black px-6 py-2 font-semibold text-center"
              >
                Cotizar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
