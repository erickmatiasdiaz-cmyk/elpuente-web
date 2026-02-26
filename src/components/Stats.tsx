"use client";

/*
====================================================
SECCIÓN ESTADÍSTICAS CORPORATIVAS
====================================================
*/

import FadeIn from "./FadeIn";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="bg-black text-white py-24">
      <FadeIn>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          <div>
            <Counter end={10} suffix="+" />
            <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
              Años de Experiencia
            </p>
          </div>

          <div>
            <Counter end={150} suffix="+" />
            <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
              Proyectos Ejecutados
            </p>
          </div>

          <div>
            <Counter end={20} suffix="+" />
            <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
              Equipos Disponibles
            </p>
          </div>

          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-500">
              RM
            </div>
            <p className="mt-3 text-sm uppercase tracking-widest text-gray-400">
              Cobertura Regional
            </p>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}