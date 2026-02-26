"use client";

/*
====================================================
CONTACTO – CONSTRUCTORA GRANDE AGRESIVA
- Fondo oscuro
- Diseño corporativo sólido
- Sensación departamento técnico
====================================================
*/

import { useState } from "react";

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
  };

  return (
    <section id="contacto" className="bg-[#0B1623] text-white py-32">

      {/* ENCABEZADO */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">

        <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
          Contacto Técnico
        </span>

        <h2 className="text-5xl md:text-6xl font-extrabold mt-8 leading-tight">
          Coordinación y Evaluación
          <br />
          de Proyectos
        </h2>

        <div className="w-28 h-[4px] bg-yellow-500 mx-auto mt-10"></div>

        <p className="text-gray-300 mt-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Nuestro equipo técnico evaluará su requerimiento y coordinará
          soluciones operativas en terreno.
        </p>

      </div>

      {/* FORMULARIO */}
      <div className="max-w-4xl mx-auto px-6">

        {enviado && (
          <div className="mb-8 p-4 border border-green-500 bg-green-500/10 text-green-400">
            Solicitud enviada correctamente. Se abrió WhatsApp para continuar la coordinación.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-black border border-gray-800 p-12 space-y-8"
        >

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="bg-[#111827] border border-gray-700 p-4 focus:outline-none focus:border-yellow-500"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="bg-[#111827] border border-gray-700 p-4 focus:outline-none focus:border-yellow-500"
            />

          </div>

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono de Contacto"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full bg-[#111827] border border-gray-700 p-4 focus:outline-none focus:border-yellow-500"
          />

          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            required
            className="w-full bg-[#111827] border border-gray-700 p-4 focus:outline-none focus:border-yellow-500"
          >
            <option value="">Seleccione Servicio</option>
            <option value="Movimiento de Tierra">
              Movimiento de Tierra
            </option>
            <option value="Arriendo de Maquinaria">
              Arriendo de Maquinaria
            </option>
          </select>

          <textarea
            name="mensaje"
            placeholder="Detalle del Proyecto"
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full bg-[#111827] border border-gray-700 p-4 focus:outline-none focus:border-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-5 font-bold text-lg hover:bg-yellow-400 transition"
          >
            Solicitar Evaluación Técnica
          </button>

        </form>

      </div>

    </section>
  );
}