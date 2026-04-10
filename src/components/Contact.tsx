"use client";

/*
====================================================
CONTACTO PREMIUM – EL PUENTE
- Iconos en inputs
- Efectos focus premium
- Layout en dos columnas
- Mensaje de éxito animado
====================================================
*/

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Componente Input con icono
function FormInput({
  icon,
  ...props
}: {
  icon: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
          focused ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <input
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className="w-full bg-[#111827] border border-gray-700 pl-12 pr-4 py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-300 placeholder:text-gray-500"
      />
      {/* Línea animada inferior */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
          focused ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

// Componente Select con icono
function FormSelect({
  icon,
  children,
  ...props
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
          focused ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <select
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-[#111827] border border-gray-700 pl-12 pr-4 py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-300 appearance-none cursor-pointer"
      >
        {children}
      </select>
      {/* Flecha custom */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* Línea animada inferior */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
          focused ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

// Componente Textarea con icono
function FormTextarea({
  icon,
  ...props
}: {
  icon: React.ReactNode;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute left-4 top-4 transition-colors duration-300 ${
          focused ? "text-yellow-500" : "text-gray-500"
        }`}
      >
        {icon}
      </div>
      <textarea
        {...props}
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          props.onBlur?.(e);
        }}
        className="w-full bg-[#111827] border border-gray-700 pl-12 pr-4 py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/50 transition-all duration-300 placeholder:text-gray-500 resize-none"
      />
      {/* Línea animada inferior */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] bg-yellow-500 transition-all duration-300 ${
          focused ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numeroWhatsApp = "56912345678";

    const mensaje = `
Solicitud de Cotización:

Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Teléfono: ${formData.telefono}
Servicio: ${formData.servicio}

Detalle:
${formData.mensaje}
    `;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");

    setEnviado(true);

    setFormData({
      nombre: "",
      empresa: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    });

    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section id="contacto" className="relative bg-[#0B1623] text-white py-32 overflow-hidden">
      {/* Patrón de fondo */}
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
      <div className="relative max-w-6xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-500 uppercase tracking-[4px] text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            Contacto Técnico
          </span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Coordinación y Evaluación
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            de Proyectos
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
          Nuestro equipo técnico evaluará su requerimiento y coordinará
          soluciones operativas en terreno.
        </motion.p>
      </div>

      {/* FORMULARIO */}
      <div className="relative max-w-5xl mx-auto px-6">
        <AnimatePresence>
          {enviado && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-4 border border-green-500/50 bg-green-500/10 text-green-400 flex items-center gap-3"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Solicitud enviada correctamente. Se abrió WhatsApp para continuar la coordinación.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          onSubmit={handleSubmit}
          className="relative bg-black border border-gray-800 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Línea superior decorativa */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500" />

          <div className="p-12 space-y-8">
            {/* Fila 1: Nombre y Empresa */}
            <div className="grid md:grid-cols-2 gap-8">
              <FormInput
                type="text"
                name="nombre"
                placeholder="Nombre Completo"
                value={formData.nombre}
                onChange={handleChange}
                required
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                }
              />

              <FormInput
                type="text"
                name="empresa"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
              />
            </div>

            {/* Fila 2: Teléfono */}
            <FormInput
              type="tel"
              name="telefono"
              placeholder="Teléfono de Contacto"
              value={formData.telefono}
              onChange={handleChange}
              required
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
            />

            {/* Fila 3: Servicio */}
            <FormSelect
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              required
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            >
              <option value="">Seleccione Servicio</option>
              <option value="Movimiento de Tierra">Movimiento de Tierra</option>
              <option value="Arriendo de Maquinaria">Arriendo de Maquinaria</option>
            </FormSelect>

            {/* Fila 4: Mensaje */}
            <FormTextarea
              name="mensaje"
              placeholder="Detalle del Proyecto"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              }
            />

            {/* Botón submit */}
            <motion.button
              type="submit"
              className="relative w-full bg-yellow-500 text-black py-5 font-bold text-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Solicitar Evaluación Técnica
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
