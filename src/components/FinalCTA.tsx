// ========================================
// FINAL CALL TO ACTION
// Cierre comercial fuerte
// ========================================

export default function FinalCTA() {
  return (
    <section className="py-32 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Tienes un Proyecto en Desarrollo?
        </h3>

        <p className="text-gray-400 mb-10">
          Contáctanos para evaluar tu proyecto y coordinar soluciones en terreno.
        </p>

        <a
          href="#contacto"
          className="bg-yellow-500 text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-yellow-400 transition"
        >
          Solicitar Cotización
        </a>

      </div>
    </section>
  );
}