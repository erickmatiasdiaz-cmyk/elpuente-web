// ========================================
// WHY CHOOSE US SECTION
// Diferenciación estratégica
// ========================================

export default function WhyChoose() {
  return (
    <section className="py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Compromiso y Experiencia en Cada Proyecto
            </h3>

            <p className="text-gray-400 mb-6">
              En El Puente trabajamos con enfoque en cumplimiento, eficiencia y seguridad en terreno. 
              Nuestra experiencia en proyectos de movimiento de tierra nos permite ejecutar obras con 
              precisión y responsabilidad.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Cumplimiento de plazos establecidos</li>
              <li>✔ Equipos especializados y operativos</li>
              <li>✔ Trabajo coordinado en terreno</li>
              <li>✔ Experiencia en obras de construcción</li>
            </ul>
          </div>

          {/* Imagen */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/hero.jpg"
              alt="Maquinaria en obra"
              className="w-full h-[400px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}