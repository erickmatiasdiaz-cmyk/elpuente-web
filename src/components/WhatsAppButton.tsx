"use client";

/*
====================================================
WHATSAPP BUTTON PREMIUM – EL PUENTE
- Pulso animado de notificación
- Tooltip hover
- Efecto glow mejorado
====================================================
*/

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const numeroWhatsApp = "56912345678";
  const mensaje = "Hola, quiero solicitar información sobre sus servicios.";
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-3 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showTooltip ? 1 : 0, y: showTooltip ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: showTooltip ? "auto" : "none" }}
      >
        <div className="bg-black border border-yellow-500/50 text-white text-sm px-4 py-2 rounded-lg shadow-xl">
          ¡Chatea con nosotros!
          {/* Triángulo del tooltip */}
          <div className="absolute top-full right-6 w-3 h-3 bg-black border-r border-b border-yellow-500/50 rotate-45 -mt-1.5" />
        </div>
      </motion.div>

      {/* Botón principal */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 flex items-center justify-center bg-black border-2 border-yellow-500/70 text-yellow-500 shadow-xl backdrop-blur-sm group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulso animado de fondo */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-yellow-500"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Segundo pulso con delay */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-yellow-500"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1,
          }}
        />

        {/* Glow hover */}
        <div className="absolute inset-0 rounded-full bg-yellow-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />

        {/* Borde interior con gradiente */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Ícono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M16.001 2.999c-7.18 0-13 5.82-13 13 0 2.293.598 4.53 1.736 6.507l-1.848 6.748 6.91-1.813a12.947 12.947 0 006.202 1.579h.001c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.833a10.77 10.77 0 01-5.5-1.502l-.393-.234-4.1 1.076 1.093-3.991-.256-.408a10.778 10.778 0 01-1.65-5.774c0-5.958 4.847-10.804 10.805-10.804s10.804 4.846 10.804 10.804-4.846 10.804-10.803 10.804zm5.91-7.99c-.324-.162-1.916-.946-2.213-1.054-.296-.108-.512-.162-.728.162-.215.324-.835 1.054-1.024 1.27-.189.215-.378.243-.702.081-.324-.162-1.368-.504-2.606-1.605-.963-.857-1.612-1.915-1.801-2.239-.189-.324-.02-.498.142-.66.146-.145.324-.378.486-.567.162-.189.215-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.728-1.755-.998-2.403-.263-.633-.53-.547-.728-.557l-.62-.011c-.216 0-.567.081-.864.405-.297.324-1.134 1.108-1.134 2.7 0 1.593 1.161 3.132 1.323 3.348.162.216 2.287 3.49 5.542 4.892.775.334 1.379.534 1.85.684.777.247 1.484.212 2.043.129.623-.093 1.916-.783 2.188-1.539.27-.756.27-1.404.189-1.539-.081-.135-.297-.216-.621-.378z" />
        </svg>

        {/* Indicador de notificación */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
        </div>
      </motion.a>
    </div>
  );
}
