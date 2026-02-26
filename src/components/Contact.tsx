// ========================================
// CONTACT SECTION - PLATAFORMA COMERCIAL DEMO
// - Formulario estratégico
// - Redirección automática a WhatsApp
// - Confirmación visual elegante
// ========================================

"use client";

import { useState } from "react";

export default function Contact() {

  // ========================================
  // ESTADO DEL FORMULARIO
  // ========================================

  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  // Estado para mostrar mensaje de confirmación
  const [enviado, setEnviado] = useState(false);

  // ========================================
  // MANEJO DE CAMBIOS EN INPUTS
  // ========================================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ========================================
  // ENVÍO DEL FORMULARIO (DEMO)
  // - Construye mensaje
  // - Abre WhatsApp con datos prellenados
  // ========================================

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numeroWhatsApp = "56912345678"; 
    // ⚠️ Cambiar por número real cuando el cliente confirme

    const mensaje = `
Nueva solicitud de cotización:

Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Teléfono: ${formData.telefono}
Servicio: ${formData.servicio}

Detalle del Proyecto:
${formData.mensaje}
    `;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    // Abre WhatsApp en nueva pestaña
    window.open(url, "_blank");

    // Mostrar confirmación visual
    setEnviado(true);

    // Limpiar formulario
    setFormData({
      nombre: "",
      empresa: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    });
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <section id="contacto" className="py-28 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">
            Solicitar Cotización
          </h3>
          <p className="text-gray-600">
            Completa el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        {/* MENSAJE DE CONFIRMACIÓN */}
        {enviado && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
            Solicitud enviada correctamente. Se abrió WhatsApp para continuar la conversación.
          </div>
        )}

        {/* FORMULARIO */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-xl space-y-6"
        >

          {/* Nombre */}
          <input
            type="text"
            name="nombre"
            placeholder="Nombre Completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Empresa */}
          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Teléfono */}
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono de Contacto"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Servicio */}
          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">Seleccione Servicio</option>
            <option value="Movimiento de Tierra">
              Movimiento de Tierra
            </option>
            <option value="Arriendo de Maquinaria">
              Arriendo de Maquinaria
            </option>
          </select>

          {/* Mensaje */}
          <textarea
            name="mensaje"
            placeholder="Detalle del proyecto"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-4 rounded-md font-semibold text-lg hover:bg-yellow-400 transition"
          >
            Enviar Solicitud
          </button>

        </form>

      </div>
    </section>
  );
}