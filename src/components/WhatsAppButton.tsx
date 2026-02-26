// ========================================
// WHATSAPP FLOATING BUTTON
// Botón fijo flotante esquina inferior derecha
// ========================================

"use client";

export default function WhatsAppButton() {

  // ⚠️ Cambiar por número real cuando el cliente confirme
  const numeroWhatsApp = "56912345678";

  const mensaje = "Hola, quiero solicitar información sobre sus servicios.";

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        bg-green-500 
        hover:bg-green-600 
        text-white 
        w-16 
        h-16 
        rounded-full 
        flex 
        items-center 
        justify-center 
        shadow-2xl 
        transition 
        z-50
      "
      aria-label="WhatsApp"
    >
      {/* Ícono SVG WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-current"
      >
        <path d="M16.001 2.999c-7.18 0-13 5.82-13 13 0 2.293.598 4.53 1.736 6.507l-1.848 6.748 6.91-1.813a12.947 12.947 0 006.202 1.579h.001c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.833a10.77 10.77 0 01-5.5-1.502l-.393-.234-4.1 1.076 1.093-3.991-.256-.408a10.778 10.778 0 01-1.65-5.774c0-5.958 4.847-10.804 10.805-10.804s10.804 4.846 10.804 10.804-4.846 10.804-10.803 10.804zm5.91-7.99c-.324-.162-1.916-.946-2.213-1.054-.296-.108-.512-.162-.728.162-.215.324-.835 1.054-1.024 1.27-.189.215-.378.243-.702.081-.324-.162-1.368-.504-2.606-1.605-.963-.857-1.612-1.915-1.801-2.239-.189-.324-.02-.498.142-.66.146-.145.324-.378.486-.567.162-.189.215-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.728-1.755-.998-2.403-.263-.633-.53-.547-.728-.557l-.62-.011c-.216 0-.567.081-.864.405-.297.324-1.134 1.108-1.134 2.7 0 1.593 1.161 3.132 1.323 3.348.162.216 2.287 3.49 5.542 4.892.775.334 1.379.534 1.85.684.777.247 1.484.212 2.043.129.623-.093 1.916-.783 2.188-1.539.27-.756.27-1.404.189-1.539-.081-.135-.297-.216-.621-.378z" />
      </svg>
    </a>
  );
}